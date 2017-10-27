//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_window.b2link.validation_mongodb.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.validation_mongodb;

//window.b2link.validation_mongodb = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.validation_mongodb;


//----------------------------------------------------------------------------------------------------window.b2link.validation_mongodb._i***;

/**
 * MongoDB의 db.collection._id가 string일 경우 validation 한다.
 * @function
 * @param {String} _id
 * @return {Boolean}
 */
window.b2link.validation_mongodb._id__string = function( _id )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_mongodb._id__string():{Boolean}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_mongodb._id__string():{Boolean}----------" );
	if( window.b2link.validation_classType.string( _id ) )
		return true;
	return false
};

/**
 * MongoDB의 db.collection._id가 uint일 경우 validation 한다.
 * @function
 * @param {uint} _id
 * @return {Boolean}
 */
window.b2link.validation_mongodb._id__uint = function( _id )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_mongodb._id__uint():{Boolean}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_mongodb._id__uint():{Boolean}----------" );
	if( window.b2link.validation_classType.uint( _id ) )
		if( 999999999 > _id )
			return true;
	return false;
};

//----------------------------------------------------------------------------------------------------window.b2link.validation_mongodb._i***;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;