const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE ='SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

export const followAC = (id) => ({type: FOLLOW, userId:id});
export const unfollowAC = (id) => ({type: UNFOLLOW, userId:id});
export const setUsersAC = (users_) => ({type: SET_USERS, users: users_});
export const setCurrentPageAC = (currentPage_) => ({type: SET_CURRENT_PAGE, currentPage: currentPage_});
export const setTotalUsersCountAC = (totalCount)=> ({type:SET_TOTAL_COUNT, totalUsersCount: totalCount});

let initialState = {
  users:[],
  pageSize:50,
  totalUsersCount:0,
  currentPage:1
};

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
      return {...state, users: action.users}
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage }
    case SET_TOTAL_COUNT:
      return {...state, totalUsersCount: action.totalUsersCount }
    default:
      return state;
  }
}



export default usersReducer;
