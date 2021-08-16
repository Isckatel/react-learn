import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import  Sitebar from "./../Sitebar/Sitebar";

const Navbar = (props) => {
  return(
    <nav className="white-block">
      <ul>
        <li><NavLink to="/profile" activeClassName={classes.active} className={classes.item}>Profile</NavLink></li>
        <li><NavLink to="/dialogs" activeClassName={classes.active} className={classes.item}>Messages</NavLink></li>
        <li><NavLink to="/news" activeClassName={classes.active} className={classes.item}>News</NavLink></li>
        <li><NavLink to="/music" activeClassName={classes.active} className={classes.item}>Music</NavLink></li>
        <li><NavLink to="/settings" activeClassName={classes.active} className={classes.item}><br/>Settings</NavLink></li>
      </ul>
    <Sitebar sitebar={props.sitebar} />
    </nav>
  );
}

export default Navbar;
