//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_window.b2link.xhr.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.xhr;

window.b2link.xhr = window.b2link.xhr || {};

//--------------------------------------------------window.b2link.xhr.r***;

//------------------------------[ S ] - GET - Async;

/**
 * XMLHttpRequest 객체를 활용하여 GET 방식으로 Request를 한다.
 * 여러 이벤트 타입의 Callback Function을 설정할 수 있다.
 * @function
 * @param {String} url
 * @param {Function} cbFunction
 * <code>
 * {
 *	"cbFunctions" : {
 *		"onabort" : function( e ){}
 *		, "onerror" : function( e ){}
 *		, "onload" : function( e ){}
 *		, "onloadend" : function( e ){}
 *		, "onstart" : function( e ){}
 *		, "onprogress" : function( e ){}
 *		, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
 *		, "ontimeout" : function( e ){}
 *	}
 * }
 * </code>
 */
!function(){var n=new Date;window.b2link.xhr.req=function(e,t){++n,SUtilXMLHttpReqGet.req(e+"?nCached="+n,t)}}();

/**
 * XMLHttpRequest 객체를 활용하여 GET 방식으로 Request를 한다.
 * Response 시 cbFunction에 string으로 parameter을 전달하여 호출한다.
 * @function
 * @param {String} url
 * @param {Function} cbFunction function( str ){}
 */
!function(){var n=new Date;window.b2link.xhr.req_String=function(t,e){++n,SUtilXMLHttpReqGet.req_String(t+"?nCached="+n,e)}}();

//------------------------------[ E ] - GET - Async;


//------------------------------[ S ] - GET - Sync;

/**
 * XMLHttpRequest 객체를 활용하여 GET 방식으로 Request를 한다.
 * Response 시 JSON으로 받은 데이터를 Object로 Return한다.
 * @function
 * @param {String} url
 * @return {Object}
 */
!function(){var n=new Date;window.b2link.xhr.reqSync=function(e){++n,SUtilXMLHttpReqGet.reqSync(e+"?nCached="+n)}}();

/**
 * XMLHttpRequest 객체를 활용하여 GET 방식으로 Request를 한다.
 * Response 시 JSON으로 받은 데이터를 Object로 Return한다.
 * @function
 * @param {String} url
 * @return {Object}
 */
!function(){var e=new Date;window.b2link.xhr.reqSync_JSON=function(n){++e;var r=JSON.parse(SUtilXMLHttpReqGet.reqSyncReturn(n+"?nCached="+e).responseText.replace(/\/\/.*/gi,""));return r}}();
//!function(){var e=new Date;window.b2link.xhr.reqSync_JSON=function(n){++e,n=-1!=n.indexOf("?")?n+"&nCached="+e:n+"?nCached="+e;var r=JSON.parse(SUtilXMLHttpReqGet.reqSyncReturn(n).responseText.replace(/\/\/.*/gi,""));return r}}();

/**
 * XMLHttpRequest 객체를 활용하여 GET 방식으로 Request를 한다.
 * Response 시 받은 데이터를 String로 Return한다.
 * @function
 * @param {String} url
 * @return {Object}
 */
//!function(){var n=new Date;window.b2link.xhr.reqSync_String=function(e){++n;var t=SUtilXMLHttpReqGet.reqSyncReturn(e+"?nCached="+n).responseText;return t}}();
!function(){var n=new Date;window.b2link.xhr.reqSync_String=function(e){++n;var t=SUtilXMLHttpReqGet.reqSyncReturn(e).responseText;return t}}();

/**
 * XMLHttpRequest 객체를 활용하여 GET 방식으로 Request를 한다.
 * Response 시 XMLHttpRequest 객체를 그대로 Return 한다.
 * @function
 * @param {String} url
 * @return {XMLHTTPRequest}
 */
//!function(){var n=new Date;window.b2link.xhr.reqSyncReturn=function(e){++n;var t=SUtilXMLHttpReqGet.reqSyncReturn(e+"?nCached="+n);return t}}();
!function(){var n=new Date;window.b2link.xhr.reqSyncReturn=function(e){++n;var t=SUtilXMLHttpReqGet.reqSyncReturn(e);return t}}();

//------------------------------[ E ] - GET - Sync;


//------------------------------[ S ] - POST - Async;

