import React from 'react';
import Dialogs from './Dialogs';
import {NavLink} from "react-router-dom";
import {addMessActionCreator, updateNewMessTextActionCreator} from "../../redux/dialogs-reducer";

const DialogsContainer = (props) => {

  const addMess = ()=>{
    props.store.dispatch(addMessActionCreator());
  };

  const updateNewMessText = (text) => {
    props.store.dispatch(updateNewMessTextActionCreator(text));
  }

  return(
    <Dialogs updateNewMessText={updateNewMessText} addMess={addMess} messagesPage={props.store.getState().messagesPage}/>
  );
}

export default DialogsContainer;
