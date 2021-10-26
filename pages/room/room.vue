<template>
	<view class="roomAll">
		<!-- 搜索框 -->
		<view class="uni-form-item uni-column">
		    <view class="uni-icon">
					<icon type="search" size="20"/>
				</view>
		    <input class="uni-input" focus placeholder="球房名称"/>
		</view>
		
		<!-- 导航栏 -->
		<view class="navigation">
			<view class="all"  :style="{color:item==0 ? '#44A1CA':'#fff'}" @click="allClick">
				所有球房
			</view>
			<view class="nearby" :style="{color:item==1 ? '#44A1CA':'#fff'}" @click="nearbyClick">
				附近球房
			</view>
			<view class="footprint"  :style="{color:item==2 ? '#44A1CA':'#fff'}" @click="footprintClick">
				足迹
			</view>
		</view>
		<!-- 内容 -->
		<view v-show="item==0" class="roomAll">
			<Floor/>
			<Floor/>
			<Floor/>
			<Floor/>
		</view>
		<view v-show="item==1" class="roomNearby">
			<view class="uni-item">
				附近球房
			</view>
		</view>
		<view v-show="item==2" class="footprintDow">
			<view class="uni-love">
				我的足迹
			</view>
		</view>
	</view>
</template>

<script>
	import Floor from '../index/components/floor/index.vue'
	export default {
		data() {
			return {
				item: 0,
				focus: false
			}
		},
		components:{
			Floor
		},
		methods:{
			//导航条切换选中
			    // changeNav(event) {
			    //   //console.log(event.target.id);
			    //   this.navId = event.target.id;
			    // },
					allClick(){
						this.item = 0
					},
					nearbyClick(){
						this.item = 1
					},
					footprintClick(){
						this.item = 2
					}
		}
	}
</script>

<style lang="stylus">
	.roomAll
		background-color #010101
		padding-top 30rpx
		.uni-form-item
			// display flex
			background-color #15191c
			border-radius 45rpx
			margin 20rpx
			.uni-icon
				margin-left 210rpx
				margin-top 24rpx
				position absolute
			.uni-input
				width 650rpx
				height 80rpx
				line-height 80rpx
				text-align center
				// margin-left 20rpx
			// 导航栏
		.navigation
			display flex
			text-align center
			margin 20rpx 0
			.all
				flex 1
			.nearby
				flex 1
			.footprint
				flex 1
		.roomNearby
			height 1200rpx
			.uni-item
				width 600rpx
				height 600rpx
				background-color #44A1CA
				text-align center
				color #fff
				margin 250rpx auto
				font-size 58rpx
		.footprintDow
			height 1200rpx
			.uni-love
				width 600rpx
				height 600rpx
				background-color #44A1CA
				text-align center
				color #fff
				margin 250rpx auto
				font-size 58rpx
</style>
