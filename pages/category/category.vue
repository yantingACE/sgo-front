<template>
	<view class="categoryContainer">
		<view class="header">
			<view class="search">搜索商品</view>
		</view>
		<view class="main">
			<view class="left">
				<view class="leftItem">居家生活</view>
				<view class="leftItem">居家生活</view>
			</view>
			<scroll-view enable-flex scroll-y="true" class="rightScroll">
				<view class="scrollItem">
					<image class="itemImg" src="../../static/images/mylove.jpg"></image>
					<view class="goodsList">
						<view class="goods">
							<image class="goodsImg" src="../../static/images/mylove.jpg"></image>
							<text class="goodsText">秋冬好物</text>
						</view>
						<view class="goods">
							<image class="goodsImg" src="../../static/images/mylove.jpg"></image>
							<text class="goodsText">秋冬好物</text>
						</view>
						<view class="goods">
							<image class="goodsImg" src="../../static/images/mylove.jpg"></image>
							<text class="goodsText">秋冬好物</text>
						</view>
						<view class="goods">
							<image class="goodsImg" src="../../static/images/mylove.jpg"></image>
							<text class="goodsText">秋冬好物</text>
						</view>
					</view>
				</view>
			</scroll-view>
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
	.categoryContainer 
		height 100%
		.header
			height 80rpx
			display flex
			justify-content center
			align-items center
			.search
				width 90%
				height 60rpx
				background-color #aaa
				font-size 28rpx
				text-align center
				line-height 60rpx
		.main
			display flex
			border-top 1px solid #AAAAAA
			box-sizing border-box
			.left
				width 150rpx
				.leftItem
					width 150rpx
					height 80rpx
					font-size 28rpx
					text-align center
					line-height 80rpx
			.rightScroll
				height calc(100vh - 80rpx)
				flex 1
				border-left 1px solid #aaa
				box-sizing border-box
				.scrollItem
					.itemImg
						display block
						width 520rpx
						height 190rpx
						margin 20rpx auto
					.goodsList
						display flex
						flex-wrap wrap
						.goods
							width 33.3333%
							text-align center
							// display flex
							// flex-direction column
							// align-items center
							.goodsImg
								width 100%	
								height 144rpx
							.goodsText
								font-size 28rpx
								
							
</style>
