import {createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import profileReducer from './profile-reducer.jsx';
import dialogsReducer from './dialogs-reducer.jsx';
import sitebarReducer from './sitebar-reducer.jsx';
import usersReducer from './users-reducer.jsx';
import authReducer from './auth-reducer.jsx';

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  sitebar: sitebarReducer,
  usersPage: usersReducer,
  auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
