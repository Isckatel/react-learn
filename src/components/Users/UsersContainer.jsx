import {connect} from 'react-redux';
import  Users from "./Users";
import {followAC, unfollowAC, setUsersAC} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
  return {
    users:state.usersPage.users
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
