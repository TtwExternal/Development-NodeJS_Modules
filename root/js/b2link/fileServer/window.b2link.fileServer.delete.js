//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/fn/window.b2link.fileServer.delete.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){

	/**
	 * 파일을 삭제 한다.
	 * 단일 파일 삭제 or 다중 파일 삭제
	 * @function
	 * @param {String or Array} url
	 * @return {*}
	 */
	window.b2link.fileServer.delete = function( url )
	{
		window.JaceLog.timeStamp( "---- [ S ] - window.b2link.fileServer.delete():{*}----------" );

		if(!url) return false;

		var _fileServerHost = window.b2link.url.getServerURLByServers("file_server");
		var _scode = window.b2link.STATIC.CONFIG.URL.SCODE;
		var _server_url = _fileServerHost + "/delete?scode=" + _scode + window.b2link_url_member.member_session.getParam( window.b2link.session.getSession() );

		if(typeof url === "string"){
			url = [ url ];
		}

		window.b2link.xhr.req_POST_Str(
			_server_url
			, JSON.stringify({ "scode": _scode, "files": url })
			, { "Content-type" : "application/json" }
			, {
				"onabort" : function( e ){ console.log( e ) }
				, "onerror" : function( e ){ console.log( e ); /* TODO : 모달 로딩 닫기 */ return false; }
				, "onload" : function( e ){ console.log( e ) }
				, "onloadend" : function( e ){ console.log( e ); /* TODO : 모달 로딩 열기 */ return true; }
				, "onstart" : function( e ){ console.log( e ) }
				, "onprogress" : function( e ){ console.log( e ) }
				, "onreadystatechange" : function( e ){}
				, "ontimeout" : function( e ){ console.log( e ); /* TODO : 모달 로딩 닫기 */ }
			}
		);

		window.JaceLog.timeStamp( "---- [ E ] - window.b2link.fileServer.delete():{*}----------" );
	};
})();

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;