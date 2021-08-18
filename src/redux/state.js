 let rerenderEntireTree = () => { };

let state = {
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
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export let addPost = () => {
  let newPost = {
    id:5,
    massage: state.profilePage.newPostText,
  };

  state.profilePage.postData.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export let updateNewMessText = (newText) => {
  state.messagesPage.newMessageText = newText;
  rerenderEntireTree(state);
}

export let addMess = () => {
  let newMess = {
    id:5,
    massage: state.messagesPage.newMessageText,
    who: 'i'
  };

  state.messagesPage.messageData.push(newMess);
  state.profilePage.newMessageText = '';
  rerenderEntireTree(state);
}

export default state;
