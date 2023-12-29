import Card from "../card/Card";
import classes from "./SubmitPopup.module.css";

function SubmitPopup(props) {
  return (
    <Card>
      <div className={classes.Content}>add text here later</div>
      <button onClick={props.onClick}>confirm</button>
    </Card>
  );
}

export default SubmitPopup;
