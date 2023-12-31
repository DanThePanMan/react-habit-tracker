import NewHabitForm from "../../Components/newHabitForm/NewHabitForm";
import classes from "./NewHabit.module.css"
import Card from "../../Components/card/Card";
import SubmitPopup from "../../Components/submitPopup/SubmitPopup"
import { useState } from "react";
import { motion } from "framer-motion";


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
        <motion.div 
        className={classes.pageArea}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.13}}
        >
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
        </motion.div>
    )
}

export default NewHabit;