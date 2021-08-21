import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import TrySeries from '@/components/TrySeries.vue'
import {stub} from "sinon"

describe('TrySeries.vue', () => {
	let wrapper
	let mocks

	beforeEach(() => {
		mocks = {
			dispatch: stub(),
			buttons: stub().returns([1, 2]),
		}
		const $store = {
			dispatch: mocks.dispatch,
			getters: {
				buttons: mocks.buttons,
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

	it('add try score when clicking the button', () => {
		const button = wrapper.find('[data-test=try-score-button]')

		button.trigger('click')

		expect(mocks.dispatch).to.have.been.calledWith('addTryValue', 1)
	})
})
