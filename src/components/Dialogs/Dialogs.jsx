import css from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
  return(
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>
        <NavLink to="" className={`${css.dialog} ${css.active}`}>
          Dimych
        </NavLink>
        <NavLink to="" className={css.dialog}>
          Ivan
        </NavLink>
        <NavLink to="" className={css.dialog}>
          Slava
        </NavLink>
        <NavLink to="" className={css.dialog}>
          Vika
        </NavLink>
      </div>
      <div className={css.messages}>
        <div className={css.message}>Привет!</div>
        <div className={css.message}>Как тебе этот сайт?</div>
        <div className={css.message}>Хорошо</div>
      </div>

    </div>
  );
}

export default Dialogs;
