import classes from "./NewHabitForm.module.css";
import { useRef, useState } from "react";

function NewHabitForm(props) {
  const [selectedColor, setSelectedColor] = useState("grey");
  const [selectedDay, setSelectedDay] = useState("mon");

  const titleRef = useRef();
  const descriptionRef = useRef();
  const hoursRef = useRef();
  const minutesRef = useRef();

  const habitData = {};

  //set initial color
  habitData.color = "grey";
  habitData.day = "mon";


  function monHandler() {
    habitData.day = "mon";
    setSelectedDay("mon");
  }
  function tueHandler() {
    habitData.day = "tue";
    setSelectedDay("tue");
  }
  function wedHandler() {
    habitData.day = "wed";
    setSelectedDay("wed");
  }
  function thuHandler() {
    habitData.day = "thu";
    setSelectedDay("thu");
  }
  function friHandler() {
    habitData.day = "fri";
    setSelectedDay("fri");
  }
  function satHandler() {
    habitData.day = "sat";
    setSelectedDay("sat");
  }
  function sunHandler() {
    habitData.day = "sun";
    setSelectedDay("sun");
  }

  function redHandler() {
    habitData.color = "#ed3a51";
    setSelectedColor("#ed3a51");
  }
  function blueHandler() {
    habitData.color = "#4C9DFA";
    setSelectedColor("#4C9DFA");
  }
  function yellowHandler() {
    habitData.color = "#eded3a";
    setSelectedColor("#eded3a");
  }
  function greenHandler() {
    habitData.color = "#54AD56";
    setSelectedColor("#54AD56");
  }
  function purpleHandler() {
    habitData.color = "#7c3aed";
    setSelectedColor("#7c3aed");
  }
  function greyHandler() {
    habitData.color = "grey";
    setSelectedColor("grey");
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
    habitData.status = false;

    props.onAdd(habitData);

    //clear form after submission
    event.target.reset();
  }

  return (
    <div className={classes.InputArea}>
      <form onSubmit={submitHandler}>
        <div className={classes.TextSection}>
          <div className={classes.Control}>
            <label htmlFor="title">Name of the habit</label>
            <input type="text" required id="title" ref={titleRef} />
          </div>
          <div className={classes.Control}>
            <label htmlFor="Description">Description</label>
            <textarea
              type="text"
              required
              id="Description"
              ref={descriptionRef}
              rows={6}
            />
          </div>
          <div className={classes.Control}>
            <label htmlFor="hours">Amount of time</label>
            <div className={classes.timeInput}>
              <input type="number" required id="hours" max={24} ref={hoursRef} min={0} />
              <label htmlFor="minutes"> : </label>
              <input
                type="number"
                required
                id="hours"
                ref={minutesRef}
                min={0}
                max={60}
              />
            </div>
          </div>
          <div className={classes.Control}>
            <div>Color</div>
            <div className={classes.ColorSelector}>
              <button
                type="button"
                className={`${classes.setRedColor} ${
                  selectedColor === "#ed3a51" ? classes.active : ""
                }`}
                onClick={redHandler}
              ></button>
              <button
                type="button"
                className={`${classes.setBlueColor} ${
                  selectedColor === "#4C9DFA" ? classes.active : ""
                }`}
                onClick={blueHandler}
              ></button>
              <button
                type="button"
                className={`${classes.setYellowColor} ${
                  selectedColor === "#eded3a" ? classes.active : ""
                }`}
                onClick={yellowHandler}
              ></button>
              <button
                type="button"
                className={`${classes.setGreenColor} ${
                  selectedColor === "#54AD56" ? classes.active : ""
                }`}
                onClick={greenHandler}
              ></button>
              <button
                type="button"
                className={`${classes.setPurpleColor} ${
                  selectedColor === "#7c3aed" ? classes.active : ""
                }`}
                onClick={purpleHandler}
              ></button>
              <button
                type="button"
                className={`${classes.setGreyColor} ${
                  selectedColor === "grey" ? classes.active : ""
                }`}
                onClick={greyHandler}
              ></button>
            </div>
            
          </div>
          <div className={classes.Control}>
          <div>Day of Week</div>
            <div className={classes.DaySelector}>
              <button
                type="button"
                className={`${classes.setMon} ${
                  selectedDay === "mon" ? classes.active : ""
                }`}
                onClick={monHandler}
              >Mon</button>
              <button
                type="button"
                className={`${classes.setTue} ${
                  selectedDay === "tue" ? classes.active : ""
                }`}
                onClick={tueHandler}
              >Tue</button>
              <button
                type="button"
                className={`${classes.setWed} ${
                  selectedDay === "wed" ? classes.active : ""
                }`}
                onClick={wedHandler}
              >Wed</button>
              <button
                type="button"
                className={`${classes.setThu} ${
                  selectedDay === "thu" ? classes.active : ""
                }`}
                onClick={thuHandler}
              >Thu</button>
              <button
                type="button"
                className={`${classes.setFri} ${
                  selectedDay === "fri" ? classes.active : ""
                }`}
                onClick={friHandler}
              >Fri</button>
              <button
                type="button"
                className={`${classes.setSat} ${
                  selectedDay === "sat" ? classes.active : ""
                }`}
                onClick={satHandler}
              >Sat</button>
              <button
                type="button"
                className={`${classes.setSun} ${
                  selectedDay === "sun" ? classes.active : ""
                }`}
                onClick={sunHandler}
              >Sun</button>
            </div>
          </div>
        </div>
        
        <button type="submit" className={classes.submitButton}>
          Create Habit
        </button>
      </form>
    </div>
  );
}

export default NewHabitForm;
