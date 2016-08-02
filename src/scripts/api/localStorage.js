export const loadState = () => {
	try {
		const serializedState = localStorage.getItem('state')
		console.log(JSON.parse(serializedState));
		if (serializedState === null) {
			return undefined
		}
		console.log(JSON.parse(serializedState));
		return JSON.parse(serializedState)
	} catch (err) {
		return undefined
	}
}

export const saveState = (state) => {
	console.log(state);
	try {
		const serializedState = JSON.stringify(state)
		localStorage.setItem('state', serializedState)
	} catch (err) {
		return 'error'
	}
}