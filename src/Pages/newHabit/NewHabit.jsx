import NewHabitForm from "../../Components/newHabitForm/NewHabitForm";
import classes from "./NewHabit.module.css"
import Card from "../../Components/card/Card";
import SubmitPopup from "../../Components/submitPopup/SubmitPopup"
import { useState } from "react";


function NewHabit(){
    const [displayPopup, setDisplayPopup] = useState(false)

    function addHabitHandler(habitData){
        fetch("https://react-habit-tracker-2c7cd-default-rtdb.firebaseio.com/habitData.json", {
            method: "POST",
            body: JSON.stringify(habitData),
            headers: {
                'Content-Type': "application/JSON"
            }
        });
        setDisplayPopup(true);
    }

    function confirmHandler(){
        setDisplayPopup(false);
    }

    return (
        <div className={classes.pageArea}>
            <Card>
                <div className={classes.Content}>
                    <h1>Create New Habit</h1>
                    <NewHabitForm onAdd = {addHabitHandler}/>
                </div>
            </Card>

            {displayPopup ? <div className = {classes.PopupBackdrop}></div> : null}
            <div className = {classes.Popup}> 
                {displayPopup ? <SubmitPopup onClick = {confirmHandler}/> : null}
            </div>
        </div>
    )
}

export default NewHabit;