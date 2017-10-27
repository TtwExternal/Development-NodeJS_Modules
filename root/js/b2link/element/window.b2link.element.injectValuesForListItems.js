//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/element/window.b2link.element.injectValuesForListItems.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){
	var _f0 = window.b2link.element.injectValueForListItem;
	var _f1 = window.b2link.element.injectValuesForListItem;

	var _ = {
		   1 : function( a, standardLen, args ){ var i=0, iLen=standardLen;var a1=args[ 1 ];
			for( ; i<iLen; ++i ) _f0( a[ i ], a1[ i ] );}
		,  2 : function( a, standardLen, args ){ var i=0, iLen=standardLen;var a1=args[ 1 ], a2=args[ 2 ];
			for( ; i<iLen; ++i ) _f0( a[ i ], a1[ i ], a2[ i ] ); }
		,  3 : function( a, standardLen, args ){ var i=0, iLen=standardLen;var a1=args[ 1 ], a2=args[ 2 ], a3=args[ 3 ];
			for( ; i<iLen; ++i ) _f0( a[ i ], a1[ i ], a2[ i ], a3[ i ] ); }
		,  4 : function( a, standardLen, args ){ var i=0, iLen=standardLen;var a1=args[ 1 ], a2=args[ 2 ], a3=args[ 3 ], a4=args[ 4 ];
			for( ; i<iLen; ++i ) _f0( a[ i ], a1[ i ], a2[ i ], a3[ i ], a4[ i ] ); }
		,  5 : function( a, standardLen, args ){ var i=0, iLen=standardLen;var a1=args[ 1 ], a2=args[ 2 ], a3=args[ 3 ], a4=args[ 4 ], a5=args[ 5 ];
			for( ; i<iLen; ++i ) _f0( a[ i ], a1[ i ], a2[ i ], a3[ i ], a4[ i ], a5[ i ] ); }
		,  6 : function( a, standardLen, args ){ var i=0, iLen=standardLen;var a1=args[ 1 ], a2=args[ 2 ], a3=args[ 3 ], a4=args[ 4 ], a5=args[ 5 ], a6=args[ 6 ];
			for( ; i<iLen; ++i ) _f0( a[ i ], a1[ i ], a2[ i ], a3[ i ], a4[ i ], a5[ i ], a6[ i ] ); }
		,  7 : function( a, standardLen, args ){ var i=0, iLen=standardLen;var a1=args[ 1 ], a2=args[ 2 ], a3=args[ 3 ], a4=args[ 4 ], a5=args[ 5 ], a6=args[ 6 ], a7=args[ 7 ];
			for( ; i<iLen; ++i ) _f0( a[ i ], a1[ i ], a2[ i ], a3[ i ], a4[ i ], a5[ i ], a6[ i ], a7[ i ] ); }
		,  8 : function( a, standardLen, args ){ var i=0, iLen=standardLen;var a1=args[ 1 ], a2=args[ 2 ], a3=args[ 3 ], a4=args[ 4 ], a5=args[ 5 ], a6=args[ 6 ], a7=args[ 7 ], a8=args[ 8 ];
			for( ; i<iLen; ++i ) _f0( a[ i ], a1[ i ], a2[ i ], a3[ i ], a4[ i ], a5[ i ], a6[ i ], a7[ i ], a8[ i ] ); }
		,  9 : function( a, standardLen, args ){ var i=0, iLen=standardLen;var a1=args[ 1 ], a2=args[ 2 ], a3=args[ 3 ], a4=args[ 4 ], a5=args[ 5 ], a6=args[ 6 ], a7=args[ 7 ], a8=args[ 8 ], a9=args[ 9 ];
			for( ; i<iLen; ++i ) _f0( a[ i ], a1[ i ], a2[ i ], a3[ i ], a4[ i ], a5[ i ], a6[ i ], a7[ i ], a8[ i ], a9[ i ] ); }
		, 10 : function( a, standardLen, args ){ var i=0, iLen=standardLen;var a1=args[ 1 ], a2=args[ 2 ], a3=args[ 3 ], a4=args[ 4 ], a5=args[ 5 ], a6=args[ 6 ], a7=args[ 7 ], a8=args[ 8 ], a9=args[ 9 ], a10=args[ 10 ];
			for( ; i<iLen; ++i ) _f0( a[ i ], a1[ i ], a2[ i ], a3[ i ], a4[ i ], a5[ i ], a6[ i ], a7[ i ], a8[ i ], a9[ i ], a10[ i ] ); }
	};

	/**
	 * element에 children 객체에 주어진 Array Data[ i ]를 "list_item_value" instance명으로 주입한다.
	 * element에 Data 여러개를 "list_item_values" instance명으로 주입한다.
	 * @function
	 * @param {HTMLElement} t HTMLElement
	 * @param {Array} data
	 */
	window.b2link.element.injectValuesForListItems = function( t, data )
	{
		//////////window.TtwLog.timeStamp( "---- [ S ] - window.b2link.element.injectValuesForListItems():void----------" );

		var argsLen = arguments.length;
		var dataLen = data.length;

		var i=2, iLen=argsLen;
		for( ; i<iLen; ++i )
			if( dataLen != arguments[ i ].length )
				window.TtwLog.error( "window.b2link.element.injectValuesForListItems Error : 데이터들의 갯수가 일치하지 않음" );

		var a;
		//<Style>가 들어있는 케이스;
		if( t.children[ 0 ] && "STYLE" == t.children[ 0 ].tagName )
		{
			a = [];
			var b = t.children;
			var i=0, iLen=b.length;
			for( ; i<iLen; ++i ) if( "STYLE" != b[ i ].tagName ) a.push( b[ i ] );
		}
		else a = t.children;

		if( a.length != dataLen )
			window.TtwLog.warn( "window.b2link.element.injectValuesForListItems Warn : t의 children 갯수과 data의 갯수가 일치하지 않음." );

		var standardLen = ( a.length > d.length ) ? d.length : a.length;
		_[ argsLen-1 ]( a, standardLen, arguments );

		//////////window.TtwLog.timeStamp( "---- [ E ] - window.b2link.element.injectValuesForListItems():void----------" );
	};
})();

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;