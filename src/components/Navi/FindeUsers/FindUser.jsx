import React from 'react'
import s from './FindUsers.module.css'
import userPhoto from '../../../assetc/img/user.png'
import { NavLink } from 'react-router-dom'


const FindUser = ({ user, ...props }) => {

	return (
		<div className={s.users}>
			<div className={s.about_find}>
				<div className={s.avabtn}>
					<div>
						<NavLink to={'/profile/' + user.id}>
							<img src={user.photos.small != null ? user.photos.small : userPhoto} alt="" />
						</NavLink>
					</div>
					<div className={`${s.follow_btn} ${'btn'}`}>
						{user.followed
							? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
								props.unfollowThunkCreator(user.id)
							}} ><span>unfollow</span> </button>
							: <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
								props.followThunkCreator(user.id)
							}}><span>follow</span> </button>}

					</div>
				</div>
				<div className={s.profile_user} >
					<div>
						<p>{user.name} </p>
						<p>{user.status} </p>
					</div>
					<div className={s.location}>
						<p>{'Country'} </p>
						<p>{'City'} </p>
					</div>
				</div>
			</div>
		</div>
	)
}


export default FindUser