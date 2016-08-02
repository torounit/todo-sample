import React from 'react'
import Header from  './Header'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import UndoRedo from '../containers/UndoRedo';

const App = () => (
	<div>
		<Header />
		<h1>Todo</h1>
		<AddTodo />
		<VisibleTodoList />
		<Footer/>
		<UndoRedo/>
	</div>
);

export default App