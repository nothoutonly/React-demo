import React from 'react'
import PropTypes from 'prop-types'

const Link = ({active, children, onClick}) => {
	console.log(active);
	return (
		<li
			role="presentation"
			className={active ? 'active' : ''}
			onClick={onClick}
			style={{marginLeft: '4px'}}>
			<a href="" onClick={(ev) => ev.preventDefault()}>{children}</a>

		</li>
	)
}

Link.propTypes = {
	active: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired
}

export default Link