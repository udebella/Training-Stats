import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import StatsResume from '@/components/StatsResume.vue'

describe('StatsResume component', () => {
	let wrapper
	let $store

	beforeEach(() => {
		$store = {
			getters: {
				currentStats: {
					numberTries: 10,
					score: 5,
				},
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

		expect(score.text()).to.equals('5')
	})

	it('displays the number of tries', () => {
		const score = wrapper.find('[data-test=number-of-tries]')

		expect(score.text()).to.equals('10')
	})
})
