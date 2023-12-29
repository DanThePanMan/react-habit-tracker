import Card from "../../Components/card/Card";
import classes from "./home.module.css"

function Home(){
    return (
        <div className={classes.PageContent}>
            <div className={classes.LeftCluster}>
                <Card>
                    <h1>Hi, Here is a quick view of your week</h1>
                </Card>
                <Card>
                    <h2>woo</h2>
                </Card>
            </div>
            <Card>goo</Card>
        </div>
    )
}

export default Home;