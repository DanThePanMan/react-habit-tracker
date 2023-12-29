import Card from "../../Components/card/Card";
import classes from "./Schedule.module.css";

function Schedule(props) {
  return (
    <div className={classes.PageContent}>
      <Card>
        <h2>Monday</h2>
      </Card>
      <Card>
        <h2>Tuesday</h2>
      </Card>
      <Card>
        <h2>Wednesday</h2>
      </Card>
      <Card>
        <h2>Thursday</h2>
      </Card>
      <Card>
        <h2>Friday</h2>
      </Card>
      <Card>
        <h2>Saturday</h2>
      </Card>
    </div>
  );
}

export default Schedule;
