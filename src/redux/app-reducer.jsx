// import {authAPI} from '../api/api';
import {getAuthThank} from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

export const setInitialized = () => ({type: SET_INITIALIZED});

let initialState = {
  initialized:false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true
      }
    default:
      return state;
  }
}

export const initializeThank = () => {
  return (dispatch)=>{
    let promise = dispatch(getAuthThank());
    //let promise2 = dispatch(getData());
    Promise.all([promise]).then ( ()=>{
      dispatch(setInitialized());
    });    
  }
}

export default appReducer;
