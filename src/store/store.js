export const storeConfig = () => ({
	state: {
		buttons: [],
		tries: [[]],
	},
	mutations: {},
	actions: {
		addButton,
		addTryValue,
	},
	getters: {
		buttons: (state) => state.buttons,
		tries: (state) => state.tries,
	},
	modules: {},
})

function addButton(store, buttonToAdd) {
	store.state.buttons = [...store.state.buttons, buttonToAdd]
}

function addTryValue(store, tryValue) {
	const lastTry = store.state.tries.length - 1
	store.state.tries[lastTry].push(tryValue)
}
