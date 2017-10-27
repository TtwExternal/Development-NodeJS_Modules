//----------------------------------------------------------------------------------------------------;
var fileNm = "js/mongodb/date/getLeadTime.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 시작일과 종료일을 입력받아 기간을 반환한다
 * @function
 * @param {Object} start 시작일
 * <code>
	{
		"y" : {Number}
		, "m" : {Number}
		, "d" : {Number}
		, "ho" : {Number}
		, "mi" : {Number}
		, "se" : {Number}
	}
 * </code>
 * @param {Object} end 종료일
 * <code>
	{
		"y" : {Number}
		, "m" : {Number}
		, "d" : {Number}
		, "ho" : {Number}
		, "mi" : {Number}
		, "se" : {Number}
	}
 * </code>
 * @return {Object}
 * <code>
	{
		"y" : {NumberInt}
		, "m" : {NumberInt}
		, "d" : {NumberInt}
		, "ho" : {NumberInt}
		, "mi" : {NumberInt}
		, "se" : {NumberInt}
	}
 * </code>
 */
global.mongodb.date.getLeadTime = function( start, end )
{
	Rh2Log.log( "---- [ S ] - global.mongodb.date.getLeadTime():{Object}----------" );

	var r = {};

	//Set the unit values in milliseconds;
	var msecPerMinute = 1000 * 60;
	var msecPerHour   = msecPerMinute * 60;
	var msecPerDay	= msecPerHour * 24;
	var msecPerMonth  = msecPerDay * 30;
	var msecPerYear   = msecPerMonth * 12;

	//Set a date and get the millisecond;
	var date = new Date( end.y, end.m - 1 , end.d, end.ho, end.mi, end.se );
	var dateMsec = date.getTime();
	

	date.setYear(  start.y );
	date.setMonth( start.m - 1);
	date.setDate(  start.d);
	date.setHours( start.ho, start.mi, start.se );

	//Get the difference in milliseconds;
	var interval = dateMsec - date.getTime();
	var p = 1;
	if( interval < 0)
	{
		interval = Math.abs( interval );	
		p = -1;
	} 

	//Calculate how many days the interval contains;
	//Subtract that many days from the interval to determine the remainder;
	var year = Math.floor( interval / msecPerYear );
	interval = interval - ( year * msecPerYear );

	var month = Math.floor( interval / msecPerMonth );
	interval = interval - ( month * msecPerMonth );

	var days = Math.floor( interval / msecPerDay );
	interval = interval - ( days * msecPerDay );

	//Calculate the hours, minutes, and seconds;
	var hours = Math.floor( interval / msecPerHour );
	interval = interval - ( hours * msecPerHour );

	var minutes = Math.floor( interval / msecPerMinute );
	interval = interval - ( minutes * msecPerMinute );

	var seconds = Math.floor( interval / 1000 );
	
	//Display the result;
	r.y = NumberInt( year * p);
	r.m = NumberInt( month * p );
	r.d = NumberInt( days * p );
	r.ho = NumberInt( hours * p );
	r.mi = NumberInt( minutes * p );
	r.se = NumberInt( seconds * p );

	Rh2Log.log( "---- [ E ] - global.mongodb.date.getLeadTime():{Object}----------return date;" );
	return r;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;