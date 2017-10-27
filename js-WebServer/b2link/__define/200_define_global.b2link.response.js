//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_global.b2link.response.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
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
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;