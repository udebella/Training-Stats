export const storeConfig = () => ({
	state: {
		buttons: [],
		tries: [],
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
	store.state.tries = [...store.state.tries, tryValue]
}
