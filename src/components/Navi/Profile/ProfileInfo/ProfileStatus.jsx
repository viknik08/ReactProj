import React from 'react';




class ProfileStatus extends React.Component {
	state = {
		editMode: false,
	}
	activEditMode() {
		this.setState({
			editMode: true
		})
	}
	deActivEditMode() {
		this.setState({
			editMode: false
		})
	}
	render() {
		return (
			<div>
				{!this.state.editMode &&
					<div>
						<span onDoubleClick={this.activEditMode.bind(this)}>{this.props.status}</span>
					</div>
				}
				{this.state.editMode &&
					<div>
						<input autoFocus={true} onBlur={this.deActivEditMode.bind(this)} value={this.props.status} />
					</div>
				}
			</div>
		)
	}
}

export default ProfileStatus


