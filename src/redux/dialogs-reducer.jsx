const ADD_MESS = 'ADD-MESS';
const UPDATE_NEW_MESS_TEXT = 'UPDATE-NEW-MESS-TEXT';

export const addMessActionCreator = () => ({type: ADD_MESS});

export const updateNewMessTextActionCreator = (text) => ({ type: UPDATE_NEW_MESS_TEXT, newText: text })

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESS_TEXT:
      state.newMessageText = action.newText;
      return state;
    case ADD_MESS:
      let newMess = {
        id:5,
        massage: state.newMessageText,
        who: 'i'
      };
      state.messageData.push(newMess);
      state.newMessageText = '';
      return state;
    default:
      return state;
  }
}

export default dialogsReducer;
