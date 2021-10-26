<template>
	<view>
		<view class="map_container">
			<map class="map" id="map" :longitude="longitude" :latitude="latitude" scale="14" show-location="true" :markers="markers" bindmarkertap="makertap"></map>
		</view>
		<view class="place_info">
			<text>{{ placeData.title }}</text>
			<text>{{ placeData.address }}</text>
			<text>{{ placeData.telephone }}</text>
		</view>
	</view>
</template>

<script>
// 引用百度地图微信小程序JSAPI模块
var bmap = require('../../libs/bmap-wx.js');
var wxMarkerData = [];
export default {
	data() {
		return {
			markers: [],
			latitude: '',
			longitude: '',
			placeData: {}
		};
	},
	onLoad: function() {
		// 新建百度地图对象
		var BMap = new bmap.BMapWX({
			ak: 'W9YMK0nD6o944vguF5uv0WKCqvajcM7W'
		});
		// 发起POI检索请求
		BMap.search({
			query: '酒店',
			fail: data => {
				console.log(data);
			},
			success: data => {
				wxMarkerData = data.wxMarkerData;

				this.markers = wxMarkerData;

				this.latitude = wxMarkerData[0].latitude;

				this.longitude = wxMarkerData[0].longitude;
			},
			// 此处需要在相应路径放置图片文件
			iconPath: '/static/images/marker_red.png',
			// 此处需要在相应路径放置图片文件
			iconTapPath: '/static/images/marker_red.png'
		});
	},
	methods: {
		makertap(e) {
			var id = e.markerId;
			this.showSearchInfo(wxMarkerData, id);
			this.changeMarkerColor(wxMarkerData, id);
		},
		showSearchInfo(data, i) {
			this.placeData = {
				title: '名称：' + data[i].title + '\n',
				address: '地址：' + data[i].address + '\n',
				telephone: '电话：' + data[i].telephone
			};
		},
		changeMarkerColor(data, i) {
			var markers = [];
			for (var j = 0; j < data.length; j++) {
				if (j == i) {
					// 此处需要在相应路径放置图片文件
					data[j].iconPath = '../../img/marker_yellow.png';
				} else {
					// 此处需要在相应路径放置图片文件
					data[j].iconPath = '../../img/marker_red.png';
				}
				markers[j](data[j]);
			}

			this.markers = markers;
		}
	}
};
</script>

<style scoped>
.map_container {
	height: 300px;
	width: 100%;
}

.map {
	height: 100%;
	width: 100%;
}
</style>
