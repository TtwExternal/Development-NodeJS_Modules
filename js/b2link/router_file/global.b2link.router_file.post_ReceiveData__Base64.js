//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/router_file/global.b2link.router_file.post_ReceiveData__Base64.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/*/
https://www.sitepoint.com/mime-types-complete-list/

data:application/haansofthwp;base64,
data:application/javascript;base64,
data:application/pdf;base64,
data:application/x-msdownload;base64,
data:application/x-shockwave-flash;base64,
data:application/x-zip-compressed;base64,
data:;base64,
data:image/bmp;base64,
data:image/jpeg;base64,
data:image/png;base64,
data:image/x-icon;base64,
data:text/css;base64,
data:text/html;base64,
data:text/plain;base64,
data:text/xml;base64,
//*/

/**
 * Base64 데이터를 POST 방식으로 전달 받은 후 콜백 함수를 실행 한다.
 * @function
 * @param {http.ClientRequest} req
 * @param {http.ClientResponse} res
 * @param {Function} cbFunction function( req, res, data, base64Type ){}
 *
 * @example
 * <code>
 * </code>
 */
global.b2link.router_file.post_ReceiveData__Base64 = function( req, res, cbFunction )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.b2link.router_file.post_ReceiveData__Base64():void----------" );

	//var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;
	//var q = global.b2link.url.getQueryFromURL_Decode( req.url );//Query;

	//Client로 부터 전송 받을 데이터;
	var _data = "";

	//Client로 부터 데이터를 전송 받는 이벤트;
	req.on( "data", function( chunk ){ _data += chunk; });

	//Client로 부터 데이터 전송 완료 이벤트;
	req.on( "end", function(){
		var idx = _data.indexOf( "base64," );
		if( -1 == idx )
		{
			global.TtwLog.error( "global.b2link.router_file.post_ReceiveData__Base64 Error : base64 문자열이 아니다." );

			global.b2link.response.send_200_False( req, res );

			debugger;

			return;
		}

		var lastIdx = idx + 7;
		var base64Type = _data.substring( 0, lastIdx );

		cbFunction( req, res, _data, base64Type );
	});

	global.TtwLog.timeStamp( "---- [ E ] - global.b2link.router_file.post_ReceiveData__Base64():void----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;