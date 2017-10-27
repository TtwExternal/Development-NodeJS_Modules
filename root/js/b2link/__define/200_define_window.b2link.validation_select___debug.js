//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_window.b2link.validation_select.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.validation_select;

//window.b2link.validation_select = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.validation_select;


//----------------------------------------------------------------------------------------------------window.b2link.validation_select.n***;

/**
 * @function
 * @param {HTMLElement} t <select>
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_select.notSelected = function( t, m )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_select.notSelected():{Object}----------" );

	m = m || "선택항목 ";

	var r = { r : 1, m : "" };

	if( !t.selectedIndex ){ r.r = 0; r.m = m + " 미선택"; return r; }

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_select.notSelected():{Object}----------" );
	return r;
};

//----------------------------------------------------------------------------------------------------window.b2link.validation_select.n***;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;