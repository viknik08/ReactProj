import React from 'react'
import pre from '../../../assetc/img/pre.gif'
import s from './pre.module.css'

let Preloader = (props) => {
	return (
		<div className={s.content_pre}>
			<img src={pre} width='200px' />
		</div>

	)
}
export default Preloader