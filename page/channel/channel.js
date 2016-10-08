var API = require('../../util/api.js');
var APP = getApp();

Page({
	data: {
		channels: []
	},
	getChannelList: function() {
		var url = API.GET_CATE_LIST_URL();
		wx.request({
			url: url,
			success: (res) => {
				if (res.statusCode == 200) {
					console.log("--channel--  -->", res.data.data);	
					this.setData({
						channels: res.data.data
					})
				} else {

				}
			}
		})
	},
	onLoad: function(options) {
		this.getChannelList();
	}
});