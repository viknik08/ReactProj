import React from 'react'
import s from './FindUsers.module.css'

const FindUsers = (props) => {
	if (props.users.length === 0) {
		props.setUsers([
			{ id: '1', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnfJOMYY6H4FGv1MHmvkDRsKRBUmXUgq0SCA&usqp=CAU', followed: false, fullname: 'Viktor', status: 'I am a boss', location: { city: 'Irkutsk', country: 'Russia' } },
			{ id: '2', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRppydwojKD5-HRCQi_2IpkVSabhorheFjkdQ&usqp=CAU', followed: true, fullname: 'Ivan', status: 'Hello, do not ask me', location: { city: 'Moscow', country: 'Russia' } },
			{ id: '3', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxyI_eFBJ4LxEcldUyRy02p_-FeuPry0FPSw&usqp=CAU', followed: false, fullname: 'Dmitry', status: 'Fuck off', location: { city: 'New-York', country: 'USA' } },
		])
	}
	return (
		<div className={s.container_find}>
			{
				props.users.map(u => <div key={u.id} className={s.users}>
					<div className={s.about_find}>
						<div className={s.avabtn}>
							<div>
								<img src={u.ava} alt="" />
							</div>
							<div>
								{u.followed
									? <button onClick={() => { props.unfollow(u.id) }} >unfollow</button>
									: <button onClick={() => { props.follow(u.id) }}>follow</button>}

							</div>
						</div>
						<div className={s.profile_user} >
							<div>
								<p>{u.fullname} </p>
								<p>{u.status} </p>
							</div>
							<div className={s.location}>
								<p>{u.location.country} </p>
								<p>{u.location.city} </p>
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