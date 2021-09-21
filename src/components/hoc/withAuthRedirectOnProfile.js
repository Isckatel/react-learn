import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";

let mapStateToProps = (state) => ({isAuth:state.auth.isAuth});

export const withAuthRedirectOnProfile = (Component) => {
  const RedirectComponent = (props) => {
    if (props.isAuth) return <Redirect to='/profile' />
    return <Component {...props} />
  }
  return connect(mapStateToProps)(RedirectComponent);
}
