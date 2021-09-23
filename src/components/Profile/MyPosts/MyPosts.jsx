import React from 'react';
import css from "./MyPosts.module.css";
import Post from "./Post/Post";
import { useFormik } from 'formik';
import {Validation} from "./../../other/validation";
import { Formik, Form, Field } from 'formik';

const MessForm = (props) => {
  return (
    <Formik
      initialValues = {{newPost: 'New post'}}
      validationSchema={Validation}
      onSubmit = {values => {props.addPost(values.newPost);}}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="newPost" as="textarea" className={css.newMessage + ' ' + (errors.newPost && touched.newPost ? css.errBox : null)}/>
          {errors.newPost && touched.newPost ? <div className={css.errTxt}>{errors.newPost}</div> : null}
          <button type="submit" className={css.btnSend}>Добавить запись</button>
        </Form>
      )}
    </Formik>
  );
}

const MyPosts = (props) => {
  let postsElem = props.postData.map ( (p) => <Post massage={p.massage}/> );

  return(
      <div className={css.posts}>
        <MessForm {...props} />
        {postsElem}
      </div>
  );
}

export default MyPosts;
