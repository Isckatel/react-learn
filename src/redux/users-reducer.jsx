const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE ='SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

export const follow = (id) => ({type: FOLLOW, userId:id});
export const unfollow = (id) => ({type: UNFOLLOW, userId:id});
export const setUsers = (users_) => ({type: SET_USERS, users: users_});
export const setCurrentPage = (currentPage_) => ({type: SET_CURRENT_PAGE, currentPage: currentPage_});
export const setTotalUsersCount = (totalCount)=> ({type:SET_TOTAL_COUNT, totalUsersCount: totalCount});
export const setIsFetching = (isFetching)=> ({type:TOGGLE_IS_FETCHING, isFetching});

let initialState = {
  users:[],
  pageSize:50,
  totalUsersCount:0,
  currentPage:1,
  isFetching:false
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
    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching }
    default:
      return state;
  }
}



export default usersReducer;
