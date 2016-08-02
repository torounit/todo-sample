import React from 'react'
import { connect } from 'react-redux'
import { addTodo, inputForm } from '../actions'
import { InlineForm } from 'rebass';

const PropTypes = React.PropTypes;

class AddTodo extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.state =  {
			value: ""
		}
	}

	handleChange(event) {
		event.preventDefault();
		let input = event.currentTarget;
		this.props.onChange( input.value.trim() );
	}

	handleSubmit(event) {
		event.preventDefault();
		if (!this.props.value.trim()) {
			return
		}
		this.props.onSubmit( this.props.value );

	}

	render() {
		return (
			<div>
				<InlineForm
					value={this.props.value}
					buttonLabel="Go"
					label="InlineForm"
					name="inline_form"
					onChange={ this.handleChange.bind(this) }
					onClick={ this.handleSubmit.bind(this) }
				/>

			</div>
		)
	}
};


AddTodo.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
	return {
		value: state.input
	}
}



const mapDispatchToProps = (dispatch) => {

	return {
		onSubmit: (value) => {
			dispatch( addTodo(value) )
		},
		onChange: (value) => {
			dispatch( inputForm(value) )
		}

	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddTodo)

