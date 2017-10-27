//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_service/__define/200_define_window.b2link_service.common.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_service.common;

window.b2link_service.common = window.b2link_service.common || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_service.common;

/**
 * Request후 Response시 서버로부터 전달받은 result 문자열을 Object로 만들어준다.
 *
 * @function
 * @param {String} url Server URL
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 */
!function(){var e=new Date;window.b2link_service.common._fn_req=function(n,i){n+=window.b2link_url_member.member_session.getParam(window.b2link.session.getSession()),++e,n+="&nCached="+e,window.b2link_service.common._fn_res(SUtilXMLHttpReqGet.reqSyncReturn(n,null).responseText,i)}}();

/**
 * Request후 Response시 서버로부터 전달받은 result 문자열 전달한다.
 *
 * @function
 * @param {String} url Server URL
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 */
!function(){var e=new Date;window.b2link_service.common._fn_req_for_string_result=function(n,i){n+=window.b2link_url_member.member_session.getParam(window.b2link.session.getSession()),++e,n+="&nCached="+e,window.b2link_service.common._fn_res_for_string_result(SUtilXMLHttpReqGet.reqSyncReturn(n,null).responseText,i)}}();

/**
 * Request후 Response시 서버로부터 전달받은 result 문자열을 locale label 규칙에 의거해서 자동 치환후에 문자열을 전달한다.
 *
 * @function
 * @param {String} url Server URL
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 * @param {Object} localeOwner 이 함수를 호출한 _this또는 _ 객체(HTMLElement's Controller)를 파라메터로 넣어준다.
 */
!function(){var e=new Date;window.b2link_service.common._fn_req_for_string_result__locale_label=function(n,_,i){n+=window.b2link_url_member.member_session.getParam(window.b2link.session.getSession()),++e,n+="&nCached="+e,window.b2link_service.common._fn_res_for_string_result__locale_label(SUtilXMLHttpReqGet.reqSyncReturn(n,null).responseText,_,i)}}();

/**
 * 특별히 사용할 용도 외엔 사용 금지 입니다.
 *
 * POST 방식의 XMLHTTPRequest 요청
 *
 * @function
 * @param {String} url Server URL
 * @param {Object} params POST 요청시 전송할 Parameters
 * @param {Object} requestHeaders POST 요청시 작성될 requestHeaders
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 */
!function(){var n=new Date;window.b2link_service.common._fn_req_POST=function(e,i,s,o){var r=window.b2link.session.getSession();i.Expires=r.Expires,i.mid=r.mid,i.sid=r.sid,++n,e+="nCached="+n,window.b2link_service.common._fn_res_POST(SUtilXMLHttpReqPost.reqSync__paramsObj(e,i,s).responseText,o)}}();

/**
 * 특별히 사용할 용도 외엔 사용 금지 입니다.
 *
 * POST 방식의 XMLHTTPRequest 요청
 *
 * @function
 * @param {String} url Server URL
 * @param {Object} params POST 요청시 전송할 Parameters
 * @param {Object} requestHeaders POST 요청시 작성될 requestHeaders
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 */
!function(){var e=new Date;window.b2link_service.common._fn_req_POST__Str=function(n,i,s,r){var t=window.b2link.session.getSession();i.Expires=t.Expires,i.mid=t.mid,i.sid=t.sid,++e,n+="nCached="+e;var o=STtwUtilXMLHttpReqPost.reqSyncReturn__paramsStr(n+=window.b2link_url_member.member_session.getParam(window.b2link.session.getSession()),JSON.stringify(i).replace(/\\"/gi,'"'),{"Content-type":"text/plain"}).responseText;window.b2link_service.common._fn_res_POST(o,r)}}();

/**
 * Request후 Response시 서버로부터 전달받은 result 문자열을 locale label 규칙에 의거해서 자동 치환후에 Object로 만들어준다.
 *
 * @function
 * @param {String} url Server URL
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 * @param {Object} localeOwner 이 함수를 호출한 _this또는 _ 객체(HTMLElement's Controller)를 파라메터로 넣어준다.
 */
!function(){var e=new Date;window.b2link_service.common._fn_req__locale_label=function(n,i,l){n+=window.b2link_url_member.member_session.getParam(window.b2link.session.getSession()),++e,n+="&nCached="+e,window.b2link_service.common._fn_res__locale_label(SUtilXMLHttpReqGet.reqSyncReturn(n,null).responseText,i,l)}}();

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;