import classes from "./FinishTask.module.css";

function FinishTask(props) {
  function CompleteHandler(event){
    event.preventDefault();
    const displayedData = props.cardData;
    displayedData.status = true;
    props.onComplete(displayedData)
  }



  return (
    <button className={classes.FinishButton} onClick={CompleteHandler}>
      Mark Complete
    </button>
  );
}

export default FinishTask;
