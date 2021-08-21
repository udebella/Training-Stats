import {expect} from "chai"
import {createStore} from "vuex"
import {storeConfig} from "../../../src/store/store"

describe('Store', () => {
	let store

	beforeEach(() => {
		store = createStore(storeConfig())
	})

	it('is empty by default', () => {
		expect(store.state).to.deep.equals({buttons: []})
	})

	describe('addButton', () => {
		it('allows to add buttons', () => {
			store.dispatch('addButton', 0)

			expect(store.state.buttons).to.deep.equals([0])
		})

		it('allows to add multiple buttons', () => {
			store.dispatch('addButton', 0)
			store.dispatch('addButton', 2)

			expect(store.state.buttons).to.deep.equals([0, 2])
		})
	})
})
