export const getAuth = (state) => {
	return state.auth.isAuth
}
export const getLogin = (state) => {
	return state.auth.login
}
export const getUserId = (state) => {
	return state.auth.userId
}
