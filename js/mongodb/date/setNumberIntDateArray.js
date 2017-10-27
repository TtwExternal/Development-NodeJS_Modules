//----------------------------------------------------------------------------------------------------;
var fileNm = "js/mongodb/date/setNumberIntDateArray.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Array date에 대하여 NumberInt 적용
 * @function
 * @param {Array} array_date
 * @return {Array}
 */
global.mongodb.date.setNumberIntDateArray = function( array_date )
{
	RayLog.log( "---- [ S ] - global.mongodb.date.setNumberIntDateArray():{Array}----------" );

	var i=0,iLen=array_date.length;
	for ( ;i<iLen;++i )
	{
		array_date[i] = NumberInt( array_date[i] );
	}
	
	RayLog.log( "---- [ E ] - global.mongodb.date.setNumberIntDateArray():{Array}----------return array_date;" );
	return array_date;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;