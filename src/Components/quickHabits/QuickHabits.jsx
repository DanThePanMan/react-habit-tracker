import Card from "../card/Card";
import classes from "./QuickHabits.module.css"


function QuickHabits(props){
    return(
        <Card>
            <div className = {classes.Card}>
                <div className={classes.test}>placeHolder</div>
                <div className={classes.test}>placeHolder</div>
                <div className={classes.test}>placeHolder</div>
                <div className={classes.test}>placeHolder</div>
                <div className={classes.test}>placeHolder</div>
                <div className={classes.test}>placeHolder</div>
                <div className={classes.test}>placeHolder</div>
                <div className={classes.test}>placeHolder</div>
            </div>
        </Card>
    )
};

export default QuickHabits;