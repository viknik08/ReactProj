import React from 'react';
import { sendMsgActionCreator, updateNewTextMessageActionCreator } from '../../../Redux/dialogReducer'
import Dialoges from './Dialoges'



const DialogesContainer = (props) => {
	let state = props.store.getState()
	// функции для отправки сообщений и взаимодейстивя с BLL
	let sandMessage = () => {
		props.store.dispatch(sendMsgActionCreator())
	}
	let onMsgChange = (text) => {
		props.store.dispatch(updateNewTextMessageActionCreator(text))
	}

	return <Dialoges updateMsgText={onMsgChange} sandMsg={sandMessage} state={state.dialogePage} />
}

export default DialogesContainer