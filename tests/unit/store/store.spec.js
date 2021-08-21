import {expect} from "chai"
import {store} from '@/store/store'

describe('Store', () => {
	it('is empty by default', () => {
		expect(store.state).to.deep.equals({ buttons: [] })
	})

	it('allows to add buttons', () => {
		store.dispatch('addButton', 0)

		expect(store.state.buttons).to.deep.equals([0])
	})
})
