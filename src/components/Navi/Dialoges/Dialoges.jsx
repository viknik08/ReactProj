import React from 'react';
import s from './Dialoges.module.css'
import DialogeMembars from './Dialoge/DialogeMembars'
import Message from './Message/Message'
import { sendMsgActionCreator, updateNewTextMessageActionCreator } from '../../../Redux/dialogReducer'




const Dialoges = (props) => {
	// отрисока из массива с именами
	let dialogesElement = props.state.dialoge
		.map(d => <DialogeMembars name={d.name} id={d.id} pick={d.pick} />
		)
	// отрисока из массива с сообщениями
	let messageElement = props.state.message
		.map(m => <Message message={m.message} id={m.id} />
		)

	// функции для отправки сообщений и взаимодейстивя с BLL
	let sandMessage = () => {
		props.dispatch(sendMsgActionCreator())
	}
	let onMsgChange = (e) => {
		let text = e.target.value
		props.dispatch(updateNewTextMessageActionCreator(text))
	}

	return (

		<div className={s.content_d}>

			<div className={s.dialoges}>
				{dialogesElement}
			</div>

			<div className={s.messages}>
				{messageElement}
				<div><textarea onChange={onMsgChange} value={props.state.newTextMsg} /></div>
				<div><button onClick={sandMessage}>send</button></div>
			</div>

		</div>
	)
}

export default Dialoges