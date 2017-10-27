//----------------------------------------------------------------------------------------------------;
var fileNm = "js/router/__define/200_define_global.router.file.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.router.file;

global.router.file = global.router.file || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.router.file;

/**
 * global.router.file.PATH 초기화 및 Getter 생성
 * @function
 */
(function(){
	var _s0 = "./js-File/router/file/";
	var _a0 = [
		"multi_async"
		, "multi_sync"
		, "single_async"
		, "single_sync"
	];

	var _PATH = {};

	var io;
	var i=0, iLen=_a0.length;
	for( ; i<iLen; ++i )
	{
		io = _a0[ i ];
		_PATH[ io ] = _s0 + io + "/";
	}

	var _ = global.router.file.PATH = {};
		_.__defineGetter__( "multi_async", function(){ return _PATH.multi_async; });
		_.__defineGetter__( "multi_sync", function(){ return _PATH.multi_sync; });
		_.__defineGetter__( "single_async", function(){ return _PATH.single_async; });
		_.__defineGetter__( "single_sync", function(){ return _PATH.single_sync; });
})();

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;