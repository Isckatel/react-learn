import {connect} from 'react-redux';
import  Users from "./Users";
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
  return {
    users:state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
