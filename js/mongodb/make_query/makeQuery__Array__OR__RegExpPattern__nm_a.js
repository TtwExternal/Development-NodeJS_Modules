//----------------------------------------------------------------------------------------------------;
var fileNm = "js/mongodb/make_query/makeQuery__Array__OR__RegExpPattern__nm_a.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 'nm.a' Property 용도 검색 배열 생성하기
 * @function
 * @param {String} s nm.a(Name All)이 들어온다.
 */
global.mongodb.make_query.makeQuery__Array__OR__RegExpPattern__nm_a = function( s )
{
	//TtwLog.timeStamp( "---- [ S ] - global.mongodb.make_query.makeQuery__Array__OR__RegExpPattern__nm_a():{Array}----------" );
	//TtwLog.timeStamp( "---- [ E ] - global.mongodb.make_query.makeQuery__Array__OR__RegExpPattern__nm_a():{Array}----------" );

	return [
		{ "nm.a" : makeQuery__RegExpPattern__SymbolString( s ) }
		, { "nm_kr.a" : makeQuery__RegExpPattern__SymbolString( s ) }
		, { "nm_us.a" : makeQuery__RegExpPattern__SymbolString( s ) }
		, { "nm_cn.a" : makeQuery__RegExpPattern__SymbolString( s ) }
	];
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;