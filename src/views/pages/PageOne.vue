<template>
	<div class="page-one">
		<p class="truncate-text">如果宽度超过200像素，该文</p>
		<Input 
			v-model='inputValue' 
			@input='input' 
			size='mini' 
			placeholder="请输入用户名"
		/>
		<Button type="primary" round @click="handleClick">submit</Button>
	</div>
</template>

<script>
import {getLinkUrl} from '@/api/page.js'
import { async } from 'q';
import Input from '@/components/Input'
import Button from '@/components/Button'


export default {
	data() {
		return {
			inputValue: ''
		}
	},
	components:{
		Input,
		Button
	},
	created() {

	},
	methods:{
		input(val) {
			this.inputValue = val
		},
		handleClick() {
			console.log('click')
		}
	}
}
</script>

<style lang="less">
	.page-one {
		.truncate-text {
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			width: 200px;
		}
	}
</style>