export const storeConfig = () => ({
	state: {
		buttons: []
	},
	mutations: {},
	actions: {
		addButton
	},
	modules: {}
})

function addButton(store, buttonToAdd) {
	store.state.buttons = [...store.state.buttons, buttonToAdd]
}
