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
  console.log(props)
  let gialogsElements = props.messagesPage.dialogsData.map( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} urlAva={dialog.urlAva}/> );
  let messageElements = props.messagesPage.messageData.map( message => <Message message={message.massage} key={message.id} who={message.who}/>);

  let newMess = React.createRef();

  const addMess = ()=>{
    props.addMess();
    //props.dispatch(addMessActionCreator());
  };

  const updateNewMessText = () => {
    props.updateNewMessText(newMess.current.value);
    //props.dispatch(updateNewMessTextActionCreator(newMess.current.value));
  }

  return(
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>
        {gialogsElements}
      </div>
      <div className={css.messages}>
        {messageElements}
        <textarea ref={newMess} value={props.messagesPage.newMessageText} onChange={updateNewMessText}></textarea>
        <button className={css.btnSend} onClick={addMess}>Отправить</button>
      </div>

    </div>
  );
}

export default Dialogs;
