<template>
	<div data-test="score" class="score">{{currentStats.score}}</div>
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
.score {
	font-size: 100px;
	text-align: center;
}
</style>
