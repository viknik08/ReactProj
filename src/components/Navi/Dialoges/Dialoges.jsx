import React from 'react';
import s from './Dialoges.module.css'
import DialogeMembars from './Dialoge/DialogeMembars'
import Message from './Message/Message'
import { sendMsgActionCreator, updateNewTextMessageActionCreator } from '../../../Redux/State'




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
	let messageSand = React.createRef()
	let sandMessage = () => {
		props.dispatchMsg(sendMsgActionCreator())
	}
	let onMsgChange = () => {
		let text = messageSand.current.value
		props.dispatchMsg(updateNewTextMessageActionCreator(text))
	}

	return (

		<div className={s.content_d}>

			<div className={s.dialoges}>
				{dialogesElement}
			</div>

			<div className={s.messages}>
				{messageElement}
				<div><textarea onChange={onMsgChange} ref={messageSand} value={props.state.newTextMsg} /></div>
				<div><button onClick={sandMessage}>send</button></div>
			</div>

		</div>
	)
}

export default Dialoges