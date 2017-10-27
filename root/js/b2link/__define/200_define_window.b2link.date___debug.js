//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_window.b2link.date-debug.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.date;

//window.b2link.date = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.date;


//----------------------------------------------------------------------------------------------------window,b2link.date.d***;

/**
 * Calculator Date difference
 *
 * @function
 * @param {Object} from {"y" : 2017, "m" : 2,  "d" : 4}
 * @param {Object} to {"y" : 2017, "m" : 2,  "d" : 4}
 * @return {String|Number}
 * @author James
 */
window.b2link.date.dateDifference_object = function( date_obj1, date_obj2 )
{
	window.JamesLog.timeStamp( "---- [ S ] - window.b2link.date.dateDifference_object():{String}----------" );

	if( date_obj1 === null || date_obj2 === null ) return "";

	if( typeof date_obj1 !== "object" || typeof date_obj2 !== "object" ) return "";

	if( !date_obj1.hasOwnProperty( "y" ) ||
		!date_obj1.hasOwnProperty( "m" ) ||
		!date_obj1.hasOwnProperty( "d" ) )
	{
		return "";
	}

	if( !date_obj1.hasOwnProperty( "y" ) ||
		!date_obj1.hasOwnProperty( "m" ) ||
		!date_obj1.hasOwnProperty( "d" ) )
	{
		return "";
	}

	var d1 = new Date( date_obj1.y, date_obj1.m, date_obj1.d );
	var d2 = new Date( date_obj2.y, date_obj2.m, date_obj2.d );

	var diff_day = d2 - d1;
	var d_time = 1000 * 60 * 60 * 24;

	window.JamesLog.timeStamp( "---- [ S ] - window.b2link.date.dateDifference_object():{String}----------return parseInt( diff_day / d_time );" );
	return parseInt( diff_day / d_time );
};

/**
 * String format
 * @function
 * @param {Date} Date
 * @return {Array|Object|String}
 * @author  cpark
 *
 * TODO : Add Parameter to format date
 * ex ) YY/MM/DD HH:MM:SS
 *
 * When d is string type, It only excepts format in "yyyy-mm-dd"
 */
window.b2link.date.dateFormatter = function( d, format )
{
	window.cparkLog.timeStamp( "---- [ S ] - window.b2link.date.dateFormatter():{Array|Object|String}----------" );

	var addZero = window.b2link.date.dateFormatter._addZero;

	if( typeof d === "string" ) d = new Date( d );

	var year = d.getFullYear();
	var month = addZero( d.getMonth() + 1 );
	var day = addZero( d.getDate() );
	var hours = addZero( d.getHours() );
	var minutes = addZero( d.getMinutes() );
	var seconds = addZero( d.getSeconds() );
	var milliSeconds = d.getMilliseconds();

	var formattedDate = null;

	//if( !format ) formattedDate = `${year}-${month}-${day}`;
	if( !format ) formattedDate = year + "-" + month + "-" + day;
	else if( format.toLowerCase() == "array" )
	{
		formattedDate = [];
		formattedDate.push( parseInt( year ) );
		formattedDate.push( parseInt( month ) );
		formattedDate.push( parseInt( day ) );
		formattedDate.push( parseInt( hours ) );
		formattedDate.push( parseInt( minutes ) );
		formattedDate.push( parseInt( milliSeconds ) );
	}
	else if( format.toLowerCase() == "object" )
	{
		formattedDate = {
			y : parseInt( year ), m : parseInt( month ), d : parseInt( day )
			, ho : parseInt( hours ), se : parseInt( minutes ), mi : parseInt( milliSeconds )
		};
	}
	//else if( format.toLowerCase() == "string" ) formattedDate = `${year}-${month}-${day}`;
	//else formattedDate = `${year}-${month}-${day}`;
	else if( format.toLowerCase() == "string" ) formattedDate = year + "-" + month + "-" + day;
	else formattedDate = formattedDate = year + "-" + month + "-" + day;

	window.cparkLog.timeStamp( "---- [ E ] - window.b2link.date.dateFormatter():{Array|Object|String}----------return formattedDate;" );
	return formattedDate;
};
window.b2link.date.dateFormatter._addZero = function( n ){ if( n < 10 ) n = "0" + n; return n; };

