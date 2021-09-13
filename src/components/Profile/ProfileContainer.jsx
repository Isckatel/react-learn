import React from 'react';
import css from "./Profile.module.css";
import ProfileInfo from './Profile';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {profileAPI} from '../../api/api';
import {connect} from 'react-redux';
import {setUserProfile, getProfileThunk} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = !this.props.match.params.userId ? 2 : this.props.match.params.userId;
    this.props.getProfileThunk(userId);
  }

  render(){
    return(
      <div className="main">
        <ProfileInfo profile={this.props.profile}/>
        <MyPostsContainer {...this.props} />
      </div>
    );
  }
}

let mapStateToProps = (state) =>({
  profile: state.profilePage.profile
 })

let WithUrlDataContainerComponent =  withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile, getProfileThunk})(WithUrlDataContainerComponent);
