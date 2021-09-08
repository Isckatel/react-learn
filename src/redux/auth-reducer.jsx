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

export default authReducer;