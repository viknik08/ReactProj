import React from 'react';
import Post from '../Post/Post'
import s from './MyPost.module.css'
import { addPostActionCreator, updateNewTextPostActionCreator } from '../../../../Redux/State'



const MyPost = (props) => {
	//отрисовка из общего массива с постами 
	let postElement = props.state.post
		.map(p => <Post message={p.message} likeCount={p.likeCount} />
		)
	// функции для послания постов и взаимодействия их с BLL
	let newPostElement = React.createRef()
	let addPost = () => {
		props.dispatch(addPostActionCreator())
	}
	let onPostChange = () => {
		let text = newPostElement.current.value
		props.dispatch(updateNewTextPostActionCreator(text))
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


