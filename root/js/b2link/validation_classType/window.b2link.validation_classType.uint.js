//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/validation_classType/window.b2link.validation_classType.uint.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Javascript의 자료타입 uint를 Validation 한다.
 * @function
 * @param {uint} p
 * @return {Boolean}
 */
window.b2link.validation_classType.uint = function( p )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_classType.uint():{Boolean}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_classType.uint():{Boolean}----------" );

	//if( "number" == typeof( p ) )
	if( window.b2link.validation_classType.number( p ) )
		if( -1 < p )
			if( -1 == p.toString().indexOf( "." ) )
				return true;
	return false;
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;