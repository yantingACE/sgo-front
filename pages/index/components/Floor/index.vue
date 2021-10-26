<template>
		<view class="floor" @click="toAtlas()">
		<!-- <view class="floor" @click="toAtlas(goods)"> -->
			<view class="flooritem">
				<view class="floorImg">
					<image class="img" src="../../../../static/images/thumbnail.png" mode=""></image>
				</view>
				<scroll-view class="floorScroll" scroll-y="true" >
					<view class="item">
						<text class="itemline">
						北京朝阳国贸建外soho店
						</text>
						<text class="itemContent">
						我是详细位置我是详细位置我是详细位置,点我直接调用地图导航
						</text>
						<text class="itemTime">
						上午 12:00-晚00:00&nbsp&nbsp&nbsp&nbsp全价时段 88元/小时
						</text>
						<text class="itemTime">
						下午 00:00-上午12:00&nbsp&nbsp&nbsp&nbsp半价时段 44元/小时
						</text>
					</view>
				</scroll-view>
			</view>
		</view>
</template>

<script>
	// import Min from '../min.js'
	
	export default {
		methods: {
			toAtlas(){
				uni.navigateTo({
				    url: '/pages/atlas/atlas'
				});
				// uni.getLocation({
				//     type: 'wgs84',
				//     success: function (res) {
				//         console.log('当前位置的经度：' + res.longitude);
				//         console.log('当前位置的纬度：' + res.latitude);
				//     }
				// });
				// 问题1:公共组件怎么进行遍历?
				// 问题2:怎么添加店的经纬度?
				// 问题3:怎么根据当前店的经纬度进行展示地图?
				// uni.navigateTo({
				//     url: '/pages/atlas/atlas?goods' + JSON.stringify(goods) 
				// });
			}
		}
	}
	
	
</script>

<style lang="stylus">
	.floor
		// height 240rpx
		background-color #fff
		border-radius 10px
		margin 36rpx 32rpx
		.flooritem
			color #333
			display flex
			border 1px solid red
			padding 38rpx 32rpx
			.floorImg
				width 184rpx
				height 184rpx
				border-radius 5%
				margin-right 28rpx
				.img
					width 184rpx
					height 184rpx
			.floorScroll
				.item
					.itemline
						display block
						font-size 32rpx
						font-weight bold
						margin-bottom 4rpx
					.itemContent
						// padding 10rpx
						display block
						font-size 24rpx
						color #5D5D5D
						margin-bottom 4rpx
					.itemTime
						display block
						font-size 20rpx
						color #5E717A
						margin-bottom 8rpx
</style>
