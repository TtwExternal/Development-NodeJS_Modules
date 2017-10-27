//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_ui/test/window.b2link_ui.test.list__b2link.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui.test.list__b2link = function()
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link_ui.test.list__b2link():{Array}----------" );

	var p = {
		url : window.b2link.STATIC.CONFIG.URL.UI.BASE + "test/list__b2link/"
		, nm : "list__b2link"
		, css_url : "./css_ui/"
		, css_front_nm : "test-"
		, key : "TEST_UI$list__b2link"
	};

	//o[ 0 ] : element, o[ 1 ] : element controller;
	//var o = window.b2link.ui.add_HTML_JS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS( p, arguments[ 0 ] );
	var o = window.b2link.ui.add_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link_ui.test.list__b2link():{Array}----------" );
	return o;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;