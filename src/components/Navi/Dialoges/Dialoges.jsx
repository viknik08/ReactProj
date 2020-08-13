import React from 'react';
import s from './Dialoges.module.css'
import DialogeMembars from './Dialoge/DialogeMembars'
import Message from './Message/Message'
import MessageCopy from './Message/MessageCopy'
import { DialogesReduxForm } from './DialogesForm';




const Dialoges = (props) => {

	// отрисока из массива с именами
	let dialogesElement = props.dialoge
		.map(d => <DialogeMembars name={d.name} id={d.id} pick={d.pick} />
		)
	// отрисока из массива с сообщениями
	let messageElement = props.message
		.map(m => <Message message={m.message} id={m.id} />
		)
	// функция для dialogreducer
	let addNewMsg = (value) => {
		props.sendMsg(value.texarea)
	}



	return (

		<div className={s.content_d}>

			<div className={s.dialoges}>
				{dialogesElement}
			</div>
			<div className={s.messages}>
				< MessageCopy />
				{messageElement}
				<DialogesReduxForm onSubmit={addNewMsg} />
			</div>
		</div>
	)
}

export default Dialoges