const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export const followAC = (id) => ({type: FOLLOW, userId:id});
export const unfollowAC = (id) => ({type: UNFOLLOW, userId:id});
export const setUsersAC = (users_) => ({type: SET_USERS, users: users_});

let initialState = {users:[]};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
    //Копия объекта, копия подобъекта, если id совподает иначе тот же объект
      return {
        ...state,
        users: state.users.map(u=>{
          if (u.id === action.userId) {
            return {...u, followed:true}
          } else  return u;
        })
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u=>{
          if (u.id === action.userId) {
            return {...u, followed:false}
          } else  return u;
        })
      }
    case SET_USERS:
      return {...state, users: [...state.users, ...action.users ]}
    default:
      return state;
  }
}



export default usersReducer;
