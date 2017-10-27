//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_router/_admin/_schema/create_js_selector_list_roll_itemrenderer.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

global.b2link_router__admin__schema_create_js_selector_list_roll_itemrenderer = {};
global.b2link_router__admin__schema_create_js_selector_list_roll_itemrenderer._f0 = function( d, dbNm ){
	//----------;
	var f0 = SUtilFsReadStream.getList_Directory;
	var f1 = SUtilFsReadStream.getList_File_Extension;
	var f2 = SUtilFsReadStream.getFile;
	var f3 = SUtilFsReadStream.checkWhetherFile;
	var f4 = SUtilFsWriteStream.createDirectory
	var f5 = SUtilFsWriteStream.deleteFile;
	var f6 = SUtilFsWriteStream.writeFile_UTF8;
	var f7 = SUtilCP.sExec;
	//----------;

	var reg0 = /\<\!\=nm_db\=\!\>/gi;
	var reg1 = /\<\!\=nm_col\=\!\>/gi;
	var tJS = f2( "../../../Development-NodeJS_Modules/js/b2link_router/_admin/_schema/create_js_selector_list_roll_itemrenderer.tjs" ).toString( "utf8" );

	var path = "../../../Development-NodeJS_Modules/js/b2link_router/_admin/_schema/ui_import/static/selector/common/list_roll/item_renderer/";
	//var path = "../../WebPage/root/ui_import/static/selector/common/list_roll/item_renderer/";

	//var path_db = path + dbNm + "/";
	var path_db = path + dbNm + "-";

	//try{ f5( path_db ); }catch( e ){ global.console.error( "f5 Error : " + e ) }
	//try{ f4( path_db ); }catch( e ){ global.console.error( "f4 Error : " + e ) }

	var db = d[ dbNm ];
	for( var colNm in db )
	{
		if( global.b2link_router__admin__schema_create_js_selector_list_roll_itemrenderer._f0[ dbNm ] )
		{
			if( global.b2link_router__admin__schema_create_js_selector_list_roll_itemrenderer._f0[ dbNm ][ colNm ] )
			{
				console.log( dbNm + "." + colNm + "은 생성하지 않음" );
				continue;
			}
		}

		f6( path_db + colNm + ".js", tJS.replace( reg0, dbNm ).replace( reg1, colNm ) );
	}
};
global.b2link_router__admin__schema_create_js_selector_list_roll_itemrenderer._f0.list_static = {
	country : function(){}
};

/*/
http://localhost:49320/_admin/_schema/create_js_selector_list_roll_itemrenderer
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_js_selector_list_roll_itemrenderer?", function( d ){} );
//*/
(function( req, res ){
	global.TtwLog.log( "- [ S ] -_admin/_schema/create_js_selector_list_roll_itemrenderer():void----------" );

	//----------;
	var f0 = SUtilFsReadStream.getList_Directory;
	var f1 = SUtilFsReadStream.getList_File_Extension;
	var f2 = SUtilFsReadStream.getFile;
	var f3 = SUtilFsReadStream.checkWhetherFile;
	var f4 = SUtilFsWriteStream.createDirectory
	var f5 = SUtilFsWriteStream.deleteFile;
	var f6 = SUtilFsWriteStream.writeFile_UTF8;
	var f7 = SUtilCP.sExec;
	//----------;

	var path_tjs = "../../../Development-NodeJS_Modules/js/b2link_router/_admin/_schema/getList__db_col.dbjs";

	var query = f2( path_tjs ).toString( "utf8" );
		console.log( query );

	var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;

	global.b2link.request.get__member_session$checkSessionAndReqMongoDB__CallBack( req, res, q
		, "admin"
		, query
		, function( req, res, error, result ){

			if( error )
			{
				global.b2link_router.STATIC.REQUEST_COUNT.M1();
				global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
				return;
			}

			var d = result;

			var f = global.b2link_router__admin__schema_create_js_selector_list_roll_itemrenderer._f0;
			/*/
				f( d, "category" );
				f( d, "list_static" );
			//*/
			for( var s in d ) f( d, s );

			global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
			//global.b2link.response.send_200_JSON( req, res, result );
		}
	);

	global.TtwLog.log( "- [ E ] -_admin/_schema/create_js_selector_list_roll_itemrenderer():void----------" );
});