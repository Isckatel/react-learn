import React from 'react';
import css from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let newPostElement = React.createRef();
  let postsElem = props.postData.map ( (p) => <Post massage={p.massage}/> );

  const addPost = ()=>{
    alert(newPostElement.current.value);
  }

  return(
      <div className={css.posts}>
        <div className={css.newpost}>
            <textarea ref={newPostElement}></textarea>
            <button onClick={addPost}>Добавить запись</button>
        </div>
        {postsElem}
      </div>
  );
}

export default MyPosts;
