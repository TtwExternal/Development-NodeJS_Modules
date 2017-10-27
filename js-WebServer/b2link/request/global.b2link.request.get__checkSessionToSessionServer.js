//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/request/global.b2link.request.get__checkSessionToSessionServer.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
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
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;