//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/__define/101_define_global.b2link.STATIC.CONST.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//--------------------------------------------------[ S ] - global.b2link.STATIC.CONST;
global.b2link.STATIC.CONST = global.b2link.STATIC.CONST || {};
//--------------------------------------------------[ E ] - global.b2link.STATIC.CONST;

//----------------------------------------------------------------------------------------------------;

//------------------------------global.b2link.STATIC.CONST.SCODES;
(function(){
	global.b2link.STATIC.CONST.SCODES = global.b2link.STATIC.CONST.SCODES || {};

	var _ = global.b2link.STATIC.CONST.SCODES;
		_.__defineGetter__( "SESSION_SERVER"						, function(){ return "SYS0010"; } );
		_.__defineGetter__( "B2KER"									, function(){ return "SYS0020"; } );
		_.__defineGetter__( "BRAND_PORTAL"							, function(){ return "SYS0030"; } );
		_.__defineGetter__( "FILE_SERVER"							, function(){ return "SYS0040"; } );
		_.__defineGetter__( "WEB_HOOK_SERVER"						, function(){ return "SYS0050"; } );
		_.__defineGetter__( "WEB_SOCKET_MESSAGE_SERVER"				, function(){ return "SYS0060"; } );
		_.__defineGetter__( "EXCEL_SERVER"							, function(){ return "SYS0070"; } );
		_.__defineGetter__( "WEB_SOCKET_APP_COMMUNICATION_SERVER"	, function(){ return "SYS0080"; } );
})();
//------------------------------global.b2link.STATIC.CONST.SCODES;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;