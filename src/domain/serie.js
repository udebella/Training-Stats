import {computePercentile} from "../utils/percentiles"

export const createSeries = ({values = []} = {}) => {
	const tries = [...values]
	const addTry = (value) => {
		tries.push(value)
		return createSeries({values: tries})
	}
	const cancelLast = () => {
		tries.pop()
		return createSeries({values: tries})
	}
	return {
		numberTries: () => tries.length,
		score: () => tries.reduce((score, value) => score + value, 0),
		addTry,
		cancelLast,
		percentiles: () => [
			computePercentile(tries, 0),
			computePercentile(tries, 25),
			computePercentile(tries, 50),
			computePercentile(tries, 75),
			computePercentile(tries, 100),
		],
	}
}
