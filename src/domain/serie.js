import {computePercentile} from "../utils/percentiles"

export const createSeries = () => {
	const values = []
	return {
		numberTries: () => values.length,
		score: () => values.reduce((score, value) => score + value, 0),
		addTry: (value) => values.push(value),
		cancelLast: () => values.pop(),
		percentiles: () => [
			computePercentile(values, 0),
			computePercentile(values, 25),
			computePercentile(values, 50),
			computePercentile(values, 75),
			computePercentile(values, 100),
		],
	}
}
