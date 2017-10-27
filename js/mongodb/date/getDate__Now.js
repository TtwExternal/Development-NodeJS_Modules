//----------------------------------------------------------------------------------------------------;
var fileNm = "js/mongodb/date/getDate__Now.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 오늘 날짜에 대하여 Object로 반환
 * @function
 * @return {Object}
 * <code>
	{
		y : {NumberInt}
		, m : {NumberInt}
		, d : {NumberInt}
		, ho : {NumberInt}
		, mi : {NumberInt}
		, se : {NumberInt}
	}
 * </code>
 */
global.mongodb.date.getDate__Now = function()
{
	Rh2Log.log( "---- [ S ] - global.mongodb.date.getDate__Now():{Object}----------" );

	var d = new Date();
	var r = {
		y : d.getFullYear()
		, m : d.getMonth() + 1
		, d : d.getDate()
		, ho : d.getHours()
		, mi : d.getMinutes()
		, se : d.getSeconds()
	};

	Rh2Log.log( "---- [ E ] - global.mongodb.date.getDate__Now():{Object}----------return date;" );
	return r;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;