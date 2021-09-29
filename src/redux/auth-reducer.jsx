import {authAPI} from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';

export const setUserData = (data) => ({type: SET_USER_DATA, data});

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching:false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    default:
      return state;
  }
}

export const getAuthThank = () => {
  return (dispatch)=>{
    return authAPI.getAuth()
    .then(data=>{
      if (data.resultCode === 0) {
        dispatch(setUserData(data.data));
      }
    });    
  }
}

export const getPostAuthThank = (values) => {
  return (dispatch)=>{
    authAPI.postAuth(values)
    .then(response=>{
      if (response.data.resultCode === 0) {
        dispatch(getAuthThank());
      }
    });
  }
}

export const deleteAuthThank = ()=> {
  return (dispatch)=>{
    authAPI.deleteAuth()
    .then(response=>{
      if (response.data.resultCode === 0) {
        // dispatch(getAuthThank());
      }
    });
  }
}


export default authReducer;
