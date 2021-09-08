import * as axios from 'axios';

const instance = axios.create({
  withCredentials:true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers:{'API-KEY': 'ceaec990-6d3b-4302-8a20-0a12642b6b58'}
});

export const userAPI =  {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
  postFollow(id){
    return instance.post(`follow/${id}`)
    .then(response => response.data);
  },
  deleteUnfollow(id){
    return instance.delete(`follow/${id}`)
    .then(response => response.data);
  }

}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`)
    .then(response=>response.data);
  }
}

export const authAPI = {
  getAuth() {
    return instance.get(`auth/me`)
    .then(response=>response.data);
  }
}
