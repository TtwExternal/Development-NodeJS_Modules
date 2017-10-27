//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/date/global.b2link.date.getObjectDateFromString.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Get object date.
 * @function
 * @param  {String} "yyyy-mm-dd" or "yyyy-mm-dd hh:mi:ss"
 * @return {Object} { y : 2017, m : 5, d : 26, ho : 15, mi : 32, se : 46 }
 *
 * @author  James
 * @example
 * <code>
	var s_d1 = "2017-05-26 10:57:37";
	var getObjectDate =  global.b2link.date.getObjectDateFromString;
	var n_d1 = getObjectDate( s_d1 );

	var s_d2 = "2017-05-26";
	var n_d2 = getObjectDate( s_d2 );

	console.log( JSON.stringify( n_d1 ) );
	console.log( JSON.stringify( n_d2 ) );
 * </code>
 */
global.b2link.date.getObjectDateFromString = function( s )
{
	var d = new Date( s );

	if( d.toString() === "Invalid Date" )
	{
		console.error( "정확한 날짜 문자열이 아닙니다." + s );
		return null;
	}

	var r = { y : d.getFullYear(), m : d.getMonth() + 1, d : d.getDate(), ho : d.getHours(), mi : d.getMinutes(), se : d.getSeconds() };

	d = null;

	return r;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;