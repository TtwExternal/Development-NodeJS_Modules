//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/util/window.b2link.util.importJSsFromScriptElement.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * HTML에 존재하는 <script>를 가져와서 로딩한다.
 * @function
 * @param {HTMLElement} t element
 */
window.b2link.util.importJSsFromScriptElement = function( t )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.util.importJSsFromScriptElement():void----------" );

	var f0 = window.b2link.util.importJS;
	var a = t.getElementsByTagName( "script" );
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		try{ f0( a[ i ].src ); }
		catch( e )
		{
			window.TtwLog.error( "window.b2link.util.importJSsFromScriptElement Error : " + e );
			debugger;
		}
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.util.importJSsFromScriptElement():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;