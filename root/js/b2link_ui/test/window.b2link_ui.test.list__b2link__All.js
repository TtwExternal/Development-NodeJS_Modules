//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_ui/test/window.b2link_ui.test.list__b2link__All.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui.test.list__b2link__All = function()
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link_ui.test.list__b2link__All():{Array}----------" );

	var p = {
		url : window.b2link.STATIC.CONFIG.URL.UI.BASE + "test/list__b2link__All/"
		, nm : "list__b2link__All"
		, css_url : "./css_ui/"
		, css_front_nm : "test-"
		, key : "TEST_UI$list__b2link__All"
	};

	//o[ 0 ] : element, o[ 1 ] : element controller;
	//var o = window.b2link.ui.add_HTML_JS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS( p, arguments[ 0 ] );
	var o = window.b2link.ui.add_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link_ui.test.list__b2link__All():{Array}----------" );
	return o;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;