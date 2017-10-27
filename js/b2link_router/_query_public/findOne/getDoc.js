//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/_query_public/findOne/getDoc.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var _query = global.b2link.fs.getDBJS( "../../../Development-NodeJS_Modules/js/b2link_router/_query_public/findOne/getDoc.dbjs" );

/*/
http://localhost:49320/_query_public/findOne/getDoc
//*/
(function( req, res ){
	global.TtwLog.log( "- [ S ] - _query_public/findOne/getDoc():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;

	var query = _query.replace( "<!=data=!>", q.data );

	global.b2link.request.get__member_session$checkSessionAndReqMongoDB__CallBack( req, res, q, "admin", query
		, function( req, res, error, result ){
			if( error )
			{
				global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
				return;
			}

			global.b2link.response.send_200_JSON( req, res, result );
		}
	);

	global.TtwLog.log( "- [ E ] - _query_public/findOne/getDoc():void----------" );
});