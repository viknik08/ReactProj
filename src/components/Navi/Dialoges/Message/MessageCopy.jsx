import React from 'react';
import s from '../Dialoges.module.css'


const MessageCopy = (props) => {

	return (
		<div>
			<div className={s.message}>
				{/* <p>{props.message}</p> */}
			</div>
			{/* пробник сообщений */}
			<p className={s.from_me}>Hey! What's up</p>
			<p className={s.from_them}>Hi, i`m good, and u?</p>
			<p className={s.from_me}>Fine, Where are you?!</p>
			<p className={s.from_them}> At Ketty`s home</p>
			<p className={s.from_me}>I`ll be soon</p>
			<p className={s.from_them}>Oh no bro. We want to spend time together</p>
		</div>
	)
}


export default MessageCopy