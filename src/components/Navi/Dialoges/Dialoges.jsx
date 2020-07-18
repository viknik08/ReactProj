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

	let messageSand = React.createRef()
	let sandMessage = () => {
		props.dispatchMsg({ type: 'SEND-MSG' })
	}
	let onMsgChange = () => {
		let text = messageSand.current.value
		props.dispatchMsg({ type: 'UPDATE-NEW-TEXT-MESSAGE', newText: text })
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