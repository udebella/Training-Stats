<template>
	<try-series data-test="try-series"/>
	<stats-resume data-test="score"/>
</template>

<script>
import TrySeries from "./components/TrySeries"
import StatsResume from "./components/StatsResume"

export default {
	name: 'App',
	components: {
		TrySeries,
		StatsResume,
	},
}
</script>
