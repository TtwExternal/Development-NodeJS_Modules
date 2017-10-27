//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/__define/200_define_window.b2link.websocket_browser.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.websocket_browser;

/**
 * 인터넷 브라우저에서만 사용되는 API Package
 * @property {Object}
 */
window.b2link.websocket_browser = window.b2link.websocket_browser || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.websocket_browser;

/**
 * WebSocket을 생성하여 WebSocketServer과 연결한다.
 * @function
 * @param {Object} d
 * <code>
	{
		"host" : ""
		, "port" : NaN
		, "protocol" : null

		, "evt_close" : function( e ){ debugger; arguments; }
		, "evt_error" : function( e ){ debugger; arguments; }
		, "evt_message" : function( e ){ console.log( "Message : " + e.data ); debugger; arguments; }
		, "evt_open" : function( e ){ debugger; arguments; }
	}
 * </code>
 * @return {WebSocket}
 *
 * @example
 * <code>
	window.b2link.websocket_browser.connect__MessageBox_message({
		host : "localhost"
		, port : 42322

		, evt_close : function( e ){ debugger; arguments; }
		, evt_error : function( e ){ debugger; arguments; }
		, evt_message : function( e ){ console.log( "Message : " + e.data ); debugger; arguments; }
		, evt_open : function( e ){ debugger; arguments; }
	});
 * </code>
 */
window.b2link.websocket_browser.connect=function(e){if(!e.host)return void window.b2link_ui.message.error("window.b2link.websocket_browser.connect Error : host 정의 필수");if(!e.port)return void window.b2link_ui.message.error("window.b2link.websocket_browser.connect Error : port 정의 필수");if(!e.evt_message)return void window.b2link_ui.message.error("window.b2link.websocket_browser.connect Error : evt_message 정의 필수");var r=e.evt_message?e.evt_message:function(e){arguments},n=e.evt_open?e.evt_open:function(e){arguments},o=e.evt_error?e.evt_error:function(e){var s=arguments.callee.__webSocket;s.removeEventListener("close",t,!1),s.removeEventListener("error",o,!1),s.removeEventListener("message",r,!1),s.removeEventListener("open",n,!1)},t=e.evt_close?e.evt_close:function(e){var s=arguments.callee.__webSocket;s.removeEventListener("close",t,!1),s.removeEventListener("error",o,!1),s.removeEventListener("message",r,!1),s.removeEventListener("open",n,!1)};try{var s=new window.WebSocket("ws://"+e.host+":"+e.port);t.__webSocket=o.__webSocket=s,s.addEventListener("close",t,!1,0,!0),s.addEventListener("error",o,!1,0,!0),s.addEventListener("message",r,!1,0,!0),s.addEventListener("open",n,!1,0,!0)}catch(i){window.b2link_ui.message.error("window.b2link.websocket_browser.connect Error : "+i)}return s};

/**
 * WebSocket을 생성하여 WebSocketServer과 연결한다.
 * 모든 메세지가 전체 송/수신 되는 기능
 * @function
 * @param {Object} d
 * <code>
	{
		"host" : ""
		, "port" : NaN
		, "protocol" : null
	}
 * </code>
 * @return {WebSocket}
 *
 * @example
 * <code>
	window.WS__TEST = window.b2link.websocket_browser.connect__MessageBox_message({
		host : "localhost"
		, port : 42322
	});
 * </code>
 */
window.b2link.websocket_browser.connect__MessageBox_message=function(e){e.evt_message=function(e){try{var n=JSON.parse(e.data);window.b2link_ui.message[n.type](n.data)}catch(o){var s=e.data;window.b2link_ui.message.message(s)}},e.evt_open=function(e){};var n=window.b2link.websocket_browser.connect(e);return n};
//*///삭제하기 - 20170616 - 송선우 - 테스트 소스;
try{window.WS__TEST||(window.WS__TEST=window.b2link.websocket_browser.connect__MessageBox_message({host:"222.239.10.122",port:42322}))}catch(e){window.TtwLog.error("[ 테스트 코드 ] - 웹소켓 연결에 실패 함.")}
try{window.WS__TEST||(window.WS__TEST=window.b2link.websocket_browser.connect__MessageBox_message({host:"localhost",port:42322}))}catch(e){window.TtwLog.error("[ 테스트 코드 ] - 웹소켓 연결에 실패 함.")}
//*/

