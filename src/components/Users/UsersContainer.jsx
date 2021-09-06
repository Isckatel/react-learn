import React from 'react';
import {connect} from 'react-redux';
import  Users from './Users';
import * as axios from 'axios';
import loader from '../../assets/img/oval.svg';
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, setIsFetchingAC} from "../../redux/users-reducer";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
    .then(response=>{
      this.props.setIsFetching(false);
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.setIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
    .then(response=>{
      this.props.setIsFetching(false);
      this.props.setUsers(response.data.items);
    });
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
    isFetching: state.usersPage.isFetching
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (id)=>{
      dispatch(followAC(id))
    },
    unfollow:(id)=>{
      dispatch(unfollowAC(id))
    },
    setUsers: (users_)=>{
      dispatch(setUsersAC(users_));
    },
    setCurrentPage: (currentPage_)=>{
      dispatch(setCurrentPageAC(currentPage_))
    },
    setTotalUsersCount: (totalCount)=>{
      dispatch(setTotalUsersCountAC(totalCount))
    },
    setIsFetching: (isFetching)=>{
      dispatch(setIsFetchingAC(isFetching))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
