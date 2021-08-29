import {shallowMount} from "@vue/test-utils"
import History from "@/components/History"
import {expect} from "chai"

describe('History component', () => {
	it('displays a chart that resumes the history', () => {
		const wrapper = shallowMount(History)

		const chart = wrapper.find('[data-test=chart]')

		expect(chart.exists()).to.be.true
	})
})
