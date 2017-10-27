//----------------------------------------------------------------------------------------------------;
var fileNm = "js/mongodb/member/delete_mpw__Array.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 가져온 회원 목록에서 비밀번호를 삭제한다.
 * @function
 * @param {Array} docs$member_basic
 */
global.mongodb.member.delete_mpw__Array = function( docs$member_basic )
{
	//TtwLog.timeStamp( "---- [ S ] - global.mongodb.member.delete_mpw__Array():{Array}----------" );

	if( !docs$member_basic ) return;
	if( !docs$member_basic[ 0 ] ) return;
	if( !docs$member_basic[ 0 ].hasOwnProperty( "mpw" ) ) return;

	var io;
	var i=0, iLen=docs$member_basic.length;
	for( ; i<iLen; ++i )
	{
		io = docs$member_basic[ i ];
		delete io.mpw;
	}

	//TtwLog.timeStamp( "---- [ E ] - global.mongodb.member.delete_mpw__Array():{Array}----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;