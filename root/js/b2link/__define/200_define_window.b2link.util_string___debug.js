//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_window.b2link.util_string.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.util_string;

//window.b2link.util_string = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.util_string;


//----------------------------------------------------------------------------------------------------window.b2link.util_string.b***;

/**
 * {{xxx}} 형태의 문자열을 "" 로 변경
 * @function
 * @param {String} s string data
 * @return {String}
 */
window.b2link.util_string.braceStringToEmpty = function( s )
{
	//window.KaiLog.timeStamp( "---- [ S ] - window.b2link.util_string.braceStringToEmpty():{String}----------" );

	if( "string" == typeof s )
		if( -1 < s.search( "{{" ) )
		{
			//window.KaiLog.timeStamp( "---- [ E ] - window.b2link.util_string.braceStringToEmpty():{String}----------return "";" );
			return "";
		}

	//window.KaiLog.timeStamp( "---- [ E ] - window.b2link.util_string.braceStringToEmpty():{String}----------return s;" );
	return s;
};

//----------------------------------------------------------------------------------------------------window.b2link.util_string.b***;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;