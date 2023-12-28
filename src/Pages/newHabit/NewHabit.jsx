import NewHabitForm from "../../Components/newHabitForm/NewHabitForm";
import classes from "./NewHabit.module.css"
import Card from "../../Components/card/Card";


function NewHabit(){
    function addHabitHandler(habitData){
        fetch("https://react-habit-tracker-2c7cd-default-rtdb.firebaseio.com/habitData.json", {
            method: "POST",
            body: JSON.stringify(habitData),
            headers: {
                'Content-Type': "application/JSON"
            }
        });
    }
    return (
        <div className={classes.pageArea}>
            <Card>
                <div className={classes.Card}>
                    <NewHabitForm onAdd = {addHabitHandler}/>
                </div>
            </Card>
        </div>
    )
}

export default NewHabit;