import css from "./Header.module.css";

const Header = () => {
  return(
    <header className="white-block">
      <img className={css.imgMain} src="https://img2.freepng.ru/20180803/jju/kisspng-website-development-web-design-world-wide-web-port-web-site-hizmeti-ferdi-pamuk-digital-5b640234c37861.7596590215332808208007.jpg" />
    </header>
  );
}

export default Header;
