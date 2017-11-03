<template>
	<article>
		<h1 class="alpha">Team UI</h1>

	</article>
</template>

<script>
import store from "@/store";

export default {
	name: 'Team',
	data() {
		return {
			data: store.data,
		};
	},
};
</script>

<style scoped>

</style>
