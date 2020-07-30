import React from 'react'
import { connect } from 'react-redux'
import { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching } from '../../../Redux/findUsersReducer'
import * as axios from 'axios'
import FindUsers from './FindUsers'
import Preloader from '../../common/preloader/preloader'



class FindUsersAPI extends React.Component {

	componentDidMount() {
		this.props.toggleIsFetching(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
			this.props.toggleIsFetching(false)
			this.props.setUsers(response.data.items)
			this.props.setUsersTotalCount(response.data.totalCount)
		})
	}

	onPageChange = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		this.props.toggleIsFetching(true)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
			this.props.toggleIsFetching(false)

			this.props.setUsers(response.data.items)
		})
	}


	render() {
		return (<>
			{this.props.isFetching ? <Preloader /> : null}
			<FindUsers totalUserCount={this.props.totalUserCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChange={this.onPageChange}
				unfollow={this.props.unfollow}
				follow={this.props.follow}
				users={this.props.users} />
		</>
		)
	}
}

// берем из findeUserReduser
let mapStateToProps = (state) => {
	return {
		users: state.findUsersPage.users,
		pageSize: state.findUsersPage.pageSize,
		totalUserCount: state.findUsersPage.totalUserCount,
		currentPage: state.findUsersPage.currentPage,
		isFetching: state.findUsersPage.isFetching,
	}
}
// диспатчи теперь здесь 
export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching })(FindUsersAPI)


