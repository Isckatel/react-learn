import {profileAPI} from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

export const addPostActionCreator = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile});
export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text }
}
export const setStatus = (status) => ({ type: SET_STATUS, status});

let initialState = {
  postData:[
    {id:1, massage: 'Изучаю React'},
    {id:2, massage: 'Изучил Flex'},
    {id:3, massage: 'Основы jQuery'}
  ],
  newPostText: 'samurai',
  profile:null,
  status:""
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        postData:[...state.postData, {id:5, massage: state.newPostText}],
        newPostText:''
      }
    case UPDATE_NEW_POST_TEXT:{
      // let stateCopy ={...state};
      // stateCopy.newPostText = action.newText;
      return {
        ...state,
        newPostText: action.newText
      }
    }
    case SET_USER_PROFILE: {
      return {...state, profile: action.profile}
    }
    case SET_STATUS: {
      return {...state, status: action.status}
    }
    default:
      return state;
  }
}

export const getProfileThunk = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId)
    .then(data=>{
    dispatch(setUserProfile(data));
    });
  }
}

export const getUserStatusThunk = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId)
    .then(response=>{    
    dispatch(setStatus(response.data));
    });
  }
}

export const updateStatusThunk = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status)
    .then(response=>{
      if (response.data.resultCode==0) {
        dispatch(setStatus(status));
      }
    });
  }
}

export default profileReducer;
