<template>
	<Chart data-test="chart" :options="options"/>
</template>

<script>
import {Chart} from 'highcharts-vue'

export default {
	name: 'history',
	computed: {
		stats() {
			return this.$store.getters.stats
		},
		options() {
			return {
				series: [{
					name: 'Scores',
					type: 'line',
					data: this.stats.map(({score}) => score),
				}, {
					name: 'Percentiles',
					type: 'boxplot',
					data: this.stats.map(({boxplot}) => boxplot),
				}],
			}
		},
	},
	components: {
		Chart,
	},
}
</script>
