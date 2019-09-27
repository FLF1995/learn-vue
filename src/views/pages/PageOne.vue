<template>
	<div class="page-one">
		<p class="truncate-text">如果宽度超过200像素，该文</p>
	</div>
</template>

<script>
import {getLinkUrl} from '@/api/page.js'


export default {
	data() {
		return {
			
		}
	},
	created() {
		this.getLinkUrl();
	},
	methods:{
		getLinkUrl() {
			const data = {
				page:1,
				size:100,
				state: '1'
			}
			getLinkUrl(data).then((res)=>{
				console.log('res',res)
			})
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