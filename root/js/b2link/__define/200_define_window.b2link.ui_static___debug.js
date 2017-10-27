//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_window.b2link.ui_static.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.ui_static;

//window.b2link.ui_static = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.ui_static;


//----------------------------------------------------------------------------------------------------window.b2link.ui_static.g***;

/**
 * window.b2link_ui.static.*** 함수를 호출하고 DataInputElements의 값을 초기화 시키는 공통 Interface('clearDataInputElements')를 호출 후 UI 객체를 리턴한다.
 * @function
 * @param {Function} window.b2link_ui.***
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.b2link.ui_static.getUI_ClearDataInputElements = function( fn_ui )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui_static.getUI_ClearDataInputElements():{Array}----------" );

	/*/
	var o = fn_ui();//get UI HTMLElement And JS Controller;
	var el = o[ 0 ];//UI HTMLElement;
	var elCtrl = o[ 1 ];//JS Controller;
		elCtrl.clearDataInputElements();
	/*/
	var o = fn_ui();//get UI HTMLElement And JS Controller;
		o[ 1 ].clearDataInputElements();
	//*/

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui_static.getUI_ClearDataInputElements():{Array}----------" );
	return o;
};

//----------------------------------------------------------------------------------------------------window.b2link.ui_static.g***;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;