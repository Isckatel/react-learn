import React from 'react';
import {connect} from 'react-redux';
//import Post from "./Post/Post";
import MyPosts from './MyPosts';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

// const MyPostsContainer = (props) => {
//   const addPost = ()=>{
//     props.store.dispatch(addPostActionCreator());
//   }
//
//   const onPostChange = (text)=>{
//     props.store.dispatch(updateNewPostTextActionCreator(text));
//   }
//
//   return(
//       <MyPosts updateNewPostText={onPostChange} addPost={addPost}
//         postData = {props.store.getState().profilePage.postData}
//         newPostText ={props.store.getState().profilePage.newPostText}/>
//   );
// }
let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText:state.profilePage.newPostText
  }
}

let mapDicpatchToProps = (dispatch) =>{
  return {
    updateNewPostText: (text)=>{dispatch(updateNewPostTextActionCreator(text))},
    addPost:(newPost)=>{dispatch(addPostActionCreator(newPost))}
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDicpatchToProps)(MyPosts);

export default MyPostsContainer;
