<template>
	<div class="stats">
		<div data-test="number-of-tries">{{ currentStats.numberTries() }}</div>
		<div data-test="score">{{ currentStats.score() }}</div>
	</div>
	<div class="button-list">
		<button data-test="try-score-button"
				class="button"
				v-for="button in buttons"
				:key="button"
				@click="addTryValue(button)">
			{{button}}
		</button>
		<button data-test="cancel-last"
				class="button"
				@click="cancelLast">
			👋
		</button>
		<button data-test="start-new"
				class="button"
				@click="startNew">
			👌
		</button>
	</div>
</template>

<script>
export default {
	name: 'TrySeries',
	computed: {
		currentStats() {
			return this.$store.getters.current
		},
		buttons() {
			return this.$store.getters.buttons
		},
	},
	methods: {
		addTryValue(buttonValue) {
			this.$store.dispatch('addTryValue', buttonValue)
		},
		cancelLast() {
			this.$store.dispatch('cancelLastValue')
		},
		startNew() {
			this.$store.dispatch('addTrySeries')
		},
	},
}
</script>

<style scoped>
.stats {
	font-size: 100px;
	text-align: center;
}
.button-list {
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
}
.button {
	font-size: 70px;
	margin: 5px;
	padding: 20px;
	min-width: 40%;
}
</style>
