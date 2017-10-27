//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/__define/200_define_global.b2link.import.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.import;

global.b2link.import = global.b2link.import || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.import;

/**
 * *.dll *.dylib *.so를 Process상에 호출한다.
 * @function
 * @param {String} path
 * @return {*}
 */
global.b2link["import"].tll=function(l){STtwUtilBuffer.iconv=require("iconv-lite"),global.b2link["import"].tll._(l)};
global.b2link["import"].tll._=global.Lib.Ttw.importTll;

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;