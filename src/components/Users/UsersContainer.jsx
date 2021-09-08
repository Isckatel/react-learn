import React from 'react';
import {connect} from 'react-redux';
import  Users from './Users';
import {userAPI} from '../../api/api';
import loader from '../../assets/img/oval.svg';
import {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching} from "../../redux/users-reducer";

class UsersContainer extends React.Component {
  componentDidMount() {
    userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data=>{
      this.props.setIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.setIsFetching(true);
    userAPI.getUsers(pageNumber, this.props.pageSize).then(data=>{
      this.props.setIsFetching(false);
      this.props.setUsers(data.items);
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
// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (id)=>{
//       dispatch(followAC(id))
//     },
//     unfollow:(id)=>{
//       dispatch(unfollowAC(id))
//     },
//     setUsers: (users_)=>{
//       dispatch(setUsersAC(users_));
//     },
//     setCurrentPage: (currentPage_)=>{
//       dispatch(setCurrentPageAC(currentPage_))
//     },
//     setTotalUsersCount: (totalCount)=>{
//       dispatch(setTotalUsersCountAC(totalCount))
//     },
//     setIsFetching: (isFetching)=>{
//       dispatch(setIsFetchingAC(isFetching))
//     }
//   }
// }

export default connect(mapStateToProps,
  {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching})(UsersContainer);
