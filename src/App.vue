<template>
	<article id="app" class="wrapper">
		<router-view/>
	</article>
</template>

<script>
export default {
	name: 'app',
};
</script>

<style lang="scss">
@import './styles/main.scss';

.wrapper {
	padding: 10px;
}
</style>
