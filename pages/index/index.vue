<template>
	<view class="index">
		<!-- <Head/> -->
		<!-- 下拉框 -->
		<!-- <view class="lowerLink">
			<uni-combox  :candidates="candidates" placeholder="切换店铺" v-model="city"></uni-combox>
		</view> -->
		
		<!-- 轮播图 -->
		<swiper class="indexSwiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image class="swiperImg" src="../../static/images/banner.jpg" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image class="swiperImg" src="../../static/images/banner.jpg" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="scan">
			<uni-icons class="scan-icon" type="contact"color="#fff"></uni-icons>
			<text class="title">S-Go Room 我的球房</text>
		</view>
			<!-- button按钮 -->
		<view class="btn">
			<!-- <button class="btnbegin" type="default"
			 style="">打&nbsp&nbsp球</button> -->
			<image class="btnbegin" src="../../static/images/play-button.png" @click="toTable"></image>
		</view>
		<view class="body">
			
			<view class="bodyimg">
				<view class="bodyimgleft">
					<image class="left" src="../../static/images/newPreferential.png" mode=""></image>
				</view>
				<view class="bodyimgright">
					<image class="right" src="../../static/images/Top-upPreferential.png" mode=""></image>
					<image class="right" src="../../static/images/inviteGift.png" mode=""></image>
				</view>
			</view>
			<view class="bodyimgbottom">
				<image class="bootm" src="../../static/images/newPreferential.png" mode=""></image>
				<image class="bootm" src="../../static/images/newPreferential.png" mode=""></image>
				<image class="bootm" src="../../static/images/newPreferential.png" mode=""></image>
			</view>
			<view class="bodyimgstart">
				<image class="start" src="../../static/images/inviteGift.png" mode=""></image>
				<image class="start" src="../../static/images/inviteGift.png" mode=""></image>
			</view>
		</view>
		<!-- 优惠卷 -->
		<view class="foot">
			<text> 新人专享优惠 ----------------</text>
		</view>
		<view class="bodyimgstart">
			<image class="start" src="../../static/images/inviteGift.png" mode=""></image>
			<image class="start" src="../../static/images/inviteGift.png" mode=""></image>
		</view>
		<!-- 店铺 -->
		<view class="foot">
			<text>---------------- 优惠门店 ----------------</text>
		</view>
		<view class="order">
			<view class="shopName">
				<view class="left">
					<uni-icons class="scan-icon" type="contact" color="#41A1C9"></uni-icons>
					<text class="title">北京朝阳区国贸建外soho店</text>
				</view>
				<button class="btn" type="default" style="height: 60rpx;background-color:##58acd1">去看看</button>
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
					<view class="timeTitle">
						<text class="title">活动时间:</text>
						<text class="title">2021.9.1-</text>
						<text class="title">2021.10.28</text>
					</view>
					<view class="explain">
						<text class="title">使用说明</text>
						<uni-icons class="scan-icon" type="contact" color="#41A1C9"></uni-icons>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Floor from './components/floor/index.vue'
	import Head from './components/head/index.vue'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		

		onLoad() {

		},
		methods: {
			toTable(){
				wx.navigateTo({
					url:'/pages/index/table/table'
				})
			}
		},
		components:{
			Floor,
			Head
		}
	}
</script>

<style lang="stylus" scoped>
	.index
		background-color #000000
		// 标题
		.scan
			height 60rpx
			width 400rpx
			color #FFFFFF
			background-color none
			// border 1px solid red
			margin -400rpx 0 0 32rpx
			position absolute
			font-size 36rpx
			.title
				margin-left 10rpx
		.lowerLink
			width 200rpx
			//轮播图
		.indexSwiper
			height 500rpx
			position relative
			.swiperImg
				width 100%
		.btn
			margin-top -100rpx
			height 100rpx
			margin-left 36rpx
			.btnbegin
				position absolute
				height: 100rpx
				width 686rpx
				line-height 110rpx
				margin 30rpx 0
			//身体
		.body
			margin-top 70rpx
			.bodyimg
				display flex
				// margin-top 40rpx
				.bodyimgleft
					.left
						width 336rpx
						height 328rpx
						margin 0 18rpx 0 32rpx
						border-radius 5%
				.bodyimgright
					.right
						width 332rpx
						height 156rpx
						// margin-right 32rpx
						border-radius 5%
					.right:first-child
						margin-bottom 12rpx
			.bodyimgbottom
				margin-left 36rpx
				.bootm
					width 200rpx
					height 200rpx
					margin-right 36rpx
			.bodyimgstart
				margin-left 36rpx
				.start
					width 320rpx
					height 130rpx
				.start:first-child
					margin-right 26rpx
			// .send
			// 	color #fff
			// 	font-size 36rpx
			// 	margin 36rpx 0
			// 	margin-left 36rpx
				// width 224rpx
				// border-bottom solid 10rpx #44a1ca
			//nav
		// .navScroll 	
		// 	display inline-flex
		// 	height 80rpx
		// 	.item
		// 		flex 1
		// 		text-align center
		// 		line-height 80rpx
		// 		border 1rpx #007AFF
		.foot
			color #fff
			font-size 34rpx
			// margin-top 36rpx
			margin-left 38rpx
			text-align center
			// .footBottom
			// 	width 146rpx
			// 	height 10rpx
			// 	background-color #62c0e5
			// 	border-radius 10rpx
			// 	display flex
			// 	margin-top -10rpx
		.bodyimgstart
			margin-left 36rpx
			.start
				width 320rpx
				height 130rpx
			.start:first-child
				margin-right 26rpx
		.order
			background-color #fff
			// margin-top 10rpx
			margin-left 28rpx
			margin-right 28rpx
			border-radius 15rpx
			.shopName
				display flex
				// height 60rpx
				line-height 60rpx
				// border-bottom 1px solid #c0c0c0
				background: linear-gradient(Top,#469bc1, #f6fafc)
				padding-left 20rpx
				padding-right 20rpx
				border-radius 15rpx
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
					background-color #58acd1
					color #fff
					font-size 28rpx
					margin-right 2rpx
					width 160rpx
					margin-top 2rpx
			.condition
				padding-left 20rpx
				padding-right 20rpx
				.source
					display: flex;
					justify-content: space-between;
					.title 
						width: 50%;
						// width: calc(50% - 20px);
						height: 30px;
						line-height: 30px;
						color #6f6f6f
					.title:last-child
						text-align: right;
				.time
					display flex
					.timeTitle
						.title
							color #a4a4a4
						.title:first-child
							// margin-right 20rpx
					.explain
						width 250rpx
						flex: 1
						margin-left 40rpx
						color #44A1CA
						
						
						
					
					
				
				
</style>
