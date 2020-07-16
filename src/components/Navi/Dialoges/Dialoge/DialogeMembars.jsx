import React from 'react';
import s from '../Dialoges.module.css'
import { NavLink } from 'react-router-dom';


const DialogeMembars = (props) => {
	let path = '/dialoge/' + props.id
	return (
		<div className={s.dialoge}>
			<NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
		</div>
	)
}


export default DialogeMembars