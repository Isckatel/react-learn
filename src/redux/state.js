let state = {
  profilePage:{
    postData:[
      {id:1, massage: 'Изучаю React'},
      {id:2, massage: 'Изучил Flex'},
      {id:3, massage: 'Основы jQuery'}
    ]
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
    ]
  }
}

export default state;
