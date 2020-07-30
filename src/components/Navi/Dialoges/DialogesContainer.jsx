import React from 'react';
import { sendMsg, updateNewTextMessage } from '../../../Redux/dialogReducer'
import Dialoges from './Dialoges'
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
	return {
		message: state.dialogePage.message,
		dialoge: state.dialogePage.dialoge,
		newTextMsg: state.dialogePage.newTextMsg,

	}
}
// let mapDispatchToProps = (dispatch) => {
// 	return {
// 		updateMsgText: (text) => {
// 			dispatch(ActionCreator(text))
// 		},
// 		sandMsg: () => {
// 			dispatch(ActionCreator())
// 		}
// 	}
// }
export default connect(mapStateToProps, { updateNewTextMessage, sendMsg })(Dialoges)
