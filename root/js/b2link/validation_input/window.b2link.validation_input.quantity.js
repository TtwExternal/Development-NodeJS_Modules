//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/validation_input/window.b2link.validation_input.quantity.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} v
 * @param {String} m
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_input.quantity = function( v, m )
{
	//window.RayLog.timeStamp( "---- [ S ] - window.b2link.validation_input.quantity():{Object}----------" );

	m = m || "수량";
	
	var r = { r : 1, m : "" };
	var n = parseInt( v );
	if( isNaN( n ) ){ r.r = 0; r.m = m + " 미입력"; return r; }
	if( 0 > n ){ r.r = 0; r.m = m + "이 음수가 입력됨"; return r; }


	//window.RayLog.timeStamp( "---- [ E ] - window.b2link.validation_input.quantity():{Object}----------" );
	return r;
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
