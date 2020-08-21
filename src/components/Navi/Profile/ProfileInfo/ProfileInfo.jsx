import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from '../../../common/preloader/preloader';
import userPhoto from '../../../../assetc/img/user.png'
import ProfileStatusHook from './ProfileStatusHook'


const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />
	}
	return (
		<div className={s.content_pi}>

			<div className={s.about}>
				<div className={`${s.about__bio} ${s.bio}`}>
					<div className={s.bio__ava}>
						<img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} alt="" />
					</div>

					<div className={s.bio__discription}>
						<p><ProfileStatusHook status={props.status} updateStatus={props.updateStatus} /> </p>
						<p>Name: {props.profile.fullName}</p>
						<p>Facebook: {props.profile.contacts.facebook}</p>
						<p>{props.profile.lookingForAJobDescription}</p>

					</div>
				</div>
			</div>
		</div>

	)
}

export default ProfileInfo


