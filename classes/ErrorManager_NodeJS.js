/**
 * Error Manager Installation
 * NodeJS 8.8.0 기준
 * NodeJS 상의 모든 에러 감지 및 공통 후처리 추가
 * @return {Object}
 * <code>
	{
		//모든 에러 이벤트 리스너를 추가한다.;
		addAllErrorEventListeners : function(){}

		//모든 에러 이벤트 리스너를 제거한다.;
		, removeAllErrorEventListeners : function(){}
	}
 * </code>
 *
 * @example
 * <code>
	global.ERROR_MANAGER = require( "ErrorManager_NodeJS.js" );
 * </code>
 */
try{(function(){

	var _this = {};

	//----------------------------------------------------------------------------------------------------;

	//	DEFINE;

	//----------------------------------------------------------------------------------------------------;

	/**
	 * NodeJS 8.8.0
	 * NodeJS 상에서 존재하는 ERROR Code 문자열 별 후처리 함수 정의
	 * 추가된 에러 또는 식별 하지 못한 에러가 있으면 에러코드를 키값으로 하고 함수 로직을 생성후 추가 하면된다.
	 * @property {Object}
	 */
	var NODEJS_ERRORS = {

		/*/
		EACCES (Permission denied): An attempt was made to access a file in a way forbidden by its file access permissions.

		EADDRINUSE (Address already in use): An attempt to bind a server (net, http, or https) to a local address failed due to another server on the local system already occupying that address.

		ECONNREFUSED (Connection refused): No connection could be made because the target machine actively refused it. This usually results from trying to connect to a service that is inactive on the foreign host.

		ECONNRESET (Connection reset by peer): A connection was forcibly closed by a peer. This normally results from a loss of the connection on the remote socket due to a timeout or reboot. Commonly encountered via the http and net modules.

		EEXIST (File exists): An existing file was the target of an operation that required that the target not exist.

		EISDIR (Is a directory): An operation expected a file, but the given pathname was a directory.

		EMFILE (Too many open files in system): Maximum number of file descriptors allowable on the system has been reached, and requests for another descriptor cannot be fulfilled until at least one has been closed. This is encountered when opening many files at once in parallel, especially on systems (in particular, macOS) where there is a low file descriptor limit for processes. To remedy a low limit, run ulimit -n 2048 in the same shell that will run the Node.js process.

		ENOENT (No such file or directory): Commonly raised by fs operations to indicate that a component of the specified pathname does not exist -- no entity (file or directory) could be found by the given path.

		ENOTDIR (Not a directory): A component of the given pathname existed, but was not a directory as expected. Commonly raised by fs.readdir.

		ENOTEMPTY (Directory not empty): A directory with entries was the target of an operation that requires an empty directory -- usually fs.unlink.

		EPERM (Operation not permitted): An attempt was made to perform an operation that requires elevated privileges.

		EPIPE (Broken pipe): A write on a pipe, socket, or FIFO for which there is no process to read the data. Commonly encountered at the net and http layers, indicative that the remote side of the stream being written to has been closed.

		ETIMEDOUT (Operation timed out): A connect or send request failed because the connected party did not properly respond after a period of time. Usually encountered by http or net -- often a sign that a socket.end() was not properly called.
		//*/
		EACCES : function( err ){}
		, EADDRINUSE : function( err ){}
		, ECONNRESET : function( err ){}
		, EEXIST : function( err ){}
		, EISDIR : function( err ){}
		, EMFILE : function( err ){}
		, ENOENT : function( err ){}
		, ENOTDIR : function( err ){}
		, ENOTEMPTY : function( err ){}
		, EPERM : function( err ){}
		, EPIPE : function( err ){}
		, ETIMEDOUT : function( err ){}

		//----------------------------------------------------------------------------------------------------;

		//	NodeJS Error;

		//----------------------------------------------------------------------------------------------------;

		/*/
		ERR_ARG_NOT_ITERABLE - Used generically to identify that an iterable argument (i.e. a value that works with for...of loops) is required, but not provided to a Node.js API.

		ERR_FALSY_VALUE_REJECTION - Used by the util.callbackify() API when a callbackified Promise is rejected with a falsy value (e.g. null).

		ERR_HTTP_HEADERS_SENT - Used when headers have already been sent and another attempt is made to add more headers.

		ERR_HTTP_INVALID_STATUS_CODE - Used for status codes outside the regular status code ranges (100-999).

		ERR_HTTP_TRAILER_INVALID - Used when the Trailer header is set even though the transfer encoding does not support that.

		ERR_HTTP2_CONNECT_AUTHORITY - For HTTP/2 requests using the CONNECT method, the :authority pseudo-header is required.

		ERR_HTTP2_CONNECT_PATH - For HTTP/2 requests using the CONNECT method, the :path pseudo-header is forbidden.

		ERR_HTTP2_CONNECT_SCHEME - The HTTP/2 requests using the CONNECT method, the :scheme pseudo-header is forbidden.

		ERR_HTTP2_ERROR - A non-specific HTTP/2 error has occurred.

		ERR_HTTP2_FRAME_ERROR - Used when a failure occurs sending an individual frame on the HTTP/2 session.

		ERR_HTTP2_HEADERS_OBJECT - Used when an HTTP/2 Headers Object is expected.

		ERR_HTTP2_HEADERS_SENT - Used when an attempt is made to send multiple response headers.

		ERR_HTTP2_HEADER_SINGLE_VALUE - Used when multiple values have been provided for an HTTP header field that required to have only a single value.

		ERR_HTTP2_INFO_HEADERS_AFTER_RESPOND - HTTP/2 Informational headers must only be sent prior to calling the Http2Stream.prototype.respond() method.

		ERR_HTTP2_INFO_STATUS_NOT_ALLOWED - Informational HTTP status codes (1xx) may not be set as the response status code on HTTP/2 responses.

		ERR_HTTP2_INVALID_CONNECTION_HEADERS - HTTP/1 connection specific headers are forbidden to be used in HTTP/2 requests and responses.

		ERR_HTTP2_INVALID_HEADER_VALUE - Used to indicate that an invalid HTTP/2 header value has been specified.

		ERR_HTTP2_INVALID_INFO_STATUS - An invalid HTTP informational status code has been specified. Informational status codes must be an integer between 100 and 199 (inclusive).

		ERR_HTTP2_INVALID_PACKED_SETTINGS_LENGTH - Input Buffer and Uint8Array instances passed to the http2.getUnpackedSettings() API must have a length that is a multiple of six.

		ERR_HTTP2_INVALID_PSEUDOHEADER - Only valid HTTP/2 pseudoheaders (:status, :path, :authority, :scheme, and :method) may be used.

		ERR_HTTP2_INVALID_SESSION - Used when any action is performed on an Http2Session object that has already been destroyed.

		ERR_HTTP2_INVALID_SETTING_VALUE - An invalid value has been specified for an HTTP/2 setting.

		ERR_HTTP2_INVALID_STREAM - Used when an operation has been performed on a stream that has already been destroyed.

		ERR_HTTP2_MAX_PENDING_SETTINGS_ACK - Whenever an HTTP/2 SETTINGS frame is sent to a connected peer, the peer is required to send an acknowledgement that it has received and applied the new SETTINGS. By default, a maximum number of un-acknowledged SETTINGS frame may be sent at any given time. This error code is used when that limit has been reached.

		ERR_HTTP2_NO_SOCKET_MANIPULATION - Used when attempting to read, write, pause, and/or resume a socket attached to an Http2Session.

		ERR_HTTP2_OUT_OF_STREAMS - Used when the maximum number of streams on a single HTTP/2 session have been created.

		ERR_HTTP2_PAYLOAD_FORBIDDEN - Used when a message payload is specified for an HTTP response code for which a payload is forbidden.

		ERR_HTTP2_PSEUDOHEADER_NOT_ALLOWED - Used to indicate that an HTTP/2 pseudo-header has been used inappropriately. Pseudo-headers are header key names that begin with the : prefix.

		ERR_HTTP2_PUSH_DISABLED - Used when push streams have been disabled by the client but an attempt to create a push stream is made.

		ERR_HTTP2_SEND_FILE - Used when an attempt is made to use the Http2Stream.prototype.responseWithFile() API to send a non-regular file.

		ERR_HTTP2_SOCKET_BOUND - Used when an attempt is made to connect a Http2Session object to a net.Socket or tls.TLSSocket that has already been bound to another Http2Session object.

		ERR_HTTP2_STATUS_101 - Use of the 101 Informational status code is forbidden in HTTP/2.

		ERR_HTTP2_STATUS_INVALID - An invalid HTTP status code has been specified. Status codes must be an integer between 100 and 599 (inclusive).

		ERR_HTTP2_STREAM_CLOSED - Used when an action has been performed on an HTTP/2 Stream that has already been closed.

		ERR_HTTP2_STREAM_ERROR - Used when a non-zero error code has been specified in an RST_STREAM frame.

		ERR_HTTP2_STREAM_SELF_DEPENDENCY - When setting the priority for an HTTP/2 stream, the stream may be marked as a dependency for a parent stream. This error code is used when an attempt is made to mark a stream and dependent of itself.

		ERR_HTTP2_UNSUPPORTED_PROTOCOL - Used when http2.connect() is passed a URL that uses any protocol other than http: or https:.

		ERR_INDEX_OUT_OF_RANGE - Used when a given index is out of the accepted range (e.g. negative offsets).

		ERR_INVALID_ARG_TYPE - Used generically to identify that an argument of the wrong type has been passed to a Node.js API.

		ERR_INVALID_CALLBACK - Used generically to identify that a callback function is required and has not been provided to a Node.js API.

		ERR_INVALID_FILE_URL_HOST - Used when a Node.js API that consumes file: URLs (such as certain functions in the fs module) encounters a file URL with an incompatible host. Currently, this situation can only occur on Unix-like systems, where only localhost or an empty host is supported.

		ERR_INVALID_FILE_URL_PATH - Used when a Node.js API that consumes file: URLs (such as certain functions in the fs module) encounters a file URL with an incompatible path. The exact semantics for determining whether a path can be used is platform-dependent.

		ERR_INVALID_HANDLE_TYPE - Used when an attempt is made to send an unsupported "handle" over an IPC communication channel to a child process. See subprocess.send() and process.send() for more information.

		ERR_INVALID_OPT_VALUE - Used generically to identify when an invalid or unexpected value has been passed in an options object.

		ERR_INVALID_PROTOCOL - Used when an invalid options.protocol is passed.

		ERR_INVALID_SYNC_FORK_INPUT - Used when a Buffer, Uint8Array or string is provided as stdio input to a synchronous fork. See the documentation for the child_process module for more information.

		ERR_INVALID_THIS - Used generically to identify that a Node.js API function is called with an incompatible this value.

		ERR_INVALID_TUPLE - Used when an element in the iterable provided to the WHATWG URLSearchParams constructor does not represent a [name, value] tuple – that is, if an element is not iterable, or does not consist of exactly two elements.

		ERR_INVALID_URL - Used when an invalid URL is passed to the WHATWG URL constructor to be parsed. The thrown error object typically has an additional property 'input' that contains the URL that failed to parse.

		ERR_INVALID_URL_SCHEME - Used generically to signify an attempt to use a URL of an incompatible scheme (aka protocol) for a specific purpose. It is currently only used in the WHATWG URL API support in the fs module (which only accepts URLs with 'file' scheme), but may be used in other Node.js APIs as well in the future.

		ERR_IPC_CHANNEL_CLOSED - Used when an attempt is made to use an IPC communication channel that has already been closed.

		ERR_IPC_DISCONNECTED - Used when an attempt is made to disconnect an already disconnected IPC communication channel between two Node.js processes. See the documentation for the child_process module for more information.

		ERR_IPC_ONE_PIPE - Used when an attempt is made to create a child Node.js process using more than one IPC communication channel. See the documentation for the child_process module for more information.

		ERR_IPC_SYNC_FORK - Used when an attempt is made to open an IPC communication channel with a synchronous forked Node.js process. See the documentation for the child_process module for more information.

		ERR_MISSING_ARGS - Used when a required argument of a Node.js API is not passed. This is currently only used in the WHATWG URL API for strict compliance with the specification (which in some cases may accept func(undefined) but not func()). In most native Node.js APIs, func(undefined) and func() are treated identically, and the ERR_INVALID_ARG_TYPE error code may be used instead.

		ERR_NO_ICU - Used when an attempt is made to use features that require ICU, while Node.js is not compiled with ICU support.

		ERR_SOCKET_ALREADY_BOUND - Used when an attempt is made to bind a socket that has already been bound.

		ERR_SOCKET_BAD_PORT - Used when an API function expecting a port > 0 and < 65536 receives an invalid value.

		ERR_SOCKET_BAD_TYPE - Used when an API function expecting a socket type (udp4 or udp6) receives an invalid value.

		ERR_SOCKET_CANNOT_SEND - Used when data cannot be sent on a socket.

		ERR_SOCKET_DGRAM_NOT_RUNNING - Used when a call is made and the UDP subsystem is not running.

		ERR_STDERR_CLOSE - Used when an attempt is made to close the process.stderr stream. By design, Node.js does not allow stdout or stderr Streams to be closed by user code.

		ERR_STDOUT_CLOSE - Used when an attempt is made to close the process.stdout stream. By design, Node.js does not allow stdout or stderr Streams to be closed by user code.

		ERR_UNKNOWN_BUILTIN_MODULE - Used to identify a specific kind of internal Node.js error that should not typically be triggered by user code. Instances of this error point to an internal bug within the Node.js binary itself.

		ERR_UNKNOWN_SIGNAL - Used when an invalid or unknown process signal is passed to an API expecting a valid signal (such as subprocess.kill()).

		ERR_UNKNOWN_STDIN_TYPE - Used when an attempt is made to launch a Node.js process with an unknown stdin file type. Errors of this kind cannot typically be caused by errors in user code, although it is not impossible. Occurrences of this error are most likely an indication of a bug within Node.js itself.

		ERR_UNKNOWN_STREAM_TYPE - Used when an attempt is made to launch a Node.js process with an unknown stdout or stderr file type. Errors of this kind cannot typically be caused by errors in user code, although it is not impossible. Occurrences of this error are most likely an indication of a bug within Node.js itself.

		ERR_V8BREAKITERATOR - Used when the V8 BreakIterator API is used but the full ICU data set is not installed.

		ERR_VALID_PERFORMANCE_ENTRY_TYPE - Used by the Performance Timing API (perf_hooks) when no valid performance entry types were found.

		ERR_VALUE_OUT_OF_RANGE - Used when a given value is out of the accepted range.
		//*/
		, ERR_ARG_NOT_ITERABLE : function( err ){}
		, ERR_FALSY_VALUE_REJECTION : function( err ){}
		, ERR_HTTP_HEADERS_SENT : function( err ){}
		, ERR_HTTP_INVALID_STATUS_CODE : function( err ){}
		, ERR_HTTP_TRAILER_INVALID : function( err ){}
		, ERR_HTTP2_CONNECT_AUTHORITY : function( err ){}
		, ERR_HTTP2_CONNECT_PATH : function( err ){}
		, ERR_HTTP2_CONNECT_SCHEME : function( err ){}
		, ERR_HTTP2_ERROR : function( err ){}
		, ERR_HTTP2_FRAME_ERROR : function( err ){}
		, ERR_HTTP2_HEADERS_OBJECT : function( err ){}
		, ERR_HTTP2_HEADERS_SENT : function( err ){}
		, ERR_HTTP2_HEADER_SINGLE_VALUE : function( err ){}
		, ERR_HTTP2_INFO_HEADERS_AFTER_RESPOND : function( err ){}
		, ERR_HTTP2_INFO_STATUS_NOT_ALLOWED : function( err ){}
		, ERR_HTTP2_INVALID_CONNECTION_HEADERS : function( err ){}
		, ERR_HTTP2_INVALID_HEADER_VALUE : function( err ){}
		, ERR_HTTP2_INVALID_INFO_STATUS : function( err ){}
		, ERR_HTTP2_INVALID_PACKED_SETTINGS_LENGTH : function( err ){}
		, ERR_HTTP2_INVALID_PSEUDOHEADER : function( err ){}
		, ERR_HTTP2_INVALID_SESSION : function( err ){}
		, ERR_HTTP2_INVALID_SETTING_VALUE : function( err ){}
		, ERR_HTTP2_INVALID_STREAM : function( err ){}
		, ERR_HTTP2_MAX_PENDING_SETTINGS_ACK : function( err ){}
		, ERR_HTTP2_NO_SOCKET_MANIPULATION : function( err ){}
		, ERR_HTTP2_OUT_OF_STREAMS : function( err ){}
		, ERR_HTTP2_PAYLOAD_FORBIDDEN : function( err ){}
		, ERR_HTTP2_PSEUDOHEADER_NOT_ALLOWED : function( err ){}
		, ERR_HTTP2_PUSH_DISABLED : function( err ){}
		, ERR_HTTP2_SEND_FILE : function( err ){}
		, ERR_HTTP2_SOCKET_BOUND : function( err ){}
		, ERR_HTTP2_STATUS_101 : function( err ){}
		, ERR_HTTP2_STATUS_INVALID : function( err ){}
		, ERR_HTTP2_STREAM_CLOSED : function( err ){}
		, ERR_HTTP2_STREAM_ERROR : function( err ){}
		, ERR_HTTP2_STREAM_SELF_DEPENDENCY : function( err ){}
		, ERR_HTTP2_UNSUPPORTED_PROTOCOL : function( err ){}
		, ERR_INDEX_OUT_OF_RANGE : function( err ){}
		, ERR_INVALID_ARG_TYPE : function( err ){}
		, ERR_INVALID_CALLBACK : function( err ){}
		, ERR_INVALID_FILE_URL_HOST : function( err ){}
		, ERR_INVALID_FILE_URL_PATH : function( err ){}
		, ERR_INVALID_HANDLE_TYPE : function( err ){}
		, ERR_INVALID_OPT_VALUE : function( err ){}
		, ERR_INVALID_PROTOCOL : function( err ){}
		, ERR_INVALID_SYNC_FORK_INPUT : function( err ){}
		, ERR_INVALID_THIS : function( err ){}
		, ERR_INVALID_TUPLE : function( err ){}
		, ERR_INVALID_URL : function( err ){}
		, ERR_INVALID_URL_SCHEME : function( err ){}
		, ERR_IPC_CHANNEL_CLOSED : function( err ){}
		, ERR_IPC_DISCONNECTED : function( err ){}
		, ERR_IPC_ONE_PIPE : function( err ){}
		, ERR_IPC_SYNC_FORK : function( err ){}
		, ERR_MISSING_ARGS : function( err ){}
		, ERR_NO_ICU : function( err ){}
		, ERR_SOCKET_ALREADY_BOUND : function( err ){}
		, ERR_SOCKET_BAD_PORT : function( err ){}
		, ERR_SOCKET_BAD_TYPE : function( err ){}
		, ERR_SOCKET_CANNOT_SEND : function( err ){}
		, ERR_SOCKET_DGRAM_NOT_RUNNING : function( err ){}
		, ERR_STDERR_CLOSE : function( err ){}
		, ERR_STDOUT_CLOSE : function( err ){}
		, ERR_UNKNOWN_BUILTIN_MODULE : function( err ){}
		, ERR_UNKNOWN_SIGNAL : function( err ){}
		, ERR_UNKNOWN_STDIN_TYPE : function( err ){}
		, ERR_UNKNOWN_STREAM_TYPE : function( err ){}
		, ERR_V8BREAKITERATOR : function( err ){}
		, ERR_VALID_PERFORMANCE_ENTRY_TYPE : function( err ){}
		, ERR_VALUE_OUT_OF_RANGE : function( err ){}
	};

	//----------------------------------------------------------------------------------------------------;

	//	EVENT;

	//----------------------------------------------------------------------------------------------------;

	/**
	 * @function
	 * @param {Error} error
	 */
	var _evt_errors__disconnect = function( error )
	{
		console.log( error );
		console.log( error.code );
		NODEJS_ERRORS[ error.code ]( error );
		debugger;
	};

	/**
	 * @function
	 * @param {Error} error
	 */
	var _evt_errors__rejectionHandled = function( error )
	{
		console.log( error );
		console.log( error.code );
		NODEJS_ERRORS[ error.code ]( error );
		debugger;
	};

	/**
	 * @function
	 * @param {Error} error
	 */
	var _evt_errors__uncaughtException = function( error )
	{
		console.log( error );
		console.log( error.code );
		NODEJS_ERRORS[ error.code ]( error );
		debugger;
	};

	/**
	 * @function
	 * @param {Error} error
	 */
	var _evt_errors__unhandledRejection = function( error )
	{
		console.log( error );
		console.log( error.code );
		NODEJS_ERRORS[ error.code ]( error );
		debugger;
	};

	/**
	 * @function
	 * @param {Error} error
	 */
	var _evt_errors__warning = function( error )
	{
		console.log( error );
		console.log( error.code );
		NODEJS_ERRORS[ error.code ]( error );
		debugger;
	};

	//----------------------------------------------------------------------------------------------------;

	//	FUNCTION;

	//----------------------------------------------------------------------------------------------------;

	/**
	 * 모든 에러 이벤트 리스너를 추가한다.
	 * @function
	 */
	_this.addAllErrorEventListeners = function()
	{
		try{ _this.removeAllErrorEventListeners(); }catch(e){}

		global.process.on( "disconnect", _evt_errors__disconnect );
		global.process.on( "rejectionHandled", _evt_errors__rejectionHandled );
		global.process.on( "uncaughtException", _evt_errors__uncaughtException );
		global.process.on( "unhandledRejection", _evt_errors__unhandledRejection );
		global.process.on( "warning", _evt_errors__warning );
	};

	/**
	 * 모든 에러 이벤트 리스너를 제거한다.
	 * @function
	 */
	_this.removeAllErrorEventListeners = function()
	{
		global.process.removeListener( "disconnect", _evt_errors__disconnect );
		global.process.removeListener( "rejectionHandled", _evt_errors__rejectionHandled );
		global.process.removeListener( "uncaughtException", _evt_errors__uncaughtException );
		global.process.removeListener( "unhandledRejection", _evt_errors__unhandledRejection );
		global.process.removeListener( "warning", _evt_errors__warning );
	};

	//----------------------------------------------------------------------------------------------------;

	//	LOGIC;

	//----------------------------------------------------------------------------------------------------;

	_this.addAllErrorEventListeners();

	return _this;
})();
}catch(e){ console.log( "[ ERROR ] - Error manager installation error : " + e ); debugger; }
