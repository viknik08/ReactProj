import React from 'react'
import s from './FindUsers.module.css'
import * as axios from 'axios'
import userPhoto from '../../../assetc/img/user.png'

class FindUsers extends React.Component {


	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
			this.props.setUsers(response.data.items)
			this.props.setUsersTotalCount(response.data.totalCount)
		})
	}

	onPageChange = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
			this.props.setUsers(response.data.items)
		})
	}




	render() {

		let pageCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)
		let pages = []
		for (let i = 1; i <= pageCount; i++) {
			pages.push(i)
		}



		return (

			<div className={s.container_find}>
				<div>
					{pages.map(p => {
						return <span className={this.props.currentPage === p && s.selectedPages}
							onClick={(e) => { this.onPageChange(p) }}> {p} </span>
					})}
				</div>

				{
					this.props.users.map(u => <div key={u.id} className={s.users}>
						<div className={s.about_find}>
							<div className={s.avabtn}>
								<div>
									<img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
								</div>
								<div>
									{u.followed
										? <button onClick={() => { this.props.unfollow(u.id) }} >unfollow</button>
										: <button onClick={() => { this.props.follow(u.id) }}>follow</button>}

								</div>
							</div>
							<div className={s.profile_user} >
								<div>
									<p>{u.name} </p>
									<p>{u.status} </p>
								</div>
								<div className={s.location}>
									<p>{'u.location.country'} </p>
									<p>{'u.location.city'} </p>
								</div>
							</div>
						</div>
					</div>
					)
				}
			</div >
		)
	}
}



export default FindUsers