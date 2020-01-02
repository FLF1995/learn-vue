<template>
	<div>
		<button class="button" :class="buttonClass" @click="handleClick">
			<slot></slot>
		</button>
	</div>
</template>

<script>
export default {
	data() {
		return {

		}
	},
	computed: {
		buttonClass() {
			if(this.round) {
				return this.type + ' ' + this.size + ' ' + 'round'
			}
			return this.type + ' ' + this.size
		}
	},
	props: {
		type:{
			required: false,
			type: String,
			default: 'primary'
		},
		size:{
			required: false,
			type: String,
			default: 'small'
		},
		round:{
			required: false,
			type: Boolean,
			default: false
		},
		loading:{
			required: false,
			type: Boolean,
			default: false
		}
	},
	methods: {
		handleClick() {
			this.$emit('click')
		}
	},
}
</script>

<style lang="less">
	.button {
	}
	.primary {
		background: #409eff;
		color: #fff;
	}
	.mini {
		padding: 3px 5px;
		font-size: 10px;
		border-radius: 2px;
	}
	.small {
		padding: 5px 8px;
		font-size: 12px;
		border-radius: 3px;
	}
	.large {
		padding: 8px 10px;
		font-size: 16px;
		border-radius: 5px;
	}
	.round {
		border-radius: 20px;
    padding: 12px 23px;
	}
	.loading {
		border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: .2s;
	}
</style>