import React, { Component } from 'react';
import Post from '../Post/Post'
import s from './MyPost.module.css'
import { MyPostReduxForm } from './MyPostForm';



const MyPost = (props) => {

	//отрисовка из общего массива с постами 
	let postElement = props.post
		.map(p => <Post message={p.message} likeCount={p.likeCount} />
		)
	// функция для добавления поста
	const addNewPost = (value) => {
		props.addPost(value.textarea)
	}
	return (
		<div className={`${s.about__newpost} ${s.newpost}`}>
			<div className={s.newpost__title}>
				My Post
			</div>
			<MyPostReduxForm onSubmit={addNewPost} />
			{postElement}
		</div>
	)
}


export default MyPost


