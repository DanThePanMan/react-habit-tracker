import Card from "../../Components/card/Card";
import classes from "./Schedule.module.css";
import { motion } from "framer-motion";

function Schedule(props) {
  const Mondays = [];
  const Tuesdays = [];
  const Wednesdays = [];
  const Thursdays = [];
  const Fridays = [];
  const Saturdays = [];
  const Sundays = [];

  for (const key in props.data) {
    switch (props.data[key].day) {
      case "mon":
        Mondays.push(props.data[key]);
        break;
      case "tue":
        Tuesdays.push(props.data[key]);
        break;
      case "wed":
        Wednesdays.push(props.data[key]);
        break;
      case "thu":
        Thursdays.push(props.data[key]);
        break;
      case "fri":
        Fridays.push(props.data[key]);
        break;
      case "sat":
        Saturdays.push(props.data[key]);
        break;
      case "sun":
        Sundays.push(props.data[key]);
        break;
      default:
        break;
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
              <Card>
                <div className={classes.HabitCard}>
                  <div className={classes.HabitTitle}>{habit.title}</div>
                  <div>{habit.description}</div>
                  <div>{`${habit.time[0]} hours and ${habit.time[1]} minutes`}</div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
      <div className={classes.DayBox}>
        <h2>Tuesday</h2>
      </div>
      <div className={classes.DayBox}>
        <h2>Wednesday</h2>
      </div>
      <div className={classes.DayBox}>
        <h2>Thursday</h2>
      </div>
      <div className={classes.DayBox}>
        <h2>Friday</h2>
      </div>
      <div className={classes.DayBox}>
        <h2>Saturday</h2>
      </div>
    </motion.div>
  );
}

export default Schedule;
