import classes from "./NewHabitForm.module.css";
import Card from "./Card";
import { useRef } from "react";
import { useState } from "react";


function NewHabitForm(props) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const hoursRef = useRef()
  const minutesRef = useRef()

  const habitData = {}

  function redHandler(){
    habitData.color = "#ed3a51";
  }
  function blueHandler(){
    habitData.color = "#4C9DFA";
  }
  function yellowHandler(){
    habitData.color = "#eded3a";
  }
  function greenHandler(){
    habitData.color = "#54AD56";
  }
  function purpleHandler(){
    habitData.color = "#7c3aed";
  }
  function greyHandler(){
    habitData.color = "grey";
  }

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredHour = hoursRef.current.value;
    const enteredMinute = minutesRef.current.value;

    
    habitData.title = enteredTitle;
    habitData.description = enteredDescription;
    habitData.time = [enteredHour, enteredMinute];
    
    props.onAdd(habitData);
  }




  return (
    <Card>
      <div className={classes.InputArea}>
        <form onSubmit={submitHandler}>
          <div className={classes.Control}>
            <label htmlFor="title">Name of the habit</label>
            <input type="text" required id="title" ref={titleRef} />
          </div>
          <div className={classes.Control}>
            <label htmlFor="Description">Description</label>
            <textarea type="text" required id="Description" ref={descriptionRef}  rows={3}/>
          </div>
          <div className={classes.Control}>
            <label htmlFor="hours">Amount of time</label>
            <input type="number" required id="hours" ref={hoursRef} min={0} />
            <label htmlFor="minutes">:</label>
            <input type="number" required id="hours" ref={minutesRef} min={0} max={60}/>
          </div>
          <div className={classes.Control}>
            <div className={classes.colorSelector}>
                <button type="button" className={classes.setRedColor} onClick={redHandler}></button>
                <button type="button" className={classes.setBlueColor} onClick={blueHandler}></button>
                <button type="button" className={classes.setYellowColor} onClick={yellowHandler}></button>
                <button type="button" className={classes.setGreenColor} onClick={greenHandler}></button>
                <button type="button" className={classes.setPurpleColor} onClick={purpleHandler}></button>
                <button type="button" className={classes.setGreyColor} onClick={greyHandler}></button>
            </div>
          </div>
          <button type="submit" className="submitButton">
            Create Habit
          </button>
        </form>
      </div>
    </Card>
  );
}

export default NewHabitForm;
