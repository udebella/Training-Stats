import {computePercentile} from "../utils/percentiles"
import {createSeries} from "../domain/serie"

export const storeConfig = () => ({
	state: {
		buttons: [0, 0.5, 1, 2],
		tries: [[]],
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
	store.state.current = createSeries()
	store.state.tries = [...store.state.tries, []]
}

function stats(state) {
	return state.tries.map(trySeries => ({
		numberTries: trySeries.length,
		score: trySeries.reduce((score, tryScore) => score + tryScore, 0),
		boxplot: [
			computePercentile(trySeries, 0),
			computePercentile(trySeries, 25),
			computePercentile(trySeries, 50),
			computePercentile(trySeries, 75),
			computePercentile(trySeries, 100),
		],
	}))
}

function currentStats(_, getters) {
	return getters.stats[0]
}
