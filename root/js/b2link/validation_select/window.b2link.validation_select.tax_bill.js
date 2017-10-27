//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/validation_select/window.b2link.validation_select.tax_bill.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} t <select>
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_select.tax_bill = function( t, m )
{
	//window.RayLog.timeStamp( "---- [ S ] - window.b2link.validation_select.trade_terms():{Object}----------" );

	m = m || "세금계산서 발급여부";

	var r = { r : 1, m : "" };

	if( 0 > t.selectedIndex  ){ r.r = 0; r.m = m + " 미선택"; return r; }
	if( 2 < t.selectedIndex ){ r.r = 0; r.m = m + " - 잘못된 값을 선택"; return r; }
	
	

	//window.RayLog.timeStamp( "---- [ E ] - window.b2link.validation_select.tax_bill():{Object}----------" );
	return r;
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;