import React from 'react';
import s from './Sidebarfriends.module.css'
import Friends from './Friends/Friends'


const Sidebar = (props) => {
	// отрисовка из общего массива с друзьми
	let sidebarElement = props.state.friends
		.map(d => <Friends name={d.name} id={d.id} pick={d.pick} />
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