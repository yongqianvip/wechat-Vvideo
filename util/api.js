'use strict';
//url相关
var BASE_URL = "http://app.vmoiver.com/apiv3/";
var GET_URL = BASE_URL.concat("/history/content/10/1");
// http://app.vmoiver.com/apiv3/index/getBanner

function _obj2uri(obj){
	return obj ? ('?' + Object.keys(obj).map(function(k) {
		return encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]);
	}).join('&')) : '';
}


// 首页轮播图
var GET_BANNER_LIST = "index/getBanner";
function GET_BANNER_LIST_URL(obj) {
	return BASE_URL + GET_BANNER_LIST + _obj2uri(obj);
}

// 频道（分类）列表 http://app.vmoiver.com/apiv3/cate/getList
var CATE_LIST = "cate/getList";
function GET_CATE_LIST_URL(obj) {
	return BASE_URL + CATE_LIST + _obj2uri(obj);
}

// 视频列表Tab
var CATE_ITEMS_LIST = "post/getPostByTab";
function GET_CATE_ITEMS_LIST_URL(obj) {
	return BASE_URL + CATE_ITEMS_LIST + _obj2uri(obj);
}

// 选择频道
var CHOOSE_CATE = "post/getPostInCate";
function GET_CHOOSED_CATE_LIST(obj) {
	return BASE_URL + CHOOSE_CATE + _obj2uri(obj);
}

// 视频详情
var VIDEO_DETAIL = "post/view";
function GET_VIDEO_DETAIL_URL(obj) {
	return BASE_URL + VIDEO_DETAIL + _obj2uri(obj);
}

// 系列
var SERIES_LIST = "series/getList";
function GET_SERIES_LIST(obj) {
	return BASE_URL + SERIES_LIST + _obj2uri(obj);
}

// 系列中获取相关系列需要显示的信息
var SERIES_VIEW = "series/view";
function GET_SERIES_VIEW(obj) {
	return BASE_URL + SERIES_VIEW + _obj2uri(obj);
}

// 系列中获取video信息
var SERIES_GETVIDEO = "series/getVideo";
function GET_SERIES_VIDEO(obj) {
	return BASE_URL + SERIES_GETVIDEO + _obj2uri(obj);
}

module.exports = {
	GET_BANNER_LIST_URL: GET_BANNER_LIST_URL,
	GET_CATE_ITEMS_LIST_URL: GET_CATE_ITEMS_LIST_URL,
	GET_VIDEO_DETAIL_URL: GET_VIDEO_DETAIL_URL,
	GET_CATE_LIST_URL: GET_CATE_LIST_URL,
	GET_CHOOSED_CATE_LIST: GET_CHOOSED_CATE_LIST,
	GET_SERIES_LIST: GET_SERIES_LIST,
	GET_SERIES_VIEW: GET_SERIES_VIEW,
	GET_SERIES_VIDEO: GET_SERIES_VIDEO
}




