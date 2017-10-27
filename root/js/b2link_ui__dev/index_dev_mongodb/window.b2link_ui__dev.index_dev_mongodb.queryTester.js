//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_ui__dev/window.b2link_ui__dev.index_dev_mongodb.queryTester.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 */
window.b2link_ui__dev.index_dev_mongodb.queryTester = function()
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link_ui__dev.index_dev_mongodb.queryTester():{Array}----------" );

	var p = {
		url : "./ui/index_dev_mongodb/queryTester/"
		, nm : "queryTester"
		, css_url : "./css_ui/"
		, css_front_nm : "div__index_dev_mongodb-"
		, key : "index_dev_mongodb$queryTester"
	};

	//o[ 0 ] : element, o[ 1 ] : element controller;
	//var o = window.b2link.ui.add_HTML_JS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS_CSS( p, arguments[ 0 ] );
	//var o = window.b2link.ui.add_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	var o = window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS__CheckStaticUI( p, arguments[ 0 ] );
	//var o = window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI( p, arguments[ 0 ] );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link_ui__dev.index_dev_mongodb.queryTester():{Array}----------" );

	return o;
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;