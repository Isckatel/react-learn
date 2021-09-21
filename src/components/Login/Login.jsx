import React, {useState} from 'react';
import { useFormik } from 'formik';
import {authAPI} from '../../api/api';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withAuthRedirectOnProfile} from '../hoc/withAuthRedirectOnProfile';
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
  const [count, setCount] = useState(0);

  const formik = useFormik({
    initialValues: {
       email: '',
       password: '',
       rememberMe: 'false',
     },
     onSubmit: values => {
       authAPI.postAuth(values)
       .then(response => {
         if (response.data.resultCode === 0) {
           if (response.data.data.userId) {setCount(count + 1)}
         }
         console.log(response.data);
       });
     }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input id='email' name='email' type='text' placeholder={"Email"}
        onChange={formik.handleChange}  value={formik.values.email}/>
      </div>
      <div>
        <input id='password' name='password' type='text' placeholder={"Password"}
        onChange={formik.handleChange}  value={formik.values.password}  />
      </div>
      <div>
        <input id='rememberMe' name='rememberMe' type={"checkbox"}
        onChange={formik.handleChange}  value={formik.values.rememberMe}/> remember me
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>);
}


const Login = (props) => {
  return (
  <div>
    <h1>Login</h1>
    <LoginForm />
  </div>
  );
}

const LoginContainer = compose(withAuthRedirectOnProfile)(Login);

export default LoginContainer;
