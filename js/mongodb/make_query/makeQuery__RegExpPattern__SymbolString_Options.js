//----------------------------------------------------------------------------------------------------;
var fileNm = "js/mongodb/make_query/makeQuery__RegExpPattern__SymbolString_Options.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * (, [ 이런 류의 정규식 사용시 패턴에 위배되는 정규식 검색 패턴을 만들기 위한 함수
 * @function
 * @param {String} s
 * @param {String} options "gi", "i", ...
 * @return {RegExp}
 */
global.mongodb.make_query.makeQuery__RegExpPattern__SymbolString_Options = function( s, options )
{
	//TtwLog.timeStamp( "---- [ S ] - global.mongodb.make_query.makeQuery__RegExpPattern__SymbolString_Options():{Object}----------" );

	if( -1 != s.indexOf( "(" ) ) s = s.replace( /\(/gi, "\\(" );
	if( -1 != s.indexOf( ")" ) ) s = s.replace( /\)/gi, "\\)" );
	if( -1 != s.indexOf( "[" ) ) s = s.replace( /\[/gi, "\\[" );
	if( -1 != s.indexOf( "[" ) ) s = s.replace( /\]/gi, "\\]" );
	//if( -1 != s.indexOf( "{" ) ) s = s.replace( /\{/gi, "\\{" );
	//if( -1 != s.indexOf( "}" ) ) s = s.replace( /\}/gi, "\\}" );

	//TtwLog.timeStamp( "---- [ E ] - global.mongodb.make_query.makeQuery__RegExpPattern__SymbolString_Options():{Object}----------" );
	return { $regex : "(.*" + s + ")", $options : options };
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;