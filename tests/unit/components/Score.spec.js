import {expect} from 'chai'
import {shallowMount} from '@vue/test-utils'
import Score from '@/components/Score.vue'

describe('Score component', () => {
	let wrapper
	let $store

	beforeEach(() => {
		$store = {
			getters: {
				scores: [1, 5],
			},
		}
		wrapper = shallowMount(Score, {
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
})
