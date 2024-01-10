import classes from "./DeleteTask.module.css";

function DeleteTask(props) {
  function DeleteHandler(event){
    event.preventDefault();
    const displayedData = props.cardData;
    displayedData.status = "deleted";
    props.onComplete(displayedData)
  }



  return (
    <button className={classes.FinishButton} onClick={DeleteHandler}>
      Delete Task
    </button>
  );
}

export default DeleteTask;
