import React from 'react';
import css from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/img/woman.jpg'

const Users = (props) => {

  if (props.users.length===0){
    // props.setUsers([
    //   {id: 1, photoUrl:'https://solutionvila.com/images/team/02.png', followed: false, fullName: 'Dmitriy', status: 'I am a boss', location:{city:'Minsk',country:'Belarus'}},
    //   {id: 2, photoUrl:'https://solutionvila.com/images/team/02.png', followed: true, fullName: 'Sasha', status: 'I am a boss', location:{city:'Moskow',country:'Russia'}},
    //   {id: 3, photoUrl:'https://solutionvila.com/images/team/02.png', followed: false, fullName: 'Sergej', status: 'I am a boss', location:{city:'Kiev',country:'Ukraine'}}
    // ]);
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
    .then(response=>{
      props.setUsers(response.data.items);
    });

  }

  return (
    <div>
      {
        props.users.map(
          (u)=> {
            return (
            <div key={u.id}>
              <span>
                <div>
                  <img src={u.photos.small != null ? u.photos.small: userPhoto} />
                </div>
                <div>
                  {u.followed ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                  :<button onClick={()=>{props.follow(u.id)}}>Follow</button>}
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
