import { motion } from "framer-motion";

function Search() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.13 }}
    >
      <input></input>
    </motion.div>
  );
}

export default Search;