/**
 * String format
 * @function
 * @param {Array} Date Array [ 2017, 2, 10 ]
 * @return {String} {yyyy-mm-dd} / {yyyy-mm-dd hh:mi:ss}
 * @author James
 */
window.b2link.date.dateFormatFromDateArray = function( d )
{
	//window.JamesLog.timeStamp( "---- [ S ] - window.b2link.date.dateFormatFromDateArray():{String}----------" );

	if( !Array.isArray( d ) ) return "";

	if( d.length < 3 ) return "";

	var addZero = function( n )
	{
		if( n < 10 ) n = "0" + n;
		return n;
	};

	var year = d[ 0 ];
	var month = addZero( d[ 1 ] );
	var day = addZero( d[ 2 ] );

	//var formattedDate = `${year}-${month}-${day}`;
	var formattedDate = year + "-" + month + "-" + day;

	//window.JamesLog.timeStamp( "---- [ E ] - window.b2link.date.dateFormatFromDateArray():{String}----------return formattedDate;" );
	return formattedDate;
};

/**
 * String format
 * @function
 * @param {Object} Date object { y : 2017, m : 2, d: 3, ho : 3, mi : 4, se : 12}
 * @return {String} {yyyy-mm-dd} / {yyyy-mm-dd hh:mi:ss}
 * @author James
 */
window.b2link.date.dateFormatFromDateObject = function( d )
{
	//window.JamesLog.timeStamp( "---- [ S ] - window.b2link.date.dateFormatFromDateObject():{String}----------" );

	if( d === null ) return "";

	if( typeof d !== "object" ) return "";

	if( !d.hasOwnProperty( "y" ) ) return "";

	var addZero = function( n )
	{
		if( n < 10 )
			n = "0" + n;
		return n;
	};

	var year = d.y;
	var month = addZero( d.m );
	var day = addZero( d.d );

	//var formattedDate = `${year}-${month}-${day}`;
	var formattedDate = year + "-" + month + "-" + day;

	//window.JamesLog.timeStamp( "---- [ S ] - window.b2link.date.dateFormatFromDateObject():{String}----------return formattedDate;" );
	return formattedDate;
};

//----------------------------------------------------------------------------------------------------window,b2link.date.d***;


//----------------------------------------------------------------------------------------------------window,b2link.date.g***;

/**
 * @function
 * @param {String} "2017-01-04"
 * @return {Object} {"y" : 2017, "m" : 2, "d" : 25, "ho" : 11, "mi" : 20, "se" : 50}
 */
window.b2link.date.getObjectDateFromDateString_Dash = function( dateString )
{
	////////window.JamesLog.timeStamp( "---- [ S ] - window.b2link.date.getObjectDateFromDateString_Dash():{Object}----------" );

	if( !dateString ) return null;

	var date_arr = dateString.split( "-" );

	if( date_arr.length < 3 ) return null;

	var r = { y : parseInt( date_arr[ 0 ] ), m : parseInt( date_arr[ 1 ] ), d : parseInt( date_arr[ 2 ] ), ho : 0, mi : 0, se : 0 };

	date_arr = null;

	////////window.JamesLog.timeStamp( "---- [ E ] - window.b2link.date.getObjectDateFromDateString_Dash():{Object}----------" );
	return r;
};

/**
 * String format
 * @function
 * @param {Date} DateBefore, DateAfter
 * @return {Number}
 * @author  cpark
 *
 * Date format should in Date() object type.
 * ex) '-' or '.' can be used in Date String
 *	 The order of date type is not concerned. (2018.01.01 equals 01.01.2018)
 * var timeDifference = window.b2link.util.getTimeDifferenceInMills(new Date("2018-12-12"), new Date("2020-01-01"));
 */
window.b2link.date.getTimeDifferenceInMills = function( date1, date2 )
{
	window.cparkLog.timeStamp( "---- [ S ] - window.b2link.date.getTimeDifferenceInMills():{Number}----------" );

	var dm1 = date1.getTime();
	var dm2 = date2.getTime();

	window.cparkLog.timeStamp( "---- [ E ] - window.b2link.date.getTimeDifferenceInMills():{Number}----------return dm2 - dm1;" );
	return dm2 - dm1;
};

//----------------------------------------------------------------------------------------------------window,b2link.date.g***;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;