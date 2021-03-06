//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/resource/img/download.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 세션 체크 후 HTTPServer_WebPage/img/의 파일을 Client Browser에 전달한다.
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
 * @example
 * <code>
	http://localhost:49321/resource/img/download?filePath=SYS0020/test/test.png&sid=6457356b5a575a70626d566b4f6a6f305a445a684e4445334f44526c4d7a457a4f444d304e546733595451354e3245314f4464684e4455334f5455344e3245305a444d304e546733595451354e7a63305a6a5a684e7a41324f54526b4e6d51304f546335
 * </code>
 */
(function( req, res ){
	global.CSJLog.log( "- [ S ] - resource/img/download():void----------" );

	global.b2link.router_resource._common_FileSend_RootPathAndFilePath( req, res, "./img/" );

	global.CSJLog.log( "- [ E ] - resource/img/download():void----------" );
});
