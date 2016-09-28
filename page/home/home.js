
var API = require('../../util/api.js');
Page({
    data: {
        banners: [],
		latestVideos: [],
        hidden: false,
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
				var bannerUrls = [];
				for (var i = 0; i < res.data.data.length; i++) {
					bannerUrls.unshift(res.data.data[i]['image']);
				};
				that.setData({
					banners: bannerUrls
				})
				console.log('123243546-------------', bannerUrls);
		        setTimeout(()=> {
					that.setData({
						hidden: true
					})
				}, 300)
			}
		})
	},
	getLatestVideoList: function(api) {
		var that = this;
		wx.request({
	    	url: api,
			success: (res) => {
				console.log('---latest video ',res.data);
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
	scroll: function(e) {
		console.log('scroll ---> ',e)
	},
	bannerTap: function(e) {
		console.log('banner tap ---> ',e)	
	}
});





// /**
//  * 请求数据
//  * @param that Page的对象，用其进行数据的更新
//  * @param targetPage 请求的目标页码
//  */
// const requestData = (that, api, targetPage) => {
//     wx.request({
//         url: ,
//         header: {
//             "Content-Type": "application/json"
//         },
//         success: (res) => {
//             if (res == null ||
//                 res.data == null ||
//                 res.data.results == null ||
//                 res.data.results.length <= 0) {

//                 console.error(Constant.ERROR_DATA_IS_NULL);
//                 return;
//             }

//             const i = 0;
//             for (; i < res.data.results.length; i++)
//                 bindData(res.data.results[i]);

//             //将获得的各种数据写入itemList，用于setData
//             const itemList = [];
//             for (const i = 0; i < mTitles.length; i++)
//                 itemList.push({title: mTitles[i], src: mSrcs[i], time: mTimes[i]});

//             that.setData({
//                 banners: itemList,
//                 hidden: true
//             });

//             mCurrentPage = targetPage;
//         }
//     });
// }

// /**
//  * 绑定数据
//  * @param itemData Gank的接口返回的content值，里面有各种相关的信息
//  */
// const bindData = (itemData) => {
//     const re = new RegExp("[a-zA-z]+://w{2}[^\"]*");

//     const title = itemData.content.match(re)[0];

//     //todo 挺奇怪的，小程序不能显示以 （ww+数字） 开头的图片，把它改成 ws 开头就可以了，不知道为什么
//     const src = title.replace("//ww", "//ws");

//     mTitles.push(itemData.title);
//     mTimes.push(itemData.publishedAt.split("T")[0]);
//     mSrcs.push(src);
// }

