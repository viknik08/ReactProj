import React from 'react';
import Post from '../Post/Post'
import s from './MyPost.module.css'



const MyPost = (props) => {

	let postElement = props.state.post
		.map(p => <Post message={p.message} likeCount={p.likeCount} />
		)
	return (

		<div className={`${s.about__newpost} ${s.newpost}`}>
			<div className={s.newpost__title}>
				title
			</div>
			<div className={s.newpost__input}>
				input
			</div>
			<div className={s.newpost__btn}>
				btn
			</div>

			{postElement}

		</div>


	)
}

export default MyPost


