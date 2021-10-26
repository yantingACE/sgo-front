<template>
	<view class="table">
		<view class="title">
			<view class="header">
				<text>点击空闲中的球桌开灯</text>
			</view>
			<view class="body">全价时段: 上午12:00-晚上00:00 78-88元/小时</view>
			<view class="body">半价时段: 晚上00:00-上午12:00 39-44元/小时</view>
			<view class="foot">当前为全价时段,按分钟计费</view>
		</view>
		<view class="roomAll">
			<view class="room">
				<image  class="roomimg" src="../../../static/images/mylove.jpg" mode=""></image>
			</view>
			<view class="roomNumber">
				<text>1号球桌 (空闲中)</text>
			</view>
		</view>
		<view class="roomAll">
				<view class="room">
					<image  class="roomimg" src="../../../static/images/mylove.jpg" mode=""></image>
				</view>
				<view class="roomNumber">
					<text>2号球桌 (进行中)</text>
				</view>
		</view>
		<view class="roomAll">
				<view class="room">
					<image  class="roomimg" src="../../../static/images/mylove.jpg" mode=""></image>
				</view>
				<view class="roomNumber">
					<text>3号球桌 (空闲中)</text>
				</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="stylus">
	.table
		background-color #15191C
		width 100%
		height 100%
		padding-top 20rpx
		.title
			margin 20rpx
			box-shadow:inset 0rpx 0rpx 20rpx 10rpx #225b75;
			padding 20rpx
			color #fff
			border-radius 5rpx
			.header
				margin 20rpx 0
			.body
				font-size 22rpx
				margin 10rpx 0
			.foot
				color #44A1CA
				font-size 32rpx
		.roomAll
			.room
				margin 40rpx
				border-radius 15rpx
				position relative
				.roomimg
					width 550rpx
					height 300rpx
			.roomNumber
				color #fff
				position absolute
				margin-left 140rpx
				margin-top -260rpx
				font-size 38rpx
		
</style>
