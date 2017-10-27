//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/validation_select/window.b2link.validation_select.delivery_type.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} t <select>
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_select.delivery_type = function( t, m )
{
	//window.RayLog.timeStamp( "---- [ S ] - window.b2link.validation_select.delivery_type():{Object}----------" );

	m = m || "배송방식";

	var r = { r : 1, m : "" };

	if( !t.selectedIndex ){ r.r = 0; r.m = m + " 미선택"; return r; }

	//window.RayLog.timeStamp( "---- [ E ] - window.b2link.validation_select.delivery_type():{Object}----------" );
	return r;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;