//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/validation_mongodb/global.b2link.validation_mongodb._id__uint.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {uint} _id
 * @return {Boolean}
 */
global.b2link.validation_mongodb._id__uint = function( _id )
{
	//global.TtwLog.timeStamp( "---- [ S ] - global.b2link.validation_mongodb._id__uint():{Boolean}----------" );
	//global.TtwLog.timeStamp( "---- [ E ] - global.b2link.validation_mongodb._id__uint():{Boolean}----------" );
	if( global.b2link.validation_classType.uint( _id ) )
	{
		if( 999999999 > _id )
		{
			return true;
		}
	}
	return false;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;