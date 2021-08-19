import {createStore,combineReducers} from "redux";
import profileReducer from './profile-reducer.jsx';
import dialogsReducer from './dialogs-reducer.jsx';
import sitebarReducer from './sitebar-reducer.jsx';

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  sitebar: sitebarReducer
});

let store = createStore(reducers);


export default store;
