import React from 'react';
import s from '../Dialoges.module.css'
import { NavLink } from 'react-router-dom';


const DialogeMembars = (props) => {
	let path = '/dialoge/' + props.id
	return (
		<div className={s.content_dialoge}>

			<div className={s.memders_ava}>
				<img src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg" alt="" />
			</div>

			<div className={s.membars}>
				<NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
			</div>
		</div>
	)
}


export default DialogeMembars