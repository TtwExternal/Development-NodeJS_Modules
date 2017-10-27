//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2linkExtends/__define/200_define_window.b2linkExtends.injection.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2linkExtends.injection;

window.b2linkExtends.injection = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2linkExtends.injection;


//----------------------------------------------------------------------------------------------------window.b2linkExtends.injection.h***;

/**
 * @function
 * @param {HTMLElement} t target
 */
window.b2linkExtends.injection.hide_show=function(n){n.hide=window.b2linkExtends.element.hide,n.show=window.b2linkExtends.element.show};

/**
 * @function
 * @param {HTMLElement} t target
 */
window.b2linkExtends.injection.hide_show__el_and_modal=function(n){window.b2linkExtends.injection.hide_show(n),n.hideAndModal=window.b2linkExtends.element.hideAndModal,n.showAndModal=window.b2linkExtends.element.showAndModal,n.hideAndModal_Sync=window.b2linkExtends.element.hideAndModal_Sync,n.showAndModal_Sync=window.b2linkExtends.element.showAndModal_Sync,n.hideAndModal_MoveBGCLastChild=window.b2linkExtends.element.hideAndModal_MoveBGCLastChild,n.hideAndModal_MoveCurrentChildren=window.b2linkExtends.element.hideAndModal_MoveCurrentChildren,n.showAndModal_MoveCurrentChildren=window.b2linkExtends.element.showAndModal_MoveCurrentChildren};

//----------------------------------------------------------------------------------------------------window.b2linkExtends.injection.h***;


//----------------------------------------------------------------------------------------------------window.b2linkExtends.injection.i***;

/**
 * @function
 * @param {HTMLElement} t target
 */
window.b2linkExtends.injection.inputBox=function(n){window.b2linkExtends.injection.hide_show__el_and_modal(n)};

/**
 * @function
 * @param {HTMLElement} t target
 */
window.b2linkExtends.injection.inputModalPanel=function(n){window.b2linkExtends.injection.hide_show__el_and_modal(n)};

/**
 * @function
 * @param {HTMLElement} t target
 */
window.b2linkExtends.injection.inputPanel=function(n){window.b2linkExtends.injection.hide_show(n)};

//----------------------------------------------------------------------------------------------------window.b2linkExtends.injection.i***;


//----------------------------------------------------------------------------------------------------window.b2linkExtends.injection.l***;

/**
 * 동일 폴더에 js 파일 명이 add.js라고 한다면 add.alert.locale.kr.json 형태로 파일명을 생성해야한다.
 * @function
 * @param {HTMLElement} el
 * @param {Object} elCtrl
 * @example
 * <code>
	//*.js 파일의 최상단에서
	//Extends;
	var _this = window.b2linkUIClass.container.Panel( url, $el );

	//Extends - Injection;
	window.b2linkExtends.injection.locale_alert( el, _this );
	window.b2linkExtends.injection.locale_confirm( el, _this );
	window.b2linkExtends.injection.locale_label( el, _this );
	window.b2linkExtends.injection.locale_message( el, _this );
	window.b2linkExtends.injection.locale_tooltip( el, _this );
 * </code>
 */
window.b2linkExtends.injection.locale_alert=function(e,l){l||e.js&&(l=e.js),l||window.TtwLog.error("window.b2linkExtends.injection.locale_alert Error : undefine HTMLElement's Controller(JS Object)"),l.$locale=l.$locale?l.$locale:{},l.$locale.alert=window.b2link.ui_resource.reqSync_JSON_Locale.alert(l.__url)};

/**
 * 동일 폴더에 js 파일 명이 add.js라고 한다면 add.confirm.locale.kr.json 형태로 파일명을 생성해야한다.
 * @function
 * @param {HTMLElement} el
 * @param {Object} elCtrl
 * @example
 * <code>
	//*.js 파일의 최상단에서
	//Extends;
	var _this = window.b2linkUIClass.container.Panel( url, $el );

	//Extends - Injection;
	window.b2linkExtends.injection.locale_alert( el, _this );
	window.b2linkExtends.injection.locale_confirm( el, _this );
	window.b2linkExtends.injection.locale_label( el, _this );
	window.b2linkExtends.injection.locale_message( el, _this );
	window.b2linkExtends.injection.locale_tooltip( el, _this );
 * </code>
 */
window.b2linkExtends.injection.locale_confirm=function(n,o){o||n.js&&(o=n.js),o||window.TtwLog.error("window.b2linkExtends.injection.locale_confirm Error : undefine HTMLElement's Controller(JS Object)"),o.$locale=o.$locale?o.$locale:{},o.$locale.confirm=window.b2link.ui_resource.reqSync_JSON_Locale.confirm(o.__url)};

