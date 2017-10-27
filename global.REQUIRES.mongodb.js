//20170601_1308 - 2.2.27;
global.REQUIRES = global.REQUIRES || {};

(function(){
	var _ = require( "mongodb" );
	global.REQUIRES.__defineGetter__( "mongodb", function(){ return _; } );
})();

return global.REQUIRES.mongodb;