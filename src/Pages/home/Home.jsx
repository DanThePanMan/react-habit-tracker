import Card from "../../Components/card/Card";
import classes from "./home.module.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import GraphOfTasks from "../../Components/GraphOfTasks/GraphOfTasks";
import DeleteTask from "../../Components/DeleteTaskButton/DeleteTask";

function Home() {
  function DeleteHandler(cardData){
    const key = cardData.FirebaseKey;
    const dataClone = {...userData};
    dataClone[key] = cardData;
    setUserData(dataClone);
    fetch(`https://react-habit-tracker-2c7cd-default-rtdb.firebaseio.com/habitData.json`,{
      method:"PATCH",
      body: JSON.stringify(dataClone),
      headers: {
        'Content-Type': "application/JSON"
    }
    });
  }


  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-habit-tracker-2c7cd-default-rtdb.firebaseio.com/habitData.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const habits = [];

        for (const key in data) {
          const habit = {
            id: key,
            ...data[key],
          };
          habits.push(habit);
        }
        setIsLoading(false);
        setUserData(data);
      });
  }, []);

  if (isLoading) {
    return <div className={classes.Loading}>loading...</div>;
  }

  const ListOfCompletes = [];

  for (const key in userData) {
    userData[key].FirebaseKey = key;
    if (userData[key].status === true) {
      ListOfCompletes.push(userData[key]);
    }
  }

  return (
    <motion.div
      className={classes.PageContent}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.13 }}
    >
      <div className={classes.LeftCluster}>
        <div className={classes.CardContainer}>
          <Card>
            <div className={classes.Title}>
              Hi, Here is a quick view of your week
            </div>
          </Card>
        </div>
        <Card>
          <div className={classes.CardGraphContent}>
            <div className={classes.Graph}>
              <GraphOfTasks data={userData} />
            </div>
          </div>
        </Card>
      </div>
      <div className={classes.FinishedTasks}>
        <div className={classes.FinishedTasksTitle}>Completed Tasks: </div>
        {ListOfCompletes.map((habit) => {
          return (
            <div key={habit.FirebaseKey} className={classes.HabitCard}>
              <Card>
                <div className={classes.CardContent}>
                  <div className={classes.HabitTitle}>{habit.title}</div>
                  <div>{habit.description}</div>
                  <div>{`${habit.time[0]} Hour(s) and ${habit.time[1]} Minute(s)`}</div>
                  <div className={classes.SecondLayer}>
                      <DeleteTask cardData={habit} onComplete = {DeleteHandler}/>
                    </div>
                </div>
                
              </Card>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Home;
