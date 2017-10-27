//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/validation_mongodb/global.b2link.validation_mongodb._id__string.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} _id
 * @return {Boolean}
 */
global.b2link.validation_mongodb._id__string = function( _id )
{
	//global.TtwLog.timeStamp( "---- [ S ] - global.b2link.validation_mongodb._id__string():{Boolean}----------" );
	//global.TtwLog.timeStamp( "---- [ E ] - global.b2link.validation_mongodb._id__string():{Boolean}----------" );
	if( global.b2link.validation_classType.string( _id ) )
	{
		return true;
	}
	return false
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;