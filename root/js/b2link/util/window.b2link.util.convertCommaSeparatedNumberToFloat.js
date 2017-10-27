//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/util/window.b2link.util.convertCommaSeparatedNumberToFloat.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
//20170504 박종하 prototype 제거 해야 함.
/**
 * @function
 * @param {String} s_number
 * @return {Number}
 */
window.b2link.util.convertCommaSeparatedNumberToFloat= function( s_number )
{
	//window.RayLog.timeStamp( "---- [ S ] - window.b2link.util.convertCommaSeparatedNumberToFloat():{Number}----------" );
	try
	{
		s_number = s_number.toString();
		var r;
		var negative = 1;
		if( s_number[0] === "-" )
		{
			negative = -1;
		}
		//소수점이 있을 경우;
		if(  0 < s_number.indexOf( "." ) )
		{
			var a = s_number.split( "." );
			r = a[ 0 ].replace( window.b2link.STATIC.REGEXP.REPLACE.MONEY_COMMA2, "" ) + "." + a[ 1 ];
		}
		else r = s_number.replace( window.b2link.STATIC.REGEXP.REPLACE.MONEY_COMMA2, "" );

		//window.RayLog.timeStamp( "---- [ E ] - window.b2link.util.convertCommaSeparatedNumberToFloat():{Number}----------" );
		return parseFloat( r ) * negative;

	}catch( e )
	{
		window.b2link_ui.message.error( "잘못된 값이 입력되었습니다.");
		return NaN;
	}
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;