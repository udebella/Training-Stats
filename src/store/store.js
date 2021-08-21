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
	modules: {},
})

function addButton(store, buttonToAdd) {
	store.state.buttons = [...store.state.buttons, buttonToAdd]
}

function addTryValue(store, tryValue) {
	store.state.tries = [...store.state.tries, tryValue]
}
