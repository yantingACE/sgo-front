<template>
	<view class="indexContainer">
		<!-- 头部 -->
		<view class="header">
			<image class="logo" src="../../static/images/logo.png" mode=""></image>
			<view class="search">
				<text class="iconfont icon-sousuo"></text>
				<input class="input" type="text" placeholder="搜索商品" placeholder-class="place"/>
			</view>
			<button class="btn">北方汉子</button>
		</view>
		<!-- nav -->
		<scroll-view class="navScroll" scroll-x="true" enable-flex>
			<view class="item active">
				推荐
			</view>
			<view class="item">
				居家生活
			</view>
		</scroll-view>
	</view>
</template>

<script>
export default {};
</script>

<style lang="stylus">
	.indexContainer 
		heigh 100% 
		.header
			height 80rpx
			display flex
			align-items center
			.logo
				width 120rpx
				height 40rpx
				margin 0 20rpx
			.search
				height 60rpx
				border 1px solid #aaa
				box-sizing border-box
				flex 1
				display flex
				align-items center
				.input
					.place
						font-size 28rpx
						color red
				.iconfont
					margin 0 10rpx
			.btn
				width 140rpx
				height 60rpx
				font-size 28rpx
				text-align center
				line-height 60rpx
				padding 0 10rpx
				margin 0 10rpx
		.navScroll
			height 80rpx
			display flex
			.item
				width 140rpx
				height 80rpx
				text-align center
				line-height 80rpx
				font-size 28rpx
				box-sizing border-box
				&.active
					border-bottom 1px solid red
</style>
