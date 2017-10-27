//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/validation_input/window.b2link.validation_input.notInputed.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} v
 * @param {String} m
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_input.notInputed = function( v, m )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_input.notInputed():{Object}----------" );

	m = m || "";

	var r = { r : 1, m : "" };

	if( !v ){ r.r = 0; r.m = m + " 미입력"; return r; }

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_input.notInputed():{Object}----------" );
	return r;
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
