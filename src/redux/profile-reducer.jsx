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
    case ADD_POST: {
      let newPost = {
        id:5,
        massage: state.newPostText,
      };
      let stateCopy = {...state};
      stateCopy.postData = [...state.postData];
      stateCopy.postData.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT:{
      let stateCopy ={...state};
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
}



export default profileReducer;
