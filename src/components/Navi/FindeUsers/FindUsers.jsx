import React from 'react'
import s from './FindUsers.module.css'
import Paginator from '../../common/Paginator/Paginator'
import FindUser from './FindUser'


const FindUsers = (props) => {
	return (
		<div className={s.container_find}>
			<Paginator totalUserCount={props.totalUserCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChange={props.onPageChange} />
			{props.users.map(u => <FindUser user={u} {...props} key={u.id} />)}
		</div >
	)
}

export default FindUsers