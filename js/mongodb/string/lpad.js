//----------------------------------------------------------------------------------------------------;
var fileNm = "js/mongodb/string/global.mongodb.string.lpad.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 숫자 또는 문자열의 왼쪽에 원하는 갯수만큼 "0"을 붙인다.
 * @function
 * @param {Number|String} n 숫자 또는 숫자 형태의 문자열
 * @param {Number} count 왼쪽에 붙일 0의 갯수
 * @return {String} "-"
 * @example
 * <code>
	var result = global.mongodb.string.lpad( "234", 7 );
	console.log( result );//0000234;
 * </code>
 */
global.mongodb.string.lpad = function( n, count )
{
	//global.Rh2Log.timeStamp( "---- [ S ] - global.mongodb.string.lpad():{String}----------" );

	n = n + "";

	//global.Rh2Log.timeStamp( "---- [ E ] - global.mongodb.string.lpad():{String}----------" );

	return n.length >= count ? n : new Array( count - n.length + 1 ).join( "0" ) + n;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;