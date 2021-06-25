<template>
	<view class="floor">
		<image class="floorImg" :src="floor.titlePicUrl"></image>
		<scroll-view class="floorScroll" scroll-x="true" enable-flex>
			<view class="item" v-for="(item,index) in floor.itemList" :key="item.id">
				<image class="itemImg" :src="item.showPicUrl"></image>
				<text class="itemText">{{item.simpleDesc}}</text>
			</view>
			<view class="item">
				<text class="single">
					查看更多>>
				</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props:['floor']
	}
</script>

<style lang="stylus">
	.floor
		.floorImg
			width 100%
			height 350rpx
		.floorScroll
			height 300rpx
			display flex
			.item
				width 200rpx
				margin-right 20rpx
				.single
					display block
					width 200rpx
					height 300rpx
					text-align center
					line-height 300rpx
				.itemImg
					background-color #aaa
					width 200rpx
					height 200rpx
				.itemText
					font-size 28rpx
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;   /** 多行文本溢出...*/
					overflow: hidden; 
</style>
