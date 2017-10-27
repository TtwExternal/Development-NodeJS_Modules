//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_window.b2link.ui.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.ui;

window.b2link.ui = window.b2link.ui || {};

/**
 * window.b2link_ui***의 함수를 호출 시 appendChild의 대상이 되는 Element
 * window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT_ID와 셋트로 변경 하여야 한다.
 * window.b2ker.ui***의 함수를 호출 시 appendChild의 대상이 되는 Element
 * window.brandportal.ui***의 함수를 호출 시 appendChild의 대상이 되는 Element
 * @Static
 * @property {String}
 */
window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT = window.b2link.STATIC.CONST.ROOT_DIV.EL_UI_COMPONENT_FIXED;

/**
 * window.b2link_ui***의 함수를 호출 시 appendChild의 대상이 되는 Element's id
 * window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT 셋트로 변경 하여야 한다.
 * @Static
 * @property {String}
 */
window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT_ID = window.b2link.STATIC.CONST.ROOT_DIV.ID_UI_COMPONENT_FIXED;

/**
 * @function
 * @param {String} id
 */
window.b2link.ui.set_APPEND_CHILD_TARGET_ELEMENT = function( id )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui.set_APPEND_CHILD_TARGET_ELEMENT():void----------" );

	window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT_ID = window.b2link.STATIC.CONST.ROOT_DIV.ID_UI_COMPONENT_FIXED = id;
	window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT = window.b2link.STATIC.CONST.ROOT_DIV.EL_UI_COMPONENT_FIXED = window.document.getElementById( id );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui.set_APPEND_CHILD_TARGET_ELEMENT():void----------" );
};

/**
 * 메인 화면 컨테이너에서 각 View 화면 Position, Size를 컨트롤 한다.
 * @function
 * @param {HTMLElement} el
 */
window.b2link.ui.setPositionSize__FULL_SIZE_MODE__In_APPEND_CHILD_TARGET_ELEMENT = function( el )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui.setPositionSize__FULL_SIZE_MODE__In_APPEND_CHILD_TARGET_ELEMENT():void----------" );

	//오른쪽 View Container 공간;
	var s = el.style;

		//s.display = "";
		s.position = "absolute";

	if( el.__FULL_SIZE_MODE )
	{
		var le = 0;//left;
		var ri = 0;//right;
		var to = 0;//top;
		var bo = 0;//bottom;

		s.left = le + "px";
		s.right = ri + "px";

		s.top = to + "px";
		//s.bottom = bo + "px";

		var minMaxWidth = window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT.clientWidth - le - ri + "px";
		s.minWidth = s.maxWidth = minMaxWidth;
	}
	else
	{
		//s.top = _el_div_content.offsetTop + 1 + "px"; s.bottom = "1px";
	}

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui.setPositionSize__FULL_SIZE_MODE__In_APPEND_CHILD_TARGET_ELEMENT():void----------" );
};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.ui;


//----------------------------------------------------------------------------------------------------window.b2link.ui.__a***;

/**
 * @function
 * @param {Object} elCtrl
 * @param {Object} uiOptions
 */
window.b2link.ui.__addUI_Common__UIOptions=function(o,t){var e=o,_=e.__el,i=_.style;t?(0==t.display?e.hide():e.show(),t.hasOwnProperty("left")||t.hasOwnProperty("top")||t.hasOwnProperty("right")||t.hasOwnProperty("bottom")?(i.left=t.left?t.left+"px":"",i.top=t.top?t.top+"px":"",i.right=t.right?t.right+"px":"",i.bottom=t.lbottomeft?t.bottom+"px":""):e.__FULL_SIZE_MODE||window.b2link.common.setTimeout__setPosition_CenterMiddle_FromParent__NMinus_ScrollTop(_)):(e.show(),0==_.offsetLeft&&0==_.offsetTop&&(e.__FULL_SIZE_MODE||window.b2link.common.setTimeout__setPosition_CenterMiddle_FromParent__NMinus_ScrollTop(_)))};

/**
 * @function
 * @param {Object} elCtrl
 * @param {Object} uiOptions
 */
