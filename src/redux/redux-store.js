import {createStore,combineReducers} from "redux";
import profileReducer from './profile-reducer.jsx';
import dialogsReducer from './dialogs-reducer.jsx';
import sitebarReducer from './sitebar-reducer.jsx';
import usersReducer from './users-reducer.jsx';

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  sitebar: sitebarReducer,
  usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;
