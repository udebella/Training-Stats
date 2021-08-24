import {expect} from "chai"
import {createSeries} from "../../../src/domain/serie"

describe('Serie', () => {
	describe('numberTries', () => {
		it('is 0 by default', () => {
			const series = createSeries()

			expect(series.numberTries()).to.equals(0)
		})

		it('counts tries', () => {
			const series = createSeries()
				.addTry(2)

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
				.addTry(2)

			expect(series.score()).to.equals(2)
		})

		it('computes score when we add multiple tries', () => {
			const series = createSeries()
				.addTry(2)
				.addTry(1)

			expect(series.score()).to.equals(3)
		})
	})

	describe('percentiles', () => {
		it('gives minimum, first quartile, median, last quartile and maximum on default series', () => {
			const series = createSeries()

			expect(series.percentiles()).to.deep.equals([0, 0, 0, 0, 0])
		})

		it('gives minimum, first quartile, median, last quartile and maximum on a series with values', () => {
			const series = createSeries()
				.addTry(1)
				.addTry(2)
				.addTry(3)
				.addTry(4)
				.addTry(5)

			expect(series.percentiles()).to.deep.equals([1, 2, 3, 4, 5])
		})
	})

	describe('cancelLast', () => {
		it('allows to remove last entered value', () => {
			const series = createSeries({values: [5]})
				.cancelLast()

			expect(series.numberTries()).to.equals(0)
		})

		it('only cancel last values but keeps other values', () => {
			const series = createSeries({values: [5, 2]})
				.cancelLast()

			expect(series.numberTries()).to.equals(1)
			expect(series.score()).to.equals(5)
		})
	})
})
