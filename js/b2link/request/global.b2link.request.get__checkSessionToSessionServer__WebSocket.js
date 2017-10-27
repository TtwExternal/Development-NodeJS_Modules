//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/request/global.b2link.request.get__checkSessionToSessionServer__WebSocket.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
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
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;