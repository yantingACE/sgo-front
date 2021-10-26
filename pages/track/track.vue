<template>
	<view class="track">
		<Order/>
	</view>
</template>

<script>
	import Floor from '../index/components/floor/index.vue'
	import Order from '../index/components/order/index.vue'
	export default {
		data() {
			return {
				
			};
		},
		components:{
			Floor,
			Order
		}
	}
</script>

<style lang="stylus">
	.track
		// margin-top -60rpx
		padding-top 40rpx
		background-color #000000
		height 1400rpx
</style>
