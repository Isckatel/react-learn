const ADD_MESS = 'ADD-MESS';
const UPDATE_NEW_MESS_TEXT = 'UPDATE-NEW-MESS-TEXT';

export const addMessActionCreator = () => ({type: ADD_MESS});

export const updateNewMessTextActionCreator = (text) => ({ type: UPDATE_NEW_MESS_TEXT, newText: text })

let initialState = {
  dialogsData: [
    {id: 1, name: 'Dimych', urlAva: "https://thumbs.dreamstime.com/b/американский-оре-74019083.jpg"},
    {id: 2, name: 'Ivan',   urlAva: "https://klike.net/uploads/posts/2019-03/1551511829_46.jpg"},
    {id: 3, name: 'Slava',  urlAva: "https://shutniki.club/wp-content/uploads/2019/12/Avatarki_devushka_6_07164255.jpg"},
    {id: 4, name: 'Vika',   urlAva: "https://st3.depositphotos.com/6179956/14764/i/950/depositphotos_147640065-stock-photo-portrait-of-sunny-girl-relaxing.jpg"}
  ],
  messageData: [
    {id:1, massage: 'Привет!', who: 'i' },
    {id:2, massage: 'Как тебе этот сайт?', who: 'i' },
    {id:3, massage: 'Хорошо.', who: 'you' }
  ],
  newMessageText:'Ответ'
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESS_TEXT:{
      return {
        ...state,
        newMessageText: action.newText
      }
    }
    case ADD_MESS:{
      let text = state.newMessageText
      return {
        ...state,
        newMessageText: '',
        messageData: [...state.messageData, {id:5, massage: text, who: 'i'}]
      }
      // let newMess = {
      //   id:5,
      //   massage: state.newMessageText,
      //   who: 'i'
      // };
      // let stateCopy = {
      //   ...state,
      //   messageData: [...state.messageData]}
      // //stateCopy.messageData = [...state.messageData];
      // stateCopy.messageData.push(newMess);
      // stateCopy.newMessageText = '';      
    }
    default:
      return state;
  }
}

export default dialogsReducer;
