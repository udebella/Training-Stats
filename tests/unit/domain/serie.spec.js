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

	describe('percentiles', () => {
		it('gives minimum, first quartile, median, last quartile and maximum on default series', () => {
			const series = createSeries()

			expect(series.percentiles()).to.deep.equals([0, 0, 0, 0, 0])
		})

		it('gives minimum, first quartile, median, last quartile and maximum on a series with values', () => {
			const series = createSeries()

			series.addTry(1)
			series.addTry(2)
			series.addTry(3)
			series.addTry(4)
			series.addTry(5)

			expect(series.percentiles()).to.deep.equals([1, 2, 3, 4, 5])
		})
	})

	describe('cancelLast', () => {
		it('allows to remove last entered value', () => {
			const series = createSeries()
			series.addTry(5)

			series.cancelLast()

			expect(series.numberTries()).to.equals(0)
		})
	})
})
