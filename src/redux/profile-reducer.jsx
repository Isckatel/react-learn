const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text }
}

let initialState = {
  postData:[
    {id:1, massage: 'Изучаю React'},
    {id:2, massage: 'Изучил Flex'},
    {id:3, massage: 'Основы jQuery'}
  ],
  newPostText: 'samurai'
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id:5,
        massage: state.newPostText,
      };
      state.postData.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
}



export default profileReducer;
