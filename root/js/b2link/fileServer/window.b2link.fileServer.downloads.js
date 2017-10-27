//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/fn/window.b2link.fileServer.downloads.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){

	/**
	 * 여러 파일을 zip 파일로 묶어서 다운로드 한다.
	 * @function
	 * @param {Array} urls
	 * @param {String} zipFileName
	 * @return {*}
	 */
	window.b2link.fileServer.downloads = function( urls, zipFileName )
	{
		window.JaceLog.timeStamp( "---- [ S ] - window.b2link.fileServer.downloads():{*}----------" );

		if(!urls) return false;

		if(!Array.isArray){
			Array.isArray = function(arg){
				return Object.prototype.toString.call(arg) === '[object Array]';
			};
		}

		if(!Array.isArray(urls)){
			console.error("window.b2link.fileServer.downloads --- urls is not object Array.");
			return false;
		}

		var _fileServerHost = window.b2link.url.getServerURLByServers("file_server");
		var _scode = window.b2link.STATIC.CONFIG.URL.SCODE;
		var _server_url = _fileServerHost + "/downloads?scode=" + _scode + window.b2link_url_member.member_session.getParam( window.b2link.session.getSession() );

		window.b2link.xhr.req_POST_Str(
			_server_url
			, JSON.stringify({ "files": urls, "zipFileName": zipFileName })
			, { "Content-type" : "application/json" }
			, {
				"onabort" : function( e ){ console.log( e ) }
				, "onerror" : function( e ){ console.log( e ); /* TODO : 모달 로딩 닫기 */ return false; }
				, "onload" : function( e ){ console.log( e ) }
				, "onloadend" : function( e ){
					//console.log(e);

					//var type = e.target.getResponseHeader("Content-Type");
					//var blob = new Blob([this.response], {type: type});

					//var URL = window.URL || window.webkitURL;
					//var downloadUrl = URL.createObjectURL(blob);
					var downloadUrl = _fileServerHost + "/downloads?scode=" + _scode + "&realFileName=" + this.response + "&fileName=" + zipFileName + window.b2link_url_member.member_session.getParam( window.b2link.session.getSession() );

					//Construct the a element;
					var link = document.createElement("a");
					link.download = zipFileName;
					link.target = "_blank";

					//Construct the uri;
					link.href = downloadUrl;
					document.body.appendChild(link);
					link.click();

					//Cleanup the DOM;
					document.body.removeChild(link);
					delete link;

					//URL.revokeObjectURL( downloadUrl );
					return true;
				}
				, "onstart" : function( e ){ console.log( e ); /* TODO : 모달 로딩 열기 */ }
				, "onprogress" : function( e ){ console.log( e ) }
				, "onreadystatechange" : function( e ){}
				, "ontimeout" : function( e ){ console.log( e ); /* TODO : 모달 로딩 닫기 */ }
			}
		);

		window.JaceLog.timeStamp( "---- [ E ] - window.b2link.fileServer.downloads():{*}----------" );
	};
})();

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;