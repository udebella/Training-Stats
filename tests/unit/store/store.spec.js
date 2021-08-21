import {expect} from "chai"
import {createStore} from "vuex"
import {storeConfig} from "../../../src/store/store"

describe('Store', () => {
	let store

	beforeEach(() => {
		store = createStore(storeConfig())
	})

	it('is empty by default', () => {
		expect(store.state).to.deep.equals({
			buttons: [],
			tries: [[]],
		})
	})

	describe('addButton', () => {
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
	})
})
