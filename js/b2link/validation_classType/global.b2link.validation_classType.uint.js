//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/validation_classType/global.b2link.validation_classType.uint.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {uint} p
 * @return {Boolean}
 */
global.b2link.validation_classType.uint = function( p )
{
	//global.TtwLog.timeStamp( "---- [ S ] - global.b2link.validation_classType.uint():{Boolean}----------" );
	//global.TtwLog.timeStamp( "---- [ E ] - global.b2link.validation_classType.uint():{Boolean}----------" );

	//if( "number" == typeof( p ) )
	if( global.b2link.validation_classType.number( p ) )
	{
		if( -1 < p )
		{
			if( -1 == p.toString.indexOf( "." ) )
			{
				return true;
			}
		}
	}
	return false;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;