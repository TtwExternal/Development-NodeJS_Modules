
//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link;

global.b2link = global.b2link || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.STATIC;

global.b2link.STATIC = global.b2link.STATIC || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.STATIC;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//--------------------------------------------------[ S ] - global.b2link.STATIC.CONFIG;

global.b2link.STATIC.CONFIG = global.b2link.STATIC.CONFIG || {};





global.TtwLog.timeStamp( "--------------------------------------------------[ S ] - global.b2link.STATIC.CONFIG.URL" );
global.b2link.STATIC.CONFIG.URL = global.b2link.STATIC.CONFIG.URL || {};
//------------------------------;
global.b2link.STATIC.CONFIG.URL.JS_B2LINK = "./js/b2link/";
//------------------------------;
global.b2link.STATIC.CONFIG.URL.PROXY = "./ttwP/";//global.b2link.STATIC.CONFIG.URL.PROXY;
//------------------------------;
global.b2link.STATIC.CONFIG.URL.SCODE = "";//시스템 개별 정의;
global.TtwLog.timeStamp( "--------------------------------------------------[ E ] - global.b2link.STATIC.CONFIG.URL" );

//--------------------------------------------------[ E ] - global.b2link.STATIC.CONFIG;

//----------------------------------------------------------------------------------------------------;

//--------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//--------------------------------------------------[ S ] - global.b2link.STATIC.CONST;
global.b2link.STATIC.CONST = global.b2link.STATIC.CONST || {};
//--------------------------------------------------[ E ] - global.b2link.STATIC.CONST;

//----------------------------------------------------------------------------------------------------;

//------------------------------global.b2link.STATIC.CONST.SCODES;
(function(){
	global.b2link.STATIC.CONST.SCODES = global.b2link.STATIC.CONST.SCODES || {};

	var _ = global.b2link.STATIC.CONST.SCODES;
		_.__defineGetter__( "SESSION_SERVER"						, function(){ return "SYS0010"; } );
		_.__defineGetter__( "B2KER"									, function(){ return "SYS0020"; } );
		_.__defineGetter__( "BRAND_PORTAL"							, function(){ return "SYS0030"; } );
		_.__defineGetter__( "FILE_SERVER"							, function(){ return "SYS0040"; } );
		_.__defineGetter__( "WEB_HOOK_SERVER"						, function(){ return "SYS0050"; } );
		_.__defineGetter__( "WEB_SOCKET_MESSAGE_SERVER"				, function(){ return "SYS0060"; } );
		_.__defineGetter__( "EXCEL_SERVER"							, function(){ return "SYS0070"; } );
		_.__defineGetter__( "WEB_SOCKET_APP_COMMUNICATION_SERVER"	, function(){ return "SYS0080"; } );
})();
//------------------------------global.b2link.STATIC.CONST.SCODES;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.STATIC.REGEXP;

global.b2link.STATIC.REGEXP = global.b2link.STATIC.REGEXP || {};

//----------------------------------------------------------------------------------------------------global.b2link.STATIC.REGEXP.MATCH;

global.b2link.STATIC.REGEXP.MATCH = global.b2link.STATIC.REGEXP.MATCH || {};

/**
 * @property {RegExp}
 */
global.b2link.STATIC.REGEXP.MATCH.URI_HTTP0 = /^http[s]*:\/\//;

/**
 * @property {ReqExp}
 * @example
 * <code>
	var pattern = window.b2link.STATIC.REGEXP.MATCH.URL;
	var url = "http://localhost:8080/public/index.js?title=index&page=1";
	var arr = url.match( pattern );
	console.log( arr[ 0 ] );//http://localhost:8080/public/index.js;
	console.log( arr[ 1 ] );//http://;
	console.log( arr[ 2 ] );//localhost:8080/;
	console.log( arr[ 3 ] );//public/index.js;
 * </code>
 */
