import React from 'react';
import css from "./Dialogs.module.css";
import {NavLink, Redirect } from "react-router-dom";
import { useFormik } from 'formik';
import { Formik, Form, Field } from 'formik';
import {Validation} from "./../other/validation";

//old form without validation
const AddMessForm = (props) => {
  const formik = useFormik({
    initialValues: {
      newPost: 'New post'
    },
    onSubmit: values => {
      props.addMess(values.newPost);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <textarea className={css.newMessage} id="newPost"
       name="newPost"
       value={formik.values.newPost}
       onChange={formik.handleChange} /><br />
      <button className={css.btnSend} type="submit">Отправить</button>
    </form>
  );
}



const MessForm = (props) => {
  return (
    <Formik
      initialValues = {{newPost: 'New post'}}
      validationSchema={Validation}
      onSubmit = {values => {props.addMess(values.newPost);}}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="newPost" as="textarea" className={css.newMessage + ' ' + (errors.newPost && touched.newPost ? css.errBox : null)}/>
          {errors.newPost && touched.newPost ? <div className={css.errTxt}>{errors.newPost}</div> : null}
          <button type="submit" className={css.btnSend}>Отправить</button>
        </Form>
      )}
    </Formik>
  );
}

const DialogItem = (props)=> {
  return (
    <NavLink to={"/dialogs/"+props.id} activeClassName={css.active} className={css.dialog}>
      <img className={css.imgAva} src={props.urlAva} />
      {props.name}
    </NavLink>
  );
}

const Message = (props)=> {
  let mesRight = props.who == 'i'?css.mesRight:"";
  return <div className={`${css.message} ${mesRight}`}>{props.message}</div>
}

const Dialogs = (props) => {
  console.log(props)
  let gialogsElements = props.messagesPage.dialogsData.map( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} urlAva={dialog.urlAva}/> );
  let messageElements = props.messagesPage.messageData.map( message => <Message message={message.massage} key={message.id} who={message.who}/>);

  let newMess = React.createRef();

   if (!props.isAuth) return <Redirect to={'/login'} />;

  return(
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>
        {gialogsElements}
      </div>
      <div className={css.messages}>
        {messageElements}
        <MessForm {...props} />
      </div>

    </div>
  );
}

export default Dialogs;
