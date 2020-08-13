import React from 'react';
import s from './FormsControl.module.css'

export const Textarea = ({ input, meta, ...props }) => {
	const hasError = meta.touched && meta.error
	return (
		<div className={s.form_controle + ' ' + (hasError ? s.error : '')}>
			<textarea {...input} {...props} />
			{hasError && <span></span>}
		</div >
	)
}
export const Input = ({ input, meta, ...props }) => {
	const hasError = meta.touched && meta.error
	return (
		<div className={s.form_controle + ' ' + (hasError ? s.error : '')}>
			<input {...input} {...props} />
			{hasError && <span></span>}
		</div >
	)
}