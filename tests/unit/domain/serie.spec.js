import {expect} from "chai"

const createSeries = () => {
	const values = []
	return {
		numberTries: () => values.length,
		score: () => values.reduce((score, value) => score + value, 0),
		addTry: (value) => values.push(value),
	}
}

describe('Serie', () => {
	describe('numberTries', () => {
		it('is 0 by default', () => {
			const series = createSeries()

			expect(series.numberTries()).to.equals(0)
		})

		it('counts tries', () => {
			const series = createSeries()

			series.addTry(2)

			expect(series.numberTries()).to.equals(1)
		})
	})

	describe('score', () => {
		it('is 0 by default', () => {
			const series = createSeries()

			expect(series.score()).to.equals(0)
		})

		it('computes score when we add tries', () => {
			const series = createSeries()

			series.addTry(2)

			expect(series.score()).to.equals(2)
		})

		it('computes score when we add multiple tries', () => {
			const series = createSeries()

			series.addTry(2)
			series.addTry(1)

			expect(series.score()).to.equals(3)
		})
	})
})
