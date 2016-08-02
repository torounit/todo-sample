const input = (state = '', action) => {
	switch (action.type) {
		case 'INPUT_FORM':
			return action.formText;

		default:
			return state
	}
};

export default input