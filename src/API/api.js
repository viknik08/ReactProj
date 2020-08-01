import * as axios from 'axios'


const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "da744370-e49a-42df-956d-57bc1b14e7cd"
	}
})

// axios запросы для findeusercontainer
export const getUsers = (currentPage = 1, pageSize = 10,) => {
	return instance.get(`users?page=${currentPage}&count=${pageSize}`)
		.then(response => {
			return response.data
		})
}

// axios запросы для findeuser на unfollow
export const deleteUsers = (id) => {
	return instance.delete(`follow/${id}`)
		.then(response => {
			return response.data
		})
}

// axios запросы для findeuser на follow
export const postUsers = (id) => {
	return instance.post(`follow/${id}`)
		.then(response => {
			return response.data
		})
}

// axios запросы для headercontainer для логина
export const authUsers = () => {
	return instance.get(`auth/me`)
		.then(response => {
			return response.data
		})
}
// axios запросы для profilecontainer
export const profileUsers = (userId) => {
	return instance.get(`profile/` + userId)
		.then(response => {
			return response.data
		})
}

