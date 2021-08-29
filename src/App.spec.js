import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import App from '@/App.vue'

describe('App component', () => {
	let wrapper

	beforeEach(() => {
		wrapper = shallowMount(App)
	})

	it('displays try series buttons', () => {
		const trySeries = wrapper.findComponent('[data-test=try-series]')

		expect(trySeries.exists()).to.be.true
	})

	it('displays history', () => {
		const history = wrapper.findComponent('[data-test=history]')

		expect(history.exists()).to.be.true
	})
})
