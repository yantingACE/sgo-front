<template>
	<view class="categoryContainer">
		<view class="header">
			<view class="search">搜索商品</view>
		</view>
		<view class="main">
			<view class="left">
				<view @click="defaultIndex = index" class="leftItem" :class="{active:index === defaultIndex}" v-for="(category,index) in categoryList" :key="category.id">{{category.name}}</view>
			</view>
			<scroll-view enable-flex scroll-y="true" class="rightScroll">
				<view class="scrollItem">
					<image class="itemImg" :src="currentCategory.imgUrl"></image>
					<view class="goodsList">
						<view class="goods" v-for="(goods,index) in goodsList" :key="goods.id">
							<image class="goodsImg" :src="goods.wapBannerUrl"></image>
							<text class="goodsText">{{goods.name}}</text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				defaultIndex:0
			};
		},
		mounted(){
			this.getCategoryList()
		},
		methods:{
			getCategoryList(){
				this.$store.dispatch('getCategoryList')
			}
		},
		computed:{
			...mapState({
				categoryList:state =>state.category.categoryList
			}),
			
			currentCategory(){
				return this.categoryList[this.defaultIndex] || {}
			},
			
			goodsList(){
				return this.currentCategory.subCateList || []
			}
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
					&.active
						border-bottom 1px solid blue
						background-color hotpink
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
