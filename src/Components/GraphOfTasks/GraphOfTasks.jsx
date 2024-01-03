import classes from "./GraphOfTasks.module.css";

function GraphOfTasks(props) {
  const data = props.data;

  const Mondays = [];
  const Tuesdays = [];
  const Wednesdays = [];
  const Thursdays = [];
  const Fridays = [];
  const Saturdays = [];
  const Sundays = [];

  for (const key in data) {
    data[key].FirebaseKey = key;
    if (data[key].status === true) {
      switch (data[key].day) {
        case "mon":
          Mondays.push(data[key]);
          break;
        case "tue":
          Tuesdays.push(data[key]);
          break;
        case "wed":
          Wednesdays.push(data[key]);
          break;
        case "thu":
          Thursdays.push(data[key]);
          break;
        case "fri":
          Fridays.push(data[key]);
          break;
        case "sat":
          Saturdays.push(data[key]);
          break;
        case "sun":
          Sundays.push(data[key]);
          break;
        default:
          break;
      }
    }
  }

  return (
    <>
      <div className={classes.DataBars}>
        <div className={classes.Bar}>
          {Mondays.map((habit) => {
            const BarColor = habit.color;
            const barHeight = habit.time[0];
            const style = {
              backgroundColor: BarColor,
              height: barHeight * 10 + "px",
              width: "128px",
            };
            return <div key={habit.FirebaseKey} style={style}></div>;
          })}
          <div className={classes.DayOfWeek}>Monday</div>
        </div>
        <div className={classes.Bar}>
          {Tuesdays.map((habit) => {
            const BarColor = habit.color;
            const barHeight = habit.time[0];
            const style = {
              backgroundColor: BarColor,
              height: barHeight * 10 + "px",
              width: "128px",
            };
            return <div key={habit.FirebaseKey} style={style}></div>;
          })}
          <div className={classes.DayOfWeek}>Tuesday</div>
        </div>
        <div className={classes.Bar}>
          {Wednesdays.map((habit) => {
            const BarColor = habit.color;
            const barHeight = habit.time[0];
            const style = {
              backgroundColor: BarColor,
              height: barHeight * 10 + "px",
              width: "128px",
            };
            return <div key={habit.FirebaseKey} style={style}></div>;
          })}
          <div className={classes.DayOfWeek}>Wednesday</div>
        </div>
        <div className={classes.Bar}>
          {Thursdays.map((habit) => {
            const BarColor = habit.color;
            const barHeight = habit.time[0];
            const style = {
              backgroundColor: BarColor,
              height: barHeight * 10 + "px",
              width: "128px",
            };
            return <div key={habit.FirebaseKey} style={style}></div>;
          })}
          <div className={classes.DayOfWeek}>Thursdays</div>
        </div>
        <div className={classes.Bar}>
          {Fridays.map((habit) => {
            const BarColor = habit.color;
            const barHeight = habit.time[0];
            const style = {
              backgroundColor: BarColor,
              height: barHeight * 10 + "px",
              width: "128px",
            };
            return <div key={habit.FirebaseKey} style={style}></div>;
          })}
          <div className={classes.DayOfWeek}>Friday</div>
        </div>
        <div className={classes.Bar}>
          {Saturdays.map((habit) => {
            const BarColor = habit.color;
            const barHeight = habit.time[0];
            const style = {
              backgroundColor: BarColor,
              height: barHeight * 10 + "px",
              width: "128px",
            };
            return <div key={habit.FirebaseKey} style={style}></div>;
          })}
          <div className={classes.DayOfWeek}>Saturday</div>
        </div>
        <div className={classes.Bar}>
          {Sundays.map((habit) => {
            const BarColor = habit.color;
            const barHeight = habit.time[0];
            const style = {
              backgroundColor: BarColor,
              height: barHeight * 10 + "px",
              width: "128px",
            };
            return <div key={habit.FirebaseKey} style={style}></div>;
          })}
          <div className={classes.DayOfWeek}>Sunday</div>
        </div>
      </div>
      <div className={classes.Dine}></div>
    </>
  );
}

export default GraphOfTasks;
