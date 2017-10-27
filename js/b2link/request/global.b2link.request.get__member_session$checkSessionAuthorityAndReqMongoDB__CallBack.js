//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/request/global.b2link.request.get__member_session$checkSessionAuthorityAndReqMongoDB__CallBack.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
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
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;