//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/validation_input/window.b2link.validation_input.exchange_rate.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} v
 * @param {String} m
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_input.exchange_rate = function( v, m )
{
	//window.RayLog.timeStamp( "---- [ S ] - window.b2link.validation_input.exchange_rate():{Object}----------" );

	m = m || "환율";

	var r = { r : 1, m : "" };
	var n = parseFloat( v );
	if( isNaN( n ) ){ r.r = 0; r.m = m + " 미입력"; return r; }
	else if( 0 > n ){ r.r = 0; r.m = m + " 오입력"; return r; }

	//window.RayLog.timeStamp( "---- [ E ] - window.b2link.validation_input.exchange_rate():{Object}----------" );
	return r;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;