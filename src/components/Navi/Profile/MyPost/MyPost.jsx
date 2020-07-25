import React from 'react';
import Post from '../Post/Post'
import s from './MyPost.module.css'



const MyPost = (props) => {
	//отрисовка из общего массива с постами 
	let postElement = props.post
		.map(p => <Post message={p.message} likeCount={p.likeCount} />
		)
	// функции для послания постов и взаимодействия их с MyPostContainer
	let onAddPost = () => {
		props.addPost()
	}
	let onPostChange = (e) => {
		let text = e.target.value
		props.updateNewTextPost(text)
	}

	return (

		<div className={`${s.about__newpost} ${s.newpost}`}>
			<div className={s.newpost__title}>
				My Post
			</div>
			<div className={s.newpost__input}>
				<textarea onChange={onPostChange} value={props.newTextPost} />
			</div>
			<div className={s.newpost__btn}>
				<button onClick={onAddPost} >add post</button>
			</div>


			{postElement}

		</div>


	)
}

export default MyPost


