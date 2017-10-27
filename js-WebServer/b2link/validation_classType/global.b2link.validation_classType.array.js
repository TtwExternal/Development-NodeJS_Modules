//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/validation_classType/global.b2link.validation_classType.array.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {array} p
 * @return {Boolean}
 */
global.b2link.validation_classType.array = function( p )
{
	//global.TtwLog.timeStamp( "---- [ S ] - global.b2link.validation_classType.array():{Boolean}----------" );
	//global.TtwLog.timeStamp( "---- [ E ] - global.b2link.validation_classType.array():{Boolean}----------" );

	//if( "object" == typeof( p ) )
	if( global.b2link.validation_classType.object( p ) )
	{
		if( p.hasOwnProperty( "length" ) )
		{
			return true;
		}
	}
	return false;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;