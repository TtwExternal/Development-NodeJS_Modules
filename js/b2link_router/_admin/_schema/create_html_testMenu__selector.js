//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_router/_admin/_schema/create_html_testMenu__selector.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

global.b2link_router__admin__schema_create_html_testMenu__selector = {};
global.b2link_router__admin__schema_create_html_testMenu__selector._f0 = function( d, dbNm ){
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

	var r = {
		s_li : ""
		, s_li_r : ""
		, s_ta : ""
		, s_ta_r : ""
	};

	var db = d[ dbNm ];
	for( var colNm in db )
	{
		var col = db[ colNm ];

		if( global.b2link_router__admin__schema_create_html_testMenu__selector._f0[ dbNm ] )
		{
			console.log( dbNm + "." + colNm + "은 생성하지 않음" );
			continue;
			/*/
			if( global.b2link_router__admin__schema_create_html_testMenu__selector._f0[ dbNm ][ colNm ] )
			{
				console.log( dbNm + "." + colNm + "은 생성하지 않음" );
				continue;
			}
			//*/
		}

		if( col.hasOwnProperty( "properties" ) && col.properties )
		{
			var o0 = col.properties;
			var io;

			/*/
			r.s_li += '\n<a class="complete" onclickeval="window.b2link_ui.selector.list.' + dbNm + '.' + colNm + '();">';
			r.s_li += 'SelectorList-' + colNm + '</a><br>';

			r.s_li_r += '\n<a class="complete" onclickeval="window.b2link_ui.selector.list_roll.' + dbNm + '.' + colNm + '();">';
			r.s_li_r += 'SelectorListRoll-' + colNm + '</a><br>';

			r.s_ta += '\n<a class="complete" onclickeval="window.b2link_ui.selector.table.' + dbNm + '.' + colNm + '();">';
			r.s_ta += 'SelectorTable-' + colNm + '</a><br>';

			r.s_ta_r += '\n<a class="complete" onclickeval="window.b2link_ui.selector.table_roll.' + dbNm + '.' + colNm + '();">';
			r.s_ta_r += 'SelectorTableRoll-' + colNm + '</a><br>';
			/*/
			var nm_s_li = 'window.b2link_ui.selector.list.' + dbNm + '.' + colNm + '();'
			var nm_s_li_r = 'window.b2link_ui.selector.list_roll.' + dbNm + '.' + colNm + '();'
			var nm_s_ta = 'window.b2link_ui.selector.table.' + dbNm + '.' + colNm + '();'
			var nm_s_ta_r = 'window.b2link_ui.selector.table_roll.' + dbNm + '.' + colNm + '();'
			r.s_li += '\n<a class="complete" onclickeval="' + nm_s_li + '">';
			r.s_li += nm_s_li + '</a><br>';

			r.s_li_r += '\n<a class="complete" onclickeval="' + nm_s_li_r + '">';
			r.s_li_r += nm_s_li_r + '</a><br>';

			r.s_ta += '\n<a class="complete" onclickeval="' + nm_s_ta + '">';
			r.s_ta += nm_s_ta + '</a><br>';

			r.s_ta_r += '\n<a class="complete" onclickeval="' + nm_s_ta_r + '">';
			r.s_ta_r += nm_s_ta_r + '</a><br>';
			//*/
		}
		else
		{
			console.warn( "Don't have 'properties' : " + colNm );
			console.warn( "properties length : " + col.properties );
		}
	}

	return r;
};
global.b2link_router__admin__schema_create_html_testMenu__selector._f0.authority = {

};

/*/
http://localhost:49320/_admin/_schema/create_html_testMenu__selector
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_testMenu__selector?", function( d ){} );
//*/
(function( req, res ){
	global.TtwLog.log( "- [ S ] -_admin/_schema/create_html_testMenu__selector():void----------" );

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

	var path_tjs = "../../../Development-NodeJS_Modules/js/b2link_router/_admin/_schema/create_html_testMenu__selector.dbjs";

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

			var f = global.b2link_router__admin__schema_create_html_testMenu__selector._f0;
			/*/
				f( d, "category" );
				f( d, "list_static" );
			//*/

			var s_li = "";
			var s_li_r = "";
			var s_ta = "";
			var s_ta_r = "";

			for( var s in d )
			{
				var r = f( d, s );
				s_li += r.s_li;
				s_li_r += r.s_li_r;
				s_ta += r.s_ta;
				s_ta_r += r.s_ta_r;
			}

			//var path = "../../../Development-NodeJS_Modules/js/b2link_router/_admin/_schema/ui_template/test/";
			var path = "../../../Development-NodeJS_Modules/js/b2link_router/_admin/_schema/ui_include/test/";
			//var path = "../../WebPage/root/ui_template/test/";

			/*/
			f6( path + "selector-list.html", s_li );
			f6( path + "selector-list_roll.html", s_li_r );
			f6( path + "selector-table.html", s_ta );
			f6( path + "selector-table_roll.html", s_ta_r );
			/*/
			f6( path + "selector.html", s_li + "\n" + s_li_r + "\n" + s_ta + "\n" + s_ta_r );
			f6( path + "selector-list.html", s_li + "\n" + s_li_r );
			f6( path + "selector-table.html", s_ta + "\n" + s_ta_r );

			f6( path + "search_selector.html", s_li.replace( /\.selector\./gi, ".search_selector." ) + "\n" + s_li_r.replace( /\.selector\./gi, ".search_selector." ) );
			//f6( path + "search_selector-list.html", s_li.replace( /\.selector\./gi, ".search_selector." ) + "\n" + s_li_r.replace( /\.selector\./gi, ".search_selector." ) );
			//f6( path + "search_selector-table.html", s_ta.replace( /\.selector\./gi, ".search_selector." ) + "\n" + s_ta_r.replace( /\.selector\./gi, ".search_selector." ) );
			//*/

			//global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
			global.b2link.response.send_200_JSON( req, res, result );
		}
	);

	global.TtwLog.log( "- [ E ] -_admin/_schema/create_html_testMenu__selector():void----------" );
});