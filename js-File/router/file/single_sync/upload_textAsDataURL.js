//----------------------------------------------------------------------------------------------------;
var fileNm = "/js-File/router/file/single_sync/upload_textAsDataURL.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 업로드에 이용되는 파일정보를 저장하는 구조체;
 * @property {Object}
 * <code>
	{
	"fileNm": "MediaCreationTool.exe",
	"id": "MediaCreationTool.exe_1506046132708",
	"saved_fileNm": "1506046134923_MediaCreationTool.exe",
	"totalBytes": "18357776",
	"total_offset": "17",
	"isEnd": 1,
	"_storage_key": "::1_60299_1506046134922",
	"ws": {
		"_writableState": {
			"objectMode": false,
			"highWaterMark": 16384,
			"needDrain": true,
			"ending": false,
			"ended": false,
			"finished": false,
			"decodeStrings": true,
			"defaultEncoding": "utf8",
			"length": 531984,
			"writing": true,
			"corked": 0,
			"sync": false,
			"bufferProcessing": false,
			"writelen": 531984,
			"bufferedRequest": null,
			"lastBufferedRequest": null,
			"pendingcb": 1,
			"prefinished": false,
			"errorEmitted": false,
			"bufferedRequestCount": 0,
			"corkedRequestsFree": {
				"next": null,
				"entry": null
			}
		},
		"writable": true,
		"domain": null,
		"_events": {
			"finish": [
				null,
				null
			]
		},
		"_eventsCount": 2,
		"path": "D:\\sukjune_js_util\\httpServer_csj\\upload\\1506046134923_MediaCreationTool.exe",
		"fd": 7,
		"flags": "w",
		"mode": 438,
		"autoClose": true,
		"bytesWritten": 17825792
	},
	"offset": "17"
	}
 * </code>
 */
var _storage = {};

/**
 * @property {String}
 */
//var _query = global.b2link.fs.getDBJS( global.router.file.PATH.single_sync + "upload.dbjs" );

/**
 *
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
	http://localhost:port/file/single_sync/upload_textAsDataURL?fileNm=transaction_blueprint.xlsx&totalBytes=18016&_storage_key=&file_id=transaction_blueprint.xlsx_1506048942477
	//SCODE처리를 위한로직 필요
* </code>
*/
(function( req, res ){
	global.CSJLog.timeStamp( "- [ S ] - file/single_sync/upload_textAsDataURL():void----------" );

	//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
	var q = global.b2link.url.getQueryFromURL_Decode( req.url );//Query;
	//var queryData = require( "url" ).parse( req.url, true ).query;


	//Session Check;
	global.b2link.request.get__checkSessionToSessionServer( req, res, q.sid, function(){

		var uploadPath =  "./file/upload/" + global.b2link.STATIC.CONFIG.URL.SCODE + "/";

		var _data;
		//Client로 부터 데이터를 전송 받는 이벤트;
		req.on( "data", function( chunk ){
			_data += chunk;
		});

		//Client로 부터 데이터 전송 완료 이벤트;
		req.on( "end", function(){

			var target = _storage[ q._storage_key ];

			//if( !q._storage_key )
			if( !_storage[ q._storage_key ] )
			{
				var nowDate = Date.now();
				//_storage_key = req.connection.remoteAddress + "_" + req.connection.remotePort + "_" + nowDate;

				target = _storage[ q._storage_key ] = {};

				target._storage_key = q._storage_key;
				target.fileNm = q.fileNm;
				target.id = q.file_id;
				// target.isEnd = 0;
				target.saved_fileNm = nowDate + "_" + q.fileNm;
				// target.total_offset = q.total_offset;
				target.totalBytes = q.totalBytes;

				target.ws = global.REQUIRES.fs.createWriteStream( uploadPath + target.saved_fileNm );
				target.ws.on( "finish", function( e ){
					console.log( "finish" );
					if( e ) console.log( e );
				});
				target.ws.on( "close", function( e ){
					console.log( "close" );
					if( e ) console.log( e );
				});
				target.ws.on( "error", function( e ){
					console.log( "error" );
					if( e ) console.log( e );

					global.b2link.response.send_200_False__ErrorLog( req, res, q, e );
				});
			}


			var b = new Buffer( _data, "base64" );

			if(b.byteLength > 1024 * 1024 * 2 )
			{
				global.b2link.response.send_200_False__ErrorLog( req, res, q, "파일용량이 2mb 이상입니다." );
			}

			global.b2link.fs.writeFile_Binary( uploadPath + target.saved_fileNm, b, null );

			global.b2link.response.send_200_String( req, res, JSON.stringify( target ) );
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
	})

	global.CSJLog.timeStamp( "- [ E ] - file/single_sync/upload_textAsDataURL():void----------" );
});