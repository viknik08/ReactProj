import React from 'react';
import s from './Sidebarfriends.module.css'
import Friends from './Friends/Friends'


const Sidebar = (props) => {

	let sidebarElement = props.state.friends
		.map(d => <Friends name={d.name} id={d.id} />
		)

	return (
		<div className={s.content_side}>
			<div className={s.friend}> Friends
			</div>
			<div className={s.element}>
				{sidebarElement}
			</div>
		</div>
	)
}
export default Sidebar