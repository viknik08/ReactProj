import React from 'react'
import { connect } from 'react-redux'
import { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching, toggleFollowingProgress } from '../../../Redux/findUsersReducer'
import FindUsers from './FindUsers'
import Preloader from '../../common/preloader/preloader'
import { getUsers } from '../../../API/api'



class FindUsersAPI extends React.Component {

	componentDidMount() {
		this.props.toggleIsFetching(true)
		getUsers(this.props.currentPage, this.props.pageSize).then(data => {
			this.props.toggleIsFetching(false)
			this.props.setUsers(data.items)
			this.props.setUsersTotalCount(data.totalCount)
		})
	}

	onPageChange = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		this.props.toggleIsFetching(true)
		getUsers(pageNumber, this.props.pageSize,).then(data => {
			this.props.toggleIsFetching(false)
			this.props.setUsers(data.items)
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
				users={this.props.users}
				followingInProgress={this.props.followingInProgress}
				toggleFollowingProgress={this.props.toggleFollowingProgress} />
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
		followingInProgress: state.findUsersPage.followingInProgress,

	}
}
// диспатчи теперь здесь 
export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching, toggleFollowingProgress })(FindUsersAPI)