global.b2link.STATIC.REGEXP.MATCH.URL = /(http[s]?:\/\/)?([^\/\s]+\/)([^?#]*)/;

//삭제하기 - 20170620 - 송선우 - global.brandportal.STATIC.REGEXP.MATCH.VIP_SPUID로 이동람;
//사용된 소스 부분 확인 및 변경 후 삭제하기;
/**
 * vip spu id 추출
 * @property {ReqExp}
 * @example
 * <code>
	var pattern = window.b2link.STATIC.REGEXP.MATCH.VIP_SPUID;
	var str = "    spuId : '96059415036702720',";
	var arr = pattern.match( pattern );
	console.log( arr[ 1 ] );//9605941503670272;
 * </code>
 */
global.b2link.STATIC.REGEXP.MATCH.VIP_SPUID = /spuId\s+:\s+'(.*)'/;

//삭제하기 - 20170620 - 송선우 - global.brandportal.STATIC.REGEXP.MATCH.VIP_COMMENT로 이동;
//사용된 소스 부분 확인 및 변경 후 삭제하기;
/**
 * vip spu comment 추출
 * @property {ReqExp}
 * @example
 * <code>
	var pattern = window.b2link.STATIC.REGEXP.MATCH.VIP_COMMENT;
	var str = "getCommentListCB({"code":200,"msg":"success","level":0,"comment":[]})";
	var arr = pattern.match( pattern );
	console.log( arr[ 1 ] );//[];
 * </code>
 */
global.b2link.STATIC.REGEXP.MATCH.VIP_COMMENT = /comment":(\[.*\])}\)/;

//----------------------------------------------------------------------------------------------------global.b2link.STATIC.REGEXP.REPLACE;

global.b2link.STATIC.REGEXP.REPLACE = global.b2link.STATIC.REGEXP.REPLACE || {};

/**
 * @property {RegExp}
 * @D:\Github_B2LiNK\B2LiNK-B2Ker-Dev\WebPage\root\ui_template\b2link_settlement\common\edit_info_tax_bill.js
 */
//global.b2link.STATIC.REGEXP.REPLACE.MONEY_COMMA0 = /(\d)(?=(\d{3} )+\.)/g;

/**
 * @property {RegExp}
 * @see global.b2link.util.getMoney
 */
global.b2link.STATIC.REGEXP.REPLACE.MONEY_COMMA1 = /\B(?=(\d{3})+(?!\d))/g;

/**
 * @property {RegExp}
 * @see global.b2link.util.getRemoveCommaFormatFloat
 */
global.b2link.STATIC.REGEXP.REPLACE.MONEY_COMMA2 = /[^\d]+/g;

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.STATIC.REGEXP;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.array;

global.b2link.array = global.b2link.array || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.array;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.common;

global.b2link.common = global.b2link.common || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.common;


//./global.b2link.common.clearInterval.js;
global.b2link.common.clearInterval=function(l){clearInterval(l)};

//./global.b2link.common.clearInterval_dispatchEvent.js;
global.b2link.common.clearInterval_dispatchEvent=function(l){clearTimeout(l),global.b2link.event.dispatchCustomEvent(tEl,global.b2link.event.INTERVAL_END,l)};

//./global.b2link.common.clearTimeout.js;
global.b2link.common.clearTimeout=function(o){clearTimeout(o)};

//./global.b2link.common.clearTimeout_dispatchEvent.js;
global.b2link.common.clearTimeout_dispatchEvent=function(l){clearTimeout(l),global.b2link.event.dispatchCustomEvent(tEl,global.b2link.event.TIMEOUT_END,l)};

//./global.b2link.common.setInterval.js;
global.b2link.common.setInterval=function(n,t){return setInterval(n,t)};

//./global.b2link.common.setInterval_dispatchEvent.js;
global.b2link.common.setInterval_dispatchEvent=function(t,n){var l=setInterval(t,n);return global.b2link.event.dispatchCustomEvent(tEl,global.b2link.event.INTERVAL_START,l),l};

//./global.b2link.common.setTimeout.js;
global.b2link.common.setTimeout=function(o,t){return setTimeout(o,t)};

//./global.b2link.common.setTimeout_dispatchEvent.js;
global.b2link.common.setTimeout_dispatchEvent=function(t,e,n){var l=setTimeout(t,e);return global.b2link.event.dispatchCustomEvent(n,global.b2link.event.TIMEOUT_START,l),l};


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.console;

global.b2link.console = global.b2link.console || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.console;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.date;

global.b2link.date = global.b2link.date || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.date;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.debug;

global.b2link.debug = global.b2link.debug || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.debug;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.event;

global.b2link.event = global.b2link.event || {};

//----------------------------------------------------------------------------------------------------;

//*/
global.process.on( "uncaughtException", function( error ){
	try
	{
		//debugger;
		global.TtwLog.error( error );
	}
	catch( e ){}
});
//*/

//----------------------------------------------------------------------------------------------------;

/**
 * CustomEvent를 Dispatch 시킨다.
 * @function
 * @param {HTMLElement} el
 * @param {String} evtType
 * @param {Obejct} evtDetail
 * @example
 * <code>
 * global.document.addEventListener( "asd", function( e ){ console.log( e ); }, false, 0, true );
 * global.b2link.event.dispatchCustomEvent( global.document, "asd", 1 );
 * global.b2link.event.dispatchEvent( global.document, "asd" );
 *
 * global.b2link.event.dispatchCustomEvent( global.document, "asd", { a : 1 } );
 * global.b2link.event.dispatchEvent( global.document, "asd" );
 * </code>
 */
global.b2link.event.dispatchCustomEvent=function(t,n,e){SUtilCustomEvent.dispatchCustomEvent(t,n,e)};

/**
 * Event를 Dispatch 시킨다.
 * @function
 * @param {HTMLElement} el
 * @param {String} evtType
 * @example
 * <code>
 * global.document.addEventListener( "asd", function( e ){ console.log( e ); }, false, 0, true );
 * global.b2link.event.dispatchCustomEvent( global.document, "asd", 1 );
 * global.b2link.event.dispatchEvent( global.document, "asd" );
 *
 * global.b2link.event.dispatchCustomEvent( global.document, "asd", { a : 1 } );
 * global.b2link.event.dispatchEvent( global.document, "asd" );
 * </code>
 */
global.b2link.event.dispatchEvent=function(t,n){global.TtwLog.info(t),global.TtwLog.info("evtType : "+n),SUtilCustomEvent.dispatchEvent(t,n)};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.event;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.fn;

global.b2link.fn = global.b2link.fn || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.fn;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.fs;

global.b2link.fs = global.b2link.fs || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.fs;

/**
 * @function
 * @param {String} path
 * @param {Object} routers
 * <code>
	{
		b2link_router : 1
	}
 * </code>
 */
global.b2link.fs.autoLoad_JS=function(a,o){global.Lib.Ttw.autoLoad_JS.addJSFiles___Define(a,o),global.Lib.Ttw.autoLoad_JS.addJSFiles_Package(a,o);var l=global.Lib.Ttw.autoLoad_JS.addRouter__JSFiles_Services;for(var i in o)l(a+i+"/")};

/**
 * @function
 * @param {Array} a
 * <code>
	[
		  [ "JavaScript Import - B2LiNK-B2Ker-Dev"					, "./js__b2link__b2ker/"					, { b2link_router : 1 } ]
		, [ "JavaScript Import - B2LiNK-ExcelServer-Dev"			, "./js__b2link__excelServer/"				, { b2link_router : 1 } ]
		, [ "JavaScript Import - B2LiNK-FileServer-Dev"				, "./js__b2link__fileServer/"				, { b2link_router : 1 } ]
		, [ "JavaScript Import - B2LiNK-SessionServer-Dev"			, "./js__b2link__sessionServer/"			, { b2link_router : 1 } ]
		, [ "JavaScript Import - B2LiNK-WebHookServer-Dev"			, "./js__b2link__webHookServer/"			, { b2link_router : 1 } ]
		, [ "JavaScript Import - B2LiNK-WebSocket-MessageServer-Dev", "./js__b2link__webSocketMessageServer/"	, { b2link_router : 1 } ]
	]
 * </code>
 */
global.b2link.fs.autoLoad_JSs=function(o){for(var a,l=0,n=o.length;n>l;++l)a=o[l],global.TtwLog.warn(a[0]),global.b2link.fs.autoLoad_JS(a[1],a[2])};

/**
 * *.dbjs 파일을 불러온다.
 * global._$TATIC_CONST_DEBUG가 true 이면 매번 파일을 갱신한다.
 * global._$TATIC_CONST_DEBUG가 false 이면 처음 1회 호출시에만 파일을 읽어온다.
 *
 * @function
 * @param {String} path
 * @return {String}
 */
!function(){var t={};global.b2link.fs.getDBJS=function(e){return t[e]||(t[e]=STtwUtilFsReadStream.getFile(e).toString("utf8")),global._$TATIC_CONST_DEBUG&&(t[e]=STtwUtilFsReadStream.getFile(e).toString("utf8"),SUtilFsWriteStream.writeFile_UTF8(e.replace(".dbjs",".query"),t[e])),t[e]},global.b2link.fs.getDBJS.clear=function(){t={}}}();

/**
 * *.dbjs 파일을 불러온다.
 * dbjs 내부 문자열중에 <require>global.mongodb.***</require>를 소스로 치환해준다.
 * MongoDB 상에 <require>global.mongodb.***</require>의 API가 존재할시엔 그냥 API를 호출한다.(차후)
 * global._$TATIC_CONST_DEBUG가 true/false 상관없이 처음 1회 호출시에만 파일을 읽어온다.
 *
 * @function
 * @param {String} path
 * @return {String}
 */
!function(){var r={};global.b2link.fs.getDBJS__require=function(e){var i,l=16,t=10,a=-1,n=-1;if(!r[e]){for(var o=STtwUtilFsReadStream.getFile(e).toString("utf8");;){if(a=o.indexOf("<require>global."),-1==a)break;if(n=o.indexOf("</require>"),-1!=n){i=n+t;var f=o.slice(a,i),g=o.slice(a+l,n),u=Lib.Ttw.eval(g);if(!u)return global.TtwLog.error(g+" 경로에 문제가 있음."),new Error(g+" 경로에 문제가 있음.");var b=u.toString();o=o.replace(f,b)}}r[e]=o}return global._$TATIC_CONST_DEBUG&&SUtilFsWriteStream.writeFile_UTF8(e.replace(".dbjs",".query"),r[e]),r[e]},global.b2link.fs.getDBJS__require.clear=function(){r={}}}();

/**
 * *.dbjs 파일을 불러온다.
 * global._$TATIC_CONST_DEBUG가 true 이면 매번 파일을 갱신한다.
 * global._$TATIC_CONST_DEBUG가 false 이면 처음 1회 호출시에만 파일을 읽어온다.
 *
 * @function
 * @param {String} path *.dbjs 파일 경로
 * @param {String} nm_db Database Name
 * @param {String} nm_col Collection Name
 * @return {Object}
 * <code>
	{
		nm_db : {String}//Database Name;
		, nm_col : {String}//Collection Name;
		, q : {String}//Query;
		, s : {String}//"c", "r", "u", "d";
	}
 * </code>
 */
!function(){var t={};global.b2link.fs.getDBJSObj=function(e,l,r){if(!t[e]){var a=STtwUtilFsReadStream.getFile(e).toString("utf8"),o=global.mongodb.dbjs.getCRUDStatusFromQuery(a,l,r);t[e]={nm_db:l,nm_col:r,q:a,s:o.replace("_","")}}if(global._$TATIC_CONST_DEBUG){var a=STtwUtilFsReadStream.getFile(e).toString("utf8"),o=global.mongodb.dbjs.getCRUDStatusFromQuery(a,l,r);t[e]={nm_db:l,nm_col:r,q:a,s:o.replace("_","")},SUtilFsWriteStream.writeFile_UTF8(e.replace(".dbjs",".query"),t[e].q)}return t[e]},global.b2link.fs.getDBJSObj.clear=function(){t={}}}();

/**
 * *.dbjs 파일을 불러온다.
 * dbjs 내부 문자열중에 <require>global.mongodb.***</require>를 소스로 치환해준다.
 * MongoDB 상에 <require>global.mongodb.***</require>의 API가 존재할시엔 그냥 API를 호출한다.(차후)
 * global._$TATIC_CONST_DEBUG가 true/false 상관없이 처음 1회 호출시에만 파일을 읽어온다.
 *
 * @function
 * @param {String} path *.dbjs 파일 경로
 * @param {String} nm_db Database Name
 * @param {String} nm_col Collection Name
 * @return {Object}
 * <code>
	{
		nm_db : {String}//Database Name;
		, nm_col : {String}//Collection Name;
		, q : {String}//Query;
		, s : {String}//"c", "r", "u", "d";
	}
 * </code>
 */
!function(){var r={};global.b2link.fs.getDBJSObj__require=function(e,i,l){var t,a=16,o=10,n=-1,b=-1;if(!r[e]){for(var g=STtwUtilFsReadStream.getFile(e).toString("utf8");;){if(n=g.indexOf("<require>global."),-1==n)break;if(b=g.indexOf("</require>"),-1!=b){t=b+o;var u=g.slice(n,t),f=g.slice(n+a,b),_=Lib.Ttw.eval(f);if(!_)return global.TtwLog.error(f+" 경로에 문제가 있음."),new Error(f+" 경로에 문제가 있음.");var c=_.toString();g=g.replace(u,c)}}var s=global.mongodb.dbjs.getCRUDStatusFromQuery(g,i,l);r[e]={nm_db:i,nm_col:l,q:query,s:s.replace("_","")}}return global._$TATIC_CONST_DEBUG&&SUtilFsWriteStream.writeFile_UTF8(e.replace(".dbjs",".query"),r[e].q),r[e]},global.b2link.fs.getDBJSObj__require.clear=function(){r={}}}();

/**
 * @function
 * @param {String} path
 * @return {Array}
 */
global.b2link.fs.getDirectoryList=function(t){return STtwUtilFsReadStream.getList_Directory(t)};

/**
 * @function
 * @param {String} path
 * @return {Byte}
 */
global.b2link.fs.getFile=function(e){return STtwUtilFsReadStream.getFile(e)};

/**
 * @function
 * @param {String} path
 * @return {String}
 */
global.b2link.fs.getFile_UTF8=function(t){return STtwUtilFsReadStream.getFile(t).toString("utf8")};

/**
 * @function
 * @param {String} path
 * @return {Array}
 */
global.b2link.fs.getFileList=function(t){return STtwUtilFsReadStream.getList_File(t)};

/**
 * @function
 * @param {String} path directory path
 * @param {String} extension ".json", ".txt", ... file extension
 * @return {Array}
 */
global.b2link.fs.getFileList_Extension=function(t,e){return STtwUtilFsReadStream.getList_File_Extension(t,e)};

/**
 * @function
 * @param {String} path
 * @return {String}
 */
global.b2link.fs.getJS__includeJS=function(e){for(var l,i=12,n=13,t=-1,a=-1,f=STtwUtilFsReadStream.getFile(e).toString("utf8");;){if(t=f.indexOf("<include-js>global."),-1==t)break;if(a=f.indexOf("</include-js>"),-1!=a){l=a+n;var r=f.slice(t,l),c=f.slice(t+i,a),g=global.b2link.fs.getFile_UTF8(c);f=f.replace(r,g)}}return f};

/**
 * @function
 * @param {String} path
 * @return {Object}
 */
global.b2link.fs.getJSON_UTF8=function(l){return JSON.parse(global.b2link.fs.getFile_UTF8(l))};

/**
 * @function
 * @param {String} fileNm
 * @param {String} s
 * @param {Object} options
 * @param {Function} cb_Complete
 */
global.b2link.fs.writeFile=function(i,t,e,l){STtwUtilFsWriteStream.writeFile(i,t,e,l)};

/**
 * @function
 * @param {String} fileNm
 * @param {ByteArray} d
 * @param {Object} options
 * @param {Function} cb_Complete
 */
global.b2link.fs.writeFile_Binary=function(i,t,e,l){STtwUtilFsWriteStream.writeFile_Binary(i,t,e,l)};

/**
 * @function
 * @param {String} fileNm
 * @param {String} s
 * @param {Function} cb_Complete function( error ){}
 */
global.b2link.fs.writeFile_UTF8=function(i,t,e){STtwUtilFsWriteStream.writeFile_UTF8(i,t,e),e&&e()};

/**
 * @function
 * @param {String} fileNm
 * @param {String} s
 */
global.b2link.fs.writeFile_UTF8__NCallBack=function(i,l){STtwUtilFsWriteStream.writeFile_UTF8(i,l)};

/**
 * @function
 * @param {String} fileNm
 * @param {String} s
 * @param {Function} cb_Complete
 */
global.b2link.fs.writeQuery=function(i,t,e){STtwUtilFsWriteStream.writeFile_UTF8(i,t,e)};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.ip;

global.b2link.ip = global.b2link.ip || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.ip;

/**
 * @function
 * @param {String} ip
 * @return {Boolean}
 */
//!function(){var V=JSON.parse(Lib.Ttw.abt("VjJ4b2MxTnRWa1ppU0VacFRUSm9UbFZVUW5kbGJHeHhVMnM1YUZJd2NFbFpWV2hoWVdzd2VGSnVRbFZOYmtKSFdYcENjMk5XU2xsaVJUbHNWa1pKZWxaRlpIZFJiVkpXVFZaU1ZGWkdjRTlXVkU1clkwWlJlV05JV214U1YzaDRXV3BPYjFSV1JYZGhla3BWVFdwRk1GcEhlSEpsVmtwMVZHMW9VMlZ0ZHpKWGExWlBVMnMxY2sxV1VtdE5iWGhSV1Zjd05VNUdVbGhqUjNCclZsUkdSVlJyYUd0VVYwWnlWbTVDVlUxdVFrZFpla0p6WTFkS05sZHRSbWxXYmtJd1ZqSXhkMlJ0VmtabFNFWlVWMGRvVDFsV1VsSmxiRkpYVkZSQ1QxWlViRVZWTVZKaFZHeFZlbHBJUWxWTmJrSXpXV3hhZDJSR1pIUk5Wa0pvWVRGWmVGWkdaSGRTYlZaV1pVaEdXazB5YUU1WlZ6RjZUVlpPV0dOSVdtdE5TR2hGVlRGb2MxUnRSbkppUkVaVlZqTkNUMVJzVmpSalZrcFpXa1V4YUdFeFdUQldSM2hQVTJzMWNrMVZVbXROYlhoUFdWZDBjMDVXVWtoalJYQnNZWHBzVlZScmFHOVViRVkyVldwU1ZWWnNTbUZaVmxVMVkxWkdXVlJyY0doaE1uY3hWa1prY2sxSFZsWk5WRnBvVFRGYVQxWnJWa2ROVmxKWFZXdHdhMDFIZUhoWmFrNXJWRlpGZDJKRVZsVldNMEpMV2taVmVHTldVbFZXYXpGb1lURlplbFpGWkhkU2JWWldUVlpTVkZaR2NGaFpiR2hEVkVaU1ZsZHNjR3hXYTNCYVdXdGFVMWRHU1hwaFJsWlhZV3RLY2xScldscGxSMHBIVm14U2FWWkhlSGhXYlRFMFZqQXdlR0pHV2xkaGVteHZWVzEwZDJWc1dYbGpSV1JZWVhwR1NGa3dhRXRYYkZsNllVZG9WMkpZUWt4VVZWcGFaVlpLV1dKR1VsaFNNMmhWVm1wQ2EwNUdXWGhpUmxaVVlsUnNjVlp0ZUZkTk1XeFdWbXM1YUZKcmNIcFdNbkJIVjJzeFIyTklTbHBXTTJob1ZtMXdTMDFHV1hsU1dHeFVWMGQ0VkZZd1pEUldNV3hWVTIwNWFsWnNWak5aVlZaUFlVWktjMWRxUmxwTlJuQnlXVmQ0WVZacVNqQldNa1Y1VTFoc1UxZEhlRmRaVkVwdlkxWlZkMkZGVG1oU2JGb3hXVEJhYTJGc1ZqSjBWMkV5U1hsU1dHeFdZVEpvY1ZVd2FFTmhSbFoxWTBaa2FsWnRlRmxVYkZVMVZHc3hjbUl6Y0ZaU2JFWXpWVVpGT1ZCUlBUMD1XblJsUm14VllrWlZNVlpIYzNoamJVbDZZMFphVTJKRldYcFdWVnBHVDFaQ1VsQlVNRDFrUjFaSFlrWldhVkpzVlhoV2EyUjZaVWRPZEZOWWNHcFNiSEJVV1d0V1dtVnNXbFpYYTFwUVZtdEtVMVZHVVhkUVYxSklWbXRrYVZKc1duQlZiWGhXWlVaYWNscEljR3hTTURVd1ZURm9kMkZzU25OalJsSmFZVEZhWVZwWGVHRldiR1J5VjJ4Q1YyRXdjRlJXVlZwU1pERkNXRlZyYUZkaE1sSndWVzE0WVdOR1ZuUmxSbHBzVW14d2VWZHJhSGRpUmtsM1RsUkNWazFYYUROWlYzaExZekpPUjFWc2NHaE5WbkJvVjJ4a05GbFdXbk5hU0VwWVlrVktXRmxVUW5kV1JscFdWMnhLYTAxVlNsWlZWbWhQVTIxR2NtSkVWbFZXTW5OM1dsWlZlRTV0UlhwV2F6VlhVbFZaZUZaR1dsTlRiVlpXWWtoR2FVMHlVazVWVkVKelRsWlNXR05GY0d0V1ZFWjRWa1pTVjFSWFJuSldhazVWVWpOQ1IxcFdWWGhPVms1VlYyczFVazB5VW5kV1JFcDNaREpLVjJOSVVsaGlWRVpSV1ZkMGMwNVdVbGhoZWtKc1ZsUkZNbGxVVGxkVWJGcEdVbXBHVlZac1NrZFVWbFp6WTFkSmVscEZNVkpOUjNONVZrUkplRmxYU2xkalNGSllWa1p3VDFsWGRITk9WbEpJWTBWd2JHRjZiRlZVYTJodlZHeEdObFZxVWxWV2JFcGhXVlpWTldOV1JsbFVhM0JvWWxSbmVWWXlNSGhaVjBwWFkwaEdhVTB5ZUU5WlYzUnpUVlpTV0dORk5VOVdXR2g0Vld4b2ExUlhSbkpXYWxaVlZsVTFTMVJ0YzNoU1IxRjVZa1pDYUdKclNqQldNakI0V1ZkS1ZrOVlSbFJYUjNoUFdWWlNVMDVXVWxsalNFcHJWbFJHVmxWV2FGZFViRnBHWWtSU1ZGWXpRakphUkVJMFVrWk9WVmRzUW1sV2JrSXdWakl3ZUZkck5YSk5XRVpVVjBkNFRsbFhkSE5PYkZGNFZGUkNiRkpVUmtWVWEyaHZWRzFHY21KSVFsVk5ia0pEV1hwQ2MyTlhTalpYYlVacFZtNUNNRll5TVhka2JWWldUVmhHVkZkR1drOVpWM04zVFZaU1NHTkZXbXROU0doNFZXeG9jMVJ0VmxaaGVrcFZWbGRrTTFWR1JUbFFVVDA5",5));global.b2link.ip.adminCheckAvailable=function(W){return V.hasOwnProperty(W)?V[W]:0}}();
//!function(){var f={1:1,localhost:1,"127.0.0.1":1,"::1":1,"::localhost":1,"::127.0.0.1":1,"::ffff:localhost":1,"::ffff:127.0.0.1":1,"::ffff:1.212.71.98":1,"::ffff:1.212.71.99":0,"222.239.10.115":0,"222.239.10.116":0,"222.239.10.120":0,"222.239.10.121":0,"222.239.10.122":0,"222.239.10.123":0,"::ffff:222.239.10.115":0,"::ffff:222.239.10.116":0,"::ffff:222.239.10.120":0,"::ffff:222.239.10.121":0,"::ffff:222.239.10.122":0,"::ffff:222.239.10.123":0};global.b2link.ip.adminCheckAvailable=function(l){return f.hasOwnProperty(l)?f[l]:0}}();
!function(){var f={1:1,localhost:1,"127.0.0.1":1,"::1":1,"::localhost":1,"::127.0.0.1":1,"::ffff:localhost":1,"::ffff:127.0.0.1":1,"::ffff:1.212.71.98":1,"::ffff:1.212.71.99":0,"222.239.10.115":0,"222.239.10.116":0,"222.239.10.120":1,"222.239.10.121":0,"222.239.10.122":0,"222.239.10.123":0,"::ffff:222.239.10.115":0,"::ffff:222.239.10.116":0,"::ffff:222.239.10.120":1,"::ffff:222.239.10.121":0,"::ffff:222.239.10.122":0,"::ffff:222.239.10.123":0};global.b2link.ip.adminCheckAvailable=function(l){return f.hasOwnProperty(l)?f[l]:0}}();

/**
 * @function
 * @param {http.ClientRequest} req
 * @param {http.ClientRequest} res
 * @return {Boolean}
 */
global.b2link.ip.adminCheckAvailable__http$ClientRequest=function(e,l){try{return global.b2link.ip.adminCheckAvailable(e.client.remoteAddress)}catch(i){global.TtwLog.error("global.b2link.ip.adminCheckAvailable__http$ClientRequest::req.client Error : "+i)}try{return global.b2link.ip.adminCheckAvailable(e.connection.remoteAddress)}catch(i){global.TtwLog.error("global.b2link.ip.adminCheckAvailable__http$ClientRequest::req.connection Error : "+i)}};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.log;

global.b2link.log = global.b2link.log || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.log;

//./global.b2link.log.comment_Dash_20.js;
global.b2link.log.comment_Dash_20 = function(){global.TtwLog.timeStamp( "//--------------------;" );};

//./global.b2link.log.comment_Dash_30.js;
global.b2link.log.comment_Dash_30 = function(){global.TtwLog.timeStamp( "//------------------------------;" );};

//./global.b2link.log.comment_Dash_40.js;
global.b2link.log.comment_Dash_40 = function(){global.TtwLog.timeStamp( "//----------------------------------------;" );};

//./global.b2link.log.comment_Dash_50.js;
global.b2link.log.comment_Dash_50 = function(){global.TtwLog.timeStamp( "//--------------------------------------------------;" );};

//./global.b2link.log.comment_Dash_60.js;
global.b2link.log.comment_Dash_60 = function(){global.TtwLog.timeStamp( "//------------------------------------------------------------;" );};

//./global.b2link.log.comment_Dash_70.js;
global.b2link.log.comment_Dash_70 = function(){global.TtwLog.timeStamp( "//----------------------------------------------------------------------;" );};

//./global.b2link.log.comment_Dash_80.js;
global.b2link.log.comment_Dash_80 = function(){global.TtwLog.timeStamp( "//--------------------------------------------------------------------------------;" );};

//./global.b2link.log.comment_Dash_90.js;
global.b2link.log.comment_Dash_90 = function(){global.TtwLog.timeStamp( "//------------------------------------------------------------------------------------------;" );};

//./global.b2link.log.comment_Dash_100.js;
global.b2link.log.comment_Dash_100 = function(){global.TtwLog.timeStamp( "" );};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.math;

global.b2link.math = global.b2link.math || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.math;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.obj;

global.b2link.obj = global.b2link.obj || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.obj;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.request;

global.b2link.request = global.b2link.request || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.request;

/**
 * @function
 * @param {String} url
 * @param {Function} cbComplete
 * @param {Object} headers
 */
global.b2link.request.get=function(t,r,e){var o=STtwUtilURL.getParseResult(t),l=o.host.split(":"),n={encoding:"utf8",options:{host:l[0],port:l[1],path:o.path,headers:e?e:null},cbFunctions:{end:r,error:global.b2link.request.get._error}};try{STtwUtilHttp.request_GET(n)}catch(g){global.TtwLog.error(g)}},global.b2link.request.get._error=function(t){global.TtwLog.error(t)};

/**
 * @function
 * @param {String} url
 * @param {Function} cbComplete
 * @param {Object} headers
 */
global.b2link.request.get__Binary=function(t,r,e){var o=STtwUtilURL.getParseResult(t),n=o.host.split(":"),l={encoding:"binary",options:{host:n[0],port:n[1],path:o.path,headers:e?e:null},cbFunctions:{end:r}};try{STtwUtilHttp.request_GET__Binary(l)}catch(a){global.TtwLog.error(a)}},global.b2link.request.get__Binary._error=function(t){global.TtwLog.error(t)};

/**
 * Session을 체크한 후 Callback 함수를 호출한다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {String} q query Session 체크를 위한 데이터
 * @param {Function} cb_complete function( result ){} Session 체크 후 실행시킬 Callback 함수(성공 & 실패)
 */
//global.b2link.request.get__member_session$checkSession=function(e,s,l,i){global.b2link.request.get(global.b2link_router.STATIC.CONFIG.URL.MEMBER.MEMBER_SESSION.CHECK_SESSION+"sid="+l.sid,i,e.headers)};
global.b2link.request.get__member_session$checkSession=function(e,s,l,i){global.b2link.request.get(global.b2link.url.getServerURLByServers("session_server")+"/member/session/check_session?sid="+l.sid,i,e.headers)};

/**
 * ClientRequest에 포함되어온 Session을 인증 후 MongoDB로 Request함.
 * MongoDB 까지의 Request가 종료된 후엔 DB로부터 전달받을 데이터를 바로 ClientResponse로 작성하여 Client Browser로 전달한다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {String} q query Session 체크를 위한 데이터
 * @param {String} db mongodb Name 사용하게 될 Database Name
 * @param {String} nq next query Session 인증 후 실행될 Query
 */
//global.b2link.request.get__member_session$checkSessionAndReqMongoDB=function(l,e,o,n,r){var b=global.server;global.b2link.request.get(global.b2link_router.STATIC.CONFIG.URL.MEMBER.MEMBER_SESSION.CHECK_SESSION+"sid="+o.sid,function(_){return 0==global.b2link.response.getResultStatus(_)?(global.b2link.response.send_200_False(l,e),void global.b2link_router.STATIC.REQUEST_COUNT.M1()):(o.db=n,o.q=r,global.b2link_router.STATIC.REQUEST_COUNT.P1(),b.req_DB(l,e,o,function(n,r){return n?(global.b2link_router.STATIC.REQUEST_COUNT.M1(),void global.b2link.response.send_200_False__ErrorLog(l,e,o,n)):(global.b2link_router.STATIC.REQUEST_COUNT.M1(),void global.b2link.response.send_200_JSON(l,e,r))}),void global.b2link_router.STATIC.REQUEST_COUNT.M1())},l.headers)};
global.b2link.request.get__member_session$checkSessionAndReqMongoDB=function(l,e,o,n,r){var b=global.server;global.b2link.request.get(global.b2link.url.getServerURLByServers("session_server")+"/member/session/check_session?sid="+o.sid,function(_){return 0==global.b2link.response.getResultStatus(_)?(global.b2link.response.send_200_False(l,e),void global.b2link_router.STATIC.REQUEST_COUNT.M1()):(o.db=n,o.q=r,global.b2link_router.STATIC.REQUEST_COUNT.P1(),b.req_DB(l,e,o,function(n,r){return n?(global.b2link_router.STATIC.REQUEST_COUNT.M1(),void global.b2link.response.send_200_False__ErrorLog(l,e,o,n)):(global.b2link_router.STATIC.REQUEST_COUNT.M1(),void global.b2link.response.send_200_JSON(l,e,r))}),void global.b2link_router.STATIC.REQUEST_COUNT.M1())},l.headers)};

/**
 * ClientRequest에 포함되어온 Session을 인증 후 MongoDB로 Request함.
 * MongoDB 까지의 Request가 종료된 후엔 DB로부터 전달받을 데이터를 바로 ClientResponse로 작성하여 Client Browser로 전달한다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {String} q query Session 체크를 위한 데이터
 * @param {String} db mongodb Name 사용하게 될 Database Name
 * @param {String} nq next query Session 인증 후 실행될 Query
 * @param {Function} cbFunction Session 인증 후 Query까지 요청/응답 후 응답된 데이터를 넘겨받아 실행될 Callback 함수
 *	function( req, res, error, result ){} 형태로 작성되는 함수.
 */
//사용하지 않는 Repository를 위한 try catch;
try{!function(){var e=global.b2link.fs.getDBJS("./js__b2link__sessionServer/b2link_router/member/session/check_session.dbjs");global.b2link.request.get__member_session$checkSessionAndReqMongoDB__CallBack=function(s,n,o,l,r,i){var b=global.server,b=global.server;o.db="member",o.q=e.replace("<!=sid=!>",o.sid),b.req_DB(s,n,o,function(e,a){return e?void global.b2link.response.send_200_False(s,n):void(0==a?global.b2link.response.send_301_DestroySession(s,n):1==a&&(o.db=l?l:"admin",o.q=r,b.req_DB(s,n,o,function(e,o){i(s,n,e,o)})))})}}();}catch(e){}

/**
 * @function
 * @param {HTTPClientRequest} req
 * @param {HTTPClientResponse} res
 * @param {String} q query
 * @param {String} db mongod Name
 * @param {String} nq next query
 */
//global.b2link.request.get__member_session$checkSessionAndReqNameFromsid=function(e,l,o){var r=global.server;global.b2link.request.get(global.b2link_router.STATIC.CONFIG.URL.MEMBER.MEMBER_SESSION.CHECK_SESSION+"sid="+o.sid,function(_){return 0==global.b2link.response.getResultStatus(_)?(global.b2link.response.send_200_False(e,l),void global.b2link_router.STATIC.REQUEST_COUNT.M1()):(o.db="member",o.q='member_session$getProp__idFromsid("'+o.sid+'")',global.b2link_router.STATIC.REQUEST_COUNT.P1(),r.req_DB(e,l,o,function(_,b){return _?(global.b2link_router.STATIC.REQUEST_COUNT.M1(),void global.b2link.response.send_200_False__ErrorLog(e,l,o,_)):(global.b2link_router.STATIC.REQUEST_COUNT.M1(),o.db="member",o.q="member_public$getProp_NameFrom_id("+b+")",global.b2link_router.STATIC.REQUEST_COUNT.P1(),void r.req_DB(e,l,o,function(r,_){return r?(global.b2link_router.STATIC.REQUEST_COUNT.M1(),void global.b2link.response.send_200_False__ErrorLog(e,l,o,r)):(global.b2link_router.STATIC.REQUEST_COUNT.M1(),void global.b2link.response.send_200_JSON(e,l,_))}))}),void global.b2link_router.STATIC.REQUEST_COUNT.M1())},e.headers)};
global.b2link.request.get__member_session$checkSessionAndReqNameFromsid=function(e,l,o){var r=global.server;global.b2link.request.get(global.b2link.url.getServerURLByServers("session_server")+"/member/session/check_session?sid="+o.sid,function(_){return 0==global.b2link.response.getResultStatus(_)?(global.b2link.response.send_200_False(e,l),void global.b2link_router.STATIC.REQUEST_COUNT.M1()):(o.db="member",o.q='member_session$getProp__idFromsid("'+o.sid+'")',global.b2link_router.STATIC.REQUEST_COUNT.P1(),r.req_DB(e,l,o,function(_,b){return _?(global.b2link_router.STATIC.REQUEST_COUNT.M1(),void global.b2link.response.send_200_False__ErrorLog(e,l,o,_)):(global.b2link_router.STATIC.REQUEST_COUNT.M1(),o.db="member",o.q="member_public$getProp_NameFrom_id("+b+")",global.b2link_router.STATIC.REQUEST_COUNT.P1(),void r.req_DB(e,l,o,function(r,_){return r?(global.b2link_router.STATIC.REQUEST_COUNT.M1(),void global.b2link.response.send_200_False__ErrorLog(e,l,o,r)):(global.b2link_router.STATIC.REQUEST_COUNT.M1(),void global.b2link.response.send_200_JSON(e,l,_))}))}),void global.b2link_router.STATIC.REQUEST_COUNT.M1())},e.headers)};

/**
 * 사용금지
 * 제거금지(특별 케이스에서만 사용중)
 * 이 API를 직업 wrapping한 router 생성 금지(소스 체크를 통해 찾기가능)
 * Session check 없이 MongoDB에 Query가 가능한 API
 * @function
 * @param {HTTPClientRequest} req
 * @param {HTTPClientResponse} res
 * @param {String} db mongod Name
 * @param {String} q query
 */
//global.b2link.request.get__ReqMongoDB=function(l,o,e,r){var n=global.server;global.b2link_router.STATIC.REQUEST_COUNT.P1(),n.req_DB(l,o,{db:e,q:r},function(e,n){return e?(global.b2link_router.STATIC.REQUEST_COUNT.M1(),void global.b2link.response.send_200_False__ErrorLog(l,o,r,e)):(global.b2link_router.STATIC.REQUEST_COUNT.M1(),void global.b2link.response.send_200_JSON(l,o,n))})};
global.b2link.request.get__ReqMongoDB=function(e,l,o,r){var b=global.server;global.b2link_router.STATIC.REQUEST_COUNT.P1(),b.req_DB(e,l,{db:o,q:r},function(o,b){return o?(global.b2link_router.STATIC.REQUEST_COUNT.M1(),global.b2link.response.setHeaders__b2ker(l),void global.b2link.response.send_200_False__ErrorLog(e,l,r,o)):(global.b2link_router.STATIC.REQUEST_COUNT.M1(),global.b2link.response.setHeaders__b2ker(l),void global.b2link.response.send_200_JSON(e,l,b))})};

/**
 * @function
 * @param {String} url
 * @param {Function} cbComplete
 * @param {Object} headers
 * @param {String|Object} data
 * @example
 * <code>
	global.b2link.request.post(
		"http://www.example.org/example.txt"
		, {
			"abort" : function(){}//request;
			, "connect" : function( response, socket, head ){}//request;
			, "continue" : function(){}//request;
			, "data" : function( chunk ){ console.log( chunk ); }//res;
			, "end" : function( data ){ console.log( data ); }//res;
			, "error" : function( error ){ console.log( error ); }//request, res;
			, "response" : function( response ){ console.log( response ); }//request;
			, "socket" : function( socket ){ console.log( socket ); }//request;
			, "upgrade" : function( response, socket, head ){}//request;
			, "timeout" : function(){}//reqeust;
		}
		, { "asd" : "asd", "bcv" : "bcv" }
		, ""//String or Buffer;
	);

	global.b2link.request.post(
		"html5rocks.com"
		, {
			"abort" : function(){}//request;
			, "connect" : function( response, socket, head ){}//request;
			, "continue" : function(){}//request;
			, "data" : function( chunk ){ console.log( chunk ); }//res;
			, "end" : function( data ){ console.log( data ); }//res;
			, "error" : function( error ){ console.log( error ); }//request, res;
			, "response" : function( response ){ console.log( response ); }//request;
			, "socket" : function( socket ){ console.log( socket ); }//request;
			, "upgrade" : function( response, socket, head ){}//request;
			, "timeout" : function(){}//reqeust;
		}
		, { "asd" : "asd", "bcv" : "bcv" }
		, ""//String or Buffer;
	);
 * </code>
 */
global.b2link.request.post=function(t,o,e,l){var s=STtwUtilURL.getParseResult(t);if(s.protocol&&s.host){var r=s.host.split(":"),i={encoding:"utf8",options:{host:r[0],port:r[1],path:s.path,headers:e?e:null,rejectUnauthorized:!1},cbFunctions:o,data:l};global.b2link_router.STATIC.REQUEST_COUNT.P1(),"https:"==s.protocol?STtwUtilHttps.request_POST(i):STtwUtilHttp.request_POST(i)}};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.response;

global.b2link.response = global.b2link.response || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.response;

/**
 * Client Browser에 false를 보낸다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 */
global.b2link.response.send_200_False=function(e,s){s&&(global.b2link.response.setHeaders__b2ker(s),global.server.sendResponse_200_False(e,s))};

/**
 * 사용금지
 * Client Browser에 Error Log(문자열:String) 데이터를 보낸다.
 * 아직 Error Log 미정의
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {Object} q query
 * @param {*} error
 */
global.b2link.response.send_200_False__ErrorLog=function(e,r,l,o){global.TtwLog.error(l.q+" Error : "+o),r&&(global.b2link.response.setHeaders__b2ker(r),global.b2link.response.send_200_False(e,r))};

//--------------------------------------------------;

/**
 * Client Browser에 File을 전달한다.
 * 파일 전송 완료시 Callback 함수를 호출 한다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * <code>
	{
		data : ""
	}
 * </code>
 *
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 *
 * @param {Object} d
 * <code>
	{
		filePath : ""
		, fileNm : ""
		, cbFunction : function( e ){}
	}
 * </code>
 * @param {String} filePath 파일 경로
 *
 * @dependency global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES
 * <code>
	global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES = {
		bmp : "image/bmp"
		, css : "text/css"
		, html : "text/html"
		, jpeg : "image/jpeg"
		, jpg : "image/jpeg"
		, js : "application/javascript"
		, json : "text/json"
		, png : "image/png"
		, txt : "text/plain"
		, xml : "text/xml"
		, xlsx : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
	};
 * </code>
 */
//FileName에 encodeURI가 없음;
//try{global.REQUIRES=global.REQUIRES||{};var _fs=require("fs"),_path=require("path");global.REQUIRES.__defineGetter__("fs",function(){return _fs}),global.REQUIRES.__defineGetter__("path",function(){return _path})}catch(e){}global.b2link.response.sendStream_200_File=function(e,t,l){if(global.TtwLog.timeStamp("req.url : "+e.url),t){var n,a=global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES;l.cbFunction&&t.on("finish",function(e){l.cbFunction(e,l.filePath)});try{n=global.REQUIRES.fs.lstatSync(l.filePath)}catch(i){return void global.b2link.response.send_404(t)}if(n.isFile()){t.writeHead(200,{"Content-Type":a[global.REQUIRES.path.extname(l.filePath).split(".").reverse()[0]],"Content-Disposition":"attachment; filename="+l.fileNm});var r=global.REQUIRES.fs.createReadStream(l.filePath);r.pipe(t)}else n.isDirectory()?(t.writeHead(200,{"Content-Type":a.txt}),t.end()):global.b2link.response.send_500(t)}};
//FileName에 encodeURI가 있음;
try{global.REQUIRES=global.REQUIRES||{};var _fs=require("fs"),_path=require("path");global.REQUIRES.__defineGetter__("fs",function(){return _fs}),global.REQUIRES.__defineGetter__("path",function(){return _path})}catch(e){}global.b2link.response.sendStream_200_File=function(e,t,n){if(t){var a,i=global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES;n.cbFunction&&t.on("finish",function(e){n.cbFunction(e,n.filePath)});try{a=global.REQUIRES.fs.lstatSync(n.filePath)}catch(l){return void global.b2link.response.send_404(t)}if(a.isFile()){t.writeHead(200,{"Content-Type":i[global.REQUIRES.path.extname(n.filePath).split(".").reverse()[0]],"Content-Disposition":"attachment; filename="+encodeURI(n.fileNm)});var o=global.REQUIRES.fs.createReadStream(n.filePath);o.pipe(t)}else a.isDirectory()?(t.writeHead(200,{"Content-Type":i.txt}),t.end()):global.b2link.response.send_500(t)}};

/**
 * Client Browser에 File을 전달한다.
 * 파일 전송 완료시 Callback 함수를 호출 하지 않는 다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * <code>
	{
		data : ""
	}
 * </code>
 *
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 *
 * @param {Object} d
 * <code>
	{
		filePath : ""
		, fileNm : ""
	}
 * </code>
 * @param {String} filePath 파일 경로
 *
 * @dependency global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES
 * <code>
	global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES = {
		bmp : "image/bmp"
		, css : "text/css"
		, html : "text/html"
		, jpeg : "image/jpeg"
		, jpg : "image/jpeg"
		, js : "application/javascript"
		, json : "text/json"
		, png : "image/png"
		, txt : "text/plain"
		, xml : "text/xml"
		, xlsx : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
	};
 * </code>
 */
//FileName에 encodeURI가 없음;
//try{global.REQUIRES=global.REQUIRES||{};var _fs=require("fs"),_path=require("path");global.REQUIRES.__defineGetter__("fs",function(){return _fs}),global.REQUIRES.__defineGetter__("path",function(){return _path})}catch(e){}global.b2link.response.sendStream_200_File_NCallback=function(e,t,l){if(global.TtwLog.timeStamp("req.url : "+e.url),t){var a,n=global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES;try{a=global.REQUIRES.fs.lstatSync(l.filePath)}catch(r){return void global.b2link.response.send_404(t)}if(a.isFile()){t.writeHead(200,{"Content-Type":n[global.REQUIRES.path.extname(l.filePath).split(".").reverse()[0]],"Content-Disposition":"attachment; filename="+l.fileNm});var i=global.REQUIRES.fs.createReadStream(l.filePath);i.pipe(t)}else a.isDirectory()?(t.writeHead(200,{"Content-Type":n.txt}),t.end()):global.b2link.response.send_500(t)}};
//FileName에 encodeURI가 있음;
try{global.REQUIRES=global.REQUIRES||{};var _fs=require("fs"),_path=require("path");global.REQUIRES.__defineGetter__("fs",function(){return _fs}),global.REQUIRES.__defineGetter__("path",function(){return _path})}catch(e){}global.b2link.response.sendStream_200_File_NCallback=function(e,t,a){if(t){var l,n=global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES;try{l=global.REQUIRES.fs.lstatSync(a.filePath)}catch(i){return void global.b2link.response.send_404(t)}if(l.isFile()){t.writeHead(200,{"Content-Type":n[global.REQUIRES.path.extname(a.filePath).split(".").reverse()[0]],"Content-Disposition":"attachment; filename="+encodeURI(a.fileNm)});var r=global.REQUIRES.fs.createReadStream(a.filePath);r.pipe(t)}else l.isDirectory()?(t.writeHead(200,{"Content-Type":n.txt}),t.end()):global.b2link.response.send_500(t)}};

/**
 * Client Browser에 File을 전달한다.
 * 파일 URI를 주입 받는다.
 * 파일 URI에 ROOT Path를 더하여 파일을 찾아 전송한다.
 * 파일 전송 완료시 Callback 함수를 호출 한다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * <code>
	{
		data : ""
	}
 * </code>
 *
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 *
 * @param {String} rootPath 파일 경로
 * @param {String} uri URI 문자열
 * @param {Function} cbFunction function( e ){}
 *
 * @dependency global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES
 * <code>
	global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES = {
		bmp : "image/bmp"
		, css : "text/css"
		, html : "text/html"
		, jpeg : "image/jpeg"
		, jpg : "image/jpeg"
		, js : "application/javascript"
		, json : "text/json"
		, png : "image/png"
		, txt : "text/plain"
		, xml : "text/xml"
		, xlsx : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
	};
 * </code>
 */
try{global.REQUIRES=global.REQUIRES||{};var _fs=require("fs"),_path=require("path");global.REQUIRES.__defineGetter__("fs",function(){return _fs}),global.REQUIRES.__defineGetter__("path",function(){return _path})}catch(e){}global.b2link.response.sendStream_200_File_URI=function(e,t,r,l,o){return global.TtwLog.timeStamp("---- [ S ] - global.b2link.response.sendStream_200_File_URI():void----------"),void global.TtwLog.error("사용금지 - 만약 필요시 협의 바람")};

/**
 * Client Browser에 File을 전달한다.
 * 파일 URI를 주입 받는다.
 * 파일 URI에 ROOT Path를 더하여 파일을 찾아 전송한다.
 * 파일 전송 완료시 Callback 함수를 호출 하지 않는 다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * <code>
	{
		data : ""
	}
 * </code>
 *
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 *
 * @param {String} rootPath 파일 경로
 * @param {String} uri URI 문자열
 *
 * @dependency global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES
 * <code>
	global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES = {
		bmp : "image/bmp"
		, css : "text/css"
		, html : "text/html"
		, jpeg : "image/jpeg"
		, jpg : "image/jpeg"
		, js : "application/javascript"
		, json : "text/json"
		, png : "image/png"
		, txt : "text/plain"
		, xml : "text/xml"
		, xlsx : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
	};
 * </code>
 */
try{global.REQUIRES=global.REQUIRES||{};var _fs=require("fs"),_path=require("path");global.REQUIRES.__defineGetter__("fs",function(){return _fs}),global.REQUIRES.__defineGetter__("path",function(){return _path})}catch(e){}global.b2link.response.sendStream_200_File_URI_NCallback=function(e,t,a,l){if(t){var _,n=global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES,r=_path.join(a,unescape(l));try{_=global.REQUIRES.fs.lstatSync(r)}catch(i){return void global.b2link.response.send_404(t)}if(_.isFile()){t.writeHead(200,{"Content-Type":global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES[_path.extname(r).split(".").reverse()[0]]});var o=global.REQUIRES.fs.createReadStream(r);o.pipe(t)}else _.isDirectory()?(t.writeHead(200,{"Content-Type":n.txt}),t.end()):global.b2link.response.send_500(t)}};

/**
 * Client Browser에 File을 전달한다.
 * 파일 전송완료 여부를 알수있는 Callback이 없다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * <code>
	{
		data : ""
	}
 * </code>
 *
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 *
 * @param {String} rootPath 파일 경로
 *
 * @dependency global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES
 * <code>
	global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES = {
		bmp : "image/bmp"
		, css : "text/css"
		, html : "text/html"
		, jpeg : "image/jpeg"
		, jpg : "image/jpeg"
		, js : "application/javascript"
		, json : "text/json"
		, png : "image/png"
		, txt : "text/plain"
		, xml : "text/xml"
		, xlsx : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
	};
 * </code>
 */
try{global.REQUIRES=global.REQUIRES||{};var _fs=require("fs"),_path=require("path");global.REQUIRES.__defineGetter__("fs",function(){return _fs}),global.REQUIRES.__defineGetter__("path",function(){return _path})}catch(e){}global.b2link.response.sendStream_200_FileFromURI=function(e,r,t){return global.TtwLog.timeStamp("---- [ S ] - global.b2link.response.sendStream_200_FileFromURI():void----------"),void global.TtwLog.error("사용금지 - 만약 필요시 협의 바람")};

/**
 * Client Browser에 File을 전달한다.
 * 파일 전송완료 여부를 알수있는 Callback이 없다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * <code>
	{
		data : ""
	}
 * </code>
 *
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 *
 * @param {String} rootPath 파일 경로
 *
 * @dependency global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES
 * <code>
	global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES = {
		bmp : "image/bmp"
		, css : "text/css"
		, html : "text/html"
		, jpeg : "image/jpeg"
		, jpg : "image/jpeg"
		, js : "application/javascript"
		, json : "text/json"
		, png : "image/png"
		, txt : "text/plain"
		, xml : "text/xml"
		, xlsx : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
	};
 * </code>
 */
try{global.REQUIRES=global.REQUIRES||{};var _fs=require("fs"),_path=require("path");global.REQUIRES.__defineGetter__("fs",function(){return _fs}),global.REQUIRES.__defineGetter__("path",function(){return _path})}catch(e){}global.b2link.response.sendStream_200_FileFromURI_NCallback=function(e,t,l){if(t){var r,a=global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES,_=STtwUtilHttpServer.getURIFromURL(e.url),n=_path.join(l,unescape(_));try{r=global.REQUIRES.fs.lstatSync(n)}catch(i){return void global.b2link.response.send_404(t)}if(r.isFile()){t.writeHead(200,{"Content-Type":global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES[_path.extname(n).split(".").reverse()[0]]});var o=global.REQUIRES.fs.createReadStream(n);o.pipe(t)}else r.isDirectory()?(t.writeHead(200,{"Content-Type":a.txt}),t.end()):global.b2link.response.send_500(t)}};

//--------------------------------------------------;

/**
 * Client Browser에 JSON(String) 데이터를 보낸다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {Array|Object} obj Array 또는 Object
 */
global.b2link.response.send_200_JSON=function(e,s,n){s&&(global.b2link.response.setHeaders__b2ker(s),global.server.sendResponse_200_String(e,s,JSON.stringify(n)))};

/**
 * Client Browser에 문자열(String) 데이터를 보낸다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {String} str
 */
global.b2link.response.send_200_String=function(e,n,s){n&&(global.b2link.response.setHeaders__b2ker(n),global.server.sendResponse_200_String(e,n,s))};

/**
 * Client Browser Session을 파괴 시켰다는 메세지는 보낸다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 */
global.b2link.response.send_200_String_DestroySessionComplete=function(e,s){s&&(global.b2link.response.setHeaders__b2ker(s),global.server.sendResponse_200_String(e,s,"destroySessionComplete"))};

/**
 * Client Browser에 true를 보낸다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 */
global.b2link.response.send_200_True=function(e,s){s&&(global.b2link.response.setHeaders__b2ker(s),global.server.sendResponse_200_True(e,s))};

/**
 * Client Browser Session을 파괴 시키기 위해 destroySession url로 redirection하는 response를 보낸다.
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 */
global.b2link.response.send_301_DestroySession=function(e,n){n&&(global.b2link.response.setHeaders__b2ker(n),n.writeHead(301,{Location:global.b2link_router.STATIC.CONFIG.URL.MEMBER.MEMBER_SESSION.DESTROY_SESSION}),n.end())};

/**
 * Client Browser에 404 Error code를 보낸다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 */
global.b2link.response.send_404=function(e,s){s&&(global.b2link.response.setHeaders__b2ker(s),SUtilHttpServerResponse.responseWrite_404(s))};

/**
 * Client Browser에 500 code를 보낸다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 */
global.b2link.response.send_500=function(e,s){s&&(global.b2link.response.setHeaders__b2ker(s),SUtilHttpServerResponse.responseWrite_500(s))};

//----------------------------------------------------------------------------------------------------;

/**
 * Client Browser cookie를 설정하는 response를 보낸다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {Object} d
 */
global.b2link.response.setHeader__setcookie=function(e,s,i){s&&s.setHeader("set-cookie","connect.sid="+i.sid+"; session_id="+i.sid+"; Expires="+i.d_ex+"; HttpOnly")};

/**
 * Client Browser cookie를 지우는 response를 보낸다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 */
global.b2link.response.setHeader__setcookie__null=function(e,s){s&&s.setHeader("set-cookie","connect.sid=; session_id=; Expires=; HttpOnly")};

//--------------------------------------------------;

/**
 * CORS처리 함수 - B2Ker
 * @function
 * @param {http.ClientResponse} res
 */
global.b2link.response.setHeaders__b2ker=function(e){e.setHeader("X-Powered-By","B2KER"),e.setHeader("Access-Control-Allow-Origin","*"),e.setHeader("Access-Control-Allow-Credentials",!0),e.setHeader("Access-Control-Allow-Methods","GET, PUT, POST, DELETE, OPTIONS"),e.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Cache-Control, Content-Type, Content-Length, Authorization, Accept")};

/**
 * CORS처리 함수 - BrandPortal
 * @function
 * @param {http.ClientResponse} res
 */
global.b2link.response.setHeaders__brandPortal=function(e){e.setHeader("X-Powered-By","B2LiNK-BrandPortal"),e.setHeader("Access-Control-Allow-Origin","*"),e.setHeader("Access-Control-Allow-Credentials",!0),e.setHeader("Access-Control-Allow-Methods","GET, PUT, POST, DELETE, OPTIONS"),e.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Cache-Control, Content-Type, Content-Length, Authorization, Accept")};

/**
 * CORS처리 함수 - ExcelServer
 * @function
 * @param {http.ClientResponse} res
 */
global.b2link.response.setHeaders__excelServer=function(e){e.setHeader("X-Powered-By","B2LiNK-ExcelServer"),e.setHeader("Access-Control-Allow-Origin","*"),e.setHeader("Access-Control-Allow-Credentials",!0),e.setHeader("Access-Control-Allow-Methods","GET, PUT, POST, DELETE, OPTIONS"),e.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Cache-Control, Content-Type, Content-Length, Authorization, Accept")};

/**
 * CORS처리 함수 - FileServer
 * @function
 * @param {http.ClientResponse} res
 */
global.b2link.response.setHeaders__fileServer=function(e){e.setHeader("X-Powered-By","B2LiNK-FileServer"),e.setHeader("Access-Control-Allow-Origin","*"),e.setHeader("Access-Control-Allow-Credentials",!0),e.setHeader("Access-Control-Allow-Methods","GET, PUT, POST, DELETE, OPTIONS"),e.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Cache-Control, Content-Type, Content-Length, Authorization, Accept")};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.router_file;

global.b2link.router_file = global.b2link.router_file || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.router_file;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.router_resource;

global.b2link.router_resource = global.b2link.router_resource || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.router_resource;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.server_http;

global.b2link.server_http = global.b2link.server_http || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.server_http;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.service;

global.b2link.service = global.b2link.service || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.service;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.session;

global.b2link.session = global.b2link.session || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.session;

/**
 * @function
 * @param {HTTPClientRequest} req
 * @param {HTTPClientResponse} res
 * @param {Object} q
 */
global.b2link.session.get_or_create__Session=function(e,t,n){var s,i,l=STtwUtilHttpClientRequest.getHeader_Cookie(e),o=0;return l&&(l.hasOwnProperty("connect.sid")&&(i=l["connect.sid"],o=1),l.Expires&&(s=l.expires)),i&&null!=i&&""!=i&&"null"!=i||(i=STtwUtilHttpClientResponse.create_Session(e),o=0),s&&null!=s&&""!=s&&"null"!=s||(s=STtwUtilHttpClientResponse.create_Date__Expired()),{bFirstSession:o,sid:i,d_ex:s}};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.timer;

global.b2link.timer = global.b2link.timer || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.timer;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.uri;

global.b2link.uri = global.b2link.uri || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.uri;

/**
 * decodeURI
 * @function
 * @param {String} s 문자열
 * @return {String}
 */
!function(){var n={};global.b2link.uri.decodeURI=function(o){return n.hasOwnProperty(o)||(n[o]=global.decodeURI(o)),n[o]},global.b2link.uri.decodeURI._clear=function(){n={}}}();

/**
 * decodeURIComponent
 * @function
 * @param {String} s 문자열
 * @return {String}
 */
!function(){var n={};global.b2link.uri.decodeURIComponent=function(o){return n.hasOwnProperty(o)||(n[o]=global.decodeURIComponent(o)),n[o]},global.b2link.uri.decodeURIComponent._clear=function(){n={}}}();

/**
 * encodeURI
 * @function
 * @param {String} s 문자열
 * @return {String}
 */
!function(){var n={};global.b2link.uri.encodeURI=function(o){return n.hasOwnProperty(o)||(n[o]=global.encodeURI(o)),n[o]},global.b2link.uri.encodeURI._clear=function(){n={}}}();

/**
 * encodeURIComponent
 * @function
 * @param {String} s 문자열
 * @return {String}
 */
!function(){var n={};global.b2link.uri.encodeURIComponent=function(o){return n.hasOwnProperty(o)||(n[o]=global.encodeURIComponent(o)),n[o]},global.b2link.uri.encodeURIComponent._clear=function(){n={}}}();

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.url;

global.b2link.url = global.b2link.url || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.url;

/**
 * @function
 * @param {String} url
 * @return {Object}
 */
global.b2link.url.getQueryFromURL=function(r){return global.server.getQueryFromURL(r)};

/**
 * encodeURIComponent된 url을 decodeURIComponent 한다. 는 기본적으로 진행함
 * encodeURIComponent를 사용하지 않고 자체 변환된 url도 풀어준다.
 * @function
 * @param {String} url
 * @return {Object}
 */
global.b2link.url.getQueryFromURL_Decode=function(e){e=decodeURIComponent(e);var r=global.server.getQueryFromURL(e);delete r[""];var l=JSON.stringify(r).replace('"":"",',"");return l=l.replace(/!MzU=!/gi,"#").replace(/!Mzg=!/gi,"&"),JSON.parse(l)};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.util;

global.b2link.util = global.b2link.util || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.util;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.validation_classType;

global.b2link.validation_classType = global.b2link.validation_classType || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.validation_classType;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.validation_mongodb;

global.b2link.validation_mongodb = global.b2link.validation_mongodb || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.validation_mongodb;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 *
 * @function
 * @param {Array} arrays
 * @return {Array}
 * @example
 * <code>
	var a = global.b2link.array.mergeArrays( [ [ 0, 1, 2, 3, 4 ], [ 11, 22, 33, 44 ], ... ] );
	console.log( a );
 * </code>
 */
global.b2link.array.mergeArrays = function( arrays )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.b2link.array.mergeArrays():{Array}----------" );

	if( arrays.length === 0 ) return [];

	var tmp = arrays[ 0 ];
	for( var i=1; i<arrays.length; ++i )
	{
		//수정하기 - 20170707_1254 - 송선우 - Length 체크를 하는 ArrayMerge API와 Length 체크를 하지 않는 ArrayMerge API가 따로 있는게 좋을 듯;
		/*/
		tmp = tmp.concat( arrays[ i ] );
		/*/
		if( arrays[ i ] && arrays[ i ].length > 0 ) tmp = tmp.concat( arrays[ i ] );
		//*/
	}

	global.TtwLog.timeStamp( "---- [ E ] - global.b2link.array.mergeArrays():{Array}----------return tmp;" );
	return tmp;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * String format
 * @function
 * @param {Date} Date
 * @return {*}
 * @author  cpark
 *
 * TODO : Add Parameter to format date
 * ex) YY/MM/DD HH:MM:SS
 *
 * When d is string type, It only excepts format in "yyyy-mm-dd"
 */
global.b2link.date.dateFormatter = function( d, format )
{
	if( typeof d === "string" ) d = new Date( d );

	var year = d.getFullYear();
	var month = d.getMonth() + 1;
	var day = d.getDate();
	var hours = d.getHours();
	var minutes = d.getMinutes();
	var seconds = d.getSeconds();
	var milliSeconds = d.getMilliseconds();

	var formattedDate = null;

	if( !format )
	{
		formattedDate = year + "-" + month + "-" + day;
	}
	else if( format.toLowerCase() == "array" )
	{
		formattedDate = [];
		formattedDate.push( year );
		formattedDate.push( month );
		formattedDate.push( day );
		formattedDate.push( hours );
		formattedDate.push( minutes );
		formattedDate.push( milliSeconds );
	}
	else if( format.toLowerCase() == "object" )
	{
		formattedDate = { y : year, m : month, d : day, ho : hours, mi : minutes, se : seconds };
	}
	else if ( format.toLowerCase() == "string" )
	{
		formattedDate = year + "-" + month + "-" + day;
	}
	else
	{
		formattedDate = year + "-" + month + "-" + day;
	}

	return formattedDate;
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * 문자열 데이트 또는 데이트를 Object 형태로 변경하여 반환한다.
 * @function
 * @param {Date|String} Date or 2017-05-04-02-03-10
 * @return {Object}
 */
global.b2link.date.dateFormatter__Object = function( d )
{
	if( typeof d === "string" ) d = new Date( d );

	var formattedDate = { y : Number( d.getFullYear() ), m : Number( d.getMonth() + 1 ), d : Number( d.getDate() ), ho : Number( d.getHours() ), mi : Number( d.getMinutes() ), se : Number( d.getSeconds() ) };

	return formattedDate;
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * Get array date From Excel Number Format
 * @function
 * @param  {String} 42930
 * @return {Array} [ year, month, day, hour, minute, seconds ]
 * @example
 * <code>
	var n_d1 = 42930;
	var getArrayDate =  global.b2link.date.getArrayDateFromExcelNumber;
	var d1 = getArrayDate( n_d1 );

	console.log( JSON.stringify( d1 ) );
 * </code>
 */
global.b2link.date.getArrayDateFromExcelNumber = function( n )
{
	var d = new Date( 1899, 12, n );

	if( d.toString() === "Invalid Date" )
	{
		console.error( "정확한 날짜가 아닙니다." + s );
		return null;
	}

	var r = [ d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds() ];

	d = null;

	return r;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Array} [ year, month, day, hour, minute, seconds ]
 */
global.b2link.date.getArrayDateFromNewDate = function()
{
	////////global.TtwLog.timeStamp( "---- [ S ] - global.b2link.date.getArrayDateFromNewDate():{Array}----------" );

	var d = new Date();

	var r = [ d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds() ];

	d = null;

	////////global.TtwLog.timeStamp( "---- [ E ] - global.b2link.date.getArrayDateFromNewDate():{Array}----------" );
	return r;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Array} a [ year, month, day, hour, minute, seconds ]
 * @return {String} year-month-day-hour-minute-seconds
 */
global.b2link.date.getDateStringFromArrayDate_Dash = function( a )
{
	////////global.TtwLog.timeStamp( "---- [ S ] - global.b2link.date.getDateStringFromArrayDate_Dash():{String}----------" );
	////////global.TtwLog.timeStamp( "---- [ E ] - global.b2link.date.getDateStringFromArrayDate_Dash():{String}----------" );
	return a.join( "-" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * Get object date From Excel Number Format
 * @function
 * @param  {String} 42930
 * @return {Object} { y : 2017, m : 7, d : 15, ho : 0, mi : 0, se : 0 }
 * @example
 * <code>
	var n_d1 = 42930;
	var getObjectDate =  global.b2link.date.getObjectDateFromExcelNumber;
	var d1 = getObjectDate( n_d1 );

	console.log( JSON.stringify( d1 ) );
 * </code>
 */
global.b2link.date.getObjectDateFromExcelNumber = function( n )
{
	var d = new Date( 1899, 12, n );

	if( d.toString() === "Invalid Date" )
	{
		console.error( "정확한 날짜가 아닙니다." + s );
		return null;
	}

	var r = { y : d.getFullYear(), m : d.getMonth() + 1, d : d.getDate(), ho : d.getHours(), mi : d.getMinutes(), se : d.getSeconds() };

	d = null;

	return r;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Object} {y : 2017, m : 2, d : 25, ho : 11, mi : 20, se : 50}
 */
global.b2link.date.getObjectDateFromNewDate = function()
{
	////////global.TtwLog.timeStamp( "---- [ S ] - global.b2link.date.getObjectDateFromNewDate():{Object}----------" );

	var d = new Date();

	var r = { y : d.getFullYear(), m : d.getMonth() + 1, d : d.getDate(), ho : d.getHours(), mi : d.getMinutes(), se : d.getSeconds() };

	d = null;

	////////global.TtwLog.timeStamp( "---- [ E ] - global.b2link.date.getObjectDateFromNewDate():{Object}----------" );
	return r;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * Get object date.
 * @function
 * @param  {String} "yyyy-mm-dd" or "yyyy-mm-dd hh:mi:ss"
 * @return {Object} { y : 2017, m : 5, d : 26, ho : 15, mi : 32, se : 46 }
 *
 * @author  James
 * @example
 * <code>
	var s_d1 = "2017-05-26 10:57:37";
	var getObjectDate =  global.b2link.date.getObjectDateFromString;
	var n_d1 = getObjectDate( s_d1 );

	var s_d2 = "2017-05-26";
	var n_d2 = getObjectDate( s_d2 );

	console.log( JSON.stringify( n_d1 ) );
	console.log( JSON.stringify( n_d2 ) );
 * </code>
 */
global.b2link.date.getObjectDateFromString = function( s )
{
	var d = new Date( s );

	if( d.toString() === "Invalid Date" )
	{
		console.error( "정확한 날짜 문자열이 아닙니다." + s );
		return null;
	}

	var r = { y : d.getFullYear(), m : d.getMonth() + 1, d : d.getDate(), ho : d.getHours(), mi : d.getMinutes(), se : d.getSeconds() };

	d = null;

	return r;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

(function(){

	/**
	 * 모든 item의 자료타입은 같아야 한다.
	 * 0번째 item의 자료 타입이 Object일시에만 Loop를 실행한다.;
	 *
	 * @function
	 * @param {Array} data
	 */
	var _array = function( data )
	{
		if( "object" != data[ 0 ] )
		{
			//모든 item의 자료타입은 같아야 한다.;
			//0번째 item의 자료 타입이 Object일시에만 Loop를 실행한다.;
			return;
		}

		var io;
		var i=0, iLen=data.length;
		for( ; i<iLen; ++i )
		{
			io = data[ i ];
			if( "object" == typeof( io ) )
			{
				_object( io );
			}
		}
	};

	/**
	 *
	 * @function
	 * @param {Object} data
	 */
	var _object = function( data )
	{
		var io;
		for( var s in data )
		{
			io = data[ s ];

			if( "price" == s )
			{
				if( "number" != typeof( io ) )
				{
					//price는 Number여야 한다.;
					debugger;
					//data[ s ] = Number( io );
				}
			}
			else if( 0 == s.indexOf( "quantity" ) )
			{
				if( "number" != typeof( io ) || io < 0 )
				{
					//quantity_***는 uint여야 한다 / 기본값은 0;
					debugger;
					//data[ s ] = 0;
				}
			}



			if( 0 == s.indexOf( "_ids$" ) )
			{
				if( "object" != typeof( io ) || !io )
				{
					//_ids$***는 Object여야 한다.;
					debugger;
				}

				var jo;
				for( var s0 in io )
				{
					jo = io[ s0 ];
					if( "number" != typeof( jo ) || jo < -1 )
					{
						//_ids$***.??는 uint여야 한다 / 기본값은 -1;
						debugger;
						//data[ s ][ s0 ] = parseInt( jo );
					}
				}
			}
			else if( 0 == s.indexOf( "_id$" ) )
			{
				if( "number" != typeof( io ) || io < -1 )
				{
					//_id$***는 uint여야 한다 / 기본값은 -1;
					debugger;
					//data[ s ] = parseInt( io );
				}
			}
			else if( 0 == s.indexOf( "cd$" ) )
			{
				if( "string" != typeof( io ) && !io )
				{
					//cd$***.??는 String이여야 한다;
					debugger;
					//기본 값 셋팅 로직;
				}
			}
			/*/
			else if( 0 == s.indexOf( "nm$" ) )
			{
			}
			//*/
			//20170524 - quantity_ 로 시작하는 구문중에 quantity_predict_release만 Array임 나머지는 uint;
			else if( s != "quantity_predict_release" && 0 == s.indexOf( "quantity_" ) )
			{
				if( "number" != typeof( io ) || io < 0 )
				{
					//quantity_***는 uint여야 한다 / 기본값은 0;
					debugger;
					//data[ s ] = 0;
				}
			}
			else if( 0 == s.indexOf( "total_quantity_" ) )
			{
				if( "number" != typeof( io ) || io < 0 )
				{
					//total_quantity_***는 uint여야 한다 / 기본값은 0;
					debugger;
					//data[ s ] = 0;
				}
			}
		}
	};

	/**
	 * MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수
	 * _id*** 키 값 - uint 체크
	 *  cd*** 키 값 - String 체크
	 *  //nm*** 키 값 - String 체크
	 *
	 * @function
	 * @param {Object} data
	 */
	global.b2link.debug._check_mongodb_queryParameter = function( data )
	{
		window.TtwLog.timeStamp( "---- [ S ] - global.b2link.debug._check_mongodb_queryParameter():void----------" );

		if( data.pop && data.push )
		{
			_array( data );
		}
		else
		{
			_object( data );
		}

		window.TtwLog.timeStamp( "---- [ E ] - global.b2link.debug._check_mongodb_queryParameter():void----------" );
	};

})();

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

(function(){

	var _ = global.b2link.event;

	//영문이든, 숫자든, 사용하게될 이벤트 리스트 정의 하기;

	//----------------------------------------------------------------------------------------------------APPENDED;

	/**
	 * 부모 HTMLElement에 자식 HTMLElement를 appendChild 한 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.APPENDED_CHILD = "appended_child";

	//----------------------------------------------------------------------------------------------------CHANGED;

	/**
	 * STATIC Locale 설정이 변경 되었을때 발생하는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.CHANGED_LOCALE = "changed_locale";

	//----------------------------------------------------------------------------------------------------CREATED;

	/**
	 * CustomElement가 완성된 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.CREATED_CUSTOM_ELEMENT = "created_custom_element";

	/**
	 * Element가 완성된 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.CREATED_EL = "created_element";

	/**
	 * <import-html>의 실제 HTMLElement가 완성된 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.CREATED_IMPORT_HTML_EL = "created_import-html_element";

	/**
	 * <import-html url_js="">의 JS Controller가 완성된 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.CREATED_IMPORT_HTML_JS = "created_import-html_js";

	/**
	 * <include-html>의 실제HTMLElement가 완성된 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.CREATED_INCLUDE_HTML_EL = "created_include-html_element";

	//----------------------------------------------------------------------------------------------------CREATION;

	/**
	 * Object(어떤 형태이든) 가 최종적으로 완료된 상태일 시 발생되는 이벤트
	 * 내부적인 비동기 처리는 제외
	 * INITIALIZED 보다 후에 발생 됨
	 * @eventType
	 * @property {String}
	 */
	_.CREATION_COMPLETE = "creation_complete";

	//----------------------------------------------------------------------------------------------------DATA;

	/**
	 * DATA 작성을 취소 할 시에 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.DATA_WRITE_CANCEL = "data_write_cancel";

	/**
	 * DATA 작성이 완료 되었을 시에 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.DATA_WRITE_COMPLETE = "data_write_complete";

	//----------------------------------------------------------------------------------------------------DISPOSED;

	/**
	 * HTMLElement를 제거 한 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.DISPOSED_EL = "disposed_element";

	/**
	 * HTMLElement의 JS Controller를 제거 한 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.DISPOSED_JS = "disposed_js";

	//----------------------------------------------------------------------------------------------------INTERVAL;

	/**
	 * setInterval 로 구동된 interval을 clearInterval로 제거 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.INTERVAL_END = "interval_end";

	/**
	 * setInterval 이 구동된 후 발생되는 이벤트
	 * 데이터 요청 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.INTERVAL_START = "interval_start";

	//----------------------------------------------------------------------------------------------------INITIALIZED;

	/**
	 * 현재 객체의 초기화가 완료된 후 발생되는 이벤트
	 * CREATION_COMPLETE 보다 먼저 발생 됨
	 * @eventType
	 * @property {String}
	 */
	_.INITIALIZED = "initialized";

	/**
	 * 현재 객체(JS상일시 Target HTMLElement)의 자식 객체의 Initialize가 완료된 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.INITIALIZED_ALL_CHILDREN = "initialized_all_children";

	//----------------------------------------------------------------------------------------------------HIDED;

	/**
	 * Element의 js Controller에서 hide()가 호출되고 완료된뒤 발생되는 이벤트(아직 안하고있음)
	 * @eventType
	 * @property {String}
	 */
	_.HIDED_EL = "hided_element";

	//----------------------------------------------------------------------------------------------------LIST;

	/**
	 * LIST형 Component에서 Data 변경 시에 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.LIST_DATA_CHANGED = "list_data_changed";

	/**
	 * LIST형 Component에서 Item을 Click으로 선택 시에 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.LIST_SELECT_ITEM = "list_select_item";

	/**
	 * LIST형 Component에서 Item을 Double Click으로 선택 완료 시에 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.LIST_SELECTED_ITEM = "list_selected_item";

	//----------------------------------------------------------------------------------------------------NAVIGATION;

	/**
	 * @eventType
	 * @property {String}
	 */
	_.NAVIGATION_DATA_CHANGED = "navigation_data_changed";

	/**
	 * @eventType
	 * @property {String}
	 */
	_.NAVIGATION_ITEM_SELECTED = "navigation_item_selected";

	//----------------------------------------------------------------------------------------------------LOADED;

	/**
	 * Element의 모든 자식객체가 로딩 완료 후 발생되는 이벤트(아직 안하고있음)
	 * @eventType
	 * @property {String}
	 */
	_.LOADED_CHILDREN = "loaded_children";

	//----------------------------------------------------------------------------------------------------REMOVED;

	/**
	 * 부모 HTMLElement에서 자식 HTMLElement를 removeChild 한 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.REMOVED_CHILD = "removed_child";

	//----------------------------------------------------------------------------------------------------RESIZE;

	/**
	 * HTMLElement의 Size를 변경 시킨후 발생시키는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.RESIZED_EL = "resized_element";

	//----------------------------------------------------------------------------------------------------RESPONSE;

	/**
	 * 데이터를 응답 받은 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.RESPONSE_DATA = "response_data";

	//----------------------------------------------------------------------------------------------------REQUEST;

	/**
	 * 데이터 요청 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.REQUEST_DATA = "requese_data";

	//----------------------------------------------------------------------------------------------------SEARCH_UI;

	/**
	 * Search UI 상 INPUT Tag에 Typing를 진행할시에 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.SEARCH_UI_INPUTED_TEXT = "search_ui_inputed_text";

	/**
	 * Search UI 상 SELECT Tag의 아이템을 선택 했을시에 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.SEARCH_UI_SELECTED_TYPE = "search_ui_selected_type";

	//----------------------------------------------------------------------------------------------------SHOWED;

	/**
	 * Element의 js Controller에서 show()가 호출되고 완료된뒤 발생되는 이벤트(아직 안하고있음)
	 * @eventType
	 * @property {String}
	 */
	_.SHOWED_EL = "showed_element";

	//----------------------------------------------------------------------------------------------------SIGN;

	/**
	 * sign in이 실패한뒤 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.SIGN_IN_FAILURE = "sign_in_failure";

	/**
	 * sign in이 성공한뒤 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.SIGN_IN_SUCCESS = "sign_in_success";

	/**
	 * sign out이 실패한뒤 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.SIGN_OUT_FAILURE = "sign_out_failure";

	/**
	 * sign out이 성공한뒤 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.SIGN_OUT_SUCCESS = "sign_out_success";

	//----------------------------------------------------------------------------------------------------TABLE;

	/**
	 * Table Component에서 Data 변경 시에 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.TABLE_DATA_CHANGED = "table_data_changed";

	//----------------------------------------------------------------------------------------------------TIMEOUT;

	/**
	 * setTimeout 으로 구동된 timeout을 clearTimeout으로 제거 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.TIMEOUT_END = "timeout_end";

	/**
	 * setTimeout 이 구동된 후 발생되는 이벤트
	 * 데이터 요청 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.TIMEOUT_START = "timeout_start";

	//----------------------------------------------------------------------------------------------------;

	/**
	 * @function
	 */
	_.__initialize_Events = function()
	{
		global.b2link.log.comment_Dash_100();
		global.TtwLog.timeStamp( "	B2LiNK Events List" );
		global.b2link.log.comment_Dash_100();

		for( var s in _ )
		{
			if( "function" != typeof( _[ s ] ) )
			{
				_[ s ] = "b2link_" + _[ s ];
				global.TtwLog.info( "global.b2link.event." + s + ' - "' + _[ s ] + '"' );
			}
		}
		global.b2link.log.comment_Dash_100();
		delete _[ "__initialize_Events" ];
	};

	//----------------------------------------------------------------------------------------------------;

})();

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * 필수 키 값 목록을 가지고 대상 오브젝트의 hasOwnProperty를 통해 존재 여부를 체크한다.
 * @function
 * @param {Object} t 필수 키 값 목록을 가지고 체크할 대상 오브젝트
 * @param {Array} a hasOwnProperty의 대상이될 필수 키값 목록
 * @return {Boolean}
 * @example
 * <code>
 * </code>
 */
global.b2link.obj.check_RequiredValueHasOwnProperty = function( t, a )
{
	//global.TtwLog.timeStamp( "---- [ S ] - global.b2link.obj.check_RequiredValueHasOwnProperty():{Boolean}----------" );

	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		if( !t.hasOwnProperty( a[ i ] ) )
		{
			debugger;
			//global.TtwLog.timeStamp( "---- [ E ] - global.b2link.obj.check_RequiredValueHasOwnProperty():{Boolean}----------return 0;" );
			return 0;
		}
	}

	//global.TtwLog.timeStamp( "---- [ E ] - global.b2link.obj.check_RequiredValueHasOwnProperty():{Boolean}----------return 1;" );
	return 1;
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * 키 값 목록을 기준으로 obj를 숫자 오름차순 정렬하여 배열을 반환한다.
 * @function
 * @param {Object} o 키 값 목록을 기준으로 숫자 오름차순 정렬할 대상 obj
 * @return {Array}
 * @example
 * <code>
 * </code>
 */
global.b2link.obj.sortJSONObject_key_NumberASC = function( o )
{
	//global.Rh2Log.timeStamp( "---- [ S ] - global.b2link.obj.sortJSONObject_key_NumberASC():{Array}----------" );

	var keys = [];
	for( p in o ) keys.push( p );
	keys.sort(function(a, b){ return a-b; });//숫자크기대로 정렬;

	var a = [];
	var i=0, iLen=keys.length;
	for( ; i<iLen; ++i ) a[ i ] = o[ keys[ i ] ];

	//global.Rh2Log.timeStamp( "---- [ E ] - global.b2link.obj.sortJSONObject_key_NumberASC():{Array}----------return a;" );

	return a;
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * 키 값 목록을 기준으로 obj를 문자열 오름차순 정렬하여 배열을 반환한다.
 * @function
 * @param {Object} o 키 값 목록을 기준으로 문자열 오름차순 정렬할 대상 obj
 * @return {Array}
 */
global.b2link.obj.sortJSONObject_key_StringASC = function( o )
{
	//global.Rh2Log.timeStamp( "---- [ S ] - global.b2link.obj.sortJSONObject_key_StringASC():{Array}----------" );

	var keys = Object.keys( o );
		keys.sort();//문자열 오름차순 정렬;

	var a = [];
	var i=0, iLen=keys.length;
	for( ; i<iLen; ++i ) a[ i ] = o[ keys[ i ] ];

	//global.Rh2Log.timeStamp( "---- [ E ] - global.b2link.obj.sortJSONObject_key_StringASC():{Array}----------return a;" );
	return a;
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * ClientRequest에 포함되어온 Session을 인증 후 콜백 함수를 실행한다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {String} sid Session 체크를 위한 데이터
 * @param {Function} cbFunction Session 인증 후 실행될 Callback 함수
 *	function( req, res, error, result ){} 형태로 작성되는 함수.
 */
global.b2link.request.get__checkSessionToSessionServer = function( req, res, sid, cbFunction )
{
	global.TtwLog.timeStamp( "\n" );
	global.TtwLog.timeStamp( "---- [ S ] - global.b2link.request.get__checkSessionToSessionServer():void----------" );

	var t = global.server;

	global.b2link.request.get(
		/*/
		global.b2link_router.STATIC.CONFIG.URL.MEMBER.MEMBER_SESSION.CHECK_SESSION + "sid=" + sid
		/*/
		global.b2link.url.getServerURLByServers( "session_server" ) + "/member/session/check_session?sid=" + sid
		//*/
		, function( result )
		{
			console.log( "typeof( result ) : " + typeof( result ) );
			console.log( "result : " + result );

			if( 0 == global.b2link.response.getResultStatus( result ) )
			{
				global.b2link.response.send_200_False( req, res );

				global.b2link_router.STATIC.REQUEST_COUNT.M1();

				return;
			}

			global.b2link_router.STATIC.REQUEST_COUNT.P1();

			cbFunction( req, res );

			global.b2link_router.STATIC.REQUEST_COUNT.M1();
		}
		, req.headers
	);

	global.TtwLog.timeStamp( "---- [ E ] - global.b2link.request.get__checkSessionToSessionServer():void----------" );
	global.TtwLog.timeStamp( "\n" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * ClientRequest에 포함되어온 Session을 인증 후 콜백 함수를 실행한다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {String} sid Session 체크를 위한 데이터
 * @param {Function} cbFunction Session 인증 후 실행될 Callback 함수
 *	function( result ){} 형태로 작성되는 함수.
 */
global.b2link.request.get__checkSessionToSessionServer__WebSocket = function( req, sid, cbFunction )
{
	global.TtwLog.timeStamp( "\n" );
	global.TtwLog.timeStamp( "---- [ S ] - global.b2link.request.get__checkSessionToSessionServer__WebSocket():void----------" );

	var t = global.server;

	global.b2link.request.get(
		/*/
		//Repository 단독 개발모드(SessionServer이 아닐 경우);
		global.b2link_router.STATIC.CONFIG.URL.MEMBER.MEMBER_SESSION.CHECK_SESSION + "sid=" + sid
		/*/
		//SessionServer 연결 용(전체 프로젝트);
		global.b2link.url.getServerURLByServers( "session_server" ) + "/member/session/check_session?sid=" + sid
		//*/
		, function( result )
		{
			//console.log( "typeof( result ) : " + typeof( result ) );
			//console.log( "result : " + result );

			/*/
			if( 0 == global.b2link.response.getResultStatus( result ) )
			{
				global.b2link.response.send_200_False( req, res );

				global.b2link_router.STATIC.REQUEST_COUNT.M1();

				return;
			}

			global.b2link_router.STATIC.REQUEST_COUNT.P1();

			cbFunction( req, res );

			global.b2link_router.STATIC.REQUEST_COUNT.M1();
			/*/
			cbFunction( result );
			//*/
		}
		//, req.headers
	);

	global.TtwLog.timeStamp( "---- [ E ] - global.b2link.request.get__checkSessionToSessionServer__WebSocket():void----------" );
	global.TtwLog.timeStamp( "\n" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * ClientRequest에 포함되어온 Session을 인증 후 MongoDB로 Request함.
 * MongoDB 까지의 Request가 종료된 후엔 DB로부터 전달받을 데이터를 바로 ClientResponse로 작성하여 Client Browser로 전달한다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {String} q query Session 체크를 위한 데이터
 * @param {String} db mongodb Name 사용하게 될 Database Name
 * @param {String} nq next query Session 인증 후 실행될 Query
 * @param {Function} cbFunction Session 인증 후 Query까지 요청/응답 후 응답된 데이터를 넘겨받아 실행될 Callback 함수
 *	function( req, res, error, result ){} 형태로 작성되는 함수.
 */
global.b2link.request.get__member_session$checkSessionAndReqMongoDB__CallBack = function( req, res, q, db, nq, cbFunction )
{
	global.TtwLog.timeStamp( "\n" );
	global.TtwLog.timeStamp( "---- [ S ] - global.b2link.request.get__member_session$checkSessionAndReqMongoDB__CallBack():void----------" );

	var t = global.server;

	global.b2link.request.get(
		/*/
		//Repository 단독 개발모드(SessionServer이 아닐 경우);
		global.b2link_router.STATIC.CONFIG.URL.MEMBER.MEMBER_SESSION.CHECK_SESSION + "sid=" + q.sid
		/*/
		//SessionServer 연결 용(전체 프로젝트);
		global.b2link.url.getServerURLByServers( "session_server" ) + "/member/session/check_session?sid=" + q.sid
		//*/
		, function( result )
		{
			console.log( "typeof( result ) : " + typeof( result ) );
			console.log( "result : " + result );

			if( 0 == global.b2link.response.getResultStatus( result ) )
			{
				global.b2link.response.send_200_False( req, res );

				global.b2link_router.STATIC.REQUEST_COUNT.M1();

				return;
			}

			q.db = db;
			q.q = nq;

			global.b2link_router.STATIC.REQUEST_COUNT.P1();

			//cbFunction.req = req;
			//cbFunction.res = res;
			t.req_DB( req, res, q
				, function( error, result ){
					cbFunction( req, res, error, result );
				}
			);

			global.b2link_router.STATIC.REQUEST_COUNT.M1();
		}
		, req.headers
	);

	global.TtwLog.timeStamp( "---- [ E ] - global.b2link.request.get__member_session$checkSessionAndReqMongoDB__CallBack():void----------" );
	global.TtwLog.timeStamp( "\n" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * ClientRequest에 포함되어온 Session을 인증 후 MongoDB로 Request함.
 * MongoDB 까지의 Request가 종료된 후엔 DB로부터 전달받을 데이터를 바로 ClientResponse로 작성하여 Client Browser로 전달한다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {String} q query Session 체크를 위한 데이터
 * @param {String} db mongodb Name 사용하게 될 Database Name
 * @param {Object} nq next query Session 인증 후 실행될 Query
 * <code>
	{
		nm_db : {String}//Database Name;
		, nm_col : {String}//Collection Name;
		, q : {String}//Query;
		, s : {String}//"c", "r", "u", "d";
	}
 * </code>
 * @param {Function} cbFunction Session 인증 후 Query까지 요청/응답 후 응답된 데이터를 넘겨받아 실행될 Callback 함수
 *	function( req, res, error, result ){} 형태로 작성되는 함수.
 */
global.b2link.request.get__member_session$checkSessionAuthorityAndReqMongoDB_QueryObj__CallBack = function( req, res, q, db, nq, cbFunction )
{
	global.TtwLog.timeStamp( "\n" );
	global.TtwLog.timeStamp( "---- [ S ] - global.b2link.request.get__member_session$checkSessionAuthorityAndReqMongoDB_QueryObj__CallBack():void----------" );

	var t = global.server;

	//Query의 타입이 C, R, U, D중 어떤 타입인지 상태 값;
	//queryCRUDStatus가 "O"이면 권한 체크의 대상이 아닌 Query;
	var queryCRUDStatus;

	//URL을 기반으로 수행하고자 하는 Router의 DataBase Name과 Collection Name을 구한다;
	/*/
	var url = global.server.getURLParse( req.url );
	var a_path = url.pathname.split( "/" );//host, port를 제외한 URI;
	var nm_db = a_path[ 1 ];
	var nm_col = a_path[ 2 ];
	//*/

	//*///확인하기 - 2017.08.04 - 송선우 - 위치가 어디가 되야 할까 - 적절한 위치를 정한후 나머지 구문은 삭제 하기;
	//주입된 Query의 구문을 분석하여 금지된 구문이 존재하는 지 체크한다;
	if( global.mongodb.dbjs.isProhibitedSyntaxFromQuery( nq.q, nq.nm_db, nq.nm_col ) )
	{
		global.TtwLog.error( "[ ERROR ] - Query에 금지된 구문이 존재 한다." );
		//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
		global.b2link.response.send_200_False( req, res );
		return;
	}
	//*/

	//"member" 예외 처리;
	if( nq.nm_db != "member" && nq.nm_col != "_authority_matrix" )
	{
		//*///확인하기 - 2017.08.04 - 송선우 - 위치가 어디가 되야 할까 - 적절한 위치를 정한후 나머지 구문은 삭제 하기;
		//주입된 Query의 구문을 분석하여 금지된 구문이 존재하는 지 체크한다;
		if( global.mongodb.dbjs.isProhibitedSyntaxFromQuery( nq.q, nq.nm_db, nq.nm_col ) )
		{
			global.TtwLog.error( "[ ERROR ] - Query에 금지된 구문이 존재 한다." );
			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.b2link.response.send_200_False( req, res );
			return;
		}
		//*/

		//주입된 Query의 구문을 분석하여 C, R, U, D 중 어떤 타입인지 체크한다;
		queryCRUDStatus = global.mongodb.dbjs.getCRUDStatusFromQuery( nq.q, nq.nm_db, nq.nm_col );
	}
	else
	{
		//*///확인하기 - 2017.08.04 - 송선우 - 위치가 어디가 되야 할까 - 적절한 위치를 정한후 나머지 구문은 삭제 하기;
		//주입된 Query의 구문을 분석하여 금지된 구문이 존재하는 지 체크한다;
		if( global.mongodb.dbjs.isProhibitedSyntaxFromQuery( nq.q, nq.nm_db, nq.nm_col ) )
		{
			global.TtwLog.error( "[ ERROR ] - Query에 금지된 구문이 존재 한다." );
			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.b2link.response.send_200_False( req, res );
			return;
		}
		//*/

		queryCRUDStatus = "O";//queryCRUDStatus가 "O"이면 권한 체크의 대상이 아닌 Query;
	}

	//Session ID 체크, 권한 체크 후 원하는 Query를 구동한다;
	global.b2link.request.get(
		/*/
		//Repository 단독 개발모드(SessionServer이 아닐 경우);
		global.b2link_router.STATIC.CONFIG.URL.MEMBER.MEMBER_SESSION.CHECK_SESSION + "sid=" + q.sid
		//*/

		/*/
		//SessionServer 연결 용(전체 프로젝트);
		global.b2link.url.getServerURLByServers( "session_server" ) + "/member/session/check_session?sid=" + q.sid
		//*/

		//*/
		//SessionServer 연결 용(전체 프로젝트) - 권한 체크 포함;
		global.b2link.url.getServerURLByServers( "session_server" ) + "/member/session/check_sessionAndAuthority?"
			+ "sid=" + q.sid//Session ID;
			+ "&SCODE=" + q.SCODE//System Code;
			+ "&queryCRUDStatus=" + queryCRUDStatus//Query의 타입이 C, R, U, D중 어떤 타입인지 상태 값 - queryCRUDStatus가 "O"이면 권한 체크의 대상이 아닌 Query;
			+ "&nm_db=" + nq.nm_db//권한 체크를 할 대상 DataBase Name;
			+ "&nm_col=" + nq.nm_col//권한 체크를 할 대상 Collection Name;
		//*/
		, function( result )
		{
			console.log( "typeof( result ) : " + typeof( result ) );
			console.log( "result : " + result );

			//Request후 Response에서 받아온 결과 데이터의 Boolean Status를 확인하는데 사용한다.;
			if( 0 == global.b2link.response.getResultStatus( result ) )//Response 결과가 Error;
			{
				//------------------------------[ S ] - 유저별 권한 체크;
				//Response 결과 코드가 18(global.b2link_service.STATIC.CONST.RESPONSE_CODE.AUTHENTICATION_FAILED) 권한 인증 실패;
				if( global.b2link_service.STATIC.CONST.RESPONSE_CODE.AUTHENTICATION_FAILED == result )
				{
					//r은 Response Code;
					//d는 부가 데이터;
					//m은 메세지;
					var o = { r : result, d : nq.nm_db + "." + nq.nm_col };

					//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
					global.b2link.response.send_200_JSON( req, res, o );

					global.b2link_router.STATIC.REQUEST_COUNT.M1();

					return;
				}
				//------------------------------[ E ] - 유저별 권한 체크;

				//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
				global.b2link.response.send_200_False( req, res );
				global.b2link_router.STATIC.REQUEST_COUNT.M1();

				return;
			}

			q.db = db;
			q.q = nq.q;

			global.b2link_router.STATIC.REQUEST_COUNT.P1();

			//MongoDB로 Query를 요청함 - 다른 곳에서 사용금지;
			t.req_DB( req, res, q, function( error, result ){ cbFunction( req, res, error, result ); } );

			global.b2link_router.STATIC.REQUEST_COUNT.M1();
		}
		, req.headers
	);

	global.TtwLog.timeStamp( "---- [ E ] - global.b2link.request.get__member_session$checkSessionAuthorityAndReqMongoDB_QueryObj__CallBack():void----------" );
	global.TtwLog.timeStamp( "\n" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * ClientRequest에 포함되어온 Session을 인증 후 MongoDB로 Request함.
 * MongoDB 까지의 Request가 종료된 후엔 DB로부터 전달받을 데이터를 바로 ClientResponse로 작성하여 Client Browser로 전달한다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {String} q query Session 체크를 위한 데이터
 * @param {String} db mongodb Name 사용하게 될 Database Name
 * @param {String} nq next query Session 인증 후 실행될 Query
 * @param {Function} cbFunction Session 인증 후 Query까지 요청/응답 후 응답된 데이터를 넘겨받아 실행될 Callback 함수
 *	function( req, res, error, result ){} 형태로 작성되는 함수.
 */
global.b2link.request.get__member_session$checkSessionAuthorityAndReqMongoDB__CallBack = function( req, res, q, db, nq, cbFunction )
{
	global.TtwLog.timeStamp( "\n" );
	global.TtwLog.timeStamp( "---- [ S ] - global.b2link.request.get__member_session$checkSessionAuthorityAndReqMongoDB__CallBack():void----------" );

	var t = global.server;

	//Query의 타입이 C, R, U, D중 어떤 타입인지 상태 값;
	//queryCRUDStatus가 "O"이면 권한 체크의 대상이 아닌 Query;
	var queryCRUDStatus;

	//URL을 기반으로 수행하고자 하는 Router의 DataBase Name과 Collection Name을 구한다;
	var url = global.server.getURLParse( req.url );
	var a_path = url.pathname.split( "/" );//host, port를 제외한 URI;
	var nm_db = a_path[ 1 ];
	var nm_col = a_path[ 2 ];

	//*///확인하기 - 2017.08.04 - 송선우 - 위치가 어디가 되야 할까 - 적절한 위치를 정한후 나머지 구문은 삭제 하기;
	//주입된 Query의 구문을 분석하여 금지된 구문이 존재하는 지 체크한다;
	if( global.mongodb.dbjs.isProhibitedSyntaxFromQuery( nq, nm_db, nm_col ) )
	{
		global.TtwLog.error( "[ ERROR ] - Query에 금지된 구문이 존재 한다." );
		//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
		global.b2link.response.send_200_False( req, res );
		return;
	}
	//*/

	//"member" 예외 처리;
	if( nm_db != "member" && nm_col != "_authority_matrix" )
	{
		//*///확인하기 - 2017.08.04 - 송선우 - 위치가 어디가 되야 할까 - 적절한 위치를 정한후 나머지 구문은 삭제 하기;
		//주입된 Query의 구문을 분석하여 금지된 구문이 존재하는 지 체크한다;
		if( global.mongodb.dbjs.isProhibitedSyntaxFromQuery( nq, nm_db, nm_col ) )
		{
			global.TtwLog.error( "[ ERROR ] - Query에 금지된 구문이 존재 한다." );
			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.b2link.response.send_200_False( req, res );
			return;
		}
		//*/

		//주입된 Query의 구문을 분석하여 C, R, U, D 중 어떤 타입인지 체크한다;
		queryCRUDStatus = global.mongodb.dbjs.getCRUDStatusFromQuery( nq, nm_db, nm_col );
	}
	else
	{
		//*///확인하기 - 2017.08.04 - 송선우 - 위치가 어디가 되야 할까 - 적절한 위치를 정한후 나머지 구문은 삭제 하기;
		//주입된 Query의 구문을 분석하여 금지된 구문이 존재하는 지 체크한다;
		if( global.mongodb.dbjs.isProhibitedSyntaxFromQuery( nq, nm_db, nm_col ) )
		{
			global.TtwLog.error( "[ ERROR ] - Query에 금지된 구문이 존재 한다." );
			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.b2link.response.send_200_False( req, res );
			return;
		}
		//*/

		queryCRUDStatus = "O";//queryCRUDStatus가 "O"이면 권한 체크의 대상이 아닌 Query;
	}

	//Session ID 체크, 권한 체크 후 원하는 Query를 구동한다;
	global.b2link.request.get(
		/*/
		//Repository 단독 개발모드(SessionServer이 아닐 경우);
		global.b2link_router.STATIC.CONFIG.URL.MEMBER.MEMBER_SESSION.CHECK_SESSION + "sid=" + q.sid
		//*/

		/*/
		//SessionServer 연결 용(전체 프로젝트);
		global.b2link.url.getServerURLByServers( "session_server" ) + "/member/session/check_session?sid=" + q.sid
		//*/

		//*/
		//SessionServer 연결 용(전체 프로젝트) - 권한 체크 포함;
		global.b2link.url.getServerURLByServers( "session_server" ) + "/member/session/check_sessionAndAuthority?"
			+ "sid=" + q.sid//Session ID;
			+ "&SCODE=" + q.SCODE//System Code;
			+ "&queryCRUDStatus=" + queryCRUDStatus//Query의 타입이 C, R, U, D중 어떤 타입인지 상태 값 - queryCRUDStatus가 "O"이면 권한 체크의 대상이 아닌 Query;
			+ "&nm_db=" + nm_db//권한 체크를 할 대상 DataBase Name;
			+ "&nm_col=" + nm_col//권한 체크를 할 대상 Collection Name;
		//*/
		, function( result )
		{
			console.log( "typeof( result ) : " + typeof( result ) );
			console.log( "result : " + result );

			//Request후 Response에서 받아온 결과 데이터의 Boolean Status를 확인하는데 사용한다.;
			if( 0 == global.b2link.response.getResultStatus( result ) )//Response 결과가 Error;
			{
				//------------------------------[ S ] - 유저별 권한 체크;
				//Response 결과 코드가 18(global.b2link_service.STATIC.CONST.RESPONSE_CODE.AUTHENTICATION_FAILED) 권한 인증 실패;
				if( global.b2link_service.STATIC.CONST.RESPONSE_CODE.AUTHENTICATION_FAILED == result )
				{
					//r은 Response Code;
					//d는 부가 데이터;
					//m은 메세지;
					var o = { r : result, d : nm_db + "." + nm_col };

					//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
					global.b2link.response.send_200_JSON( req, res, o );

					global.b2link_router.STATIC.REQUEST_COUNT.M1();

					return;
				}
				//------------------------------[ E ] - 유저별 권한 체크;

				//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
				global.b2link.response.send_200_False( req, res );
				global.b2link_router.STATIC.REQUEST_COUNT.M1();

				return;
			}

			q.db = db;
			q.q = nq;

			global.b2link_router.STATIC.REQUEST_COUNT.P1();

			//MongoDB로 Query를 요청함 - 다른 곳에서 사용금지;
			t.req_DB( req, res, q, function( error, result ){ cbFunction( req, res, error, result ); } );

			global.b2link_router.STATIC.REQUEST_COUNT.M1();
		}
		, req.headers
	);

	global.TtwLog.timeStamp( "---- [ E ] - global.b2link.request.get__member_session$checkSessionAuthorityAndReqMongoDB__CallBack():void----------" );
	global.TtwLog.timeStamp( "\n" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * ClientRequest에 포함되어온 Session을 인증 후 MongoDB로 Request함.
 * MongoDB 까지의 Request가 종료된 후엔 DB로부터 전달받을 데이터를 바로 ClientResponse로 작성하여 Client Browser로 전달한다.
 *
 * @function
 * @param {http.ClientRequest} req Client Browser에서 서버로 요청시 보낸 정보를 포함한 객체(내부적으로 생성됨)
 * @param {http.ClientResponse} res 서버에서 Client Browser로 요청에 맞는 응답 데이터를 보내기 위한 객체(내부적으로 생성됨)
 * @param {String} q query Session 체크를 위한 데이터
 * @param {String} db mongodb Name 사용하게 될 Database Name
 * @param {String} nq next query Session 인증 후 실행될 Query
 * @param {Function} cbFunction Session 인증 후 Query까지 요청/응답 후 응답된 데이터를 넘겨받아 실행될 Callback 함수
 *	function( req, res, error, result ){} 형태로 작성되는 함수.
 */
global.b2link.request.get__member_session$checkSessionAndReqMongoDB__CallBack = function( req, res, q, db, nq, cbFunction )
{
	global.TtwLog.timeStamp( "\n" );
	global.TtwLog.timeStamp( "---- [ S ] - global.b2link.request.get__member_session$checkSessionAndReqMongoDB__CallBack():void----------" );

	var t = global.server;

	global.b2link.request.get(
		//*/
		//Repository 단독 개발모드(SessionServer이 아닐 경우);
		global.b2link_router.STATIC.CONFIG.URL.MEMBER.MEMBER_SESSION.CHECK_SESSION + "sid=" + q.sid
		/*/
		//SessionServer 연결 용(전체 프로젝트);
		global.b2link.url.getServerURLByServers( "session_server" ) + "/member/session/check_session?sid=" + q.sid
		//*/
		, function( result )
		{
			console.log( "typeof( result ) : " + typeof( result ) );
			console.log( "result : " + result );

			if( 0 == global.b2link.response.getResultStatus( result ) )
			{
				global.b2link.response.send_200_False( req, res );

				global.b2link_router.STATIC.REQUEST_COUNT.M1();

				return;
			}

			q.db = db;
			q.q = nq;

			global.b2link_router.STATIC.REQUEST_COUNT.P1();

			//cbFunction.req = req;
			//cbFunction.res = res;
			t.req_DB( req, res, q
				, function( error, result ){
					cbFunction( req, res, error, result );
				}
			);

			global.b2link_router.STATIC.REQUEST_COUNT.M1();
		}
		, req.headers
	);

	global.TtwLog.timeStamp( "---- [ E ] - global.b2link.request.get__member_session$checkSessionAndReqMongoDB__CallBack():void----------" );
	global.TtwLog.timeStamp( "\n" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

(function(){

	var _result_r = {
		0 : 1
		//, 1 : 1//사용안함;
		, 2 : 0//Bad Value;
		, 3 : 0//OBSOLETE_DuplicateKey;
		, 18 : 0//AuthenticationFailed;
	};

	var _fnStore = {
		0 : 0
		, 1 : 1
		, 18 : 0
		, "false" : 0
		, "true" : 1

		, "result.r" : function( result ){
			return _result_r[ result.r ];
		}
	};

	/**
	 * Request후 Response에서 받아온 결과 데이터의 Boolean Status를 확인하는데 사용한다.
	 * @function
	 * @param {*} result
	 * @return {*}
	 */
	global.b2link.response.getResultStatus = function( result )
	{
		//global.TtwLog.timeStamp( "---- [ S ] - global.b2link.response.getResultStatus():{*}----------" );
		//global.TtwLog.timeStamp( "Input result : " );
		//global.TtwLog.timeStamp( result );

		try
		{
			if( _fnStore.hasOwnProperty( result ) )
			{
				var r = _fnStore[ result ];
				global.TtwLog.timeStamp( "return r : " + r );
				//global.TtwLog.timeStamp( "---- [ E ] - global.b2link.response.getResultStatus():{*}----------return r;" );
				return r;
			}

			//MongoDB 표준 에러 코드를 준수해야한다;
			//{ r : NaN, m : "" };
			if( result.hasOwnProperty( "r" ) )
			{
				if( _fnStore.hasOwnProperty( "result.r" ) )
				{
					var r = _fnStore[ "result.r" ]( result );
					global.TtwLog.timeStamp( "return r : " + r );
					//global.TtwLog.timeStamp( "---- [ E ] - global.b2link.response.getResultStatus():{*}----------return r;" );
					return r;
				}
			}

			//삭제하기 - 20170514 - 송선우 - 사용되는 모든 소스에서 제거하기;
			//{ state : NaN, ??? : ?? };
			if( result.hasOwnProperty( "state" ) )
			{
				var r = _fnStore[ result.state ];
				global.TtwLog.timeStamp( "return r : " + r );
				//global.TtwLog.timeStamp( "---- [ E ] - global.b2link.response.getResultStatus():{*}----------return r;" );
				return r;
			}
		}
		catch( er )
		{
			global.TtwLog.error( "global.b2link.response.getResultStatus Error : " + er );
		}

		//global.TtwLog.timeStamp( "return result : " );
		//global.TtwLog.timeStamp( result );

		//global.TtwLog.timeStamp( "---- [ E ] - global.b2link.response.getResultStatus():{*}----------return result;" );
		return result;
	};
})();

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;
/**
 * 세션 체크 후 파일을 Client Browser에 전달한다.
 * @function
 * @param {http.ClientRequest} req
 * <code>
    {
		sid : ""
    }
 * </code>
 *
 * @param {http.ClientResponse} res
 *
 * @param {Object} q Query Object
 *
 * @param {String} path 파일이 존재하는 대상폴더( 파일이름 포함 )
 */
global.b2link.router_file.download = function( req, res, q, path ){
	global.Rh2Log.timeStamp( "---- [ S ] - global.b2link.router_file.download():void----------" );

	//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
	var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

	//ClientRequest에 포함되어온 Session을 인증;
	global.b2link.request.get__checkSessionToSessionServer( req, res, q.sid, function( result ){

		//Request후 Response에서 받아온 결과 데이터의 Boolean Status를 확인하는데 사용한다.;
		if( !global.b2link.response.getResultStatus( result ) )//"true" == OK;
		{
			global.b2link.response.send_200_False( req, res );
			return;
		}

		var stats = global.REQUIRES.fs.existsSync( path );

		if( stats )
		{
			var d = { filePath : path, fileNm : q.fileNm, cbFunction :  null };
			global.b2link.response.sendStream_200_File( req, res, d );
		}
		else
		{
			global.b2link.response.send_200_False__ErrorLog( req, res, q, "file is not exist." );
			return;
		}
	});

	global.Rh2Log.timeStamp( "---- [ E ] - global.b2link.router_file.download():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

try
{
	global.REQUIRE = global.REQUIRE || {};
	var _fs = require( "fs" );
	global.REQUIRE.__defineGetter__( "fs", function(){ return _fs; } );
}
catch( e )
{
	//....;
}

/**
 * 파일을 다운로드 한후 삭제하는 함수.
 * response가 완료된 후 실행된다.
 * @param  {???} e
 * @param  {String} d
 *<code>
	D:/aaa/aaa/aaa/aaa.xlsx
 *</code>
 */
var deleteFile = function( e, d ){ global.REQUIRES.fs.unlink( d ,function(err){ if( err ) console.log( err ); global.CSJLog.log("Delete Complete."); }); };

/**
 * 세션 체크 후 파일을 Client Browser에 전달, 파일을 삭제한다.
 * @function
 * @param {http.ClientRequest} req
 * <code>
    {
		sid : ""
    }
 * </code>
 *
 * @param {http.ClientResponse} res
 *
 * @param {Object} q Query Object
 *
 * @param {String} path 파일이 존재하는 대상폴더( 파일이름 포함 )
 */
global.b2link.router_file.downloadAndDelete = function( req, res, q, path ){
	global.Rh2Log.timeStamp( "---- [ S ] - global.b2link.router_file.downloadAndDelete():void----------" );

	//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
	//var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

	//ClientRequest에 포함되어온 Session을 인증;
	global.b2link.request.get__checkSessionToSessionServer( req, res, q.sid, function( result ){

		//Request후 Response에서 받아온 결과 데이터의 Boolean Status를 확인하는데 사용한다.;
		if( !global.b2link.response.getResultStatus( result ) )//"true" == OK;
		{
			global.b2link.response.send_200_False( req, res );
			return;
		}

		var stats = global.REQUIRES.fs.existsSync( path );

		if( stats )
		{
			var d = { filePath : path, fileNm : q.fileNm, cbFunction :  deleteFile };
			global.b2link.response.sendStream_200_File( req, res, d );
		}
		else
		{
			global.b2link.response.send_200_False__ErrorLog( req, res, q, "file is not exist." );
			return;
		}
	});

	global.Rh2Log.timeStamp( "---- [ E ] - global.b2link.router_file.downloadAndDelete():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * 세션 체크 후 B2LiNK-Resource-IMG/의 파일을 Client Browser에 전달한다.
 * @function
 * @param {http.ClientRequest} req
 * <code>
	{
		sid : ""
		, filePath : "/SYS0030/asd/asd/test.png
	}
 * </code>
 *
 * @param {http.ClientResponse} res
 *
 * @param {String} rootPath 파일이 존재하는 대상 폴더의 최상위 경로
 */
global.b2link.router_resource._common_FileSend_RootPathAndFilePath = function( req, res, rootPath ){
	global.TtwLog.timeStamp( "---- [ S ] - global.b2link.router_resource._common_FileSend_RootPathAndFilePath():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
	//var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

	//ClientRequest에 포함되어온 Session을 인증 후 콜백 함수를 실행한다.;
	global.b2link.request.get__checkSessionToSessionServer( req, res, q.sid, function( result ){
		if( !result )
		{
			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
			return;
		}

		//Client Browser에 File을 전달한다.;
		global.b2link.response.sendStream_200_File_URI_NCallback( req, res, rootPath, q.filePath );
	});

	global.TtwLog.log( "---- [ E ] - global.b2link.router_resource._common_FileSend_RootPathAndFilePath():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * Browser에서 요청하는 /js/ 경로의 소스 파일들을 공통레파지토리에서 가져와 내려주는 기능
 * 화면소스 개발모드에서만 사용한다.
 * Release 모드에서는 필요없음
 * @function
 */
global.b2link.server_http.globalServer__setMode__Dev__FileResCommonPath = function( req, res )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.b2link.server_http.globalServer__setMode__Dev__FileResCommonPath():void----------" );

	if( global._$TATIC_CONST_DEBUG )
	(function(){
		var _0 = SUtilHttpServer.__evt_request__APIAndFilePath = SUtilHttpServer.evt_request__APIAndFilePath;
		var _1= global.process.cwd() + "/../../Development-Browser-Libraries/WebPage/root/";
		//var _2 = global._$TATIC_VALUE_SERVER_HTTP_EVTS_REQUEST;

		SUtilHttpServer.evt_request__APIAndFilePath = function( req, res ){
			var uri = SUtilHttpServer.getURIFromURL( req.url );

			//if( _2[ uri ] ) _0( req, res );

			if( 0 == uri.indexOf( "/js/" ) )
			{
				//공통 모듈 파일을 가져와서 내려주기;
				//global.b2link.response.sendStream_200_File_NCallback( req, res, _1 );
				global.b2link.response.sendStream_200_File_URI_NCallback( req, res, _1, uri );
				return;
			}

			_0( req, res );
		};
	})();

	global.TtwLog.timeStamp( "---- [ E ] - global.b2link.server_http.globalServer__setMode__Dev__FileResCommonPath():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * WebServer용 HTTPServer를 생성한다.
 * @function
 * @return {http.Server}
 *
 * @dependency
 * global.Lib.Ttw.CLASS.AutoLoad_JS
 * global.Lib.Ttw.CLASS.Http.Server.HttpServer_API
 *
 * global._$TATIC_CONST_SERVER_HTTP_PORT
 * SUtilHttpServer.getQueryFromURL
 * SUtilHttpServer.evt_request__httpServer_200_False
 * SUtilHttpServer.evt_request__httpServer_200_True
 * SUtilHttpServer.evt_request__httpServer_200_String
 */
global.b2link.server_http.newServer__WebServer = function()
{
	global.TtwLog.timeStamp( "---- [ S ] - global.b2link.server_http.newServer__WebServer():{http.Server}----------" );

	//dependency global.Lib.Ttw.CLASS.Http.Server.HttpServer_API;
	var _ = global.Instance.httpServer_API = new global.Lib.Ttw.CLASS.Http.Server.HttpServer_API({ instanceKey : "global.Instance.httpServer__API", requestMode : "all" });

		_.listen( global._$TATIC_CONST_SERVER_HTTP_PORT, null );

		_.getQueryFromURL = SUtilHttpServer.getQueryFromURL;

		_.sendResponse_200_False = function( req, res ){ SUtilHttpServer.evt_request__httpServer_200_False( req, res ); };
		_.sendResponse_200_True = function( req, res ){ SUtilHttpServer.evt_request__httpServer_200_True( req, res ); };
		_.sendResponse_200_String = function( req, res, str ){ SUtilHttpServer.evt_request__httpServer_200_String( req, res, str ); };

	//dependency global.Lib.Ttw.CLASS.AutoLoad_JS;
	global.b2link.fs.autoLoad_JSs([
		[ "JavaScript Import", "./js/", { b2link_router : 1, b2link_router_external : 1, b2link_router_internal : 1 } ]
	]);

	global.TtwLog.timeStamp( "---- [ E ] - global.b2link.server_http.newServer__WebServer():{http.Server}----------return _;" );
	return _;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} s 문자열
 * @return {String}
 * #을 !MzU=!로 변경
 * &을 !Mzg=!로 변경
 */
global.b2link.uri.getURIReplaceSharp = function( s )
{
	//global.TtwLog.timeStamp( "---- [ S ] - global.b2link.uri.getURIReplaceSharp():{String}----------" );

	//global.TtwLog.timeStamp( "---- [ E ] - global.b2link.uri.getURIReplaceSharp():{String}----------return s;" );
	return s.replace( /#/gi, "!MzU=!" ).replace( /&/gi, "!Mzg=!" );
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} data
 * @return {String}
 * #을 !MzU=!로 변경
 * &을 !Mzg=!로 변경
 */
global.b2link.uri.getURIReplaceSharp__JSON = function( data )
{
	//global.TtwLog.timeStamp( "---- [ S ] - global.b2link.uri.getURIReplaceSharp__JSON():{String}----------" );

	//global.TtwLog.timeStamp( "---- [ E ] - global.b2link.uri.getURIReplaceSharp__JSON():{String}----------return s;" );
	return JSON.stringify( data ).replace( /#/gi, "!MzU=!" ).replace( /&/gi, "!Mzg=!" );
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//20170906_1501;
//SYS00***_APIServer를 사용하길 권장함;
//
//session_server, b2ker_api_server, brand_portal_api_server, api_server등 삭제 예정임.;
//
//excel_server, file_server등도 시스템 코드로 교체 예정;

(function(){

	var _idx = {};
	var _idxMaxCount = {};

	var _server = {

		//--------------------------------------------------[ S ] - 공용 서버;
		//사용하는 곳 목록;
		//B2LiNK-B2Ker-Dev, B2LiNK-BrandPortal-Dev;
		//SYS0010_APIServer : [ "http://localhost:30000", "http://localhost:30001", "http://localhost:30002" ]
		//SYS0010_APIServer : [ "http://localhost:30000", "http://localhost:30000", "http://localhost:30000" ]//B2LiNK-SessionServer-Dev;
		//, session_server : [ "http://localhost:30000", "http://localhost:30001", "http://localhost:30002" ]//B2LiNK-SessionServer-Dev;
		//, session_server : [ "http://localhost:30000", "http://localhost:30000", "http://localhost:30000" ]//B2LiNK-SessionServer-Dev;
		//, session_server : [ "http://localhost:45320", "http://localhost:45320", "http://localhost:45320" ]//B2LiNK-BrandPortal-Dev;
		//, session_server : [ "http://localhost:49320", "http://localhost:49320", "http://localhost:49320" ]//B2LiNK-B2Ker-Dev;

		SYS0010_APIServer : [ "http://211.251.236.148:49320", "http://211.251.236.148:49320", "http://211.251.236.148:49320" ]//B2LiNK-SessionServer-Dev;
		, session_server : [ "http://211.251.236.148:49320", "http://211.251.236.148:49320", "http://211.251.236.148:49320" ]//B2LiNK-SessionServer-Dev;

		, SYS0015_WebServer : [ "http://211.251.236.148:49323", "http://211.251.236.148:49323", "http://222.239.10.122:49323" ]//Development-Components-UI;


		//사용하는 곳 목록;
		//B2LiNK-B2Ker-Dev, B2LiNK-BrandPortal-Dev...;
		//, file_server : [ "http://localhost:49322", "http://localhost:49322" ]
		//--------------------------------------------------[ E ] - 공용 서버;


		//--------------------------------------------------[ S ] - 비지니스 시스템 서버;
		//사용하는 곳 목록;
		//B2LiNK-B2Ker-Dev, ...;
		//, SYS0020_APIServer : [ "http://localhost:49320", "http://localhost:49320" ]
		//, b2ker_api_server : [ "http://localhost:49320", "http://localhost:49320" ]

		//사용하는 곳 목록;
		//B2LiNK-BrandPortal-Dev, ...;
		//, SYS0030_APIServer : [ "http://localhost:45320", "http://localhost:45320" ]
		//, api_server : [ "http://localhost:45320", "http://localhost:45320" ]
		//--------------------------------------------------[ E ] - 비지니스 시스템 서버;


		//사용하는 곳 목록;
		//B2LiNK-B2Ker-Dev, ...;
		//, excel_server : [ "http://localhost:48320", "http://localhost:48320" ]

		//사용하는 곳 목록;
		//B2LiNK-B2Ker-Dev, ...;
		//, excel_web_server : [ "http://localhost:48321", "http://localhost:48321" ]

		//사용하는 곳 목록;
		//B2LiNK-B2Ker-Dev, ...;
		, webhook_server : [ "http://211.251.236.148:47320", "http://211.251.236.148:47320" ]
		//, webhook_server : [ "http://222.239.10.122:47320", "http://222.239.10.122:47320" ]
		//, webhook_server : [ "http://222.239.10.123:47320", "http://222.239.10.123:47320" ]
	};

	var io, iLen;
	for( var s in _server )
	{
		io = _server[ s ];
		iLen = io.length;
		_idxMaxCount[ s ] = iLen;
		_idx[ s ] = SUtilMath.random( 0, iLen, 0 );
	}

	/**
	 * @function
	 * @param {String} nm_server
	 * @return {String} url
	 */
	global.b2link.url.getServerURLByServers = function( nm_server )
	{
		if( !_server[ nm_server ] ) debugger;//없는 서버 이름이 들어옴;

		var r;

		if( _idxMaxCount[ nm_server ] > _idx[ nm_server ] )
		{
			r = _server[ nm_server ][ _idx[ nm_server ] ];
			++_idx[ nm_server ];
		}
		else
		{
			_idx[ nm_server ] = 0;
			r = _server[ nm_server ][ _idx[ nm_server ] ];
		}

		return r;
	};

})();

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} data
 * @return {boolean}
 */
global.b2link.util.isNull = function( data )
{
	return (
		typeof data == undefined

		//----------;
		//작성 - 20161214_1412 - 송선우
		//현재 DB -> SERVER -> BROWSER 시 나오면 안되는 "undefined"가 나오고 있음(이호영 제보)
		//Database Schema 기반의 Document Validation 함수들이 완성되면 차후에 없을 예정(최석준 개발)
		|| data == "undefined"
		//----------;
		|| data == null
		|| data == ""
		|| data == NaN
	) ? true : false;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} data
 * @return {boolean}
 */
global.b2link.util.isUndefined = function( data )
{
	return (
		typeof data == undefined
		|| data == "undefined"
		|| data == null
		|| data == NaN
	) ? true : false;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {array} p
 * @return {Boolean}
 */
global.b2link.validation_classType.array = function( p )
{
	//global.TtwLog.timeStamp( "---- [ S ] - global.b2link.validation_classType.array():{Boolean}----------" );
	//global.TtwLog.timeStamp( "---- [ E ] - global.b2link.validation_classType.array():{Boolean}----------" );

	//if( "object" == typeof( p ) )
	if( global.b2link.validation_classType.object( p ) )
	{
		if( p.hasOwnProperty( "length" ) )
		{
			return true;
		}
	}
	return false;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Number} p
 * @return {Boolean}
 */
global.b2link.validation_classType.boolean = function( p )
{
	//global.TtwLog.timeStamp( "---- [ S ] - global.b2link.validation_classType.boolean():{Boolean}----------" );
	//global.TtwLog.timeStamp( "---- [ E ] - global.b2link.validation_classType.boolean():{Boolean}----------" );

	if( "boolean" == typeof( p ) ) return true;
	return false;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Number} p
 * @return {Boolean}
 */
global.b2link.validation_classType.number = function( p )
{
	//global.TtwLog.timeStamp( "---- [ S ] - global.b2link.validation_classType.number():{Boolean}----------" );
	//global.TtwLog.timeStamp( "---- [ E ] - global.b2link.validation_classType.number():{Boolean}----------" );

	if( "number" == typeof( p ) ) return true;
	return false;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Number} p
 * @return {Boolean}
 */
global.b2link.validation_classType.object = function( p )
{
	//global.TtwLog.timeStamp( "---- [ S ] - global.b2link.validation_classType.object():{Boolean}----------" );
	//global.TtwLog.timeStamp( "---- [ E ] - global.b2link.validation_classType.object():{Boolean}----------" );

	if( "object" == typeof( p ) ) return true;
	return false;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} p
 * @return {Boolean}
 */
global.b2link.validation_classType.string = function( p )
{
	//global.TtwLog.timeStamp( "---- [ S ] - global.b2link.validation_classType.string():{Boolean}----------" );
	//global.TtwLog.timeStamp( "---- [ E ] - global.b2link.validation_classType.string():{Boolean}----------" );

	if( "string" == typeof( p ) ) return true;
	return false;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {uint} p
 * @return {Boolean}
 */
global.b2link.validation_classType.uint = function( p )
{
	//global.TtwLog.timeStamp( "---- [ S ] - global.b2link.validation_classType.uint():{Boolean}----------" );
	//global.TtwLog.timeStamp( "---- [ E ] - global.b2link.validation_classType.uint():{Boolean}----------" );

	//if( "number" == typeof( p ) )
	if( global.b2link.validation_classType.number( p ) )
	{
		if( -1 < p )
		{
			if( -1 == p.toString.indexOf( "." ) )
			{
				return true;
			}
		}
	}
	return false;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} _id
 * @return {Boolean}
 */
global.b2link.validation_mongodb._id__string = function( _id )
{
	//global.TtwLog.timeStamp( "---- [ S ] - global.b2link.validation_mongodb._id__string():{Boolean}----------" );
	//global.TtwLog.timeStamp( "---- [ E ] - global.b2link.validation_mongodb._id__string():{Boolean}----------" );
	if( global.b2link.validation_classType.string( _id ) )
	{
		return true;
	}
	return false
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {uint} _id
 * @return {Boolean}
 */
global.b2link.validation_mongodb._id__uint = function( _id )
{
	//global.TtwLog.timeStamp( "---- [ S ] - global.b2link.validation_mongodb._id__uint():{Boolean}----------" );
	//global.TtwLog.timeStamp( "---- [ E ] - global.b2link.validation_mongodb._id__uint():{Boolean}----------" );
	if( global.b2link.validation_classType.uint( _id ) )
	{
		if( 999999999 > _id )
		{
			return true;
		}
	}
	return false;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link_service;

global.b2link_service = global.b2link_service || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link_service;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link_service.STATIC;

global.b2link_service.STATIC = global.b2link_service.STATIC || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link_service.STATIC;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link_service.STATIC.CONST;

global.b2link_service.STATIC.CONST = global.b2link_service.STATIC.CONST || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link_service.STATIC.CONST;

//--------------------------------------------------global.b2link_service.STATIC.CONST.RESPONSE_CODE;

global.b2link_service.STATIC.CONST.RESPONSE_CODE = global.b2link_service.STATIC.CONST.RESPONSE_CODE || {};

(function(){
	var _ = global.b2link_service.STATIC.CONST.RESPONSE_CODE;
		_.__defineGetter__( "REQUEST_FAILED"       , function(){ return  0; } );
		_.__defineGetter__( "REQUEST_SUCCESS"      , function(){ return  1; } );
		_.__defineGetter__( "BAD_VALUE"            , function(){ return  2; } );
		_.__defineGetter__( "HOST_NOT_FOUND"       , function(){ return  7; } );
		_.__defineGetter__( "AUTHENTICATION_FAILED", function(){ return 18; } );
		_.__defineGetter__( "NETWORK_TIMEOUT"      , function(){ return 89; } );
		_.__defineGetter__( "OPERATION_FAILED"     , function(){ return 96; } );
})();

//--------------------------------------------------global.b2link_service.STATIC.CONST.RESPONSE_CODE;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;
