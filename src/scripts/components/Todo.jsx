import React from 'react'
const PropTypes = React.PropTypes;
//import { Button } from 'belle';
//const Button = ReactBootstrap.Button;


const Todo = ({ onClick, completed, text }) => (
	<li onClick={onClick}
		style={{
			textDecoration: completed ? 'line-through' : 'none'
		}}
	>
		<span>{text}</span>

	</li>
)

Todo.propTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
}

export default Todo