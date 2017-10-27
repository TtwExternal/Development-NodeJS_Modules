//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_router/_admin/_schema/create_html_form__input_elements.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

global.b2link_router__admin__schema_create_html_form__input_elements = {};
global.b2link_router__admin__schema_create_html_form__input_elements._f0 = function( d, dbNm ){
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

	var path = "../../../Development-NodeJS_Modules/js/b2link_router/_admin/_schema/ui_include/test-form/";
	//var path = "../../WebPage/root/ui_include/form/";

	var path_db = path + dbNm + "/";

	try{ f5( path_db ); }catch( e ){ global.console.error( "f5 Error : " + e ) }
	try{ f4( path_db ); }catch( e ){ global.console.error( "f4 Error : " + e ) }

	var db = d[ dbNm ];
	for( var colNm in db )
	{
		var col = db[ colNm ];

		if( global.b2link_router__admin__schema_create_html_form__input_elements._f0[ dbNm ] )
		{
			if( global.b2link_router__admin__schema_create_html_form__input_elements._f0[ dbNm ][ colNm ] )
			{
				console.log( dbNm + "." + colNm + "은 생성하지 않음" );
				continue;
			}
		}

		var s = '<div style="display: grid; padding: 20px; border: solid 1px #000;">';
			s += '\n\t</br>';
			s += '\n\t<h2 name="' + dbNm + "." + colNm + '">' + dbNm + "." + colNm + "</h2>";
			s += '\n\t<a name="' + dbNm + "." + colNm + '">' + dbNm + "." + colNm + "</a>";
			s += '\n\t</br>';
			//s += '<form>';
		if( col.hasOwnProperty( "properties" ) && col.properties )
		{
			var o0 = col.properties;
			var io;

			for( var pk in o0 )
			{
				io = o0[ pk ];
				if( "object" == io.type )
				{
					s += '\n\t\t<span style="color: #ff0000;">Column Name : ' + pk + '</span>';
					s += '\n\t\t</br>';
					s += '\n\t\t<span style="color: #ff0000;">Description : ' + io.description + '</span>';
					s += '\n\t\t</br>';
					s += '\n\t\t<span style="color: #ff0000;">ExampleValue : ' + io.exampleValue + '</span>';
					s += '\n\t\t</br>';
					s += '\n\t\t<label>((lb__' + pk + '))</label>';
					s += '\n\t\t</br>';

					s += '\n\t\t<input placeholder="((ph__' + pk + '))';
					for( var pkk in io ) s += '((ph__' + pk + '.' + pkk + '))';
					s += '">';
					s += '\n\t\t</br>';

					s += '\n\t\t<input value="{{' + pk + '}}';
					for( var pkk in io ) s += '{{' + pk + '.' + pkk + '}}';
					s += '">';
					s += '\n\t\t</br>';
				}
				else if( "array" == io.type )
				{
					s += '\n\t\t<span style="color: #ff0000;">Column Name : ' + pk + '</span>';
					s += '\n\t\t</br>';
					s += '\n\t\t<span style="color: #ff0000;">Description : ' + io.description + '</span>';
					s += '\n\t\t</br>';
					s += '\n\t\t<span style="color: #ff0000;">ExampleValue : ' + io.exampleValue + '</span>';
					s += '\n\t\t</br>';
					s += '\n\t\t<label>((lb__' + pk + '))</label>';
					s += '\n\t\t</br>';

					s += '\n\t\t<input placeholder="((ph__' + pk + '))';
					for( var pkk in io ) s += '((ph__' + pk + '.' + pkk + '))';
					s += '">';
					s += '\n\t\t</br>';

					s += '\n\t\t<input value="{{' + pk + '}}';
					for( var pkk in io ) s += '{{' + pk + '.' + pkk + '}}';
					s += '">';
					s += '\n\t\t</br>';
				}
				else
				{
					s += '\n\t\t<span style="color: #ff0000;">Column Name : ' + pk + '</span>';
					s += '\n\t\t</br>';
					s += '\n\t\t<span style="color: #ff0000;">Description : ' + io.description + '</span>';
					s += '\n\t\t</br>';
					s += '\n\t\t<span style="color: #ff0000;">ExampleValue : ' + io.exampleValue + '</span>';
					s += '\n\t\t</br>';
					s += '\n\t\t<label>((lb__' + pk + '))</label>';
					s += '\n\t\t</br>';
					s += '\n\t\t<input placeholder="((ph__' + pk + '))">';
					s += '\n\t\t</br>';
					s += '\n\t\t<input value="{{' + pk + '}}">';
					s += '\n\t\t</br>';
				}
			}

			var path_col = path_db + colNm + ".html";
			f6( path_col, s );
		}
		else
		{
			console.warn( "Don't have 'properties' : " + colNm );
			console.warn( "properties length : " + col.properties );
		}
		//s += "\n</form>";
		s += "\n</div>";
	}
};

global.b2link_router__admin__schema_create_html_form__input_elements._f0.authotiry = {
	auth_col : function(){}
	, auth_col_c : function(){}
	, auth_col_d : function(){}
	, auth_col_r : function(){}
	, auth_col_u : function(){}
	, auth_db : function(){}
	, auth_db_c : function(){}
	, auth_db_d : function(){}
	, auth_db_r : function(){}
	, auth_db_u : function(){}
};

/*/
http://localhost:49320/_admin/_schema/create_html_form__input_elements
window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_html_form__input_elements?", function( d ){} );
//*/
(function( req, res ){
	global.TtwLog.log( "- [ S ] -_admin/_schema/create_html_form__input_elements():void----------" );

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

	var path_tjs = "../../../Development-NodeJS_Modules/js/b2link_router/_admin/_schema/create_html_form__input_elements.dbjs";

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

			var f = global.b2link_router__admin__schema_create_html_form__input_elements._f0;
			/*/
				f( d, "category" );
				f( d, "list_static" );
			//*/
			for( var s in d ) f( d, s );

			global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
			//global.b2link.response.send_200_JSON( req, res, result );
		}
	);

	global.TtwLog.log( "- [ E ] -_admin/_schema/create_html_form__input_elements():void----------" );
});