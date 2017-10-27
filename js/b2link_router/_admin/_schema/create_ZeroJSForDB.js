//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_router/_admin/_schema/create_ZeroJSForDB.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {http.ClientRequest} req
 * @param {http.ClientResponse} res
 * @example
 * <code>
 	http://localhost:49320/_admin/_schema/create_ZeroJSForDB
	window.b2link_service.common._fn_req( window.b2link.STATIC.CONFIG.URL.PROXY + "http://localhost:49320/_admin/_schema/create_ZeroJSForDB?", function( d ){} );
 * </code>
 */
(function( req, res ){
	global.TtwLog.log( "- [ S ] -_admin/_schema/create_ZeroJSForDB():void----------" );

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

	var path_tjs = "../../../Development-NodeJS_Modules/js/b2link_router/_admin/_schema/create_ZeroJSForDB.dbjs";

	var path0 = "../../../Development-NodeJS_Modules/js/b2link_router/_admin/_schema/database-insert/";

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

			var d = result;//DB 목록;

			var io;
			for( var s in d )
			{
				io = d[ s ];//DB;
				var jo;
				for( var ss in io )
				{
					jo = io[ ss ];//Collection;

					console.log( s +"." + ss );
					try{ f4( path0 + s ); }catch( e ){}
					try{ f4( path0 + s + "/" + ss ); }catch( e ){}
					f6( path0 + s + "/" + ss + "/0.js", JSON.stringify( jo, null, "\t" ) );
				}
			}

			global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
			//global.b2link.response.send_200_JSON( req, res, result );
		}
	);

	global.TtwLog.log( "- [ E ] -_admin/_schema/create_ZeroJSForDB():void----------" );
});