<template>
	<div class="layout">
		<div class="navbar">
			{{`今天是${new Date().getFullYear()}年${new Date().getMonth()+1}月${new Date().getDate()}日`}}
		</div>
		<div class="content-wrap">
			<div class="sidebar">
				<Sidebar />
			</div>
			<div class="content">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
import Sidebar from './Sidebar'

export default {
	data() {
		return {

		}
	},
	components: {
		Sidebar
	}
}
</script>

<style lang="less">
	* {
		margin: 0;
		padding: 0;
	}
	.layout {
		.navbar {
			height: 100px;
			width:100%;
			background: rgb(236, 191, 191);
			display: flex;
			justify-content: center;
			align-items: center;
			color: rgb(124, 122, 122);
			font-size: 24px;
		}
		.content-wrap {
			display: flex;
			min-height: 1080px;
			.sidebar {
				width:15%;
				background: rgb(170, 123, 123);
			}
			.content {
				width: 85%;
				background: #fff;
			}
		}
	}
</style>