<template>
	<view class="card">
		<swiper class="cardSwiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(banner,index) in category.bannerUrlList" :key="index">
				<view class="swiper-item">
					<image class="swiperImg" :src="banner" mode=""></image>
				</view>
			</swiper-item>
			
		</swiper>
		<view class="title">{{category.name}}</view>
		<view class="title">{{category.frontName}}</view>
		<view class="goodsList">
			<view class="goods" v-for="(goods,index) in itemList" :key="goods.id" @click="toDetail(goods)">
				<image class="goodsImg" :src="goods.primaryPicUrl"></image>
				<view class="goodsName">{{goods.name}}</view>
				<view class="goodsPrice">{{goods.counterPrice}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		props:['currentId'],
		mounted(){
			this.getIndexCateList()
		},
		methods:{
			getIndexCateList(){
				this.$store.dispatch('getIndexCateList')
			},
			
			// 点击商品跳转到商品详情页
			toDetail(goods){
				wx.navigateTo({
					url:'/pages/detail/detail?goods=' + JSON.stringify(goods)
				})
			}
		},
		computed:{
			...mapState({
				indexCateList:state => state.home.indexCateList
			}),
			// 通过用户在首页点击nav的时候，传递过来保存的navID，与请求过来的所有card数据计算
			// 得到用户点击的这个nav对应的card数据，进行展示
			currentCardData(){
				return this.indexCateList.find(item => item.category.parentId === this.currentId) || {}
			},
			category(){
				return this.currentCardData.category || {}
			},
			itemList(){
				return this.currentCardData.itemList || []
			}
		}
	}
</script>

<style lang="stylus">
	.card
		.cardSwiper
			.swiperImg
				width 100%
				height 350rpx
		.title
			text-align center
		.goodsList
			display flex
			flex-wrap wrap
			justify-content space-around
			&::after
				content ''
				width 344rpx
			.goods
				.goodsImg
					width 344rpx
					height 344rpx
				.goodsName
					width 344rpx
				
</style>
