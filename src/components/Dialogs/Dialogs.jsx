import css from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props)=> {
  return (
    <NavLink to={"/dialogs/"+props.id} activeClassName={css.active} className={css.dialog}>
      {props.name}
    </NavLink>
  );
}

const Message = (props)=> {
  return <div className={css.message}>{props.message}</div>
}

const Dialogs = (props) => {

  //let gialogsElements = dialogsData.map( d => <DialogItem name={d.name} id={d.id}/> );
  //let gialogsElements = dialogsData.map( (d) => { <DialogItem name={d.name} id={d.id}/> });
  let gialogsElements = props.messagesPage.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/> );
  let messageElements = props.messagesPage.messageData.map( message => <Message message={message.massage}/>);

  return(
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>
        {gialogsElements}
      </div>
      <div className={css.messages}>
        {messageElements}
      </div>

    </div>
  );
}

export default Dialogs;
