import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import TrySeries from '@/components/TrySeries.vue'
import {stub} from "sinon"

describe('TrySeries.vue', () => {
	let wrapper

	beforeEach(() => {
		const $store = {
			getters: {
				buttons: stub().returns([1, 2]),
			},
		}
		wrapper = shallowMount(TrySeries, {
			global: {
				mocks: {
					$store,
				},
			},
		})
	})

	it('displays try score buttons', () => {
		const buttons = wrapper.findAll('[data-test=try-score-button]')

		expect(buttons.length).to.equals(2)
		expect(buttons[0].text()).to.equals('1')
		expect(buttons[1].text()).to.equals('2')
	})
})
