//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_global.b2link.request.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
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
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;