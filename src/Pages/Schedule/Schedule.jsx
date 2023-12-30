import Card from "../../Components/card/Card";
import classes from "./Schedule.module.css";
import { motion } from "framer-motion";

function Schedule(props) {
  return (
    <motion.div
      className={classes.PageContent}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.13 }}
    >
      <Card>
        <h2>Monday</h2>
      </Card>
      <Card>
        <h2>Tuesday</h2>
      </Card>
      <Card>
        <h2>Wednesday</h2>
      </Card>
      <Card>
        <h2>Thursday</h2>
      </Card>
      <Card>
        <h2>Friday</h2>
      </Card>
      <Card>
        <h2>Saturday</h2>
      </Card>
    </motion.div>
  );
}

export default Schedule;
