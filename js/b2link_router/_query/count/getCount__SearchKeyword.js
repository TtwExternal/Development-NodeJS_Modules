//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/_query/count/getCount__SearchKeyword.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * MongoDB Template Query를 dbjs 파일로부터 가져오기
 * 검색 키워드에 해당하는 검색 결과의 갯수를 반환한다.
 * @property {String}
 */
var _query = global.b2link.fs.getDBJS( "../../../Development-NodeJS_Modules/js/b2link_router/_query/count/getCount__SearchKeyword.dbjs" );

/**
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
	http://localhost:49320/_query/count/getCount__SearchKeyword
	http://localhost:49320/_query/count/getCount__SearchKeyword?
 * </code>
 */
(function( req, res ){
	global.TtwLog.log( "- [ S ] - _query/count/getCount__SearchKeyword():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;

	//MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수;
	global.b2link.debug._check_mongodb_queryParameter( q );

	//MongoDB Template Query를 dbjs 파일로부터 가져오기 - 검색 키워드에 해당하는 검색 결과의 갯수를 반환한다.;
	//var _query = global.b2link.fs.getDBJS( "../../../Development-NodeJS_Modules/js/b2link_router/_query/count/getCount__SearchKeyword.dbjs" );
	var query = _query.replace( "<!=nm_db=!>", q.nm_db ).replace( "<!=nm_col=!>", q.nm_col )
		.replace( "<!=data=!>", q.data );

	//Template Query의 변경 값을 반영 한후 로컬에 query로 저장하기;
	//global.b2link.fs.writeQuery( "../../../Development-NodeJS_Modules/js/b2link_router/_query/count/getCount__SearchKeyword.query", q.q );

	//*/
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
			global.b2link.response.send_200_JSON( req, res, result );
		}
	);
	/*/
	if( q.nm_db == "brand" && q.nm_col == "brand_basic" )
	{
		q.db = q.nm_db;
		q.q = query;

		//MongoDB로 Query를 요청함 - 다른 곳에서 사용금지;
		global.server.req_DB( req, res, q, function( error, result ){
			if( error )
			{
				//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
				global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
				return;
			}

			//MongoDB Query 실행 후 결과를 Client에 전송하기;
			global.b2link.response.send_200_JSON( req, res, result );
		});
	}
	else
	{
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
				global.b2link.response.send_200_JSON( req, res, result );
			}
		);
	}
	//*/

	global.TtwLog.log( "- [ E ] - _query/count/getCount__SearchKeyword():void----------" );
});