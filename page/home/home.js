
var API = require('../../util/api.js');
var util = require('../../util/util.js');
var APP = getApp();
Page({
    data: {
        banners: [],
		latestVideos: [],
        indicatorDots: true,
		autoplay: true,
		interval: 5000,
		duration: 1000,
		toViewID: 'banner'
    },
    getBannerList: function(api) {
		var that = this;
		wx.request({
	    	url: api,
			success: (res) => {
				var newBanners = [];
				for (var i = 0; i < res.data.data.length; i++) {
					if(res.data.data[i].extra_data.app_banner_type == '2'){
						newBanners.push(res.data.data[i]);
					}
				};
				// var newBanners = res.data.data.map(function(item){
				// 	if (item.extra_data.app_banner_type == '2') {
				// 		return item;
				// 	};
				// })
				console.log("======> newBanners", newBanners);
				that.setData({
					banners: newBanners
				})
			}
		})
	},
	getLatestVideoList: function(api) {
		var that = this;
		wx.request({
	    	url: api,
			success: (res) => {
				console.log('---latest video ',res.data);
				var newVideos = res.data.data.map(function(item){
						item.duration = util.formatVideoTime(item.duration);
						console.log("item-- >" ,util.formatVideoTime(item.duration));
						return item;
					})
				console.log("--------***** ->",newVideos);
		        this.setData({
					latestVideos: res.data.data
				})
			}
		})
	},
    onLoad: function(options) {
    	console.log("GET_BANNER_LIST_URL----> ",API.GET_CATE_ITEMS_LIST_URL({
			p: 1,
			tab: "latest"
		}));
        this.getBannerList(API.GET_BANNER_LIST_URL());

		this.getLatestVideoList(API.GET_CATE_ITEMS_LIST_URL({
			p: 1,
			tab: "latest"
		}));
    },
	
	upper: function(e) {
		console.log('upper---> ',e)
	},
	lower: function(e) {
		console.log('lower ---> ',e)
	},
	bannerTap: function(e) {
		var index = e.currentTarget.dataset.index;
		console.log('banner tap ---> ',index);	
		var tappedBannerObj = this.data.banners[index];
		var app_banner_param = tappedBannerObj.extra_data.app_banner_param;
		if (tappedBannerObj.extra_data.app_banner_type == '1') {
			var toPlayBannerURL = app_banner_param

		} else if (tappedBannerObj.extra_data.app_banner_type == '2') {
			APP.globalData.playViewPostID = app_banner_param;
			wx.navigateTo({
				url: '../playview/playview'
			})
		}
	},
	latestItemTap: function(e) {
		var index = e.currentTarget.dataset.index;
		var postid = this.data.latestVideos[index].postid;
		console.log("---=== >>>>>",postid);
		APP.globalData.playViewPostID = postid;

		wx.navigateTo({
			url: '../playview/playview'
		})
	}

});
