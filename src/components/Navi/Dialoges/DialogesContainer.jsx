import React from 'react';
import { sendMsg } from '../../../Redux/dialogReducer'
import Dialoges from './Dialoges'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { getMessage, getDialoge, getNewTextMsg } from '../../../Redux/Selectors/dialogeSelector'

// инфа из store
// let mapStateToProps = (state) => {
// 	return {
// 		message: state.dialogePage.message,
// 		dialoge: state.dialogePage.dialoge,
// 		newTextMsg: state.dialogePage.newTextMsg,
// 	}
// }
let mapStateToProps = (state) => {
	return {
		message: getMessage(state),
		dialoge: getDialoge(state),
		newTextMsg: getNewTextMsg(state),
	}
}

export default compose(
	connect(mapStateToProps, { sendMsg }),
	withAuthRedirect // hoc
)(Dialoges)
