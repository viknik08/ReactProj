import React from 'react';
import Post from '../Post/Post'
import s from './MyPost.module.css'



const MyPost = (props) => {

	let postElement = props.state.post
		.map(p => <Post message={p.message} likeCount={p.likeCount} />
		)

	let newPostElement = React.createRef()
	let addPost = () => {
		props.addPost()
	}
	let onPostChange = () => {
		let text = newPostElement.current.value
		props.update(text)
	}

	return (

		<div className={`${s.about__newpost} ${s.newpost}`}>
			<div className={s.newpost__title}>
				My Post
			</div>
			<div className={s.newpost__input}>
				<textarea onChange={onPostChange} ref={newPostElement} value={props.state.newTextPost} />
			</div>
			<div className={s.newpost__btn}>
				<button onClick={addPost} >add post</button>
			</div>

			{postElement}

		</div>


	)
}

export default MyPost


