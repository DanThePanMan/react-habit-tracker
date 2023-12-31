import Home from "../Pages/home/Home";
import Schedule from "../Pages/Schedule/Schedule";
import Search from "../Pages/Search";
import NewHabit from "../Pages/NewHabit/NewHabit";
import NotFound from "../Pages/NotFound";
import { AnimatePresence } from "framer-motion";

import { Routes, Route, useLocation } from "react-router-dom";

function RouterPages() {
  const location = useLocation();
  

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule  />} />
        <Route path="/new" element={<NewHabit data/>} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </AnimatePresence>
  );
}

export default RouterPages;
