<template>
	<view class="head">
		S-Go Room 我的球房
	</view>
</template>

<script>
	// Component({
	// 	data: {
	// 		paddingTopNum: wx.getSystemInfoSync().statusBarHeight+7  //这里为啥要+7，是因为小程序的胶囊按钮距离手机浏览器之间还有7个像素的间距，所以是为了让导航能够和胶囊按钮齐平
	// 	}
	// })
</script>

<style>
	.head{
		/* padding-top:50rpx; */
		padding-left: 150rpx;
		position: fixed;
		width: 100%;
		height: 30px;  //高度设置为30是因为胶囊按钮的高度就是固定的30px，所以咱们也设置成30px
		line-height: 30px;
		background: #fff;
		top: 0;
		left: 0;
	}
</style>
