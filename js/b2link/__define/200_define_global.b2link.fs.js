//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_global.b2link.fs.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
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
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;