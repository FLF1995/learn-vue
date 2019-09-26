<template>
	<div class="login-page">
		<div class="login-box">
			<el-form>
				<el-form-item>
					<p class="title">E游综合运营平台</p>
				</el-form-item>
				<el-form-item>
					<el-input v-model="username" placeholder="请输入用户名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-input v-model="password" placeholder="请输入密码"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click='login'>登录</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
import {login} from '@/api/user.js'

export default {
	data() {
		return {
			username: 'micropark1',
			password: '123456'
		}
	},
	methods: {
		login() {
			if (!this.username) {
				this.$message({
					message: '请输入用户名！',
					type: 'warning'
				});
				return;
			}
			if (!this.password) {
				this.$message({
					message: '请输入密码！',
					type: 'warning'
				});
				return;
			}
			const data = {
				username: this.username,
				loginPassword: this.password
			}
			login(data).then((res)=>{
				if (res.status === 200) {
					localStorage.setItem('token',res.data.object)
					this.$router.push('/page-one')
				}
				console.log('res',res)
			})
		}
	}
}
</script>

<style lang="less">
	@bg_dark: #2d3a4b;
	.login-page {
		min-height: 800px;
		background: #2d3a4b;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		.login-box {
			width: 30%;
			text-align: center;
			.title {
				font-size: 24px;
				color: #ccc;
			}
			.el-input__inner {
				background-color: @bg_dark;
				border: 1px solid rgba(255,255,255,0.1);
			}
		}
	}
</style>