//window.b2link.ui.__addUIAndModal_Common__UIOptions=function(d,n){var o=d;n&&0==n.display?o.hide():o.showAndModal()};
window.b2link.ui.__addUIAndModal_Common__UIOptions=function(t,o){var n=t;if(o){if(0==o.display?n.hide():n.showAndModal_Sync(),o.hasOwnProperty("left")||o.hasOwnProperty("top")||o.hasOwnProperty("right")||o.hasOwnProperty("bottom")){var e=n.__el.style;e.left=o.left?o.left+"px":"",e.top=o.top?o.top+"px":"",e.right=o.right?o.right+"px":"",e.bottom=o.lbottomeft?o.bottom+"px":""}}else n.showAndModal_Sync()};

//----------------------------------------------------------------------------------------------------window.b2link.ui.__a***;


//----------------------------------------------------------------------------------------------------window.b2link.ui.__g***;

/**
 * @function
 * @param {String} folderName
 * @param {String} fileName
 */
window.b2link.ui.__getFileNM_CSS=function(i,n){var e=i+n+".css";return e};

/**
 * @function
 * @param {String} folderName
 * @param {String} fileName
 */
window.b2link.ui.__getFileNM_HTML=function(i,n){var l=window.b2link.STATIC.CONFIG.URL.UI,t=i+n+l.CSS+".html";return t};

/**
 * @function
 * @param {String} folderName
 * @param {String} fileName
 */
window.b2link.ui.__getFileNM_JS=function(i,n){var e=i+n+".js";return e};

/**
 * @function
 * @param {String} folderName
 * @param {String} fileName
 */
window.b2link.ui.__getFileNM_THTML=function(i,n){var t=window.b2link.STATIC.CONFIG.URL.UI,l=i+n+t.CSS+".thtml";return l};

//----------------------------------------------------------------------------------------------------window.b2link.ui.__g***;


//----------------------------------------------------------------------------------------------------window.b2link.ui.a***;

