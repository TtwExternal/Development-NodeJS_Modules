//*///-------------------------------------------------- [ S ] - B2LiNK-B2Labs IP 이외 차단 파일 목록;
setTimeout(function(){ var i=0, iLen=10;for( ; i<iLen; ++i ) global.TtwLog.warn( "IP 차단 기능 실행 - " + i ); }, 3000 );
var _ = global._$TATIC_VALUE_SERVER_HTTP_EVTS_REQUEST;
var a = [
	"/index.debug.html"
	, "/index.debug.html"
	, "/index-Dev-MongoDBQueryTester.html"
	, "/mode-javascript.js"
	, "/theme-monokai.js"
	, "/worker-javascript.js"

	, "/ui/Dev-MongoDB/QueryTester/QueryTester.html"
	, "/ui/Dev-MongoDB/QueryTester/QueryTester.js"
	, "/ui/Dev-MongoDB/QueryTester/QueryTester.thtml"
	, "/ui/index_dev_mongodb/queryTester/queryTester.html"
	, "/ui/index_dev_mongodb/queryTester/queryTester.js"
	, "/ui/index_dev_mongodb/queryTester/queryTester.thtml"
];
var f = function( req, res ){
	if( !global.b2link.ip.adminCheckAvailable__http$ClientRequest( req, res ) )
	{
		try{ window.TtwLog.warn( "차단 파일 요청 IP : " + req.client.remoteAddress ); }catch( e ){}
		global.b2link.response.sendStream_404( req, res );
	}

	global.b2link.response.sendStream_200_File_URI_NCallback( req, res, global._$TATIC_CONST_SERVER_HTTP_TARGET_PATH, req.url );
};
var io; var i=0, iLen=a.length; for( ; i<iLen; ++i ) _[ a[ i ] ] = f; a.length = 0; a = null;
//*///-------------------------------------------------- [ E ] - B2LiNK-B2Labs IP 이외 차단 파일 목록;