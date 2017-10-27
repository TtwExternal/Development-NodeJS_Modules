//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/_query/find/getSelectorList_Range.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//수정하기 - 20170811 - global.b2link.request.get__member_session$checkSessionAndReqMongoDB__CallBack를 메인.js 파일에서 강제 overwrite 하고있어서 그 참조값을 overwrite 전에 가져와서 보관한다;
var _f0 = global.b2link.request.get__member_session$checkSessionAndReqMongoDB__CallBack;

var _query = global.b2link.fs.getDBJS( "../../../Development-NodeJS_Modules/js/b2link_router/_query/find/getSelectorList_Range.dbjs" );

/*/
http://localhost:49320/_query/find/getSelectorList_Range
//*/
(function( req, res ){
	global.TtwLog.log( "- [ S ] - _query/find/getSelectorList_Range():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;

	var query = _query.replace( "<!=nm_db=!>", q.nm_db ).replace( "<!=nm_col=!>", q.nm_col )
		.replace( "<!=id_gt=!>", q.id_gt ).replace( "<!=id_lt=!>", q.id_lt );

	_f0( req, res, q, "admin", query
		, function( req, res, error, result ){
			if( error )
			{
				global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
				return;
			}

			global.b2link.response.send_200_JSON( req, res, result );
		}
	);

	global.TtwLog.log( "- [ E ] - _query/find/getSelectorList_Range():void----------" );
});