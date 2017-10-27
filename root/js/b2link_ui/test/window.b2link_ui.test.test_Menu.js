//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link_ui/window.b2link_ui.test.test_Menu.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui.test.test_Menu = function()
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link_ui.test.test_Menu():{Array}----------" );

	var _nm = "test_Menu";
	if( window.b2link.STATIC.UI.__checkKey( _nm ) )
	{
		window.b2link.STATIC.UI.__show( _nm );
		return window.b2link.STATIC.UI.__getObj( _nm );
	}

	var _url = window.b2link.STATIC.CONFIG.URL.UI.test;

	var html = window.b2link.ui.__getFileNM_HTML( _url, _nm );
	var js = window.b2link.ui.__getFileNM_JS( _url, _nm );
	var css = window.b2link.ui.__getFileNM_CSS( "./css_ui/", "div__" + _nm );

	var _rootDiv = window.b2link.STATIC.CONST.ROOT_DIV;
	var f = window.b2link.util.importHTMLJSCSS__And_Add_b2link_STATIC_UI;
	var o = f( _nm, html, js, css, _rootDiv.ID_UI_COMPONENT_FIXED );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link_ui.test.test_Menu():{Array}----------" );

	return o;
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;