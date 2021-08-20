import React from 'react';
//import Post from "./Post/Post";
import MyPosts from './MyPosts';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPostsContainer = (props) => {
  const addPost = ()=>{
    props.store.dispatch(addPostActionCreator());
  }

  const onPostChange = (text)=>{
    props.store.dispatch(updateNewPostTextActionCreator(text));
  }

  return(
      <MyPosts updateNewPostText={onPostChange} addPost={addPost}
        postData = {props.store.getState().profilePage.postData}
        newPostText ={props.store.getState().profilePage.newPostText}/>
  );
}

export default MyPostsContainer;
