import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";

import RouterPages from "./Components/RouterPages";

import SideBar from "./Components/sideBar/SideBar";

import classes from "./App.module.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-habit-tracker-2c7cd-default-rtdb.firebaseio.com/habitData.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const habits = [];

        for (const key in data) {
          const habit = {
            id: key,
            ...data[key],
          };
          habits.push(habit);
        }
        setIsLoading(false);
        setUserData(data);
      });
  }, []);

  if (isLoading) {
    return <div>loading (temp)</div>;
  }

  return (
    <div className={classes.Content}>
      <Router basename="/react-habit-tracker">
        <div className={classes.LeftSide}>
          <SideBar />
        </div>
        <div className={classes.Center}>
          <RouterPages data = {userData}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
