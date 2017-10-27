//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_router/_admin/_schema/create_html_input__dbs_cols.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

global.b2link_router__admin__schema_create_html_input__dbs_cols = {};
global.b2link_router__admin__schema_create_html_input__dbs_cols._f0 = function( d, dbNm ){
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

	var s = "";
	var db = d[ dbNm ];
	for( var colNm in db )
	{
		//s += '\n<input style="width: 100%; border-width: 0px;" value="' + dbNm + '.' + colNm +'"/>';
		s += '\n<a href="#' + dbNm + '.' + colNm +'">' + dbNm + '.' + colNm + '</a>';
		s += "\n</br>";
	}
	return s;
};

/*/
http://localhost:49320/_admin/_schema/create_html_input__dbs_cols
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_input__dbs_cols?", function( d ){} );
//*/
(function( req, res ){
	global.TtwLog.log( "- [ S ] -_admin/_schema/create_html_input__dbs_cols():void----------" );

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

			var f = global.b2link_router__admin__schema_create_html_input__dbs_cols._f0;
			/*/
				f( d, "category" );
				f( d, "list_static" );
			//*/
			var r = '\n<h2>전체 Collections 목록(복사 붙여넣기 용도)</h2>';
			for( var s in d ) r += f( d, s );

			var path = "../../../Development-NodeJS_Modules/js/b2link_router/_admin/_schema/ui_include/input--dbs_cols/input__dbs_cols.html";
			f6( path, r );

			global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
			//global.b2link.response.send_200_JSON( req, res, result );
		}
	);

	global.TtwLog.log( "- [ E ] -_admin/_schema/create_html_input__dbs_cols():void----------" );
});