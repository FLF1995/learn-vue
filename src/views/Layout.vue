<template>
	<div class="layout">
		<div class="navbar">
			<div>	
				{{`今天是${new Date().getFullYear()}年${new Date().getMonth()+1}月${new Date().getDate()}日`}}
			</div>
			<div @click='logout'>退出登录</div>
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
import {getInfo} from '@/api/user.js'


export default {
	data() {
		return {
		}
	},
	components: {
		Sidebar
	},
	created() {
		this.getInfo()
	},
	methods:{
		logout() {
			this.$router.push('/login')
			localStorage.removeItem('token')
		},
		getInfo() {
			getInfo().then((res)=> {
				console.log('res',res)
			})
		}
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
			background: rgb(41, 60, 88);
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: rgb(53, 149, 167);
			font-size: 24px;
		}
		.content-wrap {
			display: flex;
			min-height: 1080px;
			.sidebar {
				width:15%;
				background: rgb(4, 63, 82);
			}
			.content {
				width: 85%;
				background: #fff;
			}
		}
	}
</style>