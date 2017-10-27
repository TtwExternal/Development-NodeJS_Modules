//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_service__instance/__define/200_define_window.b2link_service__instancejs";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_service__instance;

window.b2link_service__instance = window.b2link_service__instance || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_service__instance;

/**
 * @function
 * @return {String}
 */
window.b2link_service__instance.__defineGetter__( "URL", function(){ return window.b2link_service.getURL_DB( "_instance" ); } );

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;