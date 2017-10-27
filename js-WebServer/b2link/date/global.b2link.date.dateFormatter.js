//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/date/global.b2link.date.dateFormatter.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * String format
 * @function
 * @param {Date} Date
 * @return {*}
 * @author  cpark
 *
 * TODO : Add Parameter to format date
 * ex) YY/MM/DD HH:MM:SS
 *
 * When d is string type, It only excepts format in "yyyy-mm-dd"
 */
global.b2link.date.dateFormatter = function( d, format )
{
	if( typeof d === "string" ) d = new Date( d );

	var year = d.getFullYear();
	var month = d.getMonth() + 1;
	var day = d.getDate();
	var hours = d.getHours();
	var minutes = d.getMinutes();
	var seconds = d.getSeconds();
	var milliSeconds = d.getMilliseconds();

	var formattedDate = null;

	if( !format )
	{
		formattedDate = year + "-" + month + "-" + day;
	}
	else if( format.toLowerCase() == "array" )
	{
		formattedDate = [];
		formattedDate.push( year );
		formattedDate.push( month );
		formattedDate.push( day );
		formattedDate.push( hours );
		formattedDate.push( minutes );
		formattedDate.push( milliSeconds );
	}
	else if( format.toLowerCase() == "object" )
	{
		formattedDate = { y : year, m : month, d : day, ho : hours, mi : minutes, se : seconds };
	}
	else if ( format.toLowerCase() == "string" )
	{
		formattedDate = year + "-" + month + "-" + day;
	}
	else
	{
		formattedDate = year + "-" + month + "-" + day;
	}

	return formattedDate;
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;