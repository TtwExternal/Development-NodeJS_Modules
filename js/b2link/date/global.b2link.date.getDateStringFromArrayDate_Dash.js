//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/date/global.b2link.date.getDateStringFromArrayDate_Dash.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Array} a [ year, month, day, hour, minute, seconds ]
 * @return {String} year-month-day-hour-minute-seconds
 */
global.b2link.date.getDateStringFromArrayDate_Dash = function( a )
{
	////////global.TtwLog.timeStamp( "---- [ S ] - global.b2link.date.getDateStringFromArrayDate_Dash():{String}----------" );
	////////global.TtwLog.timeStamp( "---- [ E ] - global.b2link.date.getDateStringFromArrayDate_Dash():{String}----------" );
	return a.join( "-" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;