import {createStore} from 'vuex'

export const store = createStore({
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
	store.state.buttons = [buttonToAdd]
}
