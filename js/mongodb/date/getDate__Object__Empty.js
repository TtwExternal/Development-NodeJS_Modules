//----------------------------------------------------------------------------------------------------;
var fileNm = "js/mongodb/date/getDate__Object__Empty.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 빈 Object 타입의 Date를 반환한다.
 * @function
 * @return {Object} { y : "", m : "", d : "", ho : "", mi : "", se : "" }
 */
global.mongodb.date.getDate__Object__Empty = function()
{
	//TtwLog.timeStamp( "---- [ S ] - global.mongodb.date.getDate__Object__Empty():{Object}----------" );
	//TtwLog.timeStamp( "---- [ E ] - global.mongodb.date.getDate__Object__Empty():{Object}----------" );

	return { y : "", m : "", d : "", ho : "", mi : "", se : "" };
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;