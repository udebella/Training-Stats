import {computePercentile} from "../utils/percentiles"

export const createSeries = ({values = []} = {}) => {
	const addTry = (value) => {
		return createSeries({values: [...values, value]})
	}
	const cancelLast = () => {
		return createSeries({values: values.filter((_, index) => index !== values.length - 1)})
	}
	return {
		numberTries: () => values.length,
		score: () => values.reduce((score, value) => score + value, 0),
		addTry,
		cancelLast,
		percentiles: () => [
			computePercentile(values, 0),
			computePercentile(values, 25),
			computePercentile(values, 50),
			computePercentile(values, 75),
			computePercentile(values, 100),
		],
	}
}
