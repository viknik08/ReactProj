import React from 'react'
import s from './Paginator.module.css'



const Paginator = (props) => {

	let pageCount = Math.ceil(props.totalUserCount / props.pageSize)
	let pages = []
	for (let i = 1; i <= pageCount; i++) {
		pages.push(i)
	}


	return (
		<div className={s.pagin_cont}>
			{pages.map(p => {
				return <span className={props.currentPage === p && s.selectedPages}
					onClick={(e) => { props.onPageChange(p) }}> {p} </span>
			})}
		</div>
	)
}

export default Paginator