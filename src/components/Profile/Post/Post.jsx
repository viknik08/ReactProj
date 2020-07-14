import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
	return (

		<div className={`${s.about__post} ${s.post}`}>
			<div className={s.post__nth}>
				<img src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg" alt="" />
				<div className={s.postSpan}>
					<span>{props.massege}</span>
				</div>
				<div className={s.postSpan}>
					<p><span>like</span> {props.like} </p>
				</div>
			</div>
		</div>

	)
}

export default Post


