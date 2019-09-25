<template>
	<div id="app">
		<Layout />
	</div>
</template>

<script>
import Layout from './views/Layout'
export default {
	data() {
		return {

		}
	},
	components: {
		Layout
	}
}
</script>

<style lang="less">
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
</style>
