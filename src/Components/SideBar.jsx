import classes from "./SideBar.module.css";
import HomeIcon from "../Icon/HomeIcon.svg"
import ListIcon from "../Icon/ListIcon.svg"
import NewIcon from "../Icon/NewIcon.svg"
import SearchIcon from "../Icon/SearchIcon.svg"

import { useNavigate, useLocation } from "react-router-dom";

function SideBar() {

  const navigate = useNavigate();
  const location = useLocation();
    
  return (
    <div className={classes.Background}>
      <div className={classes.TopGroup}>
        <button className={`${classes.sidebarButton} ${location.pathname === "/" ? classes.active : ""}`} onClick={() => {navigate("/")}}>
          <img className={classes.icon} src={HomeIcon} alt="Home Icon"></img>
        </button>
        <button className={`${classes.sidebarButton} ${location.pathname === "/schedule" ? classes.active : ""}`} onClick={() => {navigate("/schedule")}}>
          <img className={classes.icon} src={ListIcon} alt="List Icon"></img>
        </button>
        <button className={`${classes.sidebarButton} ${location.pathname === "/new" ? classes.active : ""}`} onClick={() => {navigate("/new")}}>
          <img className={classes.icon} src={NewIcon} alt="New Icon"></img>
        </button>
        <button className={`${classes.sidebarButton} ${location.pathname === "/search" ? classes.active : ""}`} onClick={() => {navigate("/search")}}>
          <img className={classes.icon} src={SearchIcon} alt="Search Icon"></img>
        </button>
      </div>
    </div>
  );
}
export default SideBar;
