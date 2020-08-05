import React from 'react';
import s from '../Dialoges.module.css'


const Message = (props) => {

	return (
		<div>
			<div className={s.message}>
				<p className={s.message__p}>{props.message}</p>
			</div>
		</div>
	)
}


export default Message