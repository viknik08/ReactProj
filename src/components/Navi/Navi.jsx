import React from 'react';
import classes from './Navi.module.css'

const Navi = () => {
	return (
		<nav className={classes.navi}>
			<div className={classes.item}>
				<a>Profile</a>
			</div>
			<div className={classes.item}>
				<a>Messages</a>
			</div>
			<div className={classes.item}>
				<a>News</a>
			</div>
			<div className={classes.item}>
				<a>Music</a>
			</div>
			<div className={classes.item}>
				<a>Sittings</a>
			</div>
		</nav>
	)
}

export default Navi