//----------------------------------------------------------------------------------------------------;
var fileNm = "/js-File/router/file/single_sync/upload.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @property {String}
 */
//var _query = global.b2link.fs.getDBJS( global.router.file.PATH.single_sync + "upload.dbjs" );

/**
 * upload
 *
 * @function
 * @param {http.ClientRequest} req
 * <code>
	{

	}
 * </code>
 *
 * @param {http.ClientResponse} res
 * <code>
	{

	}
 * </code>
 *
 * @example
 * <code>
	http://localhost:port/file/single_sync/upload
	http://localhost:port/file/single_sync/upload?
 * </code>
 */
(function( req, res ){
	global.TtwLog.timeStamp( "- [ S ] - file/single_sync/upload():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
	//var q = global.b2link.url.getQueryFromURL_Decode( req.url );//Query;
	//var queryData = require( "url" ).parse( req.url, true ).query;

	var fileSize  = req.headers[ "content-length" ];
	var uploadedBytes = 0;

	//var destinationFile = global.REQUIRES.fs.createWriteStream( "d:/a.png" );
	//req.pipe( destinationFile );

	//Client로 부터 전송 받을 데이터;
	var _data = "";

	//Client로 부터 데이터를 전송 받는 이벤트;
	req.on( "data", function( chunk ){
		debugger;

		_data += chunk;

		//var p = ( uploadedBytes / fileSize ) * 100;
		//res.write( "Uploading " + parseInt( p )+ " %\n" );
	});

	//Client로 부터 데이터 전송 완료 이벤트;
	req.on( "end", function(){
		//console.log( _data );

		debugger;

		var b = new Buffer( _data.substring( _data.indexOf( "base64," ) + 7, _data.length ), "base64" );

		global.b2link.fs.writeFile_Binary( "./file/upload/" + Date.now(), b, null, function(){ debugger; });

		//CORS 처리;
		//global.b2link.response.setHeaders__b2ker( res );

		global.b2link.response.send_200_True( req, res );

		//ClientRequest에 포함되어온 Session을 인증 후 MongoDB로 Request함;
		/*/
		global.b2link.request.get__member_session$checkSessionAndReqMongoDB__CallBack( req, res, q, "admin", query
			, function( req, res, error, result ){
				if( error )
				{
					//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
					global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
					return;
				}

				//MongoDB Query 실행 후 결과를 Client에 전송하기 - 구매 발주 확정서 업데이트 완료;
				global.b2link.response.send_200_JSON( req, res, result );
			}
		);
		//*/
	});

	global.TtwLog.timeStamp( "- [ E ] - file/single_sync/upload():void----------" );
});