//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/util/window.b2link.util.importJS__Reuse.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){

	var _ = {};

	/**
	 * *.js를 불러와서 실행시킨다.
	 * js를 작성하는 규칙이 존재한다. js상에서는 js url을 Parameter로 받게 된다.
	 * @function
	 * @param {String} url
	 * @return {*}
	 */
	window.b2link.util.importJS__Reuse = function( url )
	{
		//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.util.importJS__Reuse():{*}----------" );

		if( _.hasOwnProperty( url ) )
		{
			if( _[ url ] ) return _[ url ];
			return null;
		}
		else
		{
			try
			{
				var r = SUtilTemplateHTML.addJS__URL( url, arguments );
			}
			catch( e )
			{

			}

			_[ url ] = r;
			//console.log( r );

			//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.util.importJS__Reuse():{*}----------" );
			return r;
		}
	};
})();

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;