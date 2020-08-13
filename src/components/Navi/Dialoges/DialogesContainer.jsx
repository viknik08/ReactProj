import React from 'react';
import { sendMsg, updateNewTextMessage } from '../../../Redux/dialogReducer'
import Dialoges from './Dialoges'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'
import { compose } from 'redux'

// инфа из store
let mapStateToProps = (state) => {
	return {
		message: state.dialogePage.message,
		dialoge: state.dialogePage.dialoge,
		newTextMsg: state.dialogePage.newTextMsg,
	}
}

export default compose(
	connect(mapStateToProps, { updateNewTextMessage, sendMsg }),
	withAuthRedirect // hoc
)(Dialoges)
