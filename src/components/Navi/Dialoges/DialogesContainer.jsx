import React from 'react';
import { sendMsgActionCreator, updateNewTextMessageActionCreator } from '../../../Redux/dialogReducer'
import Dialoges from './Dialoges'
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
	return {
		message: state.dialogePage.message,
		dialoge: state.dialogePage.dialoge,
		newTextMsg: state.dialogePage.newTextMsg,

	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		updateMsgText: (text) => {
			dispatch(updateNewTextMessageActionCreator(text))
		},
		sandMsg: () => {
			dispatch(sendMsgActionCreator())
		}
	}
}
const DialogesContainer = connect(mapStateToProps, mapDispatchToProps)(Dialoges)

export default DialogesContainer