//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_router/_admin/_schema/create_html_selector_table_th.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

global.b2link_router__admin__schema_create_html_selector_table_th = {};
global.b2link_router__admin__schema_create_html_selector_table_th._f0 = function( d, dbNm ){
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

	var path = "../../../Development-NodeJS_Modules/js/b2link_router/_admin/_schema/ui_include/tr-th/";
	//var path = "../../WebPage/root/ui_include/tr-th/";

	//var path_db = path + dbNm + "/";
	var path_db = path + "selector_table-" + dbNm + "-";

	//try{ f5( path_db ); }catch( e ){ global.console.error( "f5 Error : " + e ) }
	//try{ f4( path_db ); }catch( e ){ global.console.error( "f4 Error : " + e ) }

	var db = d[ dbNm ];
	for( var colNm in db )
	{
		var col = db[ colNm ];

		if( global.b2link_router__admin__schema_create_html_selector_table_th._f0[ dbNm ] )
		{
			if( global.b2link_router__admin__schema_create_html_selector_table_th._f0[ dbNm ][ colNm ] )
			{
				console.log( dbNm + "." + colNm + "은 생성하지 않음" );
				continue;
			}
		}

		var s = "";
		if( col.hasOwnProperty( "properties" ) && col.properties )
		{
			var o0 = col.properties;
			var io;

			s += '<tr>';
			for( var pk in o0 )
			{
				io = o0[ pk ];
				s += '\n\t<th><span>((' + pk + '))</span></th>';
			}
			s += '\n</tr>';

			var path_col = path_db + colNm + ".html";
			f6( path_col, s );
		}
		else
		{
			console.warn( "Don't have 'properties' : " + colNm );
			console.warn( "properties length : " + col.properties );
		}
	}
};
global.b2link_router__admin__schema_create_html_selector_table_th._f0.list_static = {
	bank_swift_cn : function(){}
	, bank_swift_kr : function(){}
	, bank_swift_us : function(){}
	, country : function(){}
	, postalcode_cn : function(){}
	, postalcode_kr : function(){}
};
global.b2link_router__admin__schema_create_html_selector_table_th._f0.member = {
	member_basic : function(){}
};

/*/
http://localhost:49320/_admin/_schema/create_html_selector_table_th
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_selector_table_th?", function( d ){} );
//*/
(function( req, res ){
	global.TtwLog.log( "- [ S ] -_admin/_schema/create_html_selector_table_th():void----------" );

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

	var path_tjs = "../../../Development-NodeJS_Modules/js/b2link_router/_admin/_schema/create_html_selector_table_th.dbjs";

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

			var f = global.b2link_router__admin__schema_create_html_selector_table_th._f0;
			/*/
				f( d, "category" );
				f( d, "list_static" );
			//*/
			for( var s in d ) f( d, s );

			global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
			//global.b2link.response.send_200_JSON( req, res, result );
		}
	);

	global.TtwLog.log( "- [ E ] -_admin/_schema/create_html_selector_table_th():void----------" );
});