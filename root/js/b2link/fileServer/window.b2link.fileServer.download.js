//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/fn/window.b2link.fileServer.download.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){

	/**
	 * 파일을 다운로드 한다.
	 * @function
	 * @param {String} url
	 * @return
	 */
	window.b2link.fileServer.download = function( url )
	{
		window.JaceLog.timeStamp( "---- [ S ] - window.b2link.fileServer.download():{*}----------" );

		if(!url) return false;

		var _fileServerHost = window.b2link.url.getServerURLByServers("file_server");
		var _scode = window.b2link.STATIC.CONFIG.URL.SCODE;

		// 내부파일 요청 URL 생성
		if(url.indexOf(_fileServerHost) === 0){
			url = url + "?scode=" + _scode + "&download=1" + window.b2link_url_member.member_session.getParam( window.b2link.session.getSession() );
		}

		var fileName = url.split('/').pop();

		// Construct the a element
		var link = document.createElement("a");
		link.download = fileName;
		link.target = "_blank";

		// Construct the uri
		link.href = url;
		document.body.appendChild(link);
		link.click();

		// Cleanup the DOM
		document.body.removeChild(link);
		delete link;

		window.JaceLog.timeStamp( "---- [ E ] - window.b2link.fileServer.download():{*}----------" );
	};
})();

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;