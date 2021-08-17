import React from 'react';
import css from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props)=> {
  return (
    <NavLink to={"/dialogs/"+props.id} activeClassName={css.active} className={css.dialog}>
      <img className={css.imgAva} src={props.urlAva} />
      {props.name}
    </NavLink>
  );
}

const Message = (props)=> {
  let mesRight = props.who == 'i'?css.mesRight:"";
  return <div className={`${css.message} ${mesRight}`}>{props.message}</div>
}

const Dialogs = (props) => {

  //let gialogsElements = dialogsData.map( d => <DialogItem name={d.name} id={d.id}/> );
  //let gialogsElements = dialogsData.map( (d) => { <DialogItem name={d.name} id={d.id}/> });
  let gialogsElements = props.messagesPage.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} urlAva={dialog.urlAva}/> );
  let messageElements = props.messagesPage.messageData.map( message => <Message message={message.massage} who={message.who}/>);

  let newMess = React.createRef();
  const addMess = ()=>{
    alert(newMess.current.value);
  };

  return(
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>
        {gialogsElements}
      </div>
      <div className={css.messages}>
        {messageElements}
        <textarea ref={newMess}></textarea>
        <button className={css.btnSend} onClick={addMess}>Отправить</button>
      </div>

    </div>
  );
}

export default Dialogs;
