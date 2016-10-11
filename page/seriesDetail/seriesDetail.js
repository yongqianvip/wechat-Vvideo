var API = require('../../util/api.js');
var util = require('../../util/util.js');
var APP = getApp();

Page({
	data: {
		gotVideo: false,
		viewInfo: {},
		videObj: {},
		pastListIndex: 0,
		selectedPostsIndex: 0,
		playingSeriesID: 0
	},
	getSeriesVideo: function(postsID) {
		var url = API.GET_SERIES_VIDEO({
			series_postid: postsID
		});
		var that = this;
		wx.request({
	    	url: url,
			success: (res) => {
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
					var newViewInfo = res.data.data;
					newViewInfo.posts = newViewInfo.posts.map(function(item){
						item.list = item.list.map(function(postsVideo){
							postsVideo.duration = util.formatVideoTime2(postsVideo.duration);
							return postsVideo;
						});
						return item;
					});
					var postsID = res.data.data.posts[0].list[0].series_postid;
					that.setData({
						viewInfo: res.data.data,
						playingSeriesID: postsID
					})
					this.getSeriesVideo(postsID);
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
	},
	playSelectedPostsVideo: function(e) {
		var index = e.currentTarget.dataset.index;
		var postsVideo = this.data.viewInfo.posts[this.data.selectedPostsIndex].list[index];
		if (postsVideo.series_postid == this.data.playingSeriesID) {
			return;
		};
		this.setData({
			playingSeriesID: postsVideo.series_postid
		})
		this.getSeriesVideo(postsVideo.series_postid);
	}
	
})