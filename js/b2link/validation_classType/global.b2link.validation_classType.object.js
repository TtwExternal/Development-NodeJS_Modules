//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/validation_classType/global.b2link.validation_classType.object.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Number} p
 * @return {Boolean}
 */
global.b2link.validation_classType.object = function( p )
{
	//global.TtwLog.timeStamp( "---- [ S ] - global.b2link.validation_classType.object():{Boolean}----------" );
	//global.TtwLog.timeStamp( "---- [ E ] - global.b2link.validation_classType.object():{Boolean}----------" );

	if( "object" == typeof( p ) ) return true;
	return false;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;