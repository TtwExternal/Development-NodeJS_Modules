//----------------------------------------------------------------------------------------------------;
var fileNm = "js/mongodb/date/setNumberIntDate.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 날짜 Object에 대하여 NumberInt 적용
 * @function
 * @param {Object} date
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
	//Object;
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
global.mongodb.date.objDateToNumberIntObjDate = function( date )
{
	Rh2Log.log( "---- [ S ] - global.mongodb.date.objDateToNumberIntObjDate():{Object}----------" );

	if( date.y ) date.y = NumberInt( date.y );
	//else return { r : 2, m : "BadValue - DATE 'YEAR' VALIDATION ERROR" };

	if( date.m ) date.m = NumberInt( date.m );
	//else return { r : 2, m : "BadValue - DATE 'MONTH' VALIDATION ERROR" };

	if( date.d ) date.d = NumberInt( date.d );
	//else return { r : 2, m : "BadValue - DATE 'DAY' VALIDATION ERROR" };

	if( date.ho ) date.ho = NumberInt( date.ho );
	else date.ho = NumberInt( 0 );

	if( date.mi ) date.mi = NumberInt( date.mi );
	else date.mi = NumberInt( 0 );

	if( date.se ) date.se = NumberInt( date.se );
	else date.se = NumberInt( 0 );

	Rh2Log.log( "---- [ E ] - global.mongodb.date.objDateToNumberIntObjDate():{Object}----------return date;" );
	return date;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;