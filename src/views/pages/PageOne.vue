<template>
	<div>
		qqqqqqqqq
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
			const data = {}
			getLinkUrl(data).then((res)=>{
				console.log('res',res)
			})
		}
	}
}
</script>