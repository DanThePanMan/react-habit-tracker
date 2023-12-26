import { HashRouter as Router, Routes, Route } from "react-router-dom";

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
      <Router>
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/new" element={<NewHabit />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
