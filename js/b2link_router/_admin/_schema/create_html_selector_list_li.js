//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_router/_admin/_schema/create_html_selector_list_li.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

global.b2link_router__admin__schema_create_html_selector_list_li = {};
global.b2link_router__admin__schema_create_html_selector_list_li._f0 = function( d, dbNm ){
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

	var path = "../../../Development-NodeJS_Modules/js/b2link_router/_admin/_schema/ui_include/li/";
	//var path = "../../WebPage/root/ui_include/li/";

	//var path_db = path + dbNm + "/";
	var path_db = path + "selector_list-" + dbNm + "-";

	//try{ f5( path_db ); }catch( e ){ global.console.error( "f5 Error : " + e ) }
	//try{ f4( path_db ); }catch( e ){ global.console.error( "f4 Error : " + e ) }

	var db = d[ dbNm ];
	for( var colNm in db )
	{
		var col = db[ colNm ];

		if( global.b2link_router__admin__schema_create_html_selector_list_li._f0[ dbNm ] )
		{
			if( global.b2link_router__admin__schema_create_html_selector_list_li._f0[ dbNm ][ colNm ] )
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

			s += '<li class="list-group-item">';
			for( var pk in o0 )
			{
				io = o0[ pk ];
				if( "object" == io.type )
				{
					var i_pkpk = 0;
					for( var pkpk in io.properties )
					{
						/*/
						s += '\n\t{{' + pk + '.' + pkpk + '}}';
						break;
						/*/
						if( i_pkpk ) s += '\/{{' + pk + '.' + pkpk + '}}';
						else{ s += '\n\t{{' + pk + '.' + pkpk + '}}'; ++i_pkpk;}
						//*/
					}
					s += " ";
				}
				else if( "array" == io.type )
				{
					//*/
					s += '\n\t{{' + pk + '}}';
					//*/
				}
				else
				{
					s += '\n\t{{' + pk + '}}';
				}
			}
			s+= '\n</li>';

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
global.b2link_router__admin__schema_create_html_selector_list_li._f0.category = {
	category_cost_adjustment : function(){}

	, category_delivery_status : function(){}
	, category_delivery_info_remark : function(){}
	, category_delivery_type : function(){}

	, category_division : function(){}
	, category_division_team : function(){}
	, category_division_team_B2Labs : function(){}
	, category_division_team_BID : function(){}
	, category_division_team_BOD : function(){}
	, category_division_team_BSD : function(){}
	, category_division_team_SSD : function(){}

	, category_expenses_proof : function(){}

	, category_fi_approbation : function(){}
	, category_fi_reject_reason : function(){}

	, category_inspection_detail_type : function(){}
	, category_inspection_type : function(){}

	, category_packaging_material_unit : function(){}

	, category_partner : function(){}
	, category_partner_buyer : function(){}
	, category_partner_logistics : function(){}
	, category_partner_supplier : function(){}
	, category_purchase_reason : function(){}
};
global.b2link_router__admin__schema_create_html_selector_list_li._f0.list_static = {
	country : function(){}
	, country_phone_num : function(){}
	, currency : function(){}
	, email : function(){}
	, gender : function(){}
	, trade_terms : function(){}
};
global.b2link_router__admin__schema_create_html_selector_list_li._f0.member = {
	member_basic : function(){}
};

/*/
http://localhost:49320/_admin/_schema/create_html_selector_list_li
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_selector_list_li?", function( d ){} );
//*/
(function( req, res ){
	global.TtwLog.log( "- [ S ] -_admin/_schema/create_html_selector_list_li():void----------" );

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

	var path_tjs = "../../../Development-NodeJS_Modules/js/b2link_router/_admin/_schema/create_html_selector_list_li.dbjs";

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

			var f = global.b2link_router__admin__schema_create_html_selector_list_li._f0;
			/*/
				f( d, "category" );
				f( d, "list_static" );
			//*/
			for( var s in d ) f( d, s );

			global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
			//global.b2link.response.send_200_JSON( req, res, result );
		}
	);

	global.TtwLog.log( "- [ E ] -_admin/_schema/create_html_selector_list_li():void----------" );
});