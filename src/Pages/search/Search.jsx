import { motion } from "framer-motion";
import classes from "./Search.module.css";
import { useEffect, useState } from "react";
import FinishTask from "../../Components/FinishTaskButon/FInishTask";
import Card from "../../Components/card/Card";

function Search() {
  const [filter, setFilter] = useState("");
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

  function CompleteHandler(cardData) {
    const key = cardData.FirebaseKey;
    const dataClone = { ...userData };
    dataClone[key] = cardData;
    console.log(dataClone[key]);
    setUserData(dataClone);
    fetch(
      `https://react-habit-tracker-2c7cd-default-rtdb.firebaseio.com/habitData.json`,
      {
        method: "PATCH",
        body: JSON.stringify(dataClone),
        headers: {
          "Content-Type": "application/JSON",
        },
      }
    );
  }

  if (isLoading) {
    return <div className={classes.Loading}>loading...</div>;
  }

  const displayed = [];

  for (const key in userData) {
    userData[key].FireBaseKey = key;
    if (
      userData[key].status === false &&
      userData[key].title.includes(filter) |
        userData[key].description.includes(filter)
    ) {
      displayed.push(userData[key]);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.13 }}
    >
      <div className={classes.Page}>
        <input
          className={classes.SearchBar}
          onChange={(event) => {
            setFilter(event.target.value);
          }}
        ></input>
        <div className={classes.ResultText}>Search Results for {filter}:</div>
        <div className={classes.HabitSection}>
          {displayed.map((habit) => {
            return (
              <div key={habit.FirebaseKey} className={classes.HabitCard}>
                <Card>
                  <div className={classes.CardContent}>
                    <div className={classes.HabitTitle}>{habit.title}</div>
                    <div>{habit.description}</div>
                    <div>{`${habit.time[0]} Hour(s) and ${habit.time[1]} Minute(s)`}</div>
                    <div className={classes.SecondLayer}>
                      <FinishTask
                        cardData={habit}
                        onComplete={CompleteHandler}
                      />
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default Search;
