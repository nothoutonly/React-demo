import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import CommentList from '../components/CommentList'
import {deleteComment, initComments} from "../reducers/comments"

// CommentListContainer
// 一个Smart组件，负责评论列表数据的加载、初始化、删除评论
// 沟通CommentList和state
class CommentListContainer extends Component {
	static propTypes = {
		comments: PropTypes.array,
		initComments: PropTypes.func,
		onDeleteComment: PropTypes.func
	}

	componentWillMount() {
		this._loadComments()
	}

	_loadComments() {
		let comments = localStorage.getItem('comments')
		comments = comments ? JSON.parse(comments) : []
		this.props.initComments(comments)
	}

	handleDeleteComment(index) {
		const {comments} = this.props
		// props 是不能变的，所以这里新建一个删除了特定下标的评论列表
		const newComments = [
			...comments.slice(0, index),
			...comments.slice(index + 1)
		]
		// 保存最新的评论列表到 LocalStorage
		localStorage.setItem('comments', JSON.stringify(newComments))
		if (this.props.onDeleteComment) {
			// this.props.onDeleteComment 是 connect 传进来的
			// 会 dispatch 一个 action 去删除评论
			this.props.onDeleteComment(index)
		}
	}

	render() {
		return (
			<CommentList
				comments={this.props.comments}
				onDeleteComment={this.handleDeleteComment.bind(this)}/>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		comments: state.comments
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		// 提供给 CommentListContainer
		// 当从 LocalStorage 加载评论列表以后就会通过这个方法
		// 把评论列表初始化到 state 当中
		initComments: (comments) => {
			dispatch(initComments(comments))
		},
		onDeleteComment: (commentIndex) => {
			dispatch(deleteComment(commentIndex))
		}
	}
}

// 将 CommentListContainer connect 到 store
// 会把 comments、initComments、onDeleteComment 传给 CommentListContainer
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CommentListContainer)