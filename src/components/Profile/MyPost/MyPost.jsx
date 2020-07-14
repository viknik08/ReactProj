import React from 'react';
import s from './MyPost.module.css'


const MyPost = () => {
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
		</div>


	)
}

export default MyPost


