<template>
	<div class="stats">
		<div data-test="number-of-tries">{{currentStats.numberTries}}</div>
		<div data-test="score" >{{currentStats.score}}</div>
	</div>
</template>

<script>
export default {
	name: 'StatsResume',
	computed: {
		currentStats() {
			return this.$store.getters.currentStats
		},
	},
}
</script>

<style scoped>
.stats {
	font-size: 100px;
	text-align: center;
}
</style>
