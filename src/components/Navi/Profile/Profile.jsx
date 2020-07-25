import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostConteiner from './MyPost/MyPostContainer';

const Profile = (props) => {

	return (
		<div className={s.content_p}>
			<ProfileInfo />
			<MyPostConteiner store={props.store} />

		</div>

	)
}

export default Profile


