const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-TEXT-POST'

// дефолтные значения для profilePage
let initState = {
	post: [
		{ id: '1', message: 'Hi, who are you?', likeCount: '10' },
		{ id: '2', message: 'Yeah, man! I miss you nigga', likeCount: '12' },
		{ id: '3', message: 'Fuck off', likeCount: '9' },
	],
	newTextPost: '',
}

const profileReducer = (state = initState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = state.newTextPost
			state.post.push({ id: 5, message: newPost, likeCount: 0, })
			state.newTextPost = ''
			return state
		case UPDATE_NEW_TEXT_POST:
			state.newTextPost = action.postText
			return state
		default:
			return state
	}
}


// функции для actiona постов
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewTextPostActionCreator = (text) =>
	({ type: UPDATE_NEW_TEXT_POST, postText: text, })


export default profileReducer