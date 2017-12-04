/**
 * Created by lin on 2017/4/10.
 */
const hosts = require('./host-conf');
const apiHost = hosts.apiHost;
const fileServiceHost = hosts.fileServiceHost;
const fileService = fileServiceHost + "/upload";
const sConferencePath = "/Conference";
const conf = {
	fileServiceHost,
    fileService,
    verifyLoginPicUrl : "/verify",
    middleInterfaceUrl : "/json",
    loginInterfaceUrl : "/login",
    
    loginUrl : apiHost + "/User/login",
    cmsLoginUrl : apiHost + "/admin/login",
    registerUrl : apiHost + "/User/regist",
    indexDoctorUrl : apiHost + "/Doctor/getDoctorListByPam?typeStr=1",
    cmsCommonList : apiHost + "/Common/getContextTop",
    cmsCommonDel : apiHost + "/Context/deleteById",
    cmsCommonAdd : apiHost + "/Context/SaveContextInfo",
    cmsCommonEdit : apiHost + "/Common/getContextByid",
    getUser :    apiHost + "/Test/getUser",

    //会议
    Conference :{
        querySites : apiHost + sConferencePath + "/querySites",//获取会场列表
        queryConferencesStatus : apiHost + sConferencePath + "/queryConferencesStatus",//获取会议列表
        scheduleConf : apiHost + sConferencePath + "/scheduleConf",//预约非周期性会议
        delScheduledConf : apiHost + sConferencePath + "/delScheduledConf",//删除预约会议或结束正在召开的会议
        getConfSitesByConfId : apiHost + sConferencePath + "/getConfSitesByConfId",//根据会议ID获取会议中的会场
        queryConfSitesStatus : apiHost + sConferencePath + "/queryConfSitesStatus",//根据会议ID获取正在进行的会议的会场
        addSiteToConf : apiHost + sConferencePath + "/addSiteToConf",//向指定会议添加会场
        connectSites : apiHost + sConferencePath + "/connectSites",//呼叫指定会议的一个或多个会场
        disconnectSites : apiHost + sConferencePath + "/disconnectSites",//断开指定会议中与会的一个或多个会场
        delSiteFromConf : apiHost + sConferencePath + "/delSiteFromConf",//删除已预约或已召开的会议中的会场
        deleteSiteInfo : apiHost + sConferencePath + "/deleteSiteInfo",//删除会场信息
        addSiteInfo : apiHost + sConferencePath + "/addSiteInfo",//添加会场信息
        editSiteInfo : apiHost + sConferencePath + "/editSiteInfo",//添加会场信息
    },

    context:{
        saveWebContext : apiHost +  "/WebContext/saveWebContext"
    },
    //字典
    dictionary :{
        getDictClasses :apiHost +  "/BaseDictClass/getDictClasses",// 字典类型
        saveDictClass :apiHost +  "/BaseDictClass/saveDictClass",// 添加字典类型
        updateDictClass :apiHost +  "/BaseDictClass/updateDictClass",// 更新字典类型
        deleteDictClassByKey :apiHost +  "/BaseDictClass/deleteDictClassByKey",// 删除字典类型
        getDictsByUpperId :apiHost +  "/BaseDict/getDictsByUpperId",// 字典
        saveDict :apiHost +  "/BaseDict/saveDict",// 新增字典
        updateDict :apiHost +  "/BaseDict/updateDict",// 修改字典
        deleteDictByKey :apiHost +  "/BaseDict/deleteDictByKey",// 删除字典
    },
	web:{
		getMenusCascade :  apiHost + '/WebNavmenu/getMenusCascade',//根据orgID code获取二级菜单
		getMainMenus : apiHost + "/WebNavmenu/getMainMenus",// 获取一级菜单
		getNavMenus : apiHost + "/WebNavmenu/getNavMenus",// 获取二级菜单
		getContexts : apiHost + "/WebContext/getContexts",// 获取文章列表
		getAllNewsByOrgId : apiHost + "/WebContext/getAllNewsByOrgId",// 根据orgId获取咨询中心全部新闻
		getWebContextById : apiHost + "/WebContext/getWebContextById",// 获取文章内容
		updateWebContext : apiHost + "/WebContext/updateWebContext",// 更新文章内容
		contextsOperation : apiHost + "/WebContext/contextsOperation",// 更新文章内容2
		saveWebContext : apiHost + "/WebContext/saveWebContext",// 新建文章内容
		deleteContext : apiHost + "/WebContext/deleteContext",// 删除文章
		getMainNews : apiHost + "/WebNavmenu/getMainNews", // 获取首页新闻
		getWebBaseConfigsBySecondDomain : apiHost + "/WebBaseConfig/getWebBaseConfigsBySecondDomain", // 根据域名获取orgId
		getWebLinks : apiHost + "/WebLink/getWebLinks", //友情链接
		getWebIndexMCenter : apiHost + "/WebIndexMCenter/getWebIndexMCenter" ,//获取首页医学中心
		getDictByCode : apiHost + "/BaseDict/getDictByCode" ,//获取专家科室列表
		getDoctorList : apiHost + "/Doctor/getDoctorList",//获取专家列表
		getDoctorById : apiHost + "/Doctor/getDoctorById",//获取专家详情
		getLessonList : apiHost + "/WebTrainingLesson/getLessonList", //获取课程列表
		getLessonDetail : apiHost + "/WebTrainingLesson/getLessonDetail", //获取课程详情
		getWebLessonFileList : apiHost + "/WebLessonFile/getWebLessonFileList", //下载课程资料
		getOrgCooperInfo : apiHost + "/OrgCooper/getOrgCooperInfo" ,//协作医院
        cooperLocationNum : apiHost + "/OrgCooper/cooperLocationNum", //协作医院的地区分类的总数
        cooperLevelNum : apiHost + "/OrgCooper/cooperLevelNum", //协作医院的等级分类的总数
        getOrgCooperList : apiHost + "/OrgCooper/getOrgCooperList", //协作医院的机构列表的信息
        sortCooperOrg : apiHost + "/OrgCooper/sortCooperOrg", //协作医院的排序
	}
};
module.exports = conf;