/**
 * 동일 폴더에 js 파일 명이 add.js라고 한다면 add.label.locale.kr.json 형태로 파일명을 생성해야한다.
 * @function
 * @param {HTMLElement} el
 * @param {Object} elCtrl
 * @example
 * <code>
	//*.js 파일의 최상단에서
	//Extends;
	var _this = window.b2linkUIClass.container.Panel( url, $el );

	//Extends - Injection;
	window.b2linkExtends.injection.locale_alert( el, _this );
	window.b2linkExtends.injection.locale_confirm( el, _this );
	window.b2linkExtends.injection.locale_label( el, _this );
	window.b2linkExtends.injection.locale_message( el, _this );
	window.b2linkExtends.injection.locale_tooltip( el, _this );
 * </code>
 */
window.b2linkExtends.injection.locale_label=function(l,e){e||l.js&&(e=l.js),e||window.TtwLog.error("window.b2linkExtends.injection.locale_label Error : undefine HTMLElement's Controller(JS Object)"),e.$locale=e.$locale?e.$locale:{},e.$locale.label=window.b2link.ui_resource.reqSync_JSON_Locale.label(e.__url)};

/**
 * 동일 폴더에 js 파일 명이 add.js라고 한다면 add.message.locale.kr.json 형태로 파일명을 생성해야한다.
 * @function
 * @param {HTMLElement} el
 * @param {Object} elCtrl
 * @example
 * <code>
	//*.js 파일의 최상단에서
	//Extends;
	var _this = window.b2linkUIClass.container.Panel( url, $el );

	//Extends - Injection;
	window.b2linkExtends.injection.locale_alert( el, _this );
	window.b2linkExtends.injection.locale_confirm( el, _this );
	window.b2linkExtends.injection.locale_label( el, _this );
	window.b2linkExtends.injection.locale_message( el, _this );
	window.b2linkExtends.injection.locale_tooltip( el, _this );
 * </code>
 */
window.b2linkExtends.injection.locale_message=function(e,l){l||e.js&&(l=e.js),l||window.TtwLog.error("window.b2linkExtends.injection.locale_message Error : undefine HTMLElement's Controller(JS Object)"),l.$locale=l.$locale?l.$locale:{},l.$locale.message=window.b2link.ui_resource.reqSync_JSON_Locale.message(l.__url)};

/**
 * 동일 폴더에 js 파일 명이 add.js라고 한다면 add.tooltip.locale.kr.json 형태로 파일명을 생성해야한다.
 * @function
 * @param {HTMLElement} el
 * @param {Object} elCtrl
 * @example
 * <code>
	//*.js 파일의 최상단에서
	//Extends;
	var _this = window.b2linkUIClass.container.Panel( url, $el );

	//Extends - Injection;
	window.b2linkExtends.injection.locale_alert( el, _this );
	window.b2linkExtends.injection.locale_confirm( el, _this );
	window.b2linkExtends.injection.locale_label( el, _this );
	window.b2linkExtends.injection.locale_message( el, _this );
	window.b2linkExtends.injection.locale_tooltip( el, _this );
 * </code>
 */
window.b2linkExtends.injection.locale_tooltip=function(o,l){l||o.js&&(l=o.js),l||window.TtwLog.error("window.b2linkExtends.injection.locale_tooltip Error : undefine HTMLElement's Controller(JS Object)"),l.$locale=l.$locale?l.$locale:{},l.$locale.tooltip=window.b2link.ui_resource.reqSync_JSON_Locale.tooltip(l.__url)};

//----------------------------------------------------------------------------------------------------window.b2linkExtends.injection.l***;


//----------------------------------------------------------------------------------------------------window.b2linkExtends.injection.m***;

/**
 * @function
 * @param {HTMLElement} t target
 */
window.b2linkExtends.injection.modalPanel=function(n){window.b2linkExtends.injection.hide_show__el_and_modal(n)};

//----------------------------------------------------------------------------------------------------window.b2linkExtends.injection.m***;


//----------------------------------------------------------------------------------------------------window.b2linkExtends.injection.s***;

/**
 * @function
 * @param {HTMLElement} t target
 */
window.b2linkExtends.injection.searchSelector=function(n){window.b2linkExtends.injection.hide_show__el_and_modal(n)};

/**
 * @function
 * @param {HTMLElement} t target
 */
window.b2linkExtends.injection.selector=function(n){window.b2linkExtends.injection.hide_show__el_and_modal(n)};

//----------------------------------------------------------------------------------------------------window.b2linkExtends.injection.s***;


//----------------------------------------------------------------------------------------------------window.b2linkExtends.injection.t***;

/**
 * @function
 * @param {HTMLElement} t target
 */
window.b2linkExtends.injection.textAreaBox=function(n){window.b2linkExtends.injection.hide_show(n)};

/**
 * @function
 * @param {HTMLElement} t target
 */
window.b2linkExtends.injection.textBoxModalPanel=function(n){window.b2linkExtends.injection.hide_show__el_and_modal(n)};

//----------------------------------------------------------------------------------------------------window.b2linkExtends.injection.t***;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;