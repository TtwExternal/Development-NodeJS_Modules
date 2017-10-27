//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_window.b2link.util.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.util;

window.b2link.util = window.b2link.util || {};

//--------------------------------------------------window.b2link.util.i***;

/**
 * *.html을 불러와서 targetElement에 appendChild 한다.
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {String} targetElementID
 * @return {*}
 */
window.b2link.util.importHTML=SUtilTemplateHTML.addHTML__URLToElID;

/**
 * *.html을 불러와서 targetElement에 appendChild 한다.
 * htmlURL로 불러온 html 문자열을 메모리상에 Cache를 시킨다.
 * 같은 URL을 요청할 시에 다시 Network 통신을 발생시키지 않고 내부에 보관된 문자열로 처리해준다.
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {String} targetElementID
 * @return {*}
 */
window.b2link.util.importHTML_Cache=SUtilTemplateHTML.addHTML__URLToElID_Cache;

/**
 * *.html을 불러와서 targetElement에 appendChild 한다.
 * *.js를 불러와서 실행시킨다.
 * js를 작성하는 규칙이 존재한다. js상에서는 htmlElement를 Parameter로 받게 된다.
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {String} jsURL JS File URL
 * @param {String} targetElementID
 * @return {*}
 */
window.b2link.util.importHTMLJS=SUtilTemplateHTML.addHTMLJS__URL_Return;

/**
 * *.html을 불러와서 targetElement에 appendChild 한다.
 * *.js를 불러와서 실행시킨다.
 * js를 작성하는 규칙이 존재한다. js상에서는 htmlElement를 Parameter로 받게 된다.
 * window.b2link.STATIC.UI[ key ] = [ HTMLElement, JS Object ]; 형태로 보관한다.
 * @function
 * @param {String} key b2link.STATIC.UI[ ??? ]
 * @param {String} htmlURL HTML File URL
 * @param {String} jsURL JS File URL
 * @param {String} targetElementID
 * @return {*}
 */
window.b2link.util.importHTMLJS__And_Add_b2link_STATIC_UI=function(i,n,_,d){var t=SUtilTemplateHTML.addHTMLJS__URL_Return(n,_,d);return window.b2link.ui.staticUIMap_Add(i,t),t};

/**
 * *.html을 불러와서 targetElement에 appendChild 한다.
 * *.js를 불러와서 실행시킨다.
 * js를 작성하는 규칙이 존재한다. js상에서는 htmlElement를 Parameter로 받게 된다.
 * *.css를 불러와서 index.html의 <head>에 삽입 한다.
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {String} jsURL JS File URL
 * @param {String} cssURL CSS File URL
 * @param {String} targetElementID
 * @return {*}
 */
window.b2link.util.importHTMLJSCSS=SUtilTemplateHTML.addHTMLJSCSS__URL_Return;

/**
 * *.html을 불러와서 targetElement에 appendChild 한다.
 * *.js를 불러와서 실행시킨다.
 * js를 작성하는 규칙이 존재한다. js상에서는 htmlElement를 Parameter로 받게 된다.
 * *.css를 불러와서 index.html의 <head>에 삽입 한다.
 * window.b2link.STATIC.UI[ key ] = [ HTMLElement, JS Object ]; 형태로 보관한다.
 * css는 window.b2link.STATIC.UI[ key ]에 보관하지 않는다.
 * @function
 * @param {String} key b2link.STATIC.UI[ ??? ]
 * @param {String} htmlURL HTML File URL
 * @param {String} jsURL JS File URL
 * @param {String} cssURL CSS File URL
 * @param {String} targetElementID
 * @return {*}
 */
window.b2link.util.importHTMLJSCSS__And_Add_b2link_STATIC_UI=function(i,n,_,d,t){var S=SUtilTemplateHTML.addHTMLJSCSS__URL_Return(n,_,d,t);return window.b2link.ui.staticUIMap_Add(i,S),S};

/**
 * *.html을 불러와서 targetElement에 appendChild 한다.
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {HTMLElement} targetElement
 * @return {*}
 */
window.b2link.util.importHTMLToEl=SUtilTemplateHTML.addHTML__URLToEl;

/**
 * *.html을 불러와서 targetElement에 appendChild 한다.
 * htmlURL로 불러온 html 문자열을 메모리상에 Cache를 시킨다.
 * 같은 URL을 요청할 시에 다시 Network 통신을 발생시키지 않고 내부에 보관된 문자열로 처리해준다.
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {HTMLElement} targetElement
 * @return {*}
 */
window.b2link.util.importHTMLToEl_Cache=SUtilTemplateHTML.addHTML__URLToEl_Cache;

/**
 * *.js를 불러와서 실행시킨다.
 * js를 작성하는 규칙이 존재한다. js상에서는 js url을 Parameter로 받게 된다.
 * @function
 * @param {String} url
 * @return {*}
 */
window.b2link.util.importJS=function(t){var i=SUtilTemplateHTML.addJS__URL(t,arguments);return i};

//--------------------------------------------------window.b2link.util.i***;

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.util;

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;