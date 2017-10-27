//----------------------------------------------------------------------------------------------------;
var fileNm = "js/mongodb/make_query/makeQuery__Array__OR__RegExpPattern__nm.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 'nm' Property 용도 검색 배열 생성하기
 * @function
 * @param {String} s nm(Name)이 들어온다.
 */
global.mongodb.make_query.makeQuery__Array__OR__RegExpPattern__nm = function( s )
{
	//TtwLog.timeStamp( "---- [ S ] - global.mongodb.make_query.makeQuery__Array__OR__RegExpPattern__nm():{Array}----------" );
	//TtwLog.timeStamp( "---- [ E ] - global.mongodb.make_query.makeQuery__Array__OR__RegExpPattern__nm():{Array}----------" );

	return [
		{ nm : makeQuery__RegExpPattern__SymbolString( s ) }
		, { nm_kr : makeQuery__RegExpPattern__SymbolString( s ) }
		, { nm_us : makeQuery__RegExpPattern__SymbolString( s ) }
		, { nm_cn : makeQuery__RegExpPattern__SymbolString( s ) }
	];
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;