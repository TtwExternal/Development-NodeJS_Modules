//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/websocket_client/global.b2link.websocket_client.connect.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
	{
		"host" : ""
		, "port" : NaN

		, "protocol" : null

		, "evt_open" : function( ?? ){ console.log( "Open" ); debugger; arguments; }
		, "evt_close" : function( ?? ){ console.log( "Close" ); debugger; arguments; }
		, "evt_error" : function( ?? ){ console.log( "Error" ); debugger; arguments; }
		, "evt_message" : function( message ){ console.log( "Server Message : ", message ); debugger; arguments; }
	}
 * </code>
 * @return {WebSocket} global.REQUIRES.ws
 *
 * @example
 * <code>
	global.ws0 = global.b2link.websocket_client.connect({
		"host" : "localhost"
		, "port" : 42322

		, "protocol" : null

		, "evt_close" : function( code, data ){ console.log( "Close" ); debugger; arguments; }
		, "evt_error" : function(){ console.log( "Error" ); debugger; arguments; }
		, "evt_message" : function( message ){ console.log( "Server Message : ", message ); debugger; arguments; }
		, "evt_open" : function(){ console.log( "Open" ); debugger; arguments; }
	});
 * </code>
 */
global.b2link.websocket_client.connect = function( d )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.b2link.websocket_client.connect():{WebSocket}----------" );

	var t = new global.REQUIRES.ws( "ws://" + d.host + ":" + d.port );//clientWebSocket;

	var _evt_close  = d.evt_close  ? d.evt_close  : function( code, data ){ console.log( "Close" ); debugger; arguments; };
	var _evt_error  = d.evt_error  ? d.evt_error  : function(){ console.log( "Error" ); debugger; arguments; };
	var _evt_message= d.evt_message? d.evt_message: function( message ){ console.log( "Server Message : ", message ); debugger; arguments; };
	var _evt_open   = d.evt_open   ? d.evt_open   : function(){ console.log( "Open" ); debugger; arguments; };

	t.on( "close"  , _evt_close );
	t.on( "error"  , _evt_error );
	t.on( "message", _evt_message );
	t.on( "open"   , _evt_open );

	//Test Code;
	//setInterval( function(){ t.send( "끼룩끼룩 " + SUtilMath.random( 0, 10000 ) + "번째" ); }, 500 );

	global.TtwLog.timeStamp( "---- [ E ] - global.b2link.websocket_client.connect():{WebSocket}----------return t;" );
	return t;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;