/**
 * @function
 * @param {Object} d data
 * <code>
 * {
 *	"nm" : ""
 *	, "url" : ""
 *	, "key" : ""
 * }
 * </code>
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.b2link.ui.add_HTML_JS=function(_){var i=window.b2link.ui.__getFileNM_HTML(_.url,_.nm),n=window.b2link.ui.__getFileNM_JS(_.url,_.nm),l=_.key?_.key:_.nm,d=window.b2link.util.importHTMLJS__And_Add_b2link_STATIC_UI,w=d(l,i,n,window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT_ID);return w[0].__KEY_UI=l,w};

/**
 * @function
 * @param {Object} d data
 * <code>
 * {
 *	"nm" : ""
 *	, "url" : ""
 *	, "key" : ""
 * }
 * </code>
 * @param {Object} uiOptions
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.b2link.ui.add_HTML_JS__CheckStaticUI=function(i,n){var _=window.b2link.ui.staticUIMap_checkObject(i.key);return _?(window.b2link.ui.__addUI_Common__UIOptions(_[1],n),_):(_=window.b2link.ui.add_HTML_JS(i),_&&window.b2link.ui.__addUI_Common__UIOptions(_[1],n),_)};

/**
 * @function
 * @param {Object} d data
 * <code>
 * {
 *	"nm" : ""
 *	, "url" : ""
 *	, "css_url : ""
 *	, "css_front_nm : ""
 *	, "key" : ""
 * }
 * </code>
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.b2link.ui.add_HTML_JS_CSS=function(_){var i=window.b2link.ui.__getFileNM_HTML(_.url,_.nm),n=window.b2link.ui.__getFileNM_JS(_.url,_.nm),l=window.b2link.ui.__getFileNM_CSS(_.css_url,_.css_front_nm+_.nm),w=_.key?_.key:_.nm,d=window.b2link.util.importHTMLJSCSS__And_Add_b2link_STATIC_UI,u=d(w,i,n,l,window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT_ID);return u[0].__KEY_UI=w,u};

/**
 * @function
 * @param {Object} d data
 * <code>
 * {
 *	"nm" : ""
 *	, "url" : ""
 *	, "css_url : ""
 *	, "css_front_nm : ""
 *	, "key" : ""
 * }
 * </code>
 * @param {Object} uiOptions
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI=function(i,_){var n=window.b2link.ui.staticUIMap_checkObject(i.key);return n?(window.b2link.ui.__addUI_Common__UIOptions(n[1],_),n):(n=window.b2link.ui.add_HTML_JS_CSS(i),n&&window.b2link.ui.__addUI_Common__UIOptions(n[1],_),n)};

/**
 * @function
 * @param {Object} d data
 * <code>
 * {
 *	"nm" : ""
 *	, "url" : ""
 *	, "css_url : ""
 *	, "css_front_nm : ""
 *	, "key" : ""
 * }
 * </code>
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.b2link.ui.add_THTML_JS_CSS__CheckStaticUI=function(i,_){var n=window.b2link.ui.staticUIMap_checkObject(i.key);return n?(window.b2link.ui.__addUI_Common__UIOptions(n[1],_),n):(n=window.b2link.ui.add_THTML_JS_CSS(i),n&&window.b2link.ui.__addUI_Common__UIOptions(n[1],_),n)};

/**
 * @function
 * @param {Object} d data
 * <code>
 * {
 *	"nm" : ""
 *	, "url" : ""
 *	, "css_url : ""
 *	, "css_front_nm : ""
 *	, "key" : ""
 * }
 * </code>
 * @param {Object} uiOptions
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.b2link.ui.add_THTML_JS_CSS__CheckStaticUI=function(i,_){var n=window.b2link.ui.staticUIMap_checkObject(i.key);return n?(window.b2link.ui.__addUI_Common__UIOptions(n[1],_),n):(n=window.b2link.ui.add_THTML_JS_CSS(i),n&&window.b2link.ui.__addUI_Common__UIOptions(n[1],_),n)};

/**
 * @function
 * @param {Object} d data
 * <code>
 * {
 *	"nm" : ""
 *	, "url" : ""
 *	, "css_url : ""
 *	, "css_front_nm : ""
 *	, "key" : ""
 * }
 * </code>
 * @param {Object} uiOptions
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.b2link.ui.addAndModal_HTML_JS__CheckStaticUI=function(i,n){var d=window.b2link.ui.staticUIMap_checkObject(i.key);return d?(window.b2link.ui.__addUIAndModal_Common__UIOptions(d[1],n),d):(d=window.b2link.ui.add_HTML_JS(i),d&&window.b2link.ui.__addUIAndModal_Common__UIOptions(d[1],n),d)};

/**
 * @function
 * @param {Object} d data
 * <code>
 * {
 *	"nm" : ""
 *	, "url" : ""
 *	, "css_url : ""
 *	, "css_front_nm : ""
 *	, "key" : ""
 * }
 * </code>
 * @param {Object} uiOptions
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI=function(i,n){var d=window.b2link.ui.staticUIMap_checkObject(i.key);return d?(window.b2link.ui.__addUIAndModal_Common__UIOptions(d[1],n),d):(d=window.b2link.ui.add_HTML_JS_CSS(i),d&&window.b2link.ui.__addUIAndModal_Common__UIOptions(d[1],n),d)};

//----------------------------------------------------------------------------------------------------window.b2link.ui.a***;


//----------------------------------------------------------------------------------------------------window.b2link.ui.s***;

/**
 * @function
 * @param {String} key
 * @param {Array} t [ HTMLElement, {} ]
 */
window.b2link.ui.staticUIMap_Add=function(i,d){window.b2link.STATIC.UI.__add(i,d)};

/**
 * @function
 * @param {String} key
 * @return {null|Array} [ {HTMLElement}, {} ]
 */
window.b2link.ui.staticUIMap_checkObject=function(n){if(window.b2link.STATIC.UI.__checkKey(n)){window.b2link.STATIC.UI.__show(n);var i=window.b2link.STATIC.UI.__getObj(n);return i}return null};

/**
 * @function
 * @param {String} key
 */
window.b2link.ui.staticUIMap_Remove=function(i){var e=window.b2link.STATIC.UI[i];if(e)e[0].dispose&&e[0].dispose(),e[1].dispose&&e[1].dispose(),delete window.b2link.STATIC.UI[i];else{var s="UI Map에 key - "+i+" 가 존재 하지 않습니다.";window.b2link_ui.message.error(s)}};

//----------------------------------------------------------------------------------------------------window.b2link.ui.s***;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;