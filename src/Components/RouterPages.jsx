import Home from "../Pages/home/Home";
import Schedule from "../Pages/Schedule/Schedule";
import Search from "../Pages/Search";
import NewHabit from "../Pages/NewHabit/NewHabit";
import NotFound from "../Pages/NotFound";
import { AnimatePresence } from "framer-motion";

import { Routes, Route, useLocation } from "react-router-dom";

function RouterPages(props) {
  const location = useLocation();
  const data = props.data;


  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home data = {data}/>} />
        <Route path="/schedule" element={<Schedule data = {data}/>} />
        <Route path="/new" element={<NewHabit data/>} />
        <Route path="/search" element={<Search data = {data}/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </AnimatePresence>
  );
}

export default RouterPages;
