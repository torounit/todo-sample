import React from 'react'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'
import { ButtonOutline } from 'rebass';

let UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
	<p>
		<ButtonOutline onClick={onUndo} disabled={!canUndo} color={!canUndo ? 'gray' : 'blue'}>
			Undo
		</ButtonOutline>
		<ButtonOutline onClick={onRedo} disabled={!canRedo} color={!canRedo ? 'gray' : 'blue'}>
			Redo
		</ButtonOutline>
	</p>
)

const mapStateToProps = (state) => {
	return {
		canUndo: state.todos.past.length > 0,
		canRedo: state.todos.future.length > 0
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onUndo: () => dispatch(UndoActionCreators.undo()),
		onRedo: () => dispatch(UndoActionCreators.redo())
	}
}

UndoRedo = connect(
	mapStateToProps,
	mapDispatchToProps
)(UndoRedo)

export default UndoRedo
