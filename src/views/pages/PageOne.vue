<template>
	<div class="page-one">
		<p class="truncate-text">如果宽度超过200像素，该文</p>

		<div class="overflow-scroll-gradient">
			<div class="overflow-scroll-gradient__scroller">
				<p>Content to be scrolled</p> 
				<p>Content to be scrolled</p> 
				<p>Content to be scrolled</p> 
				<p>Content to be scrolled</p> 
				<p>Content to be scrolled</p> 
				<p>Content to be scrolled</p> 
				<p>Content to be scrolled</p> 
				<p>Content to be scrolled</p> 
				<p>Content to be scrolled</p> 
				<p>Content to be scrolled</p> 
				<p>Content to be scrolled</p> 
				<p>Content to be scrolled</p> 
				<p>Content to be scrolled</p> 
				<p>Content to be scrolled</p> 
			</div>
		</div>

		<div class="triangle"></div>

		<div class="sibling-fade">
			<span>Item 1</span>
			<span>Item 2</span>
			<span>Item 3</span>
			<span>Item 4</span>
			<span>Item 5</span>
		</div>

		<div class="reference">
			<div class="popout-menu">
				popout menu
			</div>
		</div>
	</div>
</template>

<script>
import {getLinkUrl} from '@/api/page.js'
import { async } from 'q';


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
			const defineReactiveProxyData = data => new Proxy(data, {
				get: function(data, key) {
					console.log(`getting ${key}`);
					return Reflect.get(data, key)
				},
				set: function(data, key, newVal) {
					console.log(`setting ${key}`);
					if(typeof newVal === 'object') {
						return Reflect.set(data, key, defineReactiveProxyData(newVal))
					}
				}
			})
			const data = {
				name: 'nanjing',
				age: 19
			}
			const vm = defineReactiveProxyData(data)
			vm.userIds = [1,2,3]
			vm.userIds.push(1)
			console.log('vm.name',vm.name);
			console.log('vm.age',vm.age);
			console.log('vm.userIds',vm.userIds);
			
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
		.overflow-scroll-gradient {
			position: relative;
		}
		.overflow-scroll-gradient::after {
			content: '';
			position: absolute;
			bottom: 0;
			width: 240px;
			height: 25px;
			background: linear-gradient(rgba(255, 255, 255, 0.001),	white); /* transparent keyword is broken in Safari */
			pointer-events: none;
		}
		.overflow-scroll-gradient__scroller {
			overflow-y: scroll;
			background: white;
			width: 240px;
			height: 200px;
			padding: 15px 0;
			line-height: 1.2;
			text-align: center;
		}
		.triangle {
			width: 0;
			height: 0;
			border-bottom: 20px solid #ccc;
			border-left: 20px solid transparent;
			border-right: 20px solid transparent;
		}
		.sibling-fade {
			span {
				padding: 0 1rem;
				transition: opacity 0.2s;
				cursor: pointer;
			}
		}
		.sibling-fade:hover span:not(:hover) {
			opacity: 0.5;
		}
		.reference {
			position: relative;
			background: pink;
			height: 100px;
			width: 100px;
		}
		.popout-menu {
			position: absolute;
			visibility: hidden;
			left: 100%;
		}
		.reference:hover > .popout-menu {
  			visibility: visible;
		}
	}
</style>