import css from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return(
    <header className="white-block">
      <img className={css.imgMain} src="https://img2.freepng.ru/20180803/jju/kisspng-website-development-web-design-world-wide-web-port-web-site-hizmeti-ferdi-pamuk-digital-5b640234c37861.7596590215332808208007.jpg" />
      <div className={css.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
      </div>
    </header>
  );
}

export default Header;
