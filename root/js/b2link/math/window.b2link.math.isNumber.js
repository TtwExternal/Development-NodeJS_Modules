//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/math/window.b2link.math.isNumber.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} n
 * @return {Boolean}
 */
window.b2link.math.isNumber = function( n )
{
	//window.Rh2Log.timeStamp( "---- [ S ] - window.b2link.math.isNumber():{Boolean}----------" );

	if( typeof( n ) == "string" )
	{
		n -= 0;

		if( isNaN( n ) ) return false;
		return true;
	}

	if( typeof( n ) == "number" )
	{
		return true;
	}

	//window.Rh2Log.timeStamp( "---- [ E ] - window.b2link.math.isNumber():{Boolean}----------" );

	return false;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;