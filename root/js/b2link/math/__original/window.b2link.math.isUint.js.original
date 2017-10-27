//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/math/window.b2link.math.isUint.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} n
 * @return {Boolean}
 */
window.b2link.math.isUint = function( n )
{
	//window.Rh2Log.timeStamp( "---- [ S ] - window.b2link.math.isUint():{Boolean}----------" );

	if( typeof( n ) == "string" || typeof( n ) == "number" )
	{
		n += "";

		if( isNaN( n ) ) return false;
		else
		{
			if( n.indexOf( "." ) > - 1 ) return false;
			else
			{
				if( n < 0 ) return false;
				return true;
			}
		}
	}

	//window.Rh2Log.timeStamp( "---- [ E ] - window.b2link.math.isUint():{Boolean}----------" );

	return false;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;