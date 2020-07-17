import React from 'react';
import s from '../Sidebarfriends.module.css'
import { NavLink } from 'react-router-dom'


const Friends = (props) => {
	let path = '/friends/' + props.id

	return (
		<div className={s.friends_content}>
			<div className={s.friend_ava}>
				<img src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg" alt="" />
			</div>
			<div className={s.membars_side}>
				<NavLink to={path} activeClassName={s.active_side}>{props.name}</NavLink>
			</div>
		</div>
	)
}

export default Friends