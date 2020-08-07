import React from 'react';




class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: ' '
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
	}

	onStatusChange = (e) => {
		let text = e.target.value
		this.setState({
			status: text
		})
	}
	render() {
		return (
			<div>
				{!this.state.editMode &&
					<div>
						<span onDoubleClick={this.activEditMode}>status: {this.state.status}</span>
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


