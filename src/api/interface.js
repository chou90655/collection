import request from './request'
export function regnoyzm(data) { // 用户名注册接口
  return request({
    url: 'user/register/username',
    method: 'post',
    data
  })
}
export function mobregzym(data) { // 触发手机验证码接口
  return request({
    url: 'user/common/sms',
    method: 'post',
    data
  })
}

export function regSms(data) { // 获取注册手机验证码
  return request({
    url: 'user/login/send-register-sms',
    method: 'post',
    data
  })
}
export function mobreg(data) { // 手机号注册接口
  return request({
    url: 'user/register/mobreg',
    method: 'post',
    data
  })
}
export function login(data) { // 登录接口
  return request({
    url: 'user/oauth/token',
    method: 'post',
    data
  })
}
export function needImgCode(name) { // 检查登录是否需要验证码
  return request({
    url: 'user/login/need-image-code/' + name,
    method: 'post'
  })
}
export function getImgCode(str) { // 检查登录是否需要验证码
  return request({
    url: 'user/common/image',
    method: 'post',
    data: { verificationToken: str }
  })
}
export function userFinanceInfo(data) { // 用户财务信息
  return request({
    url: '/user/user/user-finance-info',
    method: 'post',
    data
  })
}
export function isupdateSecret(data) { // 查询是否需要修改资金密码
  return request({
    url: '/user/user/isupdate-secret',
    method: 'post',
    data
  })
}
export function modifySecretPassword(data) { // 修改资金密码
  return request({
    url: '/user/user/modify-secret-password',
    method: 'post',
    data
  })
}
export function lout(data) { // 退出接口
  return request({
    url: 'user/login/remove-token',
    method: 'post',
    data
  })
}

export function chargeDetail(data) { // 账户明显 优惠券
  return request({
    url: 'user/user/chargeDetail',
    method: 'post',
    data
  })
}
export function deposits(data) { // 充值
  return request({
    url: 'user/userPay/deposits',
    method: 'post',
    data
  })
}

export function paytypes(data) { // 获取支付方式
  return request({
    url: 'user/userPay/getUserPayChannel',
    method: 'post',
    data
  })
}
export function bindBackCard(data) { // 实名认证 绑定身份信息
  return request({
    url: 'user/user/bind/bank-card',
    method: 'post',
    data
  })
}
export function avatar(img) { //  修改密码接口
  return request({
    url: `user/user/image/${img}`,
    method: 'post'
  })
}
export function modifyLoginPassword(data) { //  修改密码接口
  return request({
    url: 'user/user/modify-login-password',
    method: 'post',
    data
  })
}
export function sendBindSms(data) { // 发送绑定手机 验证码
  return request({
    url: 'user/user/send-bind-sms',
    method: 'post',
    data
  })
}

export function bindMobile(data) { // 绑定手机号
  return request({
    url: `user/user/bind-mobile/${data.code}/${data.phone}`,
    method: 'post'
  })
}
export function webTouZhus(data) { // 购彩记录
  return request({
    url: 'user/bet/betRecord',
    method: 'post',
    data
  })
}
export function getUserBetRecordSearchType(data) { // 购彩记录 彩种查询
  return request({
    url: 'user/bet/getUserBetRecordSearchType',
    method: 'post',
    data
  })
}
export function webFollowRecord(data) { // 购彩记录 跟单接口
  return request({
    url: 'user/bet/followBetRecord',
    method: 'post',
    data
  })
}
export function betBdRecord(data) { // 北单购彩记录
  return request({
    url: 'user/bet/betBdRecord',
    method: 'post',
    data
  })
}
export function followBetBdRecord(data) { // 北单购彩记录详情
  return request({
    url: 'user/bet/followBetBdRecord',
    method: 'post',
    data
  })
}
export function webfollowDetail(data) { // 发单人详情
  return request({
    url: 'user/copyDetail/webfollowDetail',
    method: 'post',
    data
  })
}
export function webfollowUserLists(data) { // 跟单列表
  return request({
    url: 'user/copyDetail/webfollowUserLists',
    method: 'post',
    data
  })
}
export function followManage(data) { // 关注发单人
  return request({
    url: 'user/user/followManage',
    method: 'post',
    data
  })
}
export function webCopyAddAuto(data) { // 制定跟单
  return request({
    url: 'user/copyDetail/webCopyAddAuto',
    method: 'post',
    data
  })
}
export function webremoveAutosCopy(data) { // 取消制定跟单
  return request({
    url: 'user/user/webremoveAutosCopy',
    method: 'post',
    data
  })
}
export function addUserNickname(data) { // 添加昵称
  return request({
    url: 'user/order/addUserNickname',
    method: 'post',
    data
  })
}
export function webcopyAutoLists(data) { // 我制定的人
  return request({
    url: 'user/user/webcopyAutoLists',
    method: 'post',
    data
  })
}
export function webcopyUserAutos(data) { // 制定我的人
  return request({
    url: 'user/user/webcopyUserAutos',
    method: 'post',
    data
  })
}
export function copyMyfollow(data) { // 我的关注（复制跟单） webFollowRecord  webTouZhusfid=w_fd
  return request({
    url: 'user/user/copyMyfollow',
    method: 'post',
    data
  })
}
export function copyDetail(data) { // 订单详情
  return request({
    url: 'user/copyDetail/copyDetail',
    method: 'post',
    data
  })
}
export function copyUserLists(data) { // 跟单用户
  return request({
    url: 'user/order/copyUserLists',
    method: 'post',
    data
  })
}
export function webCopyCast(data) { // 跟单下注
  return request({
    url: 'user/order/webCopyCast',
    method: 'post',
    data
  })
}
export function userBetDetail(data) { // 订单详情
  return request({
    url: 'user/bet/userBetDetail',
    method: 'post',
    data
  })
}
export function jprojCast(data) { // 竞彩 发单和下注
  return request({
    url: 'user/order/jprojCast',
    method: 'post',
    data
  })
}
export function getDetailsData(data) { // 业绩查询
  return request({
    url: 'user/performance/getDetailsData',
    method: 'post',
    data
  })
}
export function getShareMakeProfit(data) { // 分享赚钱
  return request({
    url: 'user/share/getShareMakeProfit',
    method: 'post',
    data
  })
}
export function applyCommission(data) { // 佣金领取
  return request({
    url: 'user/share/applyCommission',
    method: 'post',
    data
  })
}
export function getCommissionSetting(data) { // 返佣查询
  return request({
    url: 'user/share/account/commission/setting',
    method: 'post',
    data
  })
}

