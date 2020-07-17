import React from 'react';
import s from '../Dialoges.module.css'
import { NavLink } from 'react-router-dom';


const DialogeMembars = (props) => {
	let path = '/dialoge/' + props.id
	return (
		<div className={s.content_dialoge}>
			<div className={s.memders_ava}>
				<img src={props.pick} alt="" />
			</div>

			<div className={s.membars}>
				<NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
			</div>
		</div>
	)
}


export default DialogeMembars