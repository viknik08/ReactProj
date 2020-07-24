const SEND_MSG = 'SEND-MSG'
const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE-NEW-TEXT-MESSAGE'

const dialogeReduser = (state, action) => {
	switch (action.type) {
		case UPDATE_NEW_TEXT_MESSAGE:
			state.newTextMsg = action.msgText
			return state
		case SEND_MSG:
			let newMsg = state.newTextMsg
			state.message.push({ id: 5, message: newMsg, likeCount: 0, })
			state.newTextMsg = ''
			return state
		default:
			return state
	}
}


// функции для actiona сообщений
export const sendMsgActionCreator = () => ({ type: SEND_MSG })
export const updateNewTextMessageActionCreator = (text) =>
	({ type: UPDATE_NEW_TEXT_MESSAGE, msgText: text, })

export default dialogeReduser