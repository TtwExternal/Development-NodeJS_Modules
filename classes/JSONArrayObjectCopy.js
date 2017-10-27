/**
 * JSON Array & Object Copy
 * NodeJS 8.8.0 기준
 * NodeJS 상의 모든 에러 감지 및 공통 후처리 추가
 * @return {Object}
 * <code>
	{
		copy : function( t, d ){}
		, copy__array : function( t, d ){}
		, copy__array : function( t, d ){}
	}
 * </code>
 *
 * @example
 * <code>
	global.JSONArrayObjectCopy = require( "JSONArrayObjectCopy.js" );
 * </code>
 */
(function(){

	//----------------------------------------------------------------------------------------------------;

	var _this = {};

	//----------------------------------------------------------------------------------------------------;

	/**
	 * @function
	 * @param {Array|Object} target
	 * @param {Array}Object} data
	 */
	var _arr = function( t, d )
	{
		var io;
		var to;//typeof;
		var i=0, iLen=d.length;
		for( ; i<iLen; ++i )
		{
			io = d[ i ];
			to = typeof( io );
			if( "array" == to )
			{
				t[ i ] = [];
				_arr( t[ i ], io );
			}
			else if( "object" == to )
			{
				t[ i ] = {};
				_obj( t[ i ], io );
			}
			else t[ i ] = io;
		}
	};

	/**
	 * @function
	 * @param {Array|Object} target
	 * @param {Array}Object} data
	 */
	var _obj = function( t, d )
	{
		var io;
		var to;//typeof;
		for( var s in d )
		{
			io = d[ s ];
			if( "array" == to )
			{
				t[ s ] = [];
				_arr( t[ s ], io );
			}
			else if( "object" == to )
			{
				t[ s ] = {};
				_obj( t[ s ], io );
			}
			else t[ s ] = d[ s ];
		}
	};

	//----------------------------------------------------------------------------------------------------;

	/**
	 * @function
	 * @param {Array|Object} target
	 * @param {Array}Object} data
	 */
	_this.copy = function( t, d )
	{
		var to = typeof( d );
		_this[ "copy__" + to ]( t, d );
		return t;
	}

	/**
	 * @function
	 * @param {Array} target
	 * @param {Array data
	 * @return {Array} target
	 */
	_this.copy__array = function( t, d ){ return _arr( t, d ); }

	/**
	 * @function
	 * @param {Object} target
	 * @param {Object} data
	 * @return {Object} target
	 */
	_this.copy__object = function( t, d ){ return _obj( t, d ); };

	//----------------------------------------------------------------------------------------------------;

	return _this;
})();
