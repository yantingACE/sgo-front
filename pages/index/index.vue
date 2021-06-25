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
			<view class="item" :class="{active:currentIndex === -1}" @click="changeNav(-1)">
				推荐
			</view>
			<view class="item" :class="{active:currentIndex === index}" @click="changeNav(index)" v-for="(nav,index) in navList" :key="nav.L1Id">
				{{nav.text}}
			</view>
		</scroll-view>
		<!-- 主要内容 -->
		<scroll-view class="mainScroll" scroll-y="true" >
			<view class="mainItem">
				<!-- 轮播图 -->
				<swiper class="mainSwiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
					<swiper-item class="mainItem">
						<view class="swiper-item">
							<image class="mainImg" src="https://yanxuan.nosdn.127.net/3863da38d02fe0879fd2fad5a4c82359.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
						</view>
					</swiper-item>
					<swiper-item class="mainItem">
						<view class="swiper-item">
							<image class="mainImg" src="https://yanxuan.nosdn.127.net/31307c24c668ca2ecfecc6a7c1e5caa5.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
						</view>
					</swiper-item>
					<swiper-item class="mainItem">
						<view class="swiper-item">
							<image class="mainImg" src="https://yanxuan.nosdn.127.net/07a280b9a1dcb64a7bcf9a969bc996d1.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
						</view>
					</swiper-item>
				</swiper>
				<!-- 图标列表 -->
				<view class="iconList">
					<view class="iconItem" v-for="(icon,index) in iconList" :key="icon.desc">
						<image class="iconImg" :src="icon.icon"></image>
						<text class="iconText">{{icon.desc}}</text>
					</view>
				</view>
				
				<!-- 10个分类列表 -->
				<view class="categoryList">
					<view class="category" v-for="(category,index) in navList" :key="category.L1Id">
						<image class="catImg" :src="category.picUrl" mode=""></image>
						<text class="catText">{{category.text}}</text>
					</view>
				</view>
				
				<!-- 楼层 -->
				<Floor v-for="(floor,index) in floorList" :key="index" :floor="floor"></Floor>
			</view>
		</scroll-view>
	</view>
</template>

<script>
import Floor from './components/Floor/index.vue'
import {mapState,mapGetters} from 'vuex'
export default {
	components:{
		Floor
	},
	data(){
		return {
			currentIndex:-1
		}
	},
	mounted(){
		this.getHomeData()
	},
	methods:{
		getHomeData(){
			this.$store.dispatch('getHomeData')
		},
		// 点击切换nav
		changeNav(index){
			this.currentIndex = index
		}
	},
	computed:{
		...mapState({
			homeData:state => state.home.homeData
		}),
		...mapGetters(['navList','iconList','floorList'])
	}
	
	
};
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
				flex-shrink 0
				width 140rpx
				height 80rpx
				text-align center
				line-height 80rpx
				font-size 28rpx
				box-sizing border-box
				&.active
					border-bottom 1px solid red
		.mainScroll
			height calc(100vh - 160rpx)
			.mainItem
				.mainImg
					width 100%
					height 350rpx
				.iconList
					margin-top 10rpx
					height 32rpx
					display flex
					justify-content space-around
					.iconItem
						height 32rpx
						display flex
						align-items center
						.iconImg
							width 32rpx
							height 32rpx
						.iconText
							font-size 24rpx
				.categoryList
					display flex
					flex-wrap wrap
					.category
						width 20%
						display flex
						flex-direction column
						align-items center
						.catImg
							width 110rpx
							height 110rpx
							border-radius 30rpx
							margin 20rpx 0
						.catText
							font-size 28rpx
			
</style>
