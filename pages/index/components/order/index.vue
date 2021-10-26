<template>
	<view class="orderAll">
		<view class="order">
			<view class="shopName">
				<view class="left">
					<uni-icons class="scan-icon" type="contact" color="#41A1C9"></uni-icons>
					<text class="title">北京朝阳区国贸建外soho店</text>
				</view>
				<button class="btn" type="default" style="height: 60rpx;">进行中</button>
			</view>
			<view class="condition">
				<view class="source">
					<text class="title">已消费</text>
					<text class="title">234元</text>
				</view>
				<view class="time">
					<text class="title">2021.9.1</text>
					<text class="title">16:05-18:50</text>
				</view>
			</view>
			
			<!-- <button class="btn" type="default" style="">消费</button>
			<button class="btn" type="default" style="">充值</button> -->
		</view>
		<view class="foot">
			<text>---------------- 历史订单 ----------------</text>
		</view>
		<view class="order">
			<view class="shopName">
				<view class="left">
					<uni-icons class="scan-icon" type="contact" color="#41A1C9"></uni-icons>
					<text class="title">北京朝阳区国贸建外soho店</text>
				</view>
				<button class="btn" :class="btn-item" type="default" style="height: 60rpx;background-color:#003f5b">消费</button>
			</view>
			<view class="condition">
				<view class="source">
					<text class="title">已消费</text>
					<text class="title">234元</text>
				</view>
				<view class="source">
					<text class="title">账户余额</text>
					<text class="title">6545元</text>
				</view>
				<view class="time">
					<text class="title">2021.9.1</text>
					<text class="title">16:05-18:50</text>
				</view>
			</view>
		</view>
		<view class="order">
			<view class="shopName">
				<view class="left">
					<uni-icons class="scan-icon" type="contact" color="#41A1C9"></uni-icons>
					<text class="title">北京朝阳区国贸建外soho店</text>
				</view>
				<button class="btn" type="default" style="height: 60rpx;background-color:#003f5b">充值</button>
			</view>
			<view class="condition">
				<view class="source">
					<text class="title">充值3000元,送3000元</text>
					<text class="title">234元</text>
				</view>
				<view class="source">
					<text class="title">账户余额</text>
					<text class="title">6545元</text>
				</view>
				<view class="time">
					<text class="title">2021.9.1</text>
					<text class="title">16:05-18:50</text>
				</view>
			</view>
		</view>
	</view>
</template>
<script>

export default {
	name: 'order',
	data() {
		return {
			orderStatus: 0
		};
	},
};
</script>
<style lang="stylus" scoped>
	.orderAll
		.order
			background-color #fff
			margin-top 30rpx
			margin-left 28rpx
			margin-right 28rpx
			border-radius 15rpx
			padding 20rpx
			.shopName
				display flex
				// height 60rpx
				line-height 60rpx
				border-bottom 1px solid #c0c0c0
				padding 10rpx
				.left
					font-weight bold
					text-overflow ellipsis
					white-space nowrap
					overflow hidden
					width 550rpx
					font-size 32rpx
					.scan-icon
						color #2eb1e9
						margin-right 10rpx
				.btn
					border-radius 45rpx
					line-height 60rpx
					background-color #2eb1e9
					color #fff
					font-size 28rpx
					margin-right 2rpx
					width 160rpx
			.condition
				.source
					display: flex;
					justify-content: space-between;
					.title 
						width: 50%;
						width: calc(50% - 20px);
						height: 30px;
						line-height: 30px;
						color #6f6f6f
					.title:last-child
						text-align: right;
				.time
					.title
						margin-right 36rpx
						color #a4a4a4
		.foot
			color #fff
			text-align center
			margin-bottom 30rpx
			margin-top 30rpx
			font-weight bold
</style>
