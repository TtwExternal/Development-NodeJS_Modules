//----------------------------------------------------------------------------------------------------;
var fileNm = "js/mongodb/make_query/makeQuery__Array__OR__RegExpPattern__description.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 'description' Property 용도 검색 배열 생성하기
 * @function
 * @param {String} s nm(Name)이 들어온다.
 */
global.mongodb.make_query.makeQuery__Array__OR__RegExpPattern__description = function( s )
{
	//TtwLog.timeStamp( "---- [ S ] - global.mongodb.make_query.makeQuery__Array__OR__RegExpPattern__nm():{Array}----------" );
	//TtwLog.timeStamp( "---- [ E ] - global.mongodb.make_query.makeQuery__Array__OR__RegExpPattern__nm():{Array}----------" );

	return [
		{ description : makeQuery__RegExpPattern__SymbolString( s ) }
		, { description_kr : makeQuery__RegExpPattern__SymbolString( s ) }
		, { description_us : makeQuery__RegExpPattern__SymbolString( s ) }
		, { description_cn : makeQuery__RegExpPattern__SymbolString( s ) }
	];
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
