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

// 视频详情
var VIDEO_SHOW = "post/view";

// 选择频道
var CHOOSE_CATE = "post/getPostInCate";




// var HOST_URI = 'https://www.v2ex.com/api/';


function _obj2uri(obj){
	return Object.keys(obj).map(function(k) {
		return encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]);
	}).join('&');
}

function GET_BANNER_LIST_URL(obj) {
	return BASE_URL + GET_BANNER_LIST + (obj ? ('?' + _obj2uri(obj)) : '');
}

function GET_CATE_ITEMS_LIST_URL(obj) {
	return BASE_URL + CATE_ITEMS_LIST + (obj ? ('?' + _obj2uri(obj)) : '');	
}

module.exports = {
	GET_BANNER_LIST_URL: GET_BANNER_LIST_URL,
	GET_CATE_ITEMS_LIST_URL: GET_CATE_ITEMS_LIST_URL
}