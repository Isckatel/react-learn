import React from 'react';
import css from "./Profile.module.css";
import ProfileInfo from './Profile';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {profileAPI} from '../../api/api';
import {connect} from 'react-redux';
import {setUserProfile, getProfileThunk, getUserStatusThunk, updateStatusThunk} from "../../redux/profile-reducer";
import {withRouter, Redirect } from "react-router-dom";
import {withAuthRedirect} from '../hoc/withAuthRedirect';
import {compose} from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    //let userId = !this.props.match.params.userId ? 19501 : this.props.match.params.userId;
    let userId = !this.props.match.params.userId ? this.props.authorizedUserId : this.props.match.params.userId;
    if (!userId) this.props.history.push('/login');
    this.props.getProfileThunk(userId);
    this.props.getUserStatusThunk(userId);
  }

  render(){
    if (!this.props.isAuth) return <Redirect to={'/login'} />;

    return(
      <div className="main">
        <ProfileInfo profile={this.props.profile} status={this.props.status} updateStatusThunk = {this.props.updateStatusThunk}/>
        <MyPostsContainer {...this.props} />
      </div>
    );
  }
}

let mapStateToProps = (state) =>({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth
 })

export default compose(
  connect(mapStateToProps, {setUserProfile, getProfileThunk, getUserStatusThunk, updateStatusThunk}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
