//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/array/global.b2link.array.mergeArrays.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 *
 * @function
 * @param {Array} arrays
 * @return {Array}
 * @example
 * <code>
	var a = global.b2link.array.mergeArrays( [ [ 0, 1, 2, 3, 4 ], [ 11, 22, 33, 44 ], ... ] );
	console.log( a );
 * </code>
 */
global.b2link.array.mergeArrays = function( arrays )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.b2link.array.mergeArrays():{Array}----------" );

	if( arrays.length === 0 ) return [];

	var tmp = arrays[ 0 ];
	for( var i=1; i<arrays.length; ++i )
	{
		//수정하기 - 20170707_1254 - 송선우 - Length 체크를 하는 ArrayMerge API와 Length 체크를 하지 않는 ArrayMerge API가 따로 있는게 좋을 듯;
		/*/
		tmp = tmp.concat( arrays[ i ] );
		/*/
		if( arrays[ i ] && arrays[ i ].length > 0 ) tmp = tmp.concat( arrays[ i ] );
		//*/
	}

	global.TtwLog.timeStamp( "---- [ E ] - global.b2link.array.mergeArrays():{Array}----------return tmp;" );
	return tmp;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;