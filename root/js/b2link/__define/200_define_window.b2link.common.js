//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_window.b2link.common.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.common;

window.b2link.common = window.b2link.common || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.common;


//----------------------------------------------------------------------------------------------------window.b2link.common.c***;

/**
 * Interval을 제거한다.
 * @function
 * @param {Number} n
 */
window.b2link.common.clearInterval=function(n){clearInterval(n)};

/**
 * Interval을 제거한다.
 * 대상 HTMLElement에서 window.b2link.event.INTERVAL_END Event를 Dispatch 한다.
 * @function
 * @param {Number} n
 * @param {HTMLElement} t
 */
window.b2link.common.clearInterval_dispatchEvent=function(n,e){clearTimeout(n),e&&window.b2link.event.dispatchCustomEvent(e,window.b2link.event.INTERVAL_END,n)};

/**
 * Timeout을 제거한다.
 * @function
 * @param {Number} n
 */
window.b2link.common.clearTimeout=function(o){clearTimeout(o)};

/**
 * Timeout을 제거한다.
 * 대상 HTMLElement에서 window.b2link.event.TIMEOUT_END Event를 Dispatch 한다.
 * @function
 * @param {Number} n
 * @param {HTMLElement} t
 */
window.b2link.common.clearTimeout_dispatchEvent=function(n,i){clearTimeout(n),i&&window.b2link.event.dispatchCustomEvent(i,window.b2link.event.TIMEOUT_END,n)};

//----------------------------------------------------------------------------------------------------window.b2link.common.c***;


//----------------------------------------------------------------------------------------------------window.b2link.common.s***;

/**
 * Interval을 구동한다.
 * @function
 * @param {Function} fn
 * @param {Number} time
 * @return {Number}
 */
window.b2link.common.setInterval=function(n,t){return setInterval(n,t)};

/**
 * Interval을 구동한다.
 * 대상 HTMLElement에서 window.b2link.event.INTERVAL_START Event를 Dispatch 한다.
 * @function
 * @param {Function} fn
 * @param {Number} time
 * @param {HTMLElement} t
 * @return {Number}
 */
window.b2link.common.setInterval_dispatchEvent=function(n,t,e){var i=setInterval(n,t);return e&&window.b2link.event.dispatchCustomEvent(e,window.b2link.event.INTERVAL_START,i),i};

/**
 * Timeout를 구동한다.
 * @function
 * @param {Function} fn
 * @param {Number} time
 * @return {Number}
 */
window.b2link.common.setTimeout=function(n,o){return setTimeout(n,o)};

/**
 * Timeout를 구동한다.
 * 대상 HTMLElement에서 window.b2link.event.TIMEOUT_START Event를 Dispatch 한다.
 * @function
 * @param {Function} fn
 * @param {Number} time
 * @param {HTMLElement} t targetElement
 */
window.b2link.common.setTimeout_dispatchEvent=function(n,t,e){var i=setTimeout(n,t);return e&&window.b2link.event.dispatchCustomEvent(e,window.b2link.event.TIMEOUT_START,i),i};

//----------------------------------------------------------------------------------------------------window.b2link.common.s***;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;