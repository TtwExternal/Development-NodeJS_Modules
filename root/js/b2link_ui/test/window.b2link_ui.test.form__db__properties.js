//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_ui/test/window.b2link_ui.test.form__db__properties.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui.test.form__db__properties = function()
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link_ui.test.form__db__properties():{Array}----------" );

	var d = {
		url : window.b2link.STATIC.CONFIG.URL.UI.BASE + "test/form__db__properties/"
		, nm : "form__db__properties"
		, css_url : "./css_ui/"
		, css_front_nm : "test-"
		, key : "TEST_UI$form__db__properties"
	};

	var o = window.b2link.ui.add_HTML_JS__CheckStaticUI( d );
	//var o = window.b2link.ui.add_HTML_JS_CSS( d );
	//var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( d );
	//var o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( d, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS__CheckStaticUI( d, arguments[ 0 ] );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link_ui.test.form__db__properties():{Array}----------" );

	return o;
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;