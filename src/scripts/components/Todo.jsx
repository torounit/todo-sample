import React from 'react'
const PropTypes = React.PropTypes;
import { Block, Button, Space } from 'rebass';

const Todo = ({ onClick, onDeleteClick, completed, text }) => (
	<Block
		   borderLeft
		   borderColor={completed ? 'gray' : 'blue'}
		   px={2}
		   style={{
			   textDecoration: completed ? 'line-through' : 'none'
		   }}
	>
		<span>{text}</span>
		<Space
			auto
			x={1}
		/>

		<Button onClick={onClick}
			backgroundColor={completed ? 'gray' : 'blue'}
			color="white"
			inverted
			rounded
		>
			{completed ? 'Fixed' : 'Open'}
		</Button>

		<Space
			auto
			x={1}
		/>

		<Button
			onClick={onDeleteClick}
			backgroundColor='warning'
			color="white"
			inverted
			rounded
		>
			Delete
		</Button>

	</Block>
)

Todo.propTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
}

export default Todo