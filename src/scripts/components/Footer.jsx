import React from 'react'
import { Label,Divider } from 'rebass';
import FilterLink from '../containers/FilterLink'

class Footer extends React.Component {

	render() {
		return (
			<div>
				<Divider />
				<label>Filters</label>
				<Divider />
				<FilterLink name="filter" filter="SHOW_ALL" label="ALL" defaultChecked="true"></FilterLink>
				<FilterLink name="filter" filter="SHOW_ACTIVE" label="Active"></FilterLink>
				<FilterLink name="filter" filter="SHOW_COMPLETED" label="Completed"></FilterLink>
				<Divider />
			</div>
		)
	}
}

export default Footer
