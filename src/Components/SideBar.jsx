import classes from "./SideBar.module.css";
import HomeIcon from "../Icon/HomeIcon.svg"
import ListIcon from "../Icon/ListIcon.svg"
import NewIcon from "../Icon/NewIcon.svg"
import SearchIcon from "../Icon/SearchIcon.svg"

function SideBar() {

    
  return (
    <div className={classes.Background}>
      <div className={classes.TopGroup}>
        <button className={classes.customButton}>
          <img className={classes.icon} src={HomeIcon} alt="Home Icon"></img>
        </button>
        <button className={classes.customButton}>
          <img className={classes.icon} src={ListIcon} alt="List Icon"></img>
        </button>
        <button className={classes.customButton}>
          <img className={classes.icon} src={NewIcon} alt="New Icon"></img>
        </button>
        <button className={classes.customButton}>
          <img className={classes.icon} src={SearchIcon} alt="Search Icon"></img>
        </button>
      </div>
    </div>
  );
}
export default SideBar;
