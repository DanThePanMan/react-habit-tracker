import NewHabitForm from "../Components/newHabitForm/NewHabitForm";


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
        <NewHabitForm onAdd = {addHabitHandler}/>
    )
}

export default NewHabit;