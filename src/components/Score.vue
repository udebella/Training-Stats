<template>
	<div data-test="score" class="score">{{score}}</div>
</template>

<script>
export default {
	name: 'Score',
	computed: {
		score() {
			const lastScore = this.$store.getters.scores.length - 1
			return this.$store.getters.scores[lastScore]
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
