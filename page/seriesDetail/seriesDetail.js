var API = require('../../util/api.js');
var util = require('../../util/util.js');
var APP = getApp();

Page({
	data: {
		gotVideo: false,
		series_postid: 0,
		viewInfo: {},
		videObj: {},
		pastListIndex: 0,
		selectedPostsIndex: 0
	},
	getSeriesVideo: function() {
		var url = API.GET_SERIES_VIDEO({
			series_postid: this.data.series_postid
		});
		var that = this;
		wx.request({
	    	url: url,
			success: (res) => {
				console.log("^^^^^^^ res",res);
				this.setData({
					gotVideo: true,
					videObj: res.data.data
				});
			}
		});
	},
	getSeriesView: function() {
		var selectedSeriesID = APP.globalData.selectedSeriesID;
		var url = API.GET_SERIES_VIEW({
			seriesid: selectedSeriesID
		});
		var that = this;
		wx.request({
	    	url: url,
			success: (res) => {
				if (res.statusCode == 200) {
					that.setData({
						viewInfo: res.data.data,
						series_postid: res.data.data.posts[0].list[0].series_postid
					})
					console.log("res", res);
					this.getSeriesVideo();
				};
				
			}
		})
	},
	onLoad: function(options) {
		this.getSeriesView();
	},
	changeSelectedPostsItem: function(e) {
		var index = e.currentTarget.dataset.index;
		this.setData({
			selectedPostsIndex: index
		})
	}
	
})