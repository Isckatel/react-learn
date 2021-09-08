import React from 'react';
import css from './Users.module.css';
import {NavLink} from "react-router-dom";
import userPhoto from '../../assets/img/woman.jpg'
import * as axios from 'axios';

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
                  ? <button onClick={()=>{
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                      withCredentials:true,
                      headers:{'API-KEY': 'ceaec990-6d3b-4302-8a20-0a12642b6b58'}
                    })
                    .then(response=>{
                      if (response.data.resultCode==0) {
                        props.unfollow(u.id);
                      }
                    });

                  }}> Unfollow </button>
                  : <button onClick={()=>{
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{} ,{
                      withCredentials:true,
                      headers:{'API-KEY': 'ceaec990-6d3b-4302-8a20-0a12642b6b58'}
                    })
                    .then(response=>{
                      if (response.data.resultCode==0) {
                        props.follow(u.id);
                      }
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
