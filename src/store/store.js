import {createSeries} from "../domain/serie"

export const storeConfig = () => ({
	state: {
		buttons: [0, 0.5, 1, 2],
		history: [],
		current: createSeries(),
	},
	mutations: {},
	actions: {
		addButton,
		addTryValue,
		cancelLastValue,
		addTrySeries,
	},
	getters: {
		buttons: (state) => state.buttons,
		history: (state) => state.history,
		stats,
		current: (state) => state.current,
	},
	modules: {},
})

function addButton(store, buttonToAdd) {
	store.state.buttons = [...store.state.buttons, buttonToAdd]
}

function addTryValue(store, tryValue) {
	store.state.current = store.state.current.addTry(tryValue)
}

function cancelLastValue(store) {
	store.state.current = store.state.current.cancelLast()
}

function addTrySeries(store) {
	store.state.history = [...store.state.history, store.state.current]
	store.state.current = createSeries()
}

function stats(state) {
	return state.history.map(trySeries => ({
		numberTries: trySeries.numberTries(),
		score: trySeries.score(),
		boxplot: trySeries.percentiles(),
	}))
}
