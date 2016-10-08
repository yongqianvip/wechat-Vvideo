var API = require('../../util/api.js');
var util = require('../../util/util.js');
var APP = getApp();

Page({
	data: {
		videoUrl: ''
	},
	getVideoDetail: function() {
		var postid = APP.globalData.playViewPostID;
		var url = API.GET_VIDEO_DETAIL_URL({
			postid: postid
		});
		var that = this;
		wx.request({
	    	url: url,
			success: (res) => {
				that.setData({
					videoUrl: res.data.data.content.video[0].qiniu_url
				})
			}
		})
	},
	onLoad: function(options) {
		this.getVideoDetail();
	}
})