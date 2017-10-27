//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/validation_classType/global.b2link.validation_classType.boolean.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Number} p
 * @return {Boolean}
 */
global.b2link.validation_classType.boolean = function( p )
{
	//global.TtwLog.timeStamp( "---- [ S ] - global.b2link.validation_classType.boolean():{Boolean}----------" );
	//global.TtwLog.timeStamp( "---- [ E ] - global.b2link.validation_classType.boolean():{Boolean}----------" );

	if( "boolean" == typeof( p ) ) return true;
	return false;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;