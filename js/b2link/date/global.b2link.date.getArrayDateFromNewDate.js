//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/date/global.b2link.date.getArrayDateFromNewDate.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Array} [ year, month, day, hour, minute, seconds ]
 */
global.b2link.date.getArrayDateFromNewDate = function()
{
	////////global.TtwLog.timeStamp( "---- [ S ] - global.b2link.date.getArrayDateFromNewDate():{Array}----------" );

	var d = new Date();

	var r = [ d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds() ];

	d = null;

	////////global.TtwLog.timeStamp( "---- [ E ] - global.b2link.date.getArrayDateFromNewDate():{Array}----------" );
	return r;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;