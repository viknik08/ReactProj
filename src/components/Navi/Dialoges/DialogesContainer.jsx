import React from 'react';
import { sendMsgActionCreator, updateNewTextMessageActionCreator } from '../../../Redux/dialogReducer'
import Dialoges from './Dialoges'
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
	return {
		dialogePage: state.dialogePage

	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		updateMsgText: () => {
			dispatch(sendMsgActionCreator())
		},
		sandMsg: (text) => {
			dispatch(updateNewTextMessageActionCreator(text))
		}
	}
}
const DialogesContainer = connect(mapStateToProps, mapDispatchToProps)(Dialoges)

export default DialogesContainer