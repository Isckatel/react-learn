import css from "./Sitebar1.module.css";
import {NavLink} from "react-router-dom";

const Sitebar = (props) => {

  let frendsElem = props.sitebar.map( (frend) => {
    return (
      <div className={css.frend} key={frend.id}>
        <img className={css.imgAva} src={frend.urlAva} />
        <div>{frend.name}</div>
      </div>
    );
  });

  return(
    <div>
      <NavLink className={css.aheading} to="/users"><p className={css.h}>Frends</p></NavLink>
      <div className={css.frends}>
        {frendsElem}
      </div>
    </div>
  );
}

export default Sitebar;
