//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/date/global.b2link.date.getObjectDateFromNewDate_NumberInt.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Object} {y : 2017, m : 2, d : 25, ho : 11, mi : 20, se : 50}
 */
global.mongodb.date.getObjectDateFromNewDate_NumberInt = function()
{
	////////global.TtwLog.timeStamp( "---- [ S ] - global.b2link.date.getObjectDateFromNewDate_NumberInt():{Object}----------" );

	var d = new Date();

	var r = { y : NumberInt(d.getFullYear()), m : NumberInt(d.getMonth() + 1), d : NumberInt(d.getDate()), ho : NumberInt(d.getHours()), mi : NumberInt(d.getMinutes()), se : NumberInt(d.getSeconds()) };

	d = null;

	////////global.TtwLog.timeStamp( "---- [ E ] - global.b2link.date.getObjectDateFromNewDate_NumberInt():{Object}----------" );
	return r;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;