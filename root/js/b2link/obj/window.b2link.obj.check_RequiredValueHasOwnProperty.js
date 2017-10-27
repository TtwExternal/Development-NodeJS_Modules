//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/obj/window.b2link.obj.check_RequiredValueHasOwnProperty.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 필수 키 값 목록을 가지고 대상 오브젝트의 hasOwnProperty를 통해 존재 여부를 체크한다.
 * @function
 * @param {Object} t 필수 키 값 목록을 가지고 체크할 대상 오브젝트
 * @param {Array} a hasOwnProperty의 대상이될 필수 키값 목록
 * @return {Boolean}
 * @example
 * <code>
 * </code>
 */
window.b2link.obj.check_RequiredValueHasOwnProperty = function( t, a )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.obj.check_RequiredValueHasOwnProperty():{Boolean}----------" );

	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		if( !t.hasOwnProperty( a[ i ] ) )
		{
			debugger;
			//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.obj.check_RequiredValueHasOwnProperty():{Boolean}----------return 0;" );
			return 0;
		}
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.obj.check_RequiredValueHasOwnProperty():{Boolean}----------return 1;" );
	return 1;
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;