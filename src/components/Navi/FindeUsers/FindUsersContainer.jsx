import React from 'react'
import { connect } from 'react-redux'
import { followThunkCreator, unfollowThunkCreator, getUserThunkCreator } from '../../../Redux/findUsersReducer'
import { getUsers, getPageSize, getTotalUserCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../../Redux/Selectors/findeUsersSelectors'
import FindUsers from './FindUsers'
import Preloader from '../../common/preloader/preloader'



class FindUsersContainer extends React.Component {

	componentDidMount() {
		this.props.getUserThunkCreator(this.props.currentPage, this.props.pageSize)
	}

	onPageChange = (pageNumber) => {
		this.props.getUserThunkCreator(pageNumber, this.props.pageSize)
	}


	render() {
		return (<>
			{this.props.isFetching ? <Preloader /> : null}
			<FindUsers totalUserCount={this.props.totalUserCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChange={this.onPageChange}
				unfollowThunkCreator={this.props.unfollowThunkCreator}
				followThunkCreator={this.props.followThunkCreator}
				users={this.props.users}
				followingInProgress={this.props.followingInProgress} />
		</>
		)
	}
}

// берем из findeUserReduser
// let mapStateToProps = (state) => {
// 	return {
// 		users: state.findUsersPage.users,
// 		pageSize: state.findUsersPage.pageSize,
// 		totalUserCount: state.findUsersPage.totalUserCount,
// 		currentPage: state.findUsersPage.currentPage,
// 		isFetching: state.findUsersPage.isFetching,
// 		followingInProgress: state.findUsersPage.followingInProgress,

// 	}
// }
let mapStateToProps = (state) => {
	return {
		users: getUsers(state),
		pageSize: getPageSize(state),
		totalUserCount: getTotalUserCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state),

	}
}
// диспатчи теперь здесь 
export default connect(mapStateToProps, { followThunkCreator, unfollowThunkCreator, getUserThunkCreator })(FindUsersContainer)


