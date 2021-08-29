export function computePercentile(array, percentile) {
    const sortedArray = [...array].sort()
    const percentileIndex = findPercentileIndex(percentile, array)
    return sortedArray[percentileIndex] ?? 0
}

function findPercentileIndex(percentile, array) {
    const percentileIndex = (percentile / 100) * (array.length - 1)
    if (Number.isInteger(percentileIndex)) {
        return percentileIndex
    }
    return Math.floor(percentileIndex) + 1
}
