<template>
	<view class="containerAll">
		<view class="container">
			<view class="user-section" style="background-color: #fff;">
			    <!-- <image class="bg" src="/static/images/personal/bgImg2.jpg"></image> -->
			    <view class="user-info-box" bindtap="tpLogin" @click="toLogin()">
			      <!-- 头像 -->
			      <view class="portrait-box">
			        <image class="portrait" src="/static/images/personal/missing-face.png"></image>
			      </view>
			      <!-- 昵称 -->
			      <view class="info-box" @click="toLogin()">
			        <text class="username">游客</text>
			      </view>
			    </view>
			    <view class="vip-card-box">
			      <!-- <image class="card-bg" src="/static/images/personal/vip-card-bg.png" mode=""></image> -->
			      <view class="b-btn">立即开通</view>
			      <view class="tit">
			        <!-- 会员图标 -->
			        <text class="iconfont icon-huiyuan-"></text>
			        超级会员
			      </view>
			      <text class="e-b">免费注册成为会员,享多重权益!</text>
			    </view>
			  </view>
			 <!-- 功能页面 -->
			<view class="personalContent">
				<view class="cardList">
					<view class="card-item">
							<uni-icons class="card-icon" type="contact"color="#fff"></uni-icons>
							<text class="title">扫一扫</text>
							<text class="more">></text>
					</view>
					<view class="card-item">
						<uni-icons class="card-icon" type="contact"color="#fff"></uni-icons>
						<text class="title">足迹</text>
						<text class="more">></text>
					</view>
					<view class="card-item">
						<uni-icons class="card-icon" type="contact"color="#fff"></uni-icons>
						<text class="title">充值</text>
						<text class="more">></text>
					</view>
					<view class="card-item">
						<uni-icons class="card-icon" type="contact"color="#fff"></uni-icons>
						<text class="title">订单</text>
						<text class="more">></text>
					</view>
					<view class="card-item">
						<uni-icons class="card-icon" type="contact"color="#fff"></uni-icons>
						<text class="title">设置</text>
						<text class="more">></text>
					</view>
					<view class="card-item">
						<uni-icons class="card-icon" type="contact"color="#fff"></uni-icons>
						<text class="title">客服电话: 4000400040</text>
						<button type="default" class="btn">点我拨打</button>
					</view>
					<view class="card-item">
						<uni-icons class="card-icon" type="contact"color="#fff"></uni-icons>
						<text class="title">客服微信: xiaoxiaoqiuqiu</text>
						<button type="default" class="btn">点我复制</button>
					</view>
					<view class="card-item">
						<uni-icons class="card-icon" type="contact"color="#fff"></uni-icons>
						<text class="title">关于我们</text>
						<text class="more">></text>
					</view>
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
module.exports = {
	data() {
		return {
			userInfo: {},
		};
	},
	mounted(){
				this.userInfo = wx.getStorageSync('userInfo_key')
				
				
				// 获取登录凭证
				wx.login({
					success:async (res) => {
						// console.log(res)
						//第一步：获取登录凭证code,这个code在客户端没什么用，需要发送给开发者服务器
						const result = await request('/getOpenId?code=' + res.code)
						console.log(result) //获取到token 
						
						//第四步，用户获取到token以后，把token一般都要存储，然后发请求的时候带上token
						await request('/verifyToken?token=' + result)
					}
				})
			},
			methods: {
				toLogin(){
					wx.navigateTo({
						url:'/pages/login/login'
					})
				}
			},
};

</script>

<style lang="stylus">
	.containerAll
		margin-top 110rpx
		background-color #000000
		height 1300rpx
		.container
			.user-section
				height 250rpx
				position relative
				padding-left 30rpx
				.bg
					position: absolute;
					left: 0;
					top: 0;
					width: 100%;
					height: 100%;
					opacity: 0.7;
					filter: blur(1px);
				.user-info-box
					height 180rpx
					display flex
					align-items center
					position relative
					z-index 1
					.portrait
						width: 130rpx;
						height: 130rpx;
						border: 5rpx solid #fff;
						border-radius: 50%;
					.username
						font-size: 24;
						color: #303133;
						margin-left: 20rpx;
				.vip-card-box
					width 630rpx
					position: relative;
					display: flex;
					flex-direction: column;
					background: linear-gradient(left,#469bc1, #f6fafc);
					// background: rgba(0, 0, 0, .7);
					// background: linear-gradient(left, #f9e6af, #ffd465);/*渐变不生效*/
					height: 100rpx;
					color: #f7d680;
					border-radius: 16rpx;
					padding: 20rpx 24rpx;
					.card-bg
						position: absolute;
						top: 20rpx;
						right: 0;
						width: 380rpx;
						height: 260rpx;
					.b-btn
						position: absolute;
						right: 20rpx;
						top: 46rpx;
						width: 132rpx;
						height: 40rpx;
						text-align: center;
						line-height: 40rpx;
						font-size: 22rpx;
						color: #fff;
						border-radius: 20px;
						background: #303133;
						z-index: 1;
					.tit
						font-size: 22rpx;
						color: #303133;
						// margin-bottom: 28rpx;
						.iconfont
							color: #f6e5a3;
							margin-right: 16rpx;
					.e-b
						font-size: 24rpx;
						color: #303133;
						margin-top: 10rpx;
						
						
			// .ballShade
			// 	width 800rpx
			// 	height 400rpx
			// 	border-radius 50%
			// 	background-color #41a1c9
			// 	margin-top -250rpx
			// 	margin-left -25rpx
			// .card
			// 	text-align center
			// 	margin-top -140rpx
			// 	margin-bottom 130rpx
			// 	image
			// 		border-radius 15rpx
			// 		height 350rpx
			// 	.portrait-box
			// 		margin-top -340rpx
			// 		.portrait
			// 			border-radius 50%
			// 			width 200rpx
			// 			height 200rpx
			// 			margin-bottom 20rpx
			// 	.info-box
			// 		.username
			// 			color #FFFFFF
			.personalContent
				margin-top -50rpx
				padding-top 160rpx
				.cardList .card-item
					border-bottom 1rpx solid #1b1b1b
					height 60rpx
					line-height 60rpx
					padding 10rpx
					font-size 26rpx
					color #FFFFFF
				.cardList .card-item .more
					float right
				.card-item
					.card-icon
						margin-left 20rpx 
						margin-right 20rpx
						size 20rpx 
						line-height: 50rpx;
					.btn
						width: 148rpx;
						height: 50rpx;
						text-align: center;
						line-height: 50rpx;
						font-size: 22rpx;
						color: #303133;
						border-radius: 20px;
						background: #fff;
						z-index: 1;
						margin-right 10rpx
						margin-top -54rpx
					.more
						// color red 
						// float: left;
						margin-right 0
						font-size 38rpx
				.recordScroll
					display flex
					height 200rpx
		
</style>
