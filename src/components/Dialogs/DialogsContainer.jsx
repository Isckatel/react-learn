import React from 'react';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {addMessActionCreator, updateNewMessTextActionCreator} from "../../redux/dialogs-reducer";
import {withAuthRedirect} from '../hoc/withAuthRedirect';

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

let AuthRedirectConponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectConponent);

export default DialogsContainer;
