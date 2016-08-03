import React from 'react'
import Header from  './Header'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import UndoRedo from '../containers/UndoRedo';
import { Container,PageHeader } from 'rebass';

const App = () => (
	<div>
		<Header />
		<Container>
			<PageHeader heading="Todo"></PageHeader>
			<AddTodo />
			<Footer/>
			<UndoRedo/>
			<VisibleTodoList />

		</Container>
	</div>
);

export default App