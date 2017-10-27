//----------------------------------------------------------------------------------------------------;
var fileNm = "/js-File/router/file/single_sync/upload_readAsArrayBuffer.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
/*/
{fs.WriteStream} : {
	"_writableState" : {
		"objectMode" : false,
		"highWaterMark" : 16384,
		"needDrain" : true,
		"ending" : false,
		"ended" : false,
		"finished" : false,
		"decodeStrings" : true,
		"defaultEncoding" : "utf8",
		"length" : 531984,
		"writing" : true,
		"corked" : 0,
		"sync" : false,
		"bufferProcessing" : false,
		"writelen" : 531984,
		"bufferedRequest" : null,
		"lastBufferedRequest" : null,
		"pendingcb" : 1,
		"prefinished" : false,
		"errorEmitted" : false,
		"bufferedRequestCount" : 0,
		"corkedRequestsFree" : {
			"next" : null,
			"entry" : null
		}
	},
	"writable" : true,
	"domain" : null,
	"_events" : {
		"finish" : [
			null,
			null
		]
	},
	"_eventsCount" : 2,
	"path" : "D:\\sukjune_js_util\\httpServer_csj\\upload\\1506046134923_MediaCreationTool.exe",
	"fd" : 7,
	"flags" : "w",
	"mode" : 438,
	"autoClose" : true,
	"bytesWritten" : 17825792
}
//*/

/**
 * 업로드에 이용되는 파일정보를 저장하는 구조체;
 * @property {Object}
 * <code>
	{
		"storage_key" : {
			, "_storage_key" : "::1_60299_1506046134922"
			, "fileNm" : "MediaCreationTool.exe"
			, "id" : "MediaCreationTool.exe_1506046132708"
			, "isEnd" : 1
			, "offset" : "17"
			, "saved_fileNm" : "1506046134923_MediaCreationTool.exe"
			, "totalBytes" : "18357776"
			, "total_offset" : "17"
			, "ws" : {fs.WriteStream}
		}

		, "storage_key" : {}
		, ...
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
	http://localhost:port/file/single_sync/upload_readAsArrayBuffer??fileNm=electron-api.json&totalBytes=624043&offset=0&total_offset=0&_storage_key=&file_id=electron-api.json_1506046739595
	//SCODE 처리를 위한로직 필요한지 결정되지않음.
* </code>
*/
(function( req, res ){
	global.CSJLog.timeStamp( "- [ S ] - file/single_sync/upload_readAsArrayBuffer():void----------" );

	//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
	var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

	//Session Check;
	global.b2link.request.get__checkSessionToSessionServer( req, res, q.sid, function(){

		var uploadPath =  "./file/upload/" + global.b2link.STATIC.CONFIG.URL.SCODE + "/";

		var _datas = {};
		var tb;//Target Buffer;

		//Client로 부터 데이터를 전송 받는 이벤트;
		req.on( "data", function( chunk ){
			req;
			var len = Number( req.headers[ "content-length" ] );
			if( !_datas[ len ] )
			{
				_datas[ len ] = { b : new Buffer( len ), i : 0 };
			}

			tb = _datas[ len ];//Target Buffer;

			try
			{
				//var i=0, iLen=chunk.length;
				var i=0, iLen=chunk.byteLength;
				for( ; i<iLen; ++i )
				{
					tb.b.writeUInt8( chunk[ i ], tb.i );
					++tb.i;
				}
			}
			catch( e )
			{
				debugger;
			}
		});
		//*/

		//Client로 부터 데이터 전송 완료 이벤트;
		req.on( "end", function(){

			/*/
			//수정하기 - 20170925_1843 - 송선우 - 성능 대폭 개선 요소;
			var buffer = new Buffer( _data.split( "," ), "binary" );
			/*/
			//debugger;
			//var buffer = new Buffer( _data.split( "," ), "binary" );
			//*/

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
				target.isEnd = 0;
				target.saved_fileNm = nowDate + "_" + q.fileNm;
				target.total_offset = q.total_offset;
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

			target.offset = q.offset;

			if( q.total_offset == q.offset )
			{
				global.TtwLog.timeStamp( "File Upload Complete" );
				target.isEnd = 1;
			}

			if( target )
			{
				//target.ws.write( buffer );
				target.ws.write( tb.b, function( error ){
					if( error )
					{
						debugger;
						return;
					}
					//_data.byteLength = 0;
					//_data.length = 0;
					//_data = null;
				});

				global.b2link.response.send_200_String( req, res, JSON.stringify( target ) );

				if( 1 == target.isEnd )
				{
					target.ws.end();
					delete _storage[ q._storage_key ];
				}
			}
		});
	})

	global.CSJLog.timeStamp( "- [ E ] - file/single_sync/upload_readAsArrayBuffer():void----------" );
});