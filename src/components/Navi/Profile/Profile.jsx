import React from 'react';
import s from './Profile.module.css'
import MyPost from './MyPost/MyPost'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

	return (
		<div className={s.content_p}>
			<ProfileInfo />
			<MyPost state={props.state} />

		</div>

	)
}

export default Profile


