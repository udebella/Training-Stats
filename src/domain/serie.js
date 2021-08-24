export const createSeries = () => {
	const values = []
	return {
		numberTries: () => values.length,
		score: () => values.reduce((score, value) => score + value, 0),
		addTry: (value) => values.push(value),
	}
}
