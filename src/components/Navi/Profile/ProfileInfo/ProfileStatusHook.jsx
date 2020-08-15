import React from 'react';
import { useState } from 'react';




const ProfileStatusHook = (props) => {
	// hook
	let [editMode, setEditMode] = useState(false)
	let [status, setStatus] = useState(props.status)

	const activEditMode = () => {
		setEditMode(true)
	}
	const deActivEditMode = () => {
		setEditMode(false)
		props.updateStatus(status)
	}
	const onStatusChange = (e) => {
		setStatus(e.target.value)
	}

	return (
		<div>
			{!editMode &&
				<div>
					<span onDoubleClick={activEditMode}>status: {props.status || '-------'}</span>
				</div>
			}
			{editMode &&
				<div>
					<input autoFocus={true} onBlur={deActivEditMode} value={status} onChange={onStatusChange} />
				</div>
			}
		</div>
	)
}


export default ProfileStatusHook


