import { BrowserRouter as Router } from "react-router-dom";

import RouterPages from "./Components/RouterPages";

import SideBar from "./Components/sideBar/SideBar";

import classes from "./App.module.css";

function App() {

  return (
    <div className={classes.Content}>
      <Router basename="/react-habit-tracker">
        <div className={classes.LeftSide}>
          <SideBar />
        </div>
        <div className={classes.Center}>
          <RouterPages />
        </div>
      </Router>
    </div>
  );
}

export default App;
