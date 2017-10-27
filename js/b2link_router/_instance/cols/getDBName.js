//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/_instance/cols/getDBName.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * MongoDB Template Query를 dbjs 파일로부터 가져오기
 * '_instance' Collection에서 collection Name으로 Document 가져오기
 * @property {String}
 */
var _query = global.b2link.fs.getDBJS( "../../../Development-NodeJS_Modules/js/b2link_router/_instance/cols/getDBName.dbjs" );

/**
 * SIGN OUT
 *
 * @function
 * @param {http.ClientRequest} req
 * <code>
	{

	}
 * </code>
 *
 * @param {http.ClientResponse} res
 * <code>
	{

	}
 * </code>
 *
 * @example
 * <code>
	http://localhost:49320/_instance/cols/getDBName
 * </code>
 */
(function( req, res ){
	global.HykLog.log( "- [ S ] - _instance/cols/getDBName():void----------" );

	//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
	var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

	//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
	//global.b2link.debug._check_mongodb_queryParameter( q );

	//MongoDB Template Query를 dbjs 파일로부터 가져오기 - '_instance' Collection에서 collection Name으로 Document 가져오기;
	//var _query = global.b2link.fs.getDBJS( "../../../Development-NodeJS_Modules/js/b2link_router/_instance/cols/getDBName.dbjs" );
	var query = _query.replace( "<!=col_nm=!>", q.col_nm ? q.col_nm : "" );

	//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
	global.b2link.fs.writeQuery( "../../../Development-NodeJS_Modules/js/b2link_router/_instance/cols/getDBName.query", query );

	//ClientRequest에 포함되어온 Session을 인증 후 MongoDB로 Request함;
	global.b2link.request.get__member_session$checkSessionAndReqMongoDB__CallBack( req, res, q, "admin", query
		, function( req, res, error, result ){
			if( error )
			{
				//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
				global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
				return;
			}

			//MongoDB Query 실행 후 결과를 Client에 전송하기;
			global.b2link.response.send_200_String( req, res, result );
		}
	);

	global.HykLog.log( "- [ E ] - _instance/cols/getDBName():void----------" );
});