import React from 'react';
import s from './Navi.module.css'
import { NavLink } from 'react-router-dom'
import Sidebar from './SidebarFriens/Sidebarfriends'


const Navi = (props) => {
	return (
		<nav className={s.navi}>
			<div className={s.item}>
				<NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/dialoge' activeClassName={s.active}> Messages</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/news' activeClassName={s.active}>News</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/music' activeClassName={s.active}>Music</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/settings' activeClassName={s.active}>Sittings</NavLink>
			</div>
			{/* <div className={s.item}>
				<NavLink to='/friends' activeClassName={s.active}>Friends</NavLink>
			</div> */}
			<div className={s.item}>
				{/* <Sidebar state={props.state} /> */}
			</div>
		</nav>
	)
}

export default Navi