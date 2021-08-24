import {createSeries} from "../domain/serie"

export const storeConfig = () => ({
	state: {
		buttons: [0, 0.5, 1, 2],
		tries: [],
		current: createSeries(),
	},
	mutations: {},
	actions: {
		addButton,
		addTryValue,
		addTrySeries,
	},
	getters: {
		buttons: (state) => state.buttons,
		tries: (state) => state.tries,
		history: (state) => state.tries,
		stats,
		currentStats,
		current: (state) => state.current,
	},
	modules: {},
})

function addButton(store, buttonToAdd) {
	store.state.buttons = [...store.state.buttons, buttonToAdd]
}

function addTryValue(store, tryValue) {
	store.state.current.addTry(tryValue)
}

function addTrySeries(store) {
	store.state.tries = [...store.state.tries, store.state.current]
	store.state.current = createSeries()
}

function stats(state) {
	return state.tries.map(trySeries => ({
		numberTries: trySeries.numberTries(),
		score: trySeries.score(),
		boxplot: trySeries.percentiles(),
	}))
}

function currentStats(_, getters) {
	return getters.stats[0]
}
