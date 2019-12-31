<template>
	<div class="input-wrapper">
		<el-input 
			v-model="inputValue" 
			:type='type'
			@input='input'
			:size='size'
			:placeholder="placeholder"
		>
		</el-input>
	</div>
</template>

<script>
export default {
	data() {
		return {
			inputValue: ''
		}
	},
	props:{
		type: {
			type: String,
			required: false,
			default: 'text'
		},
		size: {
			type: String,
			required: false,
			default: 'small'
		},
		placeholder: {
			type: String,
			required: false,
			default: '请输入内容'
		}
	},
	methods: {
		input(val) { 
			this.inputValue = val
			this.$emit('input', this.inputValue)
		}
	},
}
</script>

<style lang="less">
	.input-wrapper {
		.el-input__inner {
		}
	}
</style>