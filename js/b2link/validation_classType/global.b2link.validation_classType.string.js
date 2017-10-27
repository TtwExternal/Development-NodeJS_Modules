//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/validation_classType/global.b2link.validation_classType.string.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} p
 * @return {Boolean}
 */
global.b2link.validation_classType.string = function( p )
{
	//global.TtwLog.timeStamp( "---- [ S ] - global.b2link.validation_classType.string():{Boolean}----------" );
	//global.TtwLog.timeStamp( "---- [ E ] - global.b2link.validation_classType.string():{Boolean}----------" );

	if( "string" == typeof( p ) ) return true;
	return false;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;