<template>
	<history data-test="history"/>
	<try-series data-test="try-series"/>
</template>

<script>
import TrySeries from "./components/TrySeries"
import History from "@/components/History"

export default {
	name: 'App',
	components: {
		History,
		TrySeries,
	},
}
</script>