/**
 * 특별히 사용할 용도 외엔 사용 금지 입니다.
 *
 * XMLHttpRequest 객체를 활용하여 GET 방식으로 Request를 한다.
 * 여러 이벤트 타입의 Callback Function을 설정할 수 있다.
 *
 * FormData를 사용하여 전달한다.
 *
 * @function
 * @param {String} url
 * @param {Object} params
 * @param {Object} requestHeaders
 * <code>
 * {
 *	"Content-type" : "application/x-www-form-urlencoded"
 *	, "Content-length" : "a=1&b=2&c=3".length
 *	, ...
 * }
 * </code>
 * @param {Function} cbFunction
 * <code>
 * {
 *	"onabort" : function( e ){}
 *	, "onerror" : function( e ){}
 *	, "onload" : function( e ){}
 *	, "onloadend" : function( e ){}
 *	, "onstart" : function( e ){}
 *	, "onprogress" : function( e ){}
 *	, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
 *	, "ontimeout" : function( e ){}
 * }
 * </code>
 * @example
 * <code>
	window.b2link.xhr.req_POST_Form(
		"www.google.com"
		, { "a" : 1, "b" : 2, "c" : 3 }
		, { "Content-type" : "application/x-www-form-urlencoded", ... }
		, {
			"onabort" : function( e ){}
			, "onerror" : function( e ){}
			, "onload" : function( e ){}
			, "onloadend" : function( e ){}
			, "onstart" : function( e ){}
			, "onprogress" : function( e ){}
			, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, "ontimeout" : function( e ){}
		}
	);

	window.b2link.xhr.req_POST_Form(
		"http://posttestserver.com/post.php?dir=example"
		, { "a" : 1, "b" : 2, "c" : 3 }
		, { "Content-type" : "application/x-www-form-urlencoded" }//,...
		, {
			"onabort" : function( e ){ console.log( e ) }
			, "onerror" : function( e ){ console.log( e ) }
			, "onload" : function( e ){ console.log( e ) }
			, "onloadend" : function( e ){ console.log( e ) }
			, "onstart" : function( e ){ console.log( e ) }
			, "onprogress" : function( e ){ console.log( e ) }
			, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, "ontimeout" : function( e ){ console.log( e ) }
		}
	);
 * </code>
 */
window.b2link.xhr.req_POST_Form=function(r,o,t,i){SUtilXMLHttpReqPost.req__paramsForm(r,t,i)};

/**
 * 특별히 사용할 용도 외엔 사용 금지 입니다.
 *
 * XMLHttpRequest 객체를 활용하여 GET 방식으로 Request를 한다.
 * 여러 이벤트 타입의 Callback Function을 설정할 수 있다.
 *
 * FormData를 사용하여 전달한다.
 *
 * @function
 * @param {String} url
 * @param {Object} params
 * @param {Object} requestHeaders
 * <code>
 * {
 *	"Content-type" : "application/x-www-form-urlencoded"
 *	, "Content-length" : "a=1&b=2&c=3".length
 *	, ...
 * }
 * </code>
 * @param {Function} cbFunction
 * <code>
 * {
 *	"onabort" : function( e ){}
 *	, "onerror" : function( e ){}
 *	, "onload" : function( e ){}
 *	, "onloadend" : function( e ){}
 *	, "onstart" : function( e ){}
 *	, "onprogress" : function( e ){}
 *	, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
 *	, "ontimeout" : function( e ){}
 * }
 * </code>
 * @example
 * <code>
	window.b2link.xhr.req_POST_Form_useAction(
		"www.google.com"
		, { "a" : 1, "b" : 2, "c" : 3 }
		, { "Content-type" : "application/x-www-form-urlencoded", ... }
		, {
			"onabort" : function( e ){}
			, "onerror" : function( e ){}
			, "onload" : function( e ){}
			, "onloadend" : function( e ){}
			, "onstart" : function( e ){}
			, "onprogress" : function( e ){}
			, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, "ontimeout" : function( e ){}
		}
	);

	window.b2link.xhr.req_POST_Form_useAction(
		"http://posttestserver.com/post.php?dir=example"
		, { "a" : 1, "b" : 2, "c" : 3 }
		, { "Content-type" : "application/x-www-form-urlencoded" }//,...
		, {
			"onabort" : function( e ){ console.log( e ) }
			, "onerror" : function( e ){ console.log( e ) }
			, "onload" : function( e ){ console.log( e ) }
			, "onloadend" : function( e ){ console.log( e ) }
			, "onstart" : function( e ){ console.log( e ) }
			, "onprogress" : function( e ){ console.log( e ) }
			, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, "ontimeout" : function( e ){ console.log( e ) }
		}
	);
 * </code>
 */
window.b2link.xhr.req_POST_Form_useAction=function(o,t,i,n){SUtilXMLHttpReqPost.req__paramsForm_useAction(o,t,i,n)};

