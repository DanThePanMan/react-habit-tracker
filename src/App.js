import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./Components/SideBar";
import Home from "./Pages/Home";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.Content}>
      <Router>
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
