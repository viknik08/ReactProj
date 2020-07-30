import React from 'react'
import s from './FindUsers.module.css'
import userPhoto from '../../../assetc/img/user.png'


const FindUsers = (props) => {

	let pageCount = Math.ceil(props.totalUserCount / props.pageSize)
	let pages = []
	for (let i = 1; i <= pageCount; i++) {
		pages.push(i)
	}


	return (
		<div className={s.container_find}>
			<div>
				{pages.map(p => {
					return <span className={props.currentPage === p && s.selectedPages}
						onClick={(e) => { props.onPageChange(p) }}> {p} </span>
				})}
			</div>

			{
				props.users.map(u => <div key={u.id} className={s.users}>
					<div className={s.about_find}>
						<div className={s.avabtn}>
							<div>
								<img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
							</div>
							<div>
								{u.followed
									? <button onClick={() => { props.unfollow(u.id) }} >unfollow</button>
									: <button onClick={() => { props.follow(u.id) }}>follow</button>}

							</div>
						</div>
						<div className={s.profile_user} >
							<div>
								<p>{u.name} </p>
								<p>{u.status} </p>
							</div>
							<div className={s.location}>
								<p>{'u.location.country'} </p>
								<p>{'u.location.city'} </p>
							</div>
						</div>
					</div>
				</div>
				)
			}
		</div >
	)
}

export default FindUsers