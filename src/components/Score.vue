<template>
	<div data-test="score" class="score">{{score}}</div>
</template>

<script>
export default {
	name: 'Score',
	computed: {
		score() {
			return this.$store.getters.currentStats.score
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
