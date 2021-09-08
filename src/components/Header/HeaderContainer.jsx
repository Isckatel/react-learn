import React from 'react';
import {authAPI} from '../../api/api';
import {connect} from 'react-redux';
import Header from './Header';
import {setUserData} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {
  componentDidMount() {
    authAPI.getAuth()
    .then(data=>{
      if (data.resultCode === 0) {
        this.props.setUserData(data.data);
      }
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