/**
 * 특별히 사용할 용도 외엔 사용 금지 입니다.
 *
 * XMLHttpRequest 객체를 활용하여 GET 방식으로 Request를 한다.
 * 여러 이벤트 타입의 Callback Function을 설정할 수 있다.
 * @function
 * @param {String} url
 * @param {Object} params
 * @param {Object} requestHeaders
 * <code>
 * {
 *	"Content-type" : "application/json"
 *	, "Content-length" : "a=1&b=2&c=3".length
 *	, ...
 * }
 * </code>
 * @param {Function} cbFunction
 * <code>
 * {
 *	"onabort" : function( e ){}
 *	, "onerror" : function( e ){}
 *	, "onload" : function( e ){}
 *	, "onloadend" : function( e ){}
 *	, "onstart" : function( e ){}
 *	, "onprogress" : function( e ){}
 *	, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
 *	, "ontimeout" : function( e ){}
 * }
 * </code>
 * @example
 * <code>
	window.b2link.xhr.req_POST_JSON(
		"www.google.com"
		, { "a" : 1, "b" : 2, "c" : 3 }
		, { "Content-type" : "application/json", ... }
		, {
			"onabort" : function( e ){}
			, "onerror" : function( e ){}
			, "onload" : function( e ){}
			, "onloadend" : function( e ){}
			, "onstart" : function( e ){}
			, "onprogress" : function( e ){}
			, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, "ontimeout" : function( e ){}
		}
	);

	window.b2link.xhr.req_POST_JSON(
		"http://posttestserver.com/post.php?dir=example"
		, { "a" : 1, "b" : 2, "c" : 3 }
		, { "Content-type" : "application/json" }//,...
		, {
			"onabort" : function( e ){ console.log( e ) }
			, "onerror" : function( e ){ console.log( e ) }
			, "onload" : function( e ){ console.log( e ) }
			, "onloadend" : function( e ){ console.log( e ) }
			, "onstart" : function( e ){ console.log( e ) }
			, "onprogress" : function( e ){ console.log( e ) }
			, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, "ontimeout" : function( e ){ console.log( e ) }
		}
	);
 * </code>
 */
window.b2link.xhr.req_POST_JSON=function(r,i,n,t){n||(n={});try{n["Content-type"]="application/json",SUtilXMLHttpReqPost.req__paramsStr(r,JSON.stringify(i),n,t)}catch(o){window.b2link_ui.message.error("window.b2link.xhr.req_POST_JSON Error : "+o)}};

/**
 * 특별히 사용할 용도 외엔 사용 금지 입니다.
 *
 * XMLHttpRequest 객체를 활용하여 GET 방식으로 Request를 한다.
 * 여러 이벤트 타입의 Callback Function을 설정할 수 있다.
 *
 * FormData를 사용하여 전달한다.
 *
 * @function
 * @param {String} url
 * @param {Object} params
 * @param {Object} requestHeaders
 * <code>
 * {
 *	"Content-type" : "application/x-www-form-urlencoded"
 *	, "Content-length" : "a=1&b=2&c=3".length
 *	, ...
 * }
 * </code>
 * @param {Function} cbFunction
 * <code>
 * {
 *	"onabort" : function( e ){}
 *	, "onerror" : function( e ){}
 *	, "onload" : function( e ){}
 *	, "onloadend" : function( e ){}
 *	, "onstart" : function( e ){}
 *	, "onprogress" : function( e ){}
 *	, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
 *	, "ontimeout" : function( e ){}
 * }
 * </code>
 * @example
 * <code>
	window.b2link.xhr.req_POST_Obj(
		"www.google.com"
		, { "a" : 1, "b" : 2, "c" : 3 }
		, { "Content-type" : "application/x-www-form-urlencoded", ... }
		, {
			"onabort" : function( e ){}
			, "onerror" : function( e ){}
			, "onload" : function( e ){}
			, "onloadend" : function( e ){}
			, "onstart" : function( e ){}
			, "onprogress" : function( e ){}
			, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, "ontimeout" : function( e ){}
		}
	);

	window.b2link.xhr.req_POST_Obj(
		"http://posttestserver.com/post.php?dir=example"
		, { "a" : 1, "b" : 2, "c" : 3 }
		, { "Content-type" : "application/x-www-form-urlencoded" }//,...
		, {
			"onabort" : function( e ){ console.log( e ) }
			, "onerror" : function( e ){ console.log( e ) }
			, "onload" : function( e ){ console.log( e ) }
			, "onloadend" : function( e ){ console.log( e ) }
			, "onstart" : function( e ){ console.log( e ) }
			, "onprogress" : function( e ){ console.log( e ) }
			, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, "ontimeout" : function( e ){ console.log( e ) }
		}
	);
 * </code>
 */
