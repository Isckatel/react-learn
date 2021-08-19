const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESS = 'ADD-MESS';
const UPDATE_NEW_MESS_TEXT = 'UPDATE-NEW-MESS-TEXT';

let store = {
  _state: {
    profilePage:{
      postData:[
        {id:1, massage: 'Изучаю React'},
        {id:2, massage: 'Изучил Flex'},
        {id:3, massage: 'Основы jQuery'}
      ],
      newPostText: 'samurai'
    },
    messagesPage:{
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
    },
    sitebar: [
      {id: 1, name: 'Ivan',   urlAva: "https://klike.net/uploads/posts/2019-03/1551511829_46.jpg"},
      {id: 2, name: 'Slava',  urlAva: "https://shutniki.club/wp-content/uploads/2019/12/Avatarki_devushka_6_07164255.jpg"},
      {id: 3, name: 'Vika',   urlAva: "https://st3.depositphotos.com/6179956/14764/i/950/depositphotos_147640065-stock-photo-portrait-of-sunny-girl-relaxing.jpg"}
    ]
  },

  rerenderEntireTree() { },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this.rerenderEntireTree = observer;
  },

  dispatch(action) {  
    if (action.type === ADD_POST) {
      let newPost = {
        id:5,
        massage: this._state.profilePage.newPostText,
      };
      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newPostText = '';
      this.rerenderEntireTree(this._state);

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this.rerenderEntireTree(this._state);

    } else if (action.type === UPDATE_NEW_MESS_TEXT) {
      this._state.messagesPage.newMessageText = action.newText;
      this.rerenderEntireTree(this._state);

    } else if (action.type === ADD_MESS) {
      let newMess = {
        id:5,
        massage: this._state.messagesPage.newMessageText,
        who: 'i'
      };
      this._state.messagesPage.messageData.push(newMess);
      this._state.messagesPage.newMessageText = '';
      this.rerenderEntireTree(this._state);
    }
  },

  addPost() {
    let newPost = {
      id:5,
      massage: this._state.profilePage.newPostText,
    };
    this._state.profilePage.postData.push(newPost);
    this._state.profilePage.newPostText = '';
    this.rerenderEntireTree(this._state);
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this.rerenderEntireTree(this._state);
  },

  updateNewMessText(newText) {
    this._state.messagesPage.newMessageText = newText;
    this.rerenderEntireTree(this._state);
  },

  addMess() {
    let newMess = {
      id:5,
      massage: this._state.messagesPage.newMessageText,
      who: 'i'
    };
    this._state.messagesPage.messageData.push(newMess);
    this._state.messagesPage.newMessageText = '';
    this.rerenderEntireTree(this._state);
  }

}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text }
}

export const addMessActionCreator = () => ({type: ADD_MESS});

export const updateNewMessTextActionCreator = (text) => ({ type: UPDATE_NEW_MESS_TEXT, newText: text })

export default store;
