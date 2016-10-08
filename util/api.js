'use strict';
//url相关
var BASE_URL = "http://app.vmoiver.com/apiv3/";
var GET_URL = BASE_URL.concat("/history/content/10/1");
// http://app.vmoiver.com/apiv3/index/getBanner

// 首页轮播图
var GET_BANNER_LIST = "index/getBanner";

// 频道（分类）列表 http://app.vmoiver.com/apiv3/cate/getList
var CATE_LIST = "cate/getList";

// 视频列表Tab
var CATE_ITEMS_LIST = "post/getPostByTab";

// 选择频道
var CHOOSE_CATE = "post/getPostInCate";

// 视频详情
var VIDEO_DETAIL = "post/view";



function _obj2uri(obj){
	return obj ? ('?' + Object.keys(obj).map(function(k) {
		return encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]);
	}).join('&')) : '';
}

function GET_BANNER_LIST_URL(obj) {
	return BASE_URL + GET_BANNER_LIST + _obj2uri(obj);
}

function GET_CATE_ITEMS_LIST_URL(obj) {
	return BASE_URL + CATE_ITEMS_LIST + _obj2uri(obj);
}

function GET_VIDEO_DETAIL_URL(obj) {
	return BASE_URL + VIDEO_DETAIL + _obj2uri(obj);
}

function GET_CATE_LIST_URL(obj) {
	return BASE_URL + CATE_LIST + _obj2uri(obj);
}

function GET_CHOOSED_CATE_LIST(obj) {
	return BASE_URL + CHOOSE_CATE + _obj2uri(obj);
}

module.exports = {
	GET_BANNER_LIST_URL: GET_BANNER_LIST_URL,
	GET_CATE_ITEMS_LIST_URL: GET_CATE_ITEMS_LIST_URL,
	GET_VIDEO_DETAIL_URL: GET_VIDEO_DETAIL_URL,
	GET_CATE_LIST_URL: GET_CATE_LIST_URL,
	GET_CHOOSED_CATE_LIST: GET_CHOOSED_CATE_LIST
}




