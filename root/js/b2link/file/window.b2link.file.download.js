//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/file/window.b2link.file.download.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 파일 다운로드
 * @function
 * @param {String} url
 */
window.b2link.file.download = function( url )
{
	//window.Rh2Log.timeStamp( "---- [ S ] - window.b2link.file.download():void----------" );

	window.open( url );

	//window.Rh2Log.timeStamp( "---- [ E ] - window.b2link.file.download():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;