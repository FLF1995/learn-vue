<template>
	<div id="app">
		<Layout  v-if="this.$route.meta.keepAlive" />
		<router-view v-else></router-view>
	</div>
</template>

<script>
import Layout from './views/Layout'
import store from './store'
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
		min-height: 100%;
	}
</style>
