//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/date/global.b2link.date.convertDateToNumberInt.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Object Type 의 Date Format 의 값을 MongoDB 용으로 NumberInt 로 Convert 해준다.
 * @function
 * @param {Date|Object} {}
 * @return {Object}
 */
global.mongodb.date.convertDateToNumberInt = function( d )
{
	if( !d ) return {};

	var formattedDate = { y : NumberInt( d.y ), m : NumberInt( d.m ), d : NumberInt( d.d ), ho : NumberInt( d.ho ), mi : NumberInt( d.mi ), se : NumberInt( d.se ) };

	return formattedDate;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;