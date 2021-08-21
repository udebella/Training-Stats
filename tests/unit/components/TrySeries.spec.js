import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import TrySeries from '@/components/TrySeries.vue'
import {stub} from "sinon"

describe('TrySeries.vue', () => {
	it('displays try score buttons', () => {
		const $store = {
			getters: {
				buttons: stub().returns([1, 2]),
			},
		}
		const wrapper = shallowMount(TrySeries, {
			global: {
				mocks: {
					$store,
				},
			},
		})

		const buttons = wrapper.findAll('[data-test=try-score-button]')

		expect(buttons.length).to.equals(2)
		expect(buttons[0].text()).to.equals('1')
		expect(buttons[1].text()).to.equals('2')
	})
})
