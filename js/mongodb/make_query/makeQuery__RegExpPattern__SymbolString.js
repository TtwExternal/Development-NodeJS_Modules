//----------------------------------------------------------------------------------------------------;
var fileNm = "js/mongodb/make_query/makeQuery__RegExpPattern__SymbolString.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * (, [ 이런 류의 정규식 사용시 패턴에 위배되는 정규식 검색 패턴을 만들기 위한 함수
 * @function
 * @param {String} s
 * @return {RegExp}
 */
global.mongodb.make_query.makeQuery__RegExpPattern__SymbolString = function( s )
{
	//TtwLog.timeStamp( "---- [ S ] - global.mongodb.make_query.makeQuery__RegExpPattern__SymbolString():{Object}----------" );

	if( -1 != s.indexOf( "(" ) ) s = s.replace( /\(/gi, "\\(" );
	if( -1 != s.indexOf( ")" ) ) s = s.replace( /\)/gi, "\\)" );
	if( -1 != s.indexOf( "[" ) ) s = s.replace( /\[/gi, "\\[" );
	if( -1 != s.indexOf( "[" ) ) s = s.replace( /\]/gi, "\\]" );
	//if( -1 != s.indexOf( "{" ) ) s = s.replace( /\{/gi, "\\{" );
	//if( -1 != s.indexOf( "}" ) ) s = s.replace( /\}/gi, "\\}" );

	//TtwLog.timeStamp( "---- [ E ] - global.mongodb.make_query.makeQuery__RegExpPattern__SymbolString():{Object}----------" );
	return { $regex : "(.*" + s + ")" };
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;