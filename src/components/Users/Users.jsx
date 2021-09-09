import React from 'react';
import css from './Users.module.css';
import {userAPI} from '../../api/api';
import {NavLink} from "react-router-dom";
import userPhoto from '../../assets/img/woman.jpg';

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i=1;i<=pagesCount;i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map(p=><span className={props.currentPage===p ? css.selectedPage :css.page}
        onClick={(e)=>{props.onPageChanged(p)}}> {p} </span>)}
      </div>
      {
        props.users.map(
          (u)=> {
            return (
            <div key={u.id}>
              <span>
                <div>
                  <NavLink to={'/profile/'+u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                  </NavLink>
                </div>
                <div>
                  {u.followed
                  ? <button disabled={props.followingInProgress.some( id => id === u.id)} onClick={()=>{
                    props.toggleFollowingProgress(true, u.id);
                    userAPI.deleteUnfollow(u.id)
                    .then(data=>{
                      if (data.resultCode==0) {
                        props.unfollow(u.id);
                      }
                      props.toggleFollowingProgress(false, u.id);
                    });

                  }}> Unfollow </button>
                : <button disabled={props.followingInProgress.some( id => id === u.id)} onClick={()=>{
                    props.toggleFollowingProgress(true, u.id);
                    userAPI.postFollow(u.id)
                    .then(data=>{
                      if (data.resultCode==0) {
                        props.follow(u.id);
                      }
                      props.toggleFollowingProgress(false, u.id);
                    });
                    }}> Follow </button>}
                </div>
              </span>
              <span>
                <span>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
                </span>
                <span>
                  <div>{"u.location.city"}</div>
                  <div>{"u.location.country"}</div>
                </span>
              </span>
            </div>
          );
          }
        )
      }
    </div>
  );
}

export default Users;
