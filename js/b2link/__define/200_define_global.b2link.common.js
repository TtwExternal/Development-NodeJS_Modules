//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_global.b2link.common.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.common;

global.b2link.common = global.b2link.common || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.common;


//./global.b2link.common.clearInterval.js;
global.b2link.common.clearInterval=function(l){clearInterval(l)};

//./global.b2link.common.clearInterval_dispatchEvent.js;
global.b2link.common.clearInterval_dispatchEvent=function(l){clearTimeout(l),global.b2link.event.dispatchCustomEvent(tEl,global.b2link.event.INTERVAL_END,l)};

//./global.b2link.common.clearTimeout.js;
global.b2link.common.clearTimeout=function(o){clearTimeout(o)};

//./global.b2link.common.clearTimeout_dispatchEvent.js;
global.b2link.common.clearTimeout_dispatchEvent=function(l){clearTimeout(l),global.b2link.event.dispatchCustomEvent(tEl,global.b2link.event.TIMEOUT_END,l)};

//./global.b2link.common.setInterval.js;
global.b2link.common.setInterval=function(n,t){return setInterval(n,t)};

//./global.b2link.common.setInterval_dispatchEvent.js;
global.b2link.common.setInterval_dispatchEvent=function(t,n){var l=setInterval(t,n);return global.b2link.event.dispatchCustomEvent(tEl,global.b2link.event.INTERVAL_START,l),l};

//./global.b2link.common.setTimeout.js;
global.b2link.common.setTimeout=function(o,t){return setTimeout(o,t)};

//./global.b2link.common.setTimeout_dispatchEvent.js;
global.b2link.common.setTimeout_dispatchEvent=function(t,e,n){var l=setTimeout(t,e);return global.b2link.event.dispatchCustomEvent(n,global.b2link.event.TIMEOUT_START,l),l};


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;