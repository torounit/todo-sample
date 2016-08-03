import React from 'react'
import { Radio } from 'rebass';
const PropTypes = React.PropTypes;

class Link extends React.Component {

	static get propTypes() {
		return {
			active: PropTypes.bool.isRequired,
			onClick: PropTypes.func.isRequired
		}
	}

	render() {
		let { active, label, onClick, name, filter, defaultChecked } = this.props;

		return (
			<Radio
				checked={active}
				circle
				label={label}
				name={filter}
				onChange={ e => {
					e.preventDefault();
					onClick();
				}}
			/>

		)
		//
		// return (
		//
		//
		// 	<a href="#"
		// 	   onClick={ e => {
		// 		   e.preventDefault();
		// 		   onClick();
		// 	   }}
		// 	>
		// 		{children}
		// 	</a>
		// )
	}
}


export default Link
