//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link/router/global.b2link.router_resource._common_FileSend_RootPathAndFilePath.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 세션 체크 후 B2LiNK-Resource-IMG/의 파일을 Client Browser에 전달한다.
 * @function
 * @param {http.ClientRequest} req
 * <code>
	{
		sid : ""
		, filePath : "/SYS0030/asd/asd/test.png
	}
 * </code>
 *
 * @param {http.ClientResponse} res
 *
 * @param {String} rootPath 파일이 존재하는 대상 폴더의 최상위 경로
 */
global.b2link.router_resource._common_FileSend_RootPathAndFilePath = function( req, res, rootPath ){
	global.TtwLog.timeStamp( "---- [ S ] - global.b2link.router_resource._common_FileSend_RootPathAndFilePath():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
	//var q = global.b2link.url.getQueryFromURL_Decode( req.url );//URL to Query Object;

	//ClientRequest에 포함되어온 Session을 인증 후 콜백 함수를 실행한다.;
	global.b2link.request.get__checkSessionToSessionServer( req, res, q.sid, function( result ){
		if( !result )
		{
			//MongoDB Query 결과가 Error 일시 처리 및 Client에 전송;
			global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
			return;
		}

		//Client Browser에 File을 전달한다.;
		global.b2link.response.sendStream_200_File_URI_NCallback( req, res, rootPath, q.filePath );
	});

	global.TtwLog.log( "---- [ E ] - global.b2link.router_resource._common_FileSend_RootPathAndFilePath():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;