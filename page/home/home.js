
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

				that.setData({
					banners: res.data.data
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
						item.duration = util.formatVideoTime(parseInt(item.duration));
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
		console.log('banner tap ---> ',e.currentTarget.dataset.index);	
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
