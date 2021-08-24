import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import App from '@/App.vue'

describe('App component', () => {
	let wrapper

	beforeEach(() => {
		wrapper = shallowMount(App)
	})

	it('displays try series buttons', () => {
		const trySeries = wrapper.find('[data-test=try-series]')

		expect(trySeries.exists()).to.be.true
	})
})
