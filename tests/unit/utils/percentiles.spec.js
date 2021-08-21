import {expect} from "chai"
import {computePercentile} from "../../../src/utils/percentiles"

describe('computePercentile', () => {
	[0, 50, 100].forEach(percentile => {
		it(`returns 0 for ${percentile} when given an empty arrays`, () => {
			const actual = computePercentile([], percentile)

			expect(actual).to.equal(0)
		})
	})

	it('computes maximum for 100 percentile', () => {
		const percentile = computePercentile([1, 2, 3], 100)

		expect(percentile).to.equal(3)
	})

	it('computes minimum for 0 percentile', () => {
		const percentile = computePercentile([3, 2, 1], 0)

		expect(percentile).to.equal(1)
	})

	it('computes median for 50 percentile', () => {
		const percentile = computePercentile([3, 2, 1], 50)

		expect(percentile).to.equal(2)
	})

	it('computes median for arrays with even number of elements', () => {
		const percentile = computePercentile([1, 2, 3, 4], 50)

		expect(percentile).to.equal(3)
	})

	it('works with unsorted arrays', () => {
		const percentile = computePercentile([3, 2, 1], 100)

		expect(percentile).to.equal(3)
	})

	it('does not modify given array', () => {
		const givenArray = [3, 2, 1]

		computePercentile(givenArray, 100)

		expect(givenArray).to.deep.equal([3, 2, 1])
	})
})
