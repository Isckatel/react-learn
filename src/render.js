import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, updateNewPostText, updateNewMessText, addMess } from "./redux/state.js"


export const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost = {addPost}
                         updateNewPostText={updateNewPostText}
                         updateNewMessText={updateNewMessText}
                         addMess = {addMess}
                         />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
