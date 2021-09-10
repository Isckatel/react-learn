import React from 'react';
import {connect} from 'react-redux';
import  Users from './Users';
import {userAPI} from '../../api/api';
import loader from '../../assets/img/oval.svg';
import {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsersThunkCreator} from "../../redux/users-reducer";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
  }

  render(){
    return <div>
      {this.props.isFetching ? <img src={loader} /> : null}
      <Users totalUsersCount = {this.props.totalUsersCount}
                  pageSize = {this.props.pageSize}
                  currentPage = {this.props.currentPage}
                  onPageChanged = {this.onPageChanged}
                  users = {this.props.users}
                  follow = {this.props.follow}
                  unfollow = {this.props.unfollow}
                  toggleFollowingProgress = {this.props.toggleFollowingProgress}
                  followingInProgress = {this.props.followingInProgress}
      />
  </div>
  }
}


let mapStateToProps = (state) => {
  return {
    users:state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

export default connect(mapStateToProps,
  {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsersThunkCreator})(UsersContainer);
