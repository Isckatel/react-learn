import React from 'react';
import css from "./Profile.module.css";
import ProfileInfo from './Profile';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = !this.props.match.params.userId ? 2 : this.props.match.params.userId;
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    .then(response=>{
      this.props.setUserProfile(response.data);
    });
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

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);
