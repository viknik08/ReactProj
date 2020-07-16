import React from 'react';
import s from './Dialoges.module.css'
import DialogeMembars from './Dialoge/DialogeMembars'
import Message from './Message/Message'



const Dialoges = () => {
	let dialogesData = [
		{ id: '1', name: 'Ura' },
		{ id: '2', name: 'Valera' },
		{ id: '3', name: 'Kostya' },
		{ id: '4', name: 'Nikita' },
		{ id: '5', name: 'Oleg' },
	]
	let messageData = [
		{ id: '1', message: 'Hi' },
		{ id: '2', message: 'Who are you?' },
		{ id: '3', message: 'Yo?' },
		{ id: '4', message: 'Fuck off' },
	]

	let dialogesElement = dialogesData.
		map(d => <DialogeMembars name={d.name} id={d.id} />
		)

	let messageElement = messageData
		.map(m => <Message message={m.message} id={m.id} />
		)

	return (

		<div className={s.content_d}>

			<div className={s.dialoges}>
				{dialogesElement}
			</div>

			<div className={s.messages}>
				{messageElement}
			</div>

		</div>
	)
}

export default Dialoges