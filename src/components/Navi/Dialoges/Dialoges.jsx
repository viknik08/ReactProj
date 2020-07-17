import React from 'react';
import s from './Dialoges.module.css'
import DialogeMembars from './Dialoge/DialogeMembars'
import Message from './Message/Message'




const Dialoges = (props) => {

	let dialogesElement = props.state.dialoge
		.map(d => <DialogeMembars name={d.name} id={d.id} pick={d.pick} />
		)

	let messageElement = props.state.message
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