import {expect} from "chai"
import {createStore} from "vuex"
import {storeConfig} from "../../../src/store/store"

describe('Store', () => {
	let store

	beforeEach(() => {
		store = createStore(storeConfig())
	})

	describe('Default state', () => {
		it('has an empty current series by default', () => {
			expect(store.state.current.score()).to.equals(0)
		})
	})

	it('is empty by default', () => {
		expect(store.state.buttons).to.deep.equals([0, 0.5, 1, 2])
		expect(store.state.tries).to.deep.equals([[]])
	})

	describe('addButton', () => {
		beforeEach(() => {
			store.state.buttons = []
		})

		it('allows to add buttons', () => {
			store.dispatch('addButton', 0)

			expect(store.getters.buttons).to.deep.equals([0])
		})

		it('allows to add multiple buttons', () => {
			store.dispatch('addButton', 0)
			store.dispatch('addButton', 2)

			expect(store.getters.buttons).to.deep.equals([0, 2])
		})
	})

	describe('addTryValue', () => {
		it('add value from the try', () => {
			store.dispatch('addTryValue', 0)

			expect(store.getters.tries).to.deep.equals([[0]])
		})

		it('save multiple tries', () => {
			store.dispatch('addTryValue', 0)
			store.dispatch('addTryValue', 1)

			expect(store.getters.tries).to.deep.equals([[0, 1]])
		})

		it('always add tries to the last try series', () => {
			store.state.tries = [[1], []]

			store.dispatch('addTryValue', 0)

			expect(store.getters.tries).to.deep.equals([[1], [0]])
		})
	})

	describe('addTrySeries', () => {
		it('creates a new try series', () => {
			store.dispatch('addTrySeries')

			expect(store.getters.tries).to.deep.equals([[], []])
		})
	})

	describe('stats', () => {
		it('computes scores for each try series', () => {
			store.state.tries = [[1, 2, 3]]

			expect(store.getters.stats).to.deep.equals([{
				numberTries: 3,
				score: 6,
				boxplot: [1, 2, 2, 3, 3],
			}])
		})

		it('is 0 for empty try series', () => {
			store.state.tries = [[]]

			expect(store.getters.stats).to.deep.equals([{
				numberTries: 0,
				score: 0,
				boxplot: [0, 0, 0, 0, 0],
			}])
		})

		it('properly computes scores for multiple series', () => {
			store.state.tries = [[1, 2], [3, 4]]

			expect(store.getters.stats).to.deep.equals([{
				numberTries: 2,
				score: 3,
				boxplot: [1, 2, 2, 2, 2],
			}, {
				numberTries: 2,
				score: 7,
				boxplot: [3, 4, 4, 4, 4],
			}])
		})
	})

	describe('currentStats', () => {
		it('give stats on the current try series', () => {
			store.state.tries = [[1, 2, 3]]

			expect(store.getters.currentStats).to.deep.equals({
				numberTries: 3,
				score: 6,
				boxplot: [1, 2, 2, 3, 3],
			})
		})
	})
})
