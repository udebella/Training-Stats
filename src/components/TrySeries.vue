<template>
	<div>
		<button data-test="try-score-button"
				v-for="button in buttons"
				:key="button"
				@click="addTryValue(button)">
			{{button}}
		</button>
		<span data-test="score">{{score}}</span>
	</div>
</template>

<script>
export default {
	name: 'TrySeries',
	computed: {
		buttons() {
			return this.$store.getters.buttons()
		},
		score() {
			return this.$store.getters.score()
		},
	},
	methods: {
		addTryValue(buttonValue) {
			this.$store.dispatch('addTryValue', buttonValue)
		},
	},
}
</script>
