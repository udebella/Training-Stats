import {computePercentile} from "../utils/percentiles"

export const createSeries = ({ values = []} = {}) => {
	const tries = [...values]
	return {
		numberTries: () => tries.length,
		score: () => tries.reduce((score, value) => score + value, 0),
		addTry: (value) => tries.push(value),
		cancelLast: () => tries.pop(),
		percentiles: () => [
			computePercentile(tries, 0),
			computePercentile(tries, 25),
			computePercentile(tries, 50),
			computePercentile(tries, 75),
			computePercentile(tries, 100),
		],
	}
}
