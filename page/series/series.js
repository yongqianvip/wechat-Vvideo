var API = require('../../util/api.js');
var util = require('../../util/util.js');
var APP = getApp();

Page({
	data: {
		seriesList: []
	},
	getSeriesList: function() {
		var url = API.GET_SERIES_LIST({
			p: 1 
		});
		var that = this;
		wx.request({
	    	url: url,
			success: (res) => {
				if (res.statusCode == 200) {
					var newSeries = res.data.data.map(function(item){
						if (item.content.length > 50) {
							item.content = item.content.substring(0,50) + '...';
						};
						return item;
					});
					that.setData({
						seriesList: newSeries
					})
				};
				
			}
		})
	},
	onLoad: function(options) {
		this.getSeriesList();
	},
	seriesItemClick: function(e) {
		var index = e.currentTarget.dataset.index;
		var selectedSeriesObj = this.data.seriesList[index];
		console.log("seriesList --> ", selectedSeriesObj);
		APP.globalData.selectedSeriesID = selectedSeriesObj.seriesid
		wx.navigateTo({
			url: "../seriesDetail/seriesDetail"
		})
	}
})