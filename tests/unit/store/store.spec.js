import {expect} from "chai"
import {store} from '@/store'

describe('Store', () => {
	it('is empty by default', () => {
		expect(store.state).to.deep.equals({})
	})
})
