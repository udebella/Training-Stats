<template>
	<div>
		<button data-test="try-score-button"
				v-for="button in buttons"
				:key="button">
			{{button}}
		</button>
	</div>
</template>

<script>
export default {
	name: 'TrySeries',
	computed: {
		buttons() {
			return this.$store.getters.buttons()
		},
	},
}
</script>