export function getCommissionRecord(data) { // 领取记录接口
  return request({
    url: 'user/promote/getCommissionRecord',
    method: 'post',
    data
  })
}
export function lowerUsers(data) { // 下级查询
  return request({
    url: 'user/share/lower/users',
    method: 'post',
    data
  })
}
export function getUnreadNoticeCount(data) { // 公告未读总数
  return request({
    url: 'user/notice/getUnreadNoticeCount',
    method: 'post',
    data: { ...data, type: '2' }
  })
}
export function getNoticeContentList(data) { // 公告列表
  return request({
    url: 'user/notice/getNoticeContentList',
    method: 'post',
    data: { ...data, type: '2' }
  })
}
export function getHomePageNoticeList() { // 未登录公告列表
  return request({
    url: 'user/notice/getHomePageNoticeList/2',
    method: 'post'
  })
}
export function readAnnouncement(data) { // 读取公告
  return request({
    url: 'user/notice/read',
    method: 'post',
    data: { ...data, type: '2' }
  })
}
export function readAllAnnouncement(data) { // 一键已读
  return request({
    url: 'user/notice/readAll',
    method: 'post',
    data: { ...data, type: '2' }
  })
}
export function getHotBetAnalyseList(data) { // 红单爆料接口
  return request({
    url: 'user/hotBet/getHotBetAnalyseList',
    method: 'post',
    data
  })
}
export function getPlayerScoreList(data) { // 射手榜
  return request({
    url: '/user/pcPlayerScore/getPlayerScoreList',
    method: 'post',
    data
  })
}
export function getStandingList(data) { // 积分榜
  return request({
    url: '/user/pcStanding/getStandingList',
    method: 'post',
    data
  })
}
export function getLeagueList(data) { // 联赛查询
  return request({
    url: '/user/pcLeague/getLeagueList',
    method: 'get',
    data
  })
}
export function webHotJczqList(data) { // 热门跟单
  return request({
    url: '/user/share/copy/webHotJczqList',
    method: 'post',
    data
  })
}
export function getInfoAnalyseList(data) { // 获取资讯列表
  return request({
    url: '/user/pcInfo/getInfoAnalyseList',
    method: 'post',
    data
  })
}
export function activeRead(data) { // 增加资讯阅读数
  return request({
    url: '/user/likeAndRead/read',
    method: 'post',
    data
  })
}
export function likeArticle(data) { // 资讯点赞
  return request({
    url: '/user/likeAndRead/likeArticle',
    method: 'post',
    data
  })
}
export function cancelLikeArticle(data) { // 取消资讯点赞
  return request({
    url: '/user/likeAndRead/cancelLikeArticle',
    method: 'post',
    data
  })
}
export function getMatchLogoFront(data) { // 获取队标列表
  return request({
    url: '/user/match/getMatchLogoFront',
    method: 'post',
    data
  })
}
export function getBaseSetting(data) { // 获取拼单基础数据
  return request({
    url: '/user/home/getBaseSetting',
    method: 'post',
    data
  })
}
export function collectBet(data) { // 获取拼单推荐
  return request({
    url: '/user/share/account/collectBet',
    method: 'post',
    data
  })
}
export function userCollectBetDetai(data) { // 拼单人详情
  return request({
    url: '/user/copyDetail/userCollectBet/detail',
    method: 'post',
    data
  })
}
export function combineDetail(data) { // 拼单订单详情
  return request({
    url: '/user/combineDetail/combineDetail',
    method: 'post',
    data
  })
}
export function combineUserLists(data) { // 拼单订单详情 - 已跟单用户
  return request({
    url: '/user/combineDetail/combineUserLists',
    method: 'post',
    data
  })
}
export function webCollectCast(data) { // 用户拼单下注
  return request({
    url: '/user/order/webCollectCast',
    method: 'post',
    data
  })
}
export function checkStatus(name) { // 检查用户名禁用状态：0正常，2禁用
  return request({
    url: `/user/user/status/${name}`,
    method: 'post'
  })
}

export function upLoadToOSS(data) { // 上传接口
  return request({
    url: 'user/file/upLoadToOSS',
    method: 'post',
    data
  })
}

export function insertFeedback(data) { // 添加意见反馈
  return request({
    url: 'user/pcFeedback/insertFeedback',
    method: 'post',
    data
  })
}
export function getActivitiesList(data) { // 活动优惠活动列表
  return request({
    url: 'user/pcActivities/getActivitiesList',
    method: 'post',
    data
  })
}
export function getTouristUsername(data) { // 获取游客名
  return request({
    url: 'user/tourist/username',
    method: 'post',
    data
  })
}
export function getBeforeAfterInfo(data) { // 资讯获取上/下篇
  return request({
    url: 'user/pcInfo/getBeforeAfterInfo',
    method: 'post',
    data
  })
}
export function bindQq(data) { // 个人信息 - 修改QQ
  return request({
    url: `user/user/bindQq/${data}`,
    method: 'post'
  })
}
