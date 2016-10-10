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
	itemTap: function(e) {
		var index = e.currentTarget.dataset.index;
		console.log('channels item tap ---> ', index);	
		console.log("--- ", this.data.channels[index]);
		var choosedChannelObj = this.data.channels[index];

		APP.globalData.choosedChannel = {
			p: 1,
			cateid: choosedChannelObj.cateid,
			catename: choosedChannelObj.catename
		};

		wx.navigateTo({
			url: '../channelList/channelList'
		})
	},
	onLoad: function(options) {
		this.getChannelList();
	}
});