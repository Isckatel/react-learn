import React from 'react';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {addMessActionCreator, updateNewMessTextActionCreator} from "../../redux/dialogs-reducer";

// const DialogsContainer = (props) => {
//   const addMess = ()=>{
//     props.store.dispatch(addMessActionCreator());
//   };
//   const updateNewMessText = (text) => {
//     props.store.dispatch(updateNewMessTextActionCreator(text));
//   }
//   return(
//     <Dialogs updateNewMessText={updateNewMessText} addMess={addMess} messagesPage={props.store.getState().messagesPage}/>
//   );
// }

let mapStateToProps = (state) => {
  return {
    messagesPage:state.messagesPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessText: (text)=>{
      dispatch(updateNewMessTextActionCreator(text))
    },
    addMess:()=>{
      dispatch(addMessActionCreator())
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
