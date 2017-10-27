//----------------------------------------------------------------------------------------------------;
var fileNm = "js/mongodb/date/setNumberIntDateLeadTime.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 날짜 Object에 대하여 NumberInt 적용 (리드타임용. year, month, day에 대해서도 0 처리)
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
 *
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
 */
global.mongodb.date.setNumberIntDateLeadTime = function( date )
{
	Rh2Log.log( "---- [ S ] - global.mongodb.date.setNumberIntDateLeadTime():{Object}----------" );

	if( date.y ) date.y = NumberInt( date.y );
	else date.y = NumberInt( 0 );

	if( date.m ) date.m = NumberInt( date.m );
	else date.m = NumberInt( 0 );

	if( date.d ) date.d = NumberInt( date.d );
	else date.d = NumberInt( 0 );

	if( date.ho ) date.ho = NumberInt( date.ho );
	else date.ho = NumberInt( 0 );

	if( date.mi ) date.mi = NumberInt( date.mi );
	else date.mi = NumberInt( 0 );

	if( date.se ) date.se = NumberInt( date.se );
	else date.se = NumberInt( 0 );

	Rh2Log.log( "---- [ E ] - global.mongodb.date.setNumberIntDateLeadTime():{Object}----------return date;" );
	return date;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;