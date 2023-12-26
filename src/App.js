import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SideBar from "./Components/SideBar";
import Home from "./Pages/Home";
import Schedule from "./Pages/Schedule";
import Search from "./Pages/Search";
import NewHabit from "./Pages/NewHabit";
import NotFound from "./Pages/NotFound";


import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.Content}>
      <Router basename="/react-habit-tracker">
        <SideBar />
        <Routes>
          <Route path="/react-habit-tracker" element={<Home />} />
          <Route path="/react-habit-tracker/schedule" element={<Schedule />} />
          <Route path="/react-habit-tracker/new" element={<NewHabit />} />
          <Route path="/react-habit-tracker/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
