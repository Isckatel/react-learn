import React from 'react';
import css from "./MyPosts.module.css";
import Post from "./Post/Post";
import { useFormik } from 'formik';

const AddPostForm = (props) => {
  const formik = useFormik({
    initialValues: {
      newPost: 'New post'
    },
    onSubmit: values => {
      props.addPost(values.newPost);
    },
  });

  return (
    <div className={css.newpost}>
      <form onSubmit={formik.handleSubmit}>
        <textarea id="newPost"
         name="newPost"
         onChange={formik.handleChange}
         value={formik.values.newPost} />
        <button  type="submit">Добавить запись</button>
      </form>
    </div>
  );
}

const MyPosts = (props) => {
  let postsElem = props.postData.map ( (p) => <Post massage={p.massage}/> );

  return(
      <div className={css.posts}>
        <AddPostForm {...props} />
        {postsElem}
      </div>
  );
}

export default MyPosts;
