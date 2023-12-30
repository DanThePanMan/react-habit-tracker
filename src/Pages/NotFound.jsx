import Card from "../Components/card/Card";
import { motion } from "framer-motion";

function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Card>
        <h1>Error: page not found</h1>
      </Card>
    </motion.div>
  );
}

export default NotFound;