/**
 * WebSocket을 생성하여 WebSocketServer과 연결한다.
 * sid(session id)와 mid(member id)를 체크한다.
 * @function
 * @param {Object} d
 * <code>
	{
		"host" : ""
		, "port" : NaN
		, "protocol" : null

		, "evt_close" : function( e ){ debugger; arguments; }
		, "evt_error" : function( e ){ debugger; arguments; }
		, "evt_message" : function( e ){ console.log( "Message : " + e.data ); debugger; arguments; }
		, "evt_open" : function( e ){ debugger; arguments; }
	}
 * </code>
 * @return {WebSocket}
 *
 * @example
 * <code>
	window.b2link.websocket_browser.connect__MessageBox_message({
		host : "localhost"
		, port : 42322

		, evt_close : function( e ){ debugger; arguments; }
		, evt_error : function( e ){ debugger; arguments; }
		, evt_message : function( e ){ console.log( "Message : " + e.data ); debugger; arguments; }
		, evt_open : function( e ){ debugger; arguments; }
	});
 * </code>
 */
window.b2link.websocket_browser.connectAndCheckSession=function(e){if(!e.host)return void window.b2link_ui.message.error("window.b2link.websocket_browser.connectAndCheskSession Error : host 정의 필수");if(!e.port)return void window.b2link_ui.message.error("window.b2link.websocket_browser.connectAndCheskSession Error : port 정의 필수");if(!e.evt_message)return void window.b2link_ui.message.error("window.b2link.websocket_browser.connectAndCheskSession Error : evt_message 정의 필수");var r=e.evt_message?e.evt_message:function(e){arguments},n=e.evt_open?e.evt_open:function(e){arguments},o=e.evt_error?e.evt_error:function(e){var t=arguments.callee.__webSocket;t.removeEventListener("close",s,!1),t.removeEventListener("error",o,!1),t.removeEventListener("message",r,!1),t.removeEventListener("open",n,!1)},s=e.evt_close?e.evt_close:function(e){var t=arguments.callee.__webSocket;t.removeEventListener("close",s,!1),t.removeEventListener("error",o,!1),t.removeEventListener("message",r,!1),t.removeEventListener("open",n,!1)};try{var t=window.b2link.session.getSession();if(!t.mid)return void window.b2link_ui.message.error("WebSocket 연결 실패 - mid가 없다");if(!t.sid)return void window.b2link_ui.message.error("WebSocket 연결 실패 - sid가 없다");var i=new window.WebSocket("ws://"+e.host+":"+e.port+"?sid="+t.sid+"&mid="+t.mid);s.__webSocket=o.__webSocket=i,i.addEventListener("close",s,!1,0,!0),i.addEventListener("error",o,!1,0,!0),i.addEventListener("message",r,!1,0,!0),i.addEventListener("open",n,!1,0,!0)}catch(w){window.b2link_ui.message.error("window.b2link.websocket_browser.connectAndCheskSession Error : "+w)}return i};

/**
 * WebSocket을 생성하여 WebSocketServer과 연결한다.
 * 모든 메세지가 전체 송/수신 되는 기능
 * sid(session id)와 mid(member id)를 체크한다.
 * @function
 * @param {Object} d
 * <code>
	{
		"host" : ""
		, "port" : NaN
		, "protocol" : null
	}
 * </code>
 * @return {WebSocket}
 *
 * @example
 * <code>
	window.WS0 = window.b2link.websocket_browser.connectAndCheckSession__MessageBox_message.js({
		host : "localhost"
		, port : 42322
	});
 * </code>
 */
window.b2link.websocket_browser.connectAndCheckSession__MessageBox_message=function(e){e.evt_message=function(e){try{var n=JSON.parse(e.data);window.b2link_ui.message[n.type](n.data)}catch(s){var a=e.data;window.b2link_ui.message.message(a)}},e.evt_open=function(e){};var n=window.b2link.websocket_browser.connectAndCheckSession(e);return n};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;