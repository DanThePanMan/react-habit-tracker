import Card from "../../Components/card/Card";
import classes from "./Schedule.module.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Schedule(props) {
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
    return <div>loading (temp)</div>;
  }

  const Mondays = [];
  const Tuesdays = [];
  const Wednesdays = [];
  const Thursdays = [];
  const Fridays = [];
  const Saturdays = [];
  const Sundays = [];

  for (const key in userData) {
    if (userData[key].status === false) {
      switch (userData[key].day) {
        case "mon":
          Mondays.push(userData[key]);
          break;
        case "tue":
          Tuesdays.push(userData[key]);
          break;
        case "wed":
          Wednesdays.push(userData[key]);
          break;
        case "thu":
          Thursdays.push(userData[key]);
          break;
        case "fri":
          Fridays.push(userData[key]);
          break;
        case "sat":
          Saturdays.push(userData[key]);
          break;
        case "sun":
          Sundays.push(userData[key]);
          break;
        default:
          break;
      }
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
      <div className={classes.DayBox}>
        <h2>Monday</h2>
        <div className={classes.CardStack}>
          {Mondays.map((habit) => {
            return (
              <div className={classes.HabitCard}>
                <Card key={habit.title}>
                  <div className={classes.CardContent}>
                    <div className={classes.HabitTitle}>{habit.title}</div>
                    <div>{habit.description}</div>
                    <div>{`${habit.time[0]} Hour(s) and ${habit.time[1]} Minute(s)`}</div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.DayBox}>
        <h2>Tuesday</h2>
        <div className={classes.CardStack}>
          {Tuesdays.map((habit) => {
            return (
              <div className={classes.HabitCard}>
                <Card key={habit.title}>
                  <div className={classes.CardContent}>
                    <div className={classes.HabitTitle}>{habit.title}</div>
                    <div>{habit.description}</div>
                    <div>{`${habit.time[0]} Hour(s) and ${habit.time[1]} Minute(s)`}</div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.DayBox}>
        <h2>Wednesday</h2>
        <div className={classes.CardStack}>
          {Wednesdays.map((habit) => {
            return (
              <div className={classes.HabitCard}>
                <Card key={habit.title}>
                  <div className={classes.CardContent}>
                    <div className={classes.HabitTitle}>{habit.title}</div>
                    <div>{habit.description}</div>
                    <div>{`${habit.time[0]} Hour(s) and ${habit.time[1]} Minute(s)`}</div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.DayBox}>
        <h2>Thursday</h2>
        <div className={classes.CardStack}>
          {Thursdays.map((habit) => {
            return (
              <div className={classes.HabitCard}>
                <Card key={habit.title}>
                  <div className={classes.CardContent}>
                    <div className={classes.HabitTitle}>{habit.title}</div>
                    <div>{habit.description}</div>
                    <div>{`${habit.time[0]} Hour(s) and ${habit.time[1]} Minute(s)`}</div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.DayBox}>
        <h2>Friday</h2>
        <div className={classes.CardStack}>
          {Fridays.map((habit) => {
            return (
              <div className={classes.HabitCard}>
                <Card key={habit.title}>
                  <div className={classes.CardContent}>
                    <div className={classes.HabitTitle}>{habit.title}</div>
                    <div>{habit.description}</div>
                    <div>{`${habit.time[0]} Hour(s) and ${habit.time[1]} Minute(s)`}</div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.DayBox}>
        <h2>Saturday</h2>
        <div className={classes.CardStack}>
          {Saturdays.map((habit) => {
            return (
              <div className={classes.HabitCard}>
                <Card key={habit.title}>
                  <div className={classes.CardContent}>
                    <div className={classes.HabitTitle}>{habit.title}</div>
                    <div>{habit.description}</div>
                    <div>{`${habit.time[0]} Hour(s) and ${habit.time[1]} Minute(s)`}</div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.DayBox}>
        <h2>Sundays</h2>
        <div className={classes.CardStack}>
          {Sundays.map((habit) => {
            return (
              <div className={classes.HabitCard}>
                <Card key={habit.title}>
                  <div className={classes.CardContent}>
                    <div className={classes.HabitTitle}>{habit.title}</div>
                    <div>{habit.description}</div>
                    <div>{`${habit.time[0]} Hour(s) and ${habit.time[1]} Minute(s)`}</div>
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

export default Schedule;
