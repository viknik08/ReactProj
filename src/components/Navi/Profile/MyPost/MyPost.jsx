import React from 'react';
import Post from '../Post/Post'
import s from './MyPost.module.css'



const MyPost = () => {
	let postData = [
		{ id: '1', message: 'Hi, who are you?', likeCount: '10' },
		{ id: '2', message: 'Yeah, man! I miss you nigga', likeCount: '12' },
		{ id: '3', message: 'Fuck off', likeCount: '9' }
	]
	let postElement = postData
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


