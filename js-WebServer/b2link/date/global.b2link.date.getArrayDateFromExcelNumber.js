//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/date/global.b2link.date.getArrayDateFromExcelNumber.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Get array date From Excel Number Format
 * @function
 * @param  {String} 42930
 * @return {Array} [ year, month, day, hour, minute, seconds ]
 * @example
 * <code>
	var n_d1 = 42930;
	var getArrayDate =  global.b2link.date.getArrayDateFromExcelNumber;
	var d1 = getArrayDate( n_d1 );

	console.log( JSON.stringify( d1 ) );
 * </code>
 */
global.b2link.date.getArrayDateFromExcelNumber = function( n )
{
	var d = new Date( 1899, 12, n );

	if( d.toString() === "Invalid Date" )
	{
		console.error( "정확한 날짜가 아닙니다." + s );
		return null;
	}

	var r = [ d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds() ];

	d = null;

	return r;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;