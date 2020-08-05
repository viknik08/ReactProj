import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostConteiner from './MyPost/MyPostContainer';

const Profile = (props) => {
	return (
		<div className={s.content_p}>
			<ProfileInfo profile={props.profile} />
			<MyPostConteiner />

		</div>

	)
}

export default Profile


