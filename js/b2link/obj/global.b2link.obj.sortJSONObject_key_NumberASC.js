//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/obj/global.b2link.obj.sortJSONObject_key_NumberASC.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 키 값 목록을 기준으로 obj를 숫자 오름차순 정렬하여 배열을 반환한다.
 * @function
 * @param {Object} o 키 값 목록을 기준으로 숫자 오름차순 정렬할 대상 obj
 * @return {Array}
 * @example
 * <code>
 * </code>
 */
global.b2link.obj.sortJSONObject_key_NumberASC = function( o )
{
	//global.Rh2Log.timeStamp( "---- [ S ] - global.b2link.obj.sortJSONObject_key_NumberASC():{Array}----------" );

	var keys = [];
	for( p in o ) keys.push( p );
	keys.sort(function(a, b){ return a-b; });//숫자크기대로 정렬;

	var a = [];
	var i=0, iLen=keys.length;
	for( ; i<iLen; ++i ) a[ i ] = o[ keys[ i ] ];

	//global.Rh2Log.timeStamp( "---- [ E ] - global.b2link.obj.sortJSONObject_key_NumberASC():{Array}----------return a;" );

	return a;
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;