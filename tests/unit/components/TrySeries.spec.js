import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import TrySeries from '@/components/TrySeries.vue'
import {stub} from "sinon"

describe('TrySeries.vue', () => {
	let wrapper
	let $store

	beforeEach(() => {
		$store = {
			dispatch: stub(),
			getters: {
				buttons: [1, 2],
				scores: [1, 5],
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

		expect($store.dispatch).to.have.been.calledWith('addTryValue', 1)
	})

	it('displays the score for the series', () => {
		const score = wrapper.find('[data-test=score]')

		expect(score.text()).to.equals('5')
	})
})
