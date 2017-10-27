//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/_query/findOne/getDoc__id.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var _query = global.b2link.fs.getDBJS( "../../../Development-NodeJS_Modules/js/b2link_router/_query/findOne/getDoc__id.dbjs" );

/*/
http://localhost:49320/_query/findOne/getDoc__id
//*/
(function( req, res ){
	global.TtwLog.log( "- [ S ] - _query/findOne/getDoc__id():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;

	var query = _query.replace( "<!=nm_db=!>", q.nm_db ).replace( "<!=nm_col=!>", q.nm_col )
		.replace( "<!=_id=!>", q._id );

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

	global.TtwLog.log( "- [ E ] - _query/findOne/getDoc__id():void----------" );
});