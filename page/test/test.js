
var API = require('../../util/api.js');
Page({

	viewTap: function(e) {
		console.log('banner tap ---> ',e.currentTarget.dataset.index) 
	},
    onLoad: function(options) {
        // this.getBannerList(API.GET_BANNER_LIST_URL());
    },
});