window.b2link.xhr.req_POST_Obj=function(t,i,n,r){SUtilXMLHttpReqPost.req__paramsObj(t,i,n,r)};

/**
 * 특별히 사용할 용도 외엔 사용 금지 입니다.
 *
 * XMLHttpRequest 객체를 활용하여 GET 방식으로 Request를 한다.
 * 여러 이벤트 타입의 Callback Function을 설정할 수 있다.
 * @function
 * @param {String} url
 * @param {Object} params
 * @param {Object} requestHeaders
 * <code>
 * {
 *	"Content-type" : "application/x-www-form-urlencoded"
 *	, "Content-length" : "a=1&b=2&c=3".length
 *	, ...
 * }
 * </code>
 * @param {Function} cbFunction
 * <code>
 * {
 *	"onabort" : function( e ){}
 *	, "onerror" : function( e ){}
 *	, "onload" : function( e ){}
 *	, "onloadend" : function( e ){}
 *	, "onstart" : function( e ){}
 *	, "onprogress" : function( e ){}
 *	, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
 *	, "ontimeout" : function( e ){}
 * }
 * </code>
 * @example
 * <code>
	window.b2link.xhr.req_POST_Str(
		"www.google.com"
		, JSON.stringify({ "a" : 1, "b" : 2, "c" : 3 })
		, { "Content-type" : "application/json" }//,...
		, {
			"onabort" : function( e ){}
			, "onerror" : function( e ){}
			, "onload" : function( e ){}
			, "onloadend" : function( e ){}
			, "onstart" : function( e ){}
			, "onprogress" : function( e ){}
			, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, "ontimeout" : function( e ){}
		}
	);

	window.b2link.xhr.req_POST_Str(
		"http://posttestserver.com/post.php?dir=example"
		, JSON.stringify({ "a" : 1, "b" : 2, "c" : 3 })
		, { "Content-type" : "application/json" }//,...
		, {
			"onabort" : function( e ){ console.log( e ) }
			, "onerror" : function( e ){ console.log( e ) }
			, "onload" : function( e ){ console.log( e ) }
			, "onloadend" : function( e ){ console.log( e ) }
			, "onstart" : function( e ){ console.log( e ) }
			, "onprogress" : function( e ){ console.log( e ) }
			, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, "ontimeout" : function( e ){ console.log( e ) }
		}
	);

	window.b2link.xhr.req_POST_Str(
		//"http://www.example.org/example.txt"
		"./ttwP/www.example.org/example.txt"
		, null
		, {
			"Content-type" : "text/plain"
		}//,...
		, {
			"onabort" : function( e ){ console.log( e ) }
			, "onerror" : function( e ){ console.log( e ) }
			, "onload" : function( e ){ console.log( e ) }
			, "onloadend" : function( e ){ console.log( e ) }
			, "onstart" : function( e ){ console.log( e ) }
			, "onprogress" : function( e ){ console.log( e ) }
			, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, "ontimeout" : function( e ){ console.log( e ) }
		}
	);

	window.b2link.xhr.req_POST_Str(
		"http://html5rocks.com"
		, null
		, {
			"Content-type" : "text/plain"
		}//,...
		, {
			"onabort" : function( e ){ console.log( e ) }
			, "onerror" : function( e ){ console.log( e ) }
			, "onload" : function( e ){ console.log( e ) }
			, "onloadend" : function( e ){ console.log( e ) }
			, "onstart" : function( e ){ console.log( e ) }
			, "onprogress" : function( e ){ console.log( e ) }
			, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, "ontimeout" : function( e ){ console.log( e ) }
		}
	);

	window.b2link.xhr.req_POST_Str(
		"www.example2.com"
		, null
		, {
			"Content-type" : "text/plain"
		}//,...
		, {
			"onabort" : function( e ){ console.log( e ) }
			, "onerror" : function( e ){ console.log( e ) }
			, "onload" : function( e ){ console.log( e ) }
			, "onloadend" : function( e ){ console.log( e ) }
			, "onstart" : function( e ){ console.log( e ) }
			, "onprogress" : function( e ){ console.log( e ) }
			, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, "ontimeout" : function( e ){ console.log( e ) }
		}
	);
 * </code>
 */
window.b2link.xhr.req_POST_Str=function(t,r,i,n){SUtilXMLHttpReqPost.req__paramsStr(t,r,i,n)};

//------------------------------[ E ] - POST - Async;


//------------------------------[ S ] - POST - Sync;
//------------------------------[ E ] - POST - Sync;

//--------------------------------------------------window.b2link.xhr.r***;

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.xhr;

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;