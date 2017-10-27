//----------------------------------------------------------------------------------------------------;
var fileNm = "./js/b2link/date/window.b2link.date.dateFormatFromDateObject.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * String format
 * @function
 * @param {Object} Date object { y : 2017, m : 2, d: 3, ho : 3, mi : 4, se : 12}
 * @return {String} {yyyy-mm-dd} / {yyyy-mm-dd hh:mi:ss}
 * @author James
 */
window.b2link.date.dateFormatFromDateObject = function( d )
{
	window.JamesLog.timeStamp( "---- [ S ] - window.b2link.date.dateFormatFromDateObject():{String}----------" );

	if( d === null ) return "";

	if( typeof d !== "object" ) return "";

	if( !d.hasOwnProperty( "y" ) ) return "";

	var year = d.y;
	var month = window.b2link.date.dateFormatFromDateObject._addZero( d.m );
	var day = window.b2link.date.dateFormatFromDateObject._addZero( d.d );

	//var formattedDate = `${year}-${month}-${day}`;
	var formattedDate = year + "-" + month + "-" + day;

	window.JamesLog.timeStamp( "---- [ S ] - window.b2link.date.dateFormatFromDateObject():{String}----------return formattedDate;" );
	return formattedDate;
};
window.b2link.date.dateFormatFromDateObject._addZero = function( n )
{
	if( n && n < 10 )
		n = "0" + n;
	return n;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;