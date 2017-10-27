//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_service/__define/101_define_global.b2link_service.STATIC.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link_service.STATIC.CONST;

global.b2link_service.STATIC.CONST = global.b2link_service.STATIC.CONST || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link_service.STATIC.CONST;

//--------------------------------------------------global.b2link_service.STATIC.CONST.RESPONSE_CODE;

global.b2link_service.STATIC.CONST.RESPONSE_CODE = global.b2link_service.STATIC.CONST.RESPONSE_CODE || {};

(function(){
	var _ = global.b2link_service.STATIC.CONST.RESPONSE_CODE;
		_.__defineGetter__( "REQUEST_FAILED"       , function(){ return  0; } );
		_.__defineGetter__( "REQUEST_SUCCESS"      , function(){ return  1; } );
		_.__defineGetter__( "BAD_VALUE"            , function(){ return  2; } );
		_.__defineGetter__( "HOST_NOT_FOUND"       , function(){ return  7; } );
		_.__defineGetter__( "AUTHENTICATION_FAILED", function(){ return 18; } );
		_.__defineGetter__( "NETWORK_TIMEOUT"      , function(){ return 89; } );
		_.__defineGetter__( "OPERATION_FAILED"     , function(){ return 96; } );
})();

//--------------------------------------------------global.b2link_service.STATIC.CONST.RESPONSE_CODE;

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;