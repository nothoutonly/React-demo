import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'

class CommentList extends Component {
	static propTypes = {
		comments: PropTypes.array,
		onDeleteComment: PropTypes.func
	}
	static defaultProps = {
		comments: []
	}
	handleDeleteComment(index){
		if (this.props.onDeleteComment) {
		    this.props.onDeleteComment(index)
		}
	}
	render() {
		return (
			<div>
				{this.props.comments.map((comment, i) =>
					<Comment
						key={i}
						index={i}
						comment={comment}
						onDeleteComment={this.handleDeleteComment.bind(this)}/>// handleDeleteComment函数将index进行传参，也可以使用handleDeleteComment.bind(this, i)
				)}
			</div>
		)
	}
}

export default CommentList