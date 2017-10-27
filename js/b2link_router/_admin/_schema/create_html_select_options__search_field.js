//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_router/_admin/_schema/create_html_select_options__search_field.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

global.b2link_router__admin__schema_create_html_select_options__search_field = {};
global.b2link_router__admin__schema_create_html_select_options__search_field._f0 = function( d, dbNm ){
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

	//var path = "../../../Development-NodeJS_Modules/js/b2link_router/_admin/_schema/ui_include/option/";
	//var path = "../../WebPage/root/ui_include/option/";
	//var path = "../../../Development-NodeJS_Modules/js/b2link_router/_admin/_schema/ui_include/option/";
	var path = "../../../Development-NodeJS_Modules/js/b2link_router/_admin/_schema/ui_include/select-db-search_field/";
	//var path = "../../WebPage/root/ui_include/option/";

	var path_db = path + dbNm + "/";
	try{ f5( path_db ); }catch( e ){ global.console.error( "f5 Error : " + e ) }
	try{ f4( path_db ); }catch( e ){ global.console.error( "f4 Error : " + e ) }

	var db = d[ dbNm ];
	for( var colNm in db )
	{
		var col = db[ colNm ];
		var s = "";
			s += '<select class="select-' + dbNm + '-' + colNm +'-search_field">\n';
			s += '\t<option value="" selected="selected">((lb__select-db-search_field-item-0))</option>\n';
		if( col.hasOwnProperty( "search_field" ) && col.search_field )
		{
			if( 0 >= col.search_field.length ) return;
			var a0 = col.search_field;
			var io;
			var i=0, iLen=a0.length-1;

			for( ; i<iLen; ++i )
			{
				io = a0[ i ];
				s += '\t<option value="' + io.property + '">' + io.label + '</option>\n';
			}
			io = a0[ iLen ];
			s += '\t<option value="' + io.property + '">' + io.label + '</option>';
		}
		else
		{
			console.warn( "Don't have 'search_field' : " + colNm );
			console.warn( "search_field length : " + col.search_field );
		}

		s+= '\n</select>';

		var path_col = path_db + colNm + ".html";
		f6( path_col, s );
	}
};

/*/
http://localhost:49320/_admin/_schema/create_html_select_options__search_field
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__search_field?", function( d ){} );
//*/
(function( req, res ){
	global.TtwLog.log( "- [ S ] -_admin/_schema/create_html_select_options__search_field():void----------" );

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

	var path_tjs = "../../../Development-NodeJS_Modules/js/b2link_router/_admin/_schema/create_html_select_options__search_field.dbjs";

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

			var f = global.b2link_router__admin__schema_create_html_select_options__search_field._f0;
			/*/
				f( d, "category" );
				f( d, "list_static" );
			//*/
			for( var s in d ) f( d, s );

			global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
			//global.b2link.response.send_200_JSON( req, res, result );
		}
	);

	global.TtwLog.log( "- [ E ] -_admin/_schema/create_html_select_options__search_field():void----------" );
});