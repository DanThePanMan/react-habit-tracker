import Card from "../../Components/card/Card";
import classes from "./home.module.css"
import { motion } from "framer-motion"

function Home(){
    return (
        <motion.div 
        className={classes.PageContent}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.13}}
        >
            <div className={classes.LeftCluster}>
                <Card>
                    <h1>Hi, Here is a quick view of your week</h1>
                </Card>
                <Card>
                    <h2>woo</h2>
                </Card>
            </div>
            <Card>goo</Card>
        </motion.div>
    )
}

export default Home;