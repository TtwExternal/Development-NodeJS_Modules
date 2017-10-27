//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/diff/global.b2link.diff.extract__Identifier__File.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} filePath0 기준 파일, identifier 문자열이 존재하는 파일
 * @param {String} filePath1
 * @param {String} identifierStart ((, {{, [[, ...
 * @param {String} identifierEnd )), }}, ]], ...
 * @return {Object}
 */
global.b2link.diff.extract__Identifier__File = function( filePath0, filePath1, identifierStart, identifierEnd )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.b2link.diff.extract__Identifier__File():{Object}----------" );

	try
	{
		global.TtwLog.timeStamp( "---- [ E ] - global.b2link.diff.extract__Identifier__File():{Object}----------return result;" );
		return global.differ.extract__Identifier__FilePath( filePath1, filePath1, identifierStart, identifierEnd );
	}
	catch( er )
	{
		debugger;
	}

	global.TtwLog.timeStamp( "---- [ E ] - global.b2link.diff.extract__Identifier__File():{Object}----------return null;" );
	return null;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;