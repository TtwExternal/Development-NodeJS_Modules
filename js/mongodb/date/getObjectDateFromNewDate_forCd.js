//----------------------------------------------------------------------------------------------------;
var fileNm = "js/mongodb/date/getObjectDateFromNewDate_forCd.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 호출한 시점의 data를 Object로 반환
 * @function
 * @return {Object} { "y" : 2017,"m" : 1,"d" : 1"ho" : 1,"mi" : 1,"se" : 1 }
 */
global.mongodb.date.getObjectDateFromNewDate_forCd = function()
{
	CSJLog.log( "---- [ S ] - global.mongodb.date.getObjectDateFromNewDate_forCd():{Object}----------" );

	var d = new Date();
	var r = { "y" : NumberInt( d.getFullYear() ), "m" : NumberInt( d.getMonth() + 1 ), "d" : NumberInt( d.getDate() ), "ho" : NumberInt( d.getHours() ), "mi" : NumberInt( d.getMinutes() ), "se" : NumberInt( d.getSeconds() ) };

	CSJLog.log( "---- [ E ] - global.mongodb.date.getObjectDateFromNewDate_forCd():{Object}----------return r;" );
	return r;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;