import React, {Component} from 'react'
import '../CommentApp.css';
import CommentInput from './CommentInput'
import CommentList from './CommentList'

export default class CommentApp extends Component {

	render() {
		return (
			<div className="wrapper">
				<CommentInput />
				<CommentList />
			</div>
		);
	}
}


