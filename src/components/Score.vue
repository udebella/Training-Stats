<template>
	<span data-test="score">{{score}}</span>
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
