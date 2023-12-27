import classes from './Card.module.css'

function Card(props) {
    return(
        <div className={classes.Background}>
            {props.children}
        </div>
    )
}

export default Card;