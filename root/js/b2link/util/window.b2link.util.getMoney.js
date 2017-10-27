//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/util/window.b2link.util.getMoney.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} s_number money
 * @return {String} money
 */
window.b2link.util.getMoney = function( s_number )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.util.getMoney():{String}----------" );

	/*/
	var money = s_number;

	if( !isNaN( s_number ) )
	{
		var num = s_number.toString().split( "." );
			num[ 0 ] = num[ 0 ].toString().replace( window.b2link.STATIC.REGEXP.REPLACE.MONEY_COMMA1, "," );

		money = num[ 0 ] + parseFloat( "0." + ( num[ 1 ] != null ? num[ 1 ] : "0.00" ) ).toFixed( 2 ).replace( "0.", "." );
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.util.getMoney():{String}----------" );
	return money;
	//*/

	return parseFloat( s_number ).toLocaleString( "en" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
