<template>
	<button @click="add">click me {{total}}!</button>
</template>

<script>
import {computed, ref} from "@vue/composition-api"

export default {
	props: {
		name: String
	},
	setup(props) {
		function add() {
			console.log('add被触发')
			console.log(props.name)
		}
		const a = ref(0)
		const b = ref(1)
		const total = computed(()=> {
			a.value + b.value
		})
		console.log(total)
		return {
			add,
			a,
			b,
			total
		}
	}
}
</script>