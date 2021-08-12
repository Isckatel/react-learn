import classes from './Navbar.module.css';

const Navbar = () => {
  return(
    <nav className="white-block">
      <ul>
        <li><a href="#" className={classes.item}>Profile</a></li>
        <li><a href="#" className={classes.item}>Messages</a></li>
        <li><a href="#" className={classes.item}>News</a></li>
        <li><a href="#" className={classes.item}>Music</a></li>
        <li><a href="#" className={classes.item}><br/>Settings</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
