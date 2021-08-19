import React from 'react';
import css from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {
  let newPostElement = React.createRef();
  let postsElem = props.postData.map ( (p) => <Post massage={p.massage}/> );

  const addPost = ()=>{
    //props.addPost();
    props.dispatch(addPostActionCreator());
  }

  const onPostChange = ()=>{
    //props.updateNewPostText(newPostElement.current.value);
    props.dispatch(updateNewPostTextActionCreator(newPostElement.current.value));
  }

  return(
      <div className={css.posts}>
        <div className={css.newpost}>
            <textarea ref={newPostElement} onChange={onPostChange}
              value={props.newPostText} />
            <button onClick={addPost}>Добавить запись</button>
        </div>
        {postsElem}
      </div>
  );
}

export default MyPosts;
