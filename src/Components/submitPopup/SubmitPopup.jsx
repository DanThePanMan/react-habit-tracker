import Card from "../card/Card";
import classes from "./SubmitPopup.module.css";

function SubmitPopup(props) {
  return (
    <Card>
      <div className={classes.content}>
        <div className={classes.left}>
          <h2 className={classes.textContent}>New Habit Added!</h2>
        </div>
        <div className={classes.right}>
          <button className={classes.confirm} onClick={props.onClick}>
            confirm
          </button>
        </div>
      </div>
    </Card>
  );
}

export default SubmitPopup;
