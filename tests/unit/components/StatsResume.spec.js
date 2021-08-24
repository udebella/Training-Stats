import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import StatsResume from '@/components/StatsResume.vue'
import {createSeries} from "../../../src/domain/serie"

describe('StatsResume component', () => {
	let wrapper
	let $store

	beforeEach(() => {
		const currentSeries = createSeries()
		currentSeries.addTry(2)
		$store = {
			getters: {
				current: currentSeries,
			},
		}
		wrapper = shallowMount(StatsResume, {
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
})
