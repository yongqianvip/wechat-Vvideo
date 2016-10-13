
var API = require('../../util/api.js');
var util = require('../../util/util.js');
var APP = getApp();
var allVideoList = [];
Page({
    data: {
        banners: [],
		latestVideos: [],
        indicatorDots: true,
		autoplay: true,
		interval: 5000,
		duration: 1000,
		toViewID: 'banner',
		loadMoreType: 1,
		pageNo: 1,
		isLoading: false
    },
    //  loadMoreType 
    //  1 显示 loading.gif
    //  2 显示 点击加载更多 按钮
    //  3 显示 已加载全部 文本
    getBannerList: function() {
		var that = this;
		var api = API.GET_BANNER_LIST_URL();
		wx.request({
	    	url: api,
			success: (res) => {
				var newBanners = [];
				for (var i = 0; i < res.data.data.length; i++) {
					if(res.data.data[i].extra_data.app_banner_type == '2'){
						newBanners.push(res.data.data[i]);
					}
				};
				that.setData({
					banners: newBanners
				})
			}
		})
	},
	getLatestVideoList: function() {
		var that = this;
		var api = API.GET_CATE_ITEMS_LIST_URL({
			p: this.data.pageNo,
			tab: "latest"
		});
		wx.request({
	    	url: api,
			success: (res) => {
				console.log('---latest video ',res.data);
				var newVideos = res.data.data.map(function(item){
						item.duration = util.formatVideoTime(item.duration);
						console.log("item-- >" ,util.formatVideoTime(item.duration));
						return item;
					})
				var currentPageNo = this.data.pageNo;
				allVideoList = allVideoList.concat(newVideos)
		        this.setData({
					latestVideos: allVideoList,
					pageNo: currentPageNo + 1,
					isLoading: false
				})
			},
			fail: () => {
		        this.setData({
					isLoading: false,
					loadMoreType: 2
				})
			}
		})
	},
    onLoad: function(options) {
    	
        this.getBannerList();
        this.setData({
        	isLoading: true
        });
		this.getLatestVideoList();
    },
	
	upper: function(e) {
		console.log('upper---> ',e)
	},
	lower: function(e) {
		console.log('lower ---> ',e)
		if (this.data.isLoading) {
			return;
		};
		if (this.data.loadMoreType == 1) {
			this.getLatestVideoList();
		} else if (this.data.loadMoreType == 2) {
			return;
		} else {

		};
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
