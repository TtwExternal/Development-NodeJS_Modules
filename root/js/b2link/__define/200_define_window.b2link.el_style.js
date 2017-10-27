//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_window.b2link.el_style.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.el_style;

window.b2link.el_style = window.b2link.el_style || {};


//--------------------------------------------------window.b2link.el_style.a***;

/**
 *
 * @function
 * @param {HTMLElement} el
 * @param {String} cssText
 * @return {HTMLElement}
 */
window.b2link.el_style.addCSSText=function(e,t){return SUtilTemplateHTML.addCSSText(t,e)};

/**
 *
 * @function
 * @param {HTMLElement} el
 * @param {String} cssText
 * @param {String} name
 * @return {HTMLElement}
 */
window.b2link.el_style.addCSSText_name=function(e,n,t){return SUtilTemplateHTML.addCSSText_name(n,e,t)};

//--------------------------------------------------window.b2link.el_style.a***;


//--------------------------------------------------window.b2link.el_style.c***;

/**
 * @function
 * @param {HTMLElement} el
 * @param {String} className
 */
window.b2link.el_style.changeClassName=function(a,e){window.TtwLog.timeStamp(a.className+"을 "+e+"으로 변경"),a.className=e};

//--------------------------------------------------window.b2link.el_style.c***;


//--------------------------------------------------window.b2link.el_style.r***;

/**
 *
 * @function
 * @param {HTMLElement} el
 */
window.b2link.el_style.removeAllStyleElements=function(e){SUtilTemplateHTML.removeAllStyleElements(e)};

/**
 *
 * @function
 * @param {HTMLElement} el
 */
window.b2link.el_style.removeAllStyleElements__style_dynamic=function(e){SUtilTemplateHTML.removeAllStyleElements__style_dynamic(e)};

/**
 *
 * @function
 * @param {HTMLElement} el
 * @param {String} element's name
 */
window.b2link.el_style.removeAllStyleElements_name=function(e,l){SUtilTemplateHTML.removeAllStyleElements_name(e,l)};

/**
 *
 * @function
 * @param {HTMLElement} el
 * @param {String} element's name
 * @return {HTMLElement}
 */
window.b2link.el_style.removeStyleElement=function(e,l){return SUtilTemplateHTML.removeStyleElement(e,l)};

//--------------------------------------------------window.b2link.el_style.r***;


//--------------------------------------------------window.b2link.el_style.s***;

/**
 *
 * @function
 * @param {HTMLElement} target
 * @param {String} className
 * @param {Object} styles
 * <code>
 * {
 * 		"display" : "none"
 * 		, "position" : "absolute"
 * 		, ...
 * }
 * </code>
 */
window.b2link.el_style.setStyleElement_byClassName=function(l,e,n){for(var t=l.getElementsByClassName(e),s=0,a=t.length,y=null,i=null;a>s;++s){y=t[s];for(i in n)y.style[i]=n[i]}};

//--------------------------------------------------window.b2link.el_style.s***;


//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.el_style;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;