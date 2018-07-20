import React from 'react'
import FilterLink from '../containers/FilterLink'

const Filters = () => (
	<ul className='nav nav-pills'>
		<FilterLink filter="SHOW_ALL">
			All
		</FilterLink>
		<FilterLink filter="SHOW_ACTIVE">
			Active
		</FilterLink>
		<FilterLink filter="SHOW_COMPLETED">
			Completed
		</FilterLink>
	</ul>
)

export default Filters