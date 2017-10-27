//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/diff/global.b2link.diff.extract__Identifier.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} str0 기준 파일 데이터, identifier 문자열이 존재하는 데이터
 * @param {String} str1 비교할 파일
 * @param {String} identifierStart ((, {{, [[, ...
 * @param {String} identifierEnd )), }}, ]], ...
 * @return {Object}
 */
global.b2link.diff.extract__Identifier = function( str0, str1, identifierStart, identifierEnd )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.b2link.diff.extract__Identifier():{Object}----------" );

	try
	{
		global.TtwLog.timeStamp( "---- [ E ] - global.b2link.diff.extract__Identifier():{Object}----------return result;" );
		return global.differ.extract__Identifier( str0, str1, identifierStart, identifierEnd );
	}
	catch( er )
	{
		debugger;
	}

	global.TtwLog.timeStamp( "---- [ E ] - global.b2link.diff.extract__Identifier():{Object}----------return null;" );
	return null;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;