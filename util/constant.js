//url相关
const BASE_URL = "http://app.vmoiver.com/apiv3/";
const GET_URL = BASE_URL.concat("/history/content/10/1");
// http://app.vmoiver.com/apiv3/index/getBanner

// 首页轮播图
const GET_BANNER_LIST = "index/getBanner";

// 频道（分类）列表 http://app.vmoiver.com/apiv3/cate/getList
const CATE_LIST = "cate/getList";

// 视频列表Tab
const CATE_ITEMS_LIST = "post/getPostByTab";

// 视频详情
const VIDEO_SHOW = "post/view";

// 选择频道
const CHOOSE_CATE = "post/getPostInCate";




//error相关
const ERROR_DATA_IS_NULL = "获取数据为空，请重试";

//各个page的URL
const PAGE_MAIN = "/pages/main/main";
const PAGE_SPECIFIC = "/pages/specific/specific";
const PAGE_POST = "/pages/post/post";

module.exports = {
    BASE_URL,
    GET_BANNER_LIST,
    CATE_LIST,
	CATE_ITEMS_LIST,
	VIDEO_SHOW,
	CHOOSE_CATE,
    GET_URL,
    ERROR_DATA_IS_NULL,
    PAGE_MAIN,
    PAGE_SPECIFIC,
    PAGE_POSt
}
