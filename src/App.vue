<template>
	<try-series data-test="try-series"/>
	<score data-test="score"/>
</template>

<script>
import TrySeries from "./components/TrySeries"
import Score from "./components/Score"

export default {
	name: 'App',
	components: {
		TrySeries,
		Score,
	},
}
</script>
