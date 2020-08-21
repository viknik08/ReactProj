
import profileReducer, { addPost, deletePost } from './profileReducer';
let state = {
	post: [
		{ id: '3', message: 'Hi, who are you?', likeCount: '10' },
		{ id: '2', message: 'Yeah, man! I miss you nigga', likeCount: '12' },
		{ id: '1', message: 'Fuck off', likeCount: '9' },
	]
}
test('new post sould be added', () => {
	//1.test data
	let action = addPost('hello world')
	// 2.action
	let newState = profileReducer(state, action)
	//3.expection
	expect(newState.post[0].likeCount).toBe(0)
});
test('delete post', () => {
	//1.test data
	let action = deletePost(1)

	// 2.action
	let newState = profileReducer(state, action)

	//3.expection
	expect(newState.post.length).toBe(2)
});
