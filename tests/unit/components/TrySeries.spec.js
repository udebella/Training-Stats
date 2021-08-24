import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import TrySeries from '@/components/TrySeries.vue'
import {stub} from "sinon"
import {createSeries} from "../../../src/domain/serie"

describe('TrySeries component', () => {
	let wrapper
	let $store

	beforeEach(() => {
		const currentSeries = createSeries()
		currentSeries.addTry(2)
		$store = {
			dispatch: stub(),
			getters: {
				buttons: [1, 2],
				current: currentSeries,
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

	it('displays the score for the series', () => {
		const score = wrapper.find('[data-test=score]')

		expect(score.text()).to.equals('2')
	})

	it('displays the number of tries', () => {
		const score = wrapper.find('[data-test=number-of-tries]')

		expect(score.text()).to.equals('1')
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

	describe('Cancel button', () => {
		it('displays a button to cancel last value', () => {
			const button = wrapper.find('[data-test=cancel-last]')

			expect(button.text()).to.equals('Cancel')
		})

		it('cancels last value when clicked', () => {
			const button = wrapper.find('[data-test=cancel-last]')

			button.trigger('click')

			expect($store.dispatch).to.have.been.calledWith('cancelLastValue')
		})
	})

	describe('Restart series', () => {
		it('displays a button to start a new series', () => {
			const button = wrapper.find('[data-test=start-new]')

			expect(button.text()).to.equals('Start new')
		})

		it('starts a new series when clicked', () => {
			const button = wrapper.find('[data-test=start-new]')

			button.trigger('click')

			expect($store.dispatch).to.have.been.calledWith('addTrySeries')
		})
	})
})
