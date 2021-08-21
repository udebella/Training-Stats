<template>
	<div class="button-list">
		<button data-test="try-score-button"
				class="button"
				v-for="button in buttons"
				:key="button"
				@click="addTryValue(button)">
			{{button}}
		</button>
	</div>
</template>

<script>
export default {
	name: 'TrySeries',
	computed: {
		buttons() {
			return this.$store.getters.buttons
		},
	},
	methods: {
		addTryValue(buttonValue) {
			this.$store.dispatch('addTryValue', buttonValue)
		},
	},
}
</script>

<style scoped>
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
