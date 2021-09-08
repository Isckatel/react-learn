import React from 'react';
import * as axios from 'axios';
import {connect} from 'react-redux';
import Header from './Header';
import {setUserData} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials:true})
    .then(response=>{
      debugger;
      if (response.data.resultCode === 0) {
        this.props.setUserData(response.data.data);
      }
      //this.props.setUserProfile(response.data);
    });
  }
  render() {
    return (
      <Header {...this.props} />
    );
  }
}

let mapStateToProps = (state) =>({
  isAuth: state.auth.isAuth,
  login: state.auth.login
 })

export default connect(mapStateToProps, {setUserData})(HeaderContainer);
