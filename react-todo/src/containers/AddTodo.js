import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
	let input

	return (
			<form
				className='input-group'
				onSubmit={e => {
					e.preventDefault()
					if (!input.value.trim()) {
						return
					}
					dispatch(addTodo(input.value))
					input.value = ''
				}}
			>
				<input
					className='form-control'
					placeholder='add Todo'
					ref={node => input = node} />
				<span className="input-group-btn">
					<button className="btn btn-default">Add</button>
				</span>
			</form>
	)
}

export default connect()(AddTodo)