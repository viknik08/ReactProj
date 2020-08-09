import React from 'react';




class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status
	}
	activEditMode = () => {
		this.setState({
			editMode: true
		})
	}
	deActivEditMode = () => {
		this.setState({
			editMode: false
		})
		this.props.updateStatus(this.state.status)
	}

	onStatusChange = (e) => {
		let text = e.target.value
		this.setState({
			status: text
		})
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState({
				status: this.props.status
			})
		}
	}
	render() {
		return (
			<div>
				{!this.state.editMode &&
					<div>
						<span onDoubleClick={this.activEditMode}>status: {this.props.status || '----'}</span>
					</div>
				}
				{this.state.editMode &&
					<div>
						<input autoFocus={true} onBlur={this.deActivEditMode} value={this.state.status} onChange={this.onStatusChange} />
					</div>
				}
			</div>
		)
	}
}

export default ProfileStatus


