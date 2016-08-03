import React from 'react'
import Todo from './Todo'
const PropTypes = React.PropTypes;

const TodoList = ({ todos, onTodoClick, onDeleteClick }) => (
	<div>
		{todos.map(todo =>
			<Todo
				key={todo.id}
				{...todo}
				onClick={() => onTodoClick(todo.id)}
				onDeleteClick={() => onDeleteClick(todo.id)}
			/>
		)}
	</div>
)

TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired,
		text: PropTypes.string.isRequired
	}).isRequired).isRequired,
	onTodoClick: PropTypes.func.isRequired
}

export default TodoList
