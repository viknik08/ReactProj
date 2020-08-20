import React from 'react';
import s from './Post.module.css'
import userPhoto from '../../../../assetc/img/user.png'


const Post = (props) => {
	return (

		<div className={`${s.about__post} ${s.post}`}>

			<div className={s.post__nth}>
				<img src={userPhoto} alt="" />

				<div className={s.postSpan}>
					<span>{props.message}</span>
				</div>

				<div className={`${s.postSpan} ${'btn'}`}>
					<p><button><span>like</span></button> {props.likeCount} </p>
				</div>

			</div>

		</div>

	)
}

export default Post


