//20170601_1308 - 0.4.17;

global.REQUIRES = global.REQUIRES || {};

(function(){
	var _ = require( "iconv-lite" );
	global.REQUIRES.__defineGetter__( "iconv-lite", function(){ return _; } );
	global.REQUIRES.__defineGetter__( "iconv", function(){ return _; } );
})();

return global.REQUIRES[ "iconv-lite" ];