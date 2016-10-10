var API = require('../../util/api.js');
var APP = getApp();
var util = require('../../util/util.js');

Page({
	data: {
		channelItems: []
	},
	getCurrentChannelList: function() {
		var obj = APP.globalData.choosedChannel;
		var url = API.GET_CHOOSED_CATE_LIST(obj);
		wx.request({
			url: url,
			success: (res) => {
				if (res.statusCode == 200) {
					console.log("get selected channem list ", res.data.data);
					res.data.data.map(function(item){
						item.duration = util.formatVideoTime(parseInt(item.duration));
						console.log("item-- >" ,util.formatVideoTime(item.duration));
						return item;
					})	
					this.setData({
						channelItems: res.data.data
					})
				} else {
					// whatever
				}
			}
		})
	},
	onLoad: function(options) {
		this.getCurrentChannelList();
	},
	onReady: function(options) {
		var obj = APP.globalData.choosedChannel;
		wx.setNavigationBarTitle({
		 	title: obj.catename
		})
	},
	onShow: function(options) {
		var obj = APP.globalData.choosedChannel;
		wx.setNavigationBarTitle({
		 	title: obj.catename
		})
	},
	itemTap: function(e) {
		var index = e.currentTarget.dataset.index;
		var postid = this.data.channelItems[index].postid;
		APP.globalData.playViewPostID = postid;

		wx.navigateTo({
			url: '../playview/playview'
		})
	},
});