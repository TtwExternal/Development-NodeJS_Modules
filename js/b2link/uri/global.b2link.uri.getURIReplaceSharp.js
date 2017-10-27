//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/uri/global.b2link.uri.getURIReplaceSharp.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} s 문자열
 * @return {String}
 * #을 !MzU=!로 변경
 * &을 !Mzg=!로 변경
 */
global.b2link.uri.getURIReplaceSharp = function( s )
{
	//global.TtwLog.timeStamp( "---- [ S ] - global.b2link.uri.getURIReplaceSharp():{String}----------" );

	//global.TtwLog.timeStamp( "---- [ E ] - global.b2link.uri.getURIReplaceSharp():{String}----------return s;" );
	return s.replace( /#/gi, "!MzU=!" ).replace( /&/gi, "!Mzg=!" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;