//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_router/_admin/_schema/create_html_select_options__value.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var _id_list = {
	currency : 1
	, currency__b2ker : 1
};

global.b2link_router__admin__schema_create_html_select_options__value = {};
global.b2link_router__admin__schema_create_html_select_options__value._f0 = function( d, dbNm, colNm ){
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
	var path = "../../../Development-NodeJS_Modules/js/b2link_router/_admin/_schema/ui_include/select-db-value/";
	//var path = "../../WebPage/root/ui_include/option/";

	var path_db = path + dbNm + "/";
	try{ f5( path_db ); }catch( e ){ global.console.error( "f5 Error : " + e ) }
	try{ f4( path_db ); }catch( e ){ global.console.error( "f4 Error : " + e ) }

	console.log( "----------------------------------------------------------------------------------------------------" );
	console.log( d );
	console.log( "----------------------------------------------------------------------------------------------------" );

	var fileList = [];
	for( var k in d )
	{
		var s = "";
			s += '<select class="select-'
				+ dbNm + '-' + colNm
				+'-value-' + k
				+ '" nm_property="' + k + '">\n';

			//s += '\t<option value="">선택</option>\n';
			s += '\t<option value="" selected="selected">((lb__select-db-value-item-0))</option>\n';
		var aProp = d[ k ];
		var io;
		var i=0, iLen=aProp.length;
		for( ; i<iLen; ++i )
		{
			io = aProp[ i ];
			var id = io.cd ? io.cd : io._id;
			if( _id_list[ colNm ] ) s += '\t<option value="' + io._id + '">' + io[ k ] + '</option>\n';
			else
			{
				s += '\t<option value="' + id + '">' + io[ k ] + '</option>\n';
				//s += '\t<option value="' + id + '">((lb__' + k + '))</option>\n';
			}
		}
		s+= '</select>';

		var path_col = path_db + colNm + "__" + k + ".html";
		f6( path_col, s );

		fileList.push( path_col.replace( "../../../Development-NodeJS_Modules/js/b2link_router/_admin/_schema/", "./" ) );
	}
	f6( path_db + colNm + ".list", JSON.stringify( fileList ) );
};

/*/
http://localhost:49320/_admin/_schema/create_html_select_options__value
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?", function( d ){} );

window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_cost_adjustment", function( d ){} );

window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_delivery_info_remark", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_delivery_status", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_delivery_type", function( d ){} );



//window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_division", function( d ){} );
//window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_division_team", function( d ){} );
//window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_division_team_B2Labs", function( d ){} );
//window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_division_team_BID", function( d ){} );
//window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_division_team_BOD", function( d ){} );
//window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_division_team_BSD", function( d ){} );
//window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_division_team_SSD", function( d ){} );

window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_division", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_division_part_BID_BD", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_division_part_BID_MKT", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_division_part_BID_PP", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_division_part_BID_SA ", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_division_part_BLS_DEV", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_division_part_BSD_BM", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_division_part_BSD_IS", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_division_part_BSD_LOG", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_division_part_BSD_OFL", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_division_part_BSD_ONL", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_division_part_BSD_SO", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_division_team_BID", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_division_team_BLS", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_division_team_BSD", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_division_team_SHI", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_division_team_SSD", function( d ){} );



window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_expenses_proof", function( d ){} );

window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_extra_order_wearing", function( d ){} );

window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_fi_approbation", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_fi_reject_reason", function( d ){} );

window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_inspection_detail_type", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_inspection_type", function( d ){} );

window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_member_rank", function( d ){} );

window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_packaging_material_unit", function( d ){} );

window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_partner", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_partner_buyer", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_partner_logistics", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_partner_supplier", function( d ){} );


//----------;
//window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_class", function( d ){} );
//window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_detail", function( d ){} );
//window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_type", function( d ){} );

//window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_detail_CPT001", function( d ){} );
//window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_detail_CPT002", function( d ){} );
//window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_detail_CPT003", function( d ){} );
//window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_detail_CPT004", function( d ){} );
//window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_detail_CPT005", function( d ){} );
//window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_detail_CPT006", function( d ){} );
//window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_detail_CPT007", function( d ){} );
//window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_detail_CPT008", function( d ){} );
//window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_detail_CPT009", function( d ){} );
//window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_detail_CPT010", function( d ){} );
//window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_detail_CPT011", function( d ){} );
//window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_detail_CPT012", function( d ){} );
//window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_detail_CPT013", function( d ){} );
//window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_type_CPC001", function( d ){} );
//----------;


//----------;
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_001", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_002_CP000", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_002_CP001", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_002_CP002", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP000", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP001", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP002", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP003", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP004", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP005", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP006", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP007", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_004_CP000", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_004_CP001", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_004_CP002", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_004_CP003", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_004_CP004", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_004_CP005", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_004_CP006", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_004_CP007", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_004_CP008", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_004_CP009", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_004_CP010", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_004_CP011", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_004_CP012", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_004_CP013", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_004_CP014", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_004_CP015", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_004_CP016", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_004_CP017", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_004_CP018", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_004_CP019", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_004_CP020", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_004_CP021", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_004_CP022", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_004_CP023", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_004_CP024", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_004_CP025", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_004_CP026", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_004_CP027", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_004_CP028", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_004_CP029", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_004_CP030", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_004_CP031", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_004_CP032", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_004_CP033", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_004_CP034", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_004_CP035", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_004_CP036", function( d ){} );
//window.b2link_service.common._fn_req( //window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_004_CP037", function( d ){} );
//----------;


//----------;
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_000", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_001_CP000", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_001_CP001", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_001_CP002", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_002_CP000000", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_002_CP000001", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_002_CP000002", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_002_CP000003", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_002_CP001000", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_002_CP001001", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_002_CP002000", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_002_CP002001", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP000000000", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP000000001", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP000000002", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP000000003", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP000000004", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP000000005", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP000000006", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP000000007", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP000000008", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP000001000", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP000001001", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP000001002", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP000001003", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP000001004", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP000002000", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP000002001", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP000002002", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP000002003", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP000002004", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP000002005", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP000002006", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP000002007", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP000003000", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP000003001", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP001000000", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP001001000", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP001001001", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP001001002", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP001001003", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP001001004", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP001001005", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP001001006", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP001001007", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP001001008", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP001001009", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP002000000", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP002000001", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_depth_003_CP002001000", function( d ){} );
//----------;



window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_product_status", function( d ){} );


window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_purchase_reason", function( d ){} );


window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_release_operation_packaging_material", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_release_operation_range", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_release_operation_type", function( d ){} );

window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_request_result", function( d ){} );

window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_sale_reason", function( d ){} );

window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_stock_exception", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_stock_merge_status", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_stock_transfer_status", function( d ){} );

window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_tax_bill", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_tax_included", function( d ){} );

window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_transaction_entity", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_transaction_result", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_transaction_return_reason", function( d ){} );

window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=category&colNm=category_update_reason", function( d ){} );





window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=company&colNm=company_info_basic", function( d ){} );





//window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=contract_purchase&colNm=contract_purchase_common_info", function( d ){} );


//window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=contract_sale&colNm=contract_sale_b2b", function( d ){} );
//window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=contract_sale&colNm=contract_sale_b2c", function( d ){} );
//window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=contract_sale&colNm=contract_sale_consignment", function( d ){} );





//window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=information&colNm=exchange_rate", function( d ){} );
//window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=information&colNm=ingredient", function( d ){} );

window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=information&colNm=exchange_rate_daily", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=information&colNm=exchange_rate_raw_data", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=information&colNm=exchange_rate_realtime", function( d ){} );





window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=list_static&colNm=bank_code_domestic", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=list_static&colNm=bank_swift_kr", function( d ){} );

window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=list_static&colNm=company_delivery", function( d ){} );

//window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=list_static&colNm=contract_purchase_payment_type", function( d ){} );
//window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=list_static&colNm=contract_sale_type", function( d ){} );

window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=list_static&colNm=country", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=list_static&colNm=country__b2ker", function( d ){} );

//window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=list_static&colNm=country_phone_num", function( d ){} );
//window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=list_static&colNm=country_phone_num__b2ker", function( d ){} );

window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=list_static&colNm=currency", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=list_static&colNm=currency__b2ker", function( d ){} );

window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=list_static&colNm=email_detail", function( d ){} );

window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=list_static&colNm=job_title", function( d ){} );

window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=list_static&colNm=messenger", function( d ){} );

window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=list_static&colNm=trade_disposal", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=list_static&colNm=trade_terms", function( d ){} );





window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=parnter&colNm=partner_buyer", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=parnter&colNm=partner_logistics", function( d ){} );
//window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=parnter&colNm=partner_person", function( d ){} );
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=parnter&colNm=partner_supplier", function( d ){} );

//----------------------------------------------------------------------------------------------------;
var s = 'window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_select_options__value?dbNm=<!=dbNm=!>&colNm=<!=colNm=!>, function( d ){} );';
var r = [];
var db0 = db.getSiblingDB( "_schema" );
var cols = db0.getCollectionNames();
var i=0, iLen=cols.length;
for( ; i<iLen; ++i ){
	var colNm = cols[ i ];
	var col = db0.getCollection( colNm );
	var ss = s.replace( "<!=dbNm=!>", colNm );
	col.find({}).forEach( function( doc ){
		var sss = ss.replace( "<!=colNm=!>", doc._id );
		r.push( sss );
	});
}
r;
return r;
//----------------------------------------------------------------------------------------------------;
//*/
(function( req, res ){
	global.TtwLog.log( "- [ S ] -_admin/_schema/create_html_select_options__value():void----------" );

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

	var path_tjs = "../../../Development-NodeJS_Modules/js/b2link_router/_admin/_schema/create_html_select_options__value.dbjs";

	var query = f2( path_tjs ).toString( "utf8" );
		console.log( query );

	var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;

	query = query
		.replace( "<!=dbNm=!>", q.dbNm ).replace( "<!=colNm=!>", q.colNm )
		.replace( "<!=dbNm=!>", q.dbNm ).replace( "<!=colNm=!>", q.colNm );

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

			var f = global.b2link_router__admin__schema_create_html_select_options__value._f0;

			//for( var s in d ) f( d, s );
			f( d, q.dbNm, q.colNm );

			global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
			//global.b2link.response.send_200_JSON( req, res, result );
		}
	);

	global.TtwLog.log( "- [ E ] -_admin/_schema/create_html_select_options__value():void----------" );
});