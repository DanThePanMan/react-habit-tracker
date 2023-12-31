import classes from "./FinishTask.module.css";

function FinishTask(props) {
  const displayedData = props.cardData;

  function finishHabitHandler(habit) {
    fetch("https://react-habit-tracker-2c7cd-default-rtdb.firebaseio.com/habitData.json", {

    })


  }

  return (
    <buton>Mark as finished</buton>
  );
}

export default FinishTask;
