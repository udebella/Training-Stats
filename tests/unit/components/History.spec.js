import {shallowMount} from "@vue/test-utils"
import History from "@/components/History"
import {expect} from "chai"
import {stub} from "sinon"

describe('History component', () => {
	let wrapper

	beforeEach(() => {
		const $store = {
			dispatch: stub(),
			getters: {
				stats: [{
					numberTries: 1,
					score: 2,
					boxplot: [2, 2, 2, 2, 2],
				}],
			},
		}
		wrapper = shallowMount(History, {
			global: {
				mocks: {
					$store,
				},
			},
		})
	})

	it('displays a chart that resumes the history', () => {
		const chart = wrapper.findComponent('[data-test=chart]')

		expect(chart.exists()).to.be.true
	})

	it('displays score series', () => {
		const chart = wrapper.findComponent('[data-test=chart]')

		expect(chart.props('options').series[0]).to.deep.equals({
			name: 'scores',
			type: 'line',
			data: [2],
		})
	})
})
