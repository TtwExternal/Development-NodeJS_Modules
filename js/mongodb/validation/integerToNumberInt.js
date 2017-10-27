//----------------------------------------------------------------------------------------------------;
var fileNm = "js/mongodb/validation/integerToNumberInt.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * Json Object 를 체크하여 Integer 타입인 경우 NumberInt 로 Convert 해준다.
 * @function
 * @param {Object}
 *
 * ex)
 * var d = { ... };
 * integerToNumberInt( d );
 * db.insert( d );
 */
global.mongodb.validation.integerToNumberInt = function( obj )
{
	// cparkLog.log( "---- [ S ] - global.mongodb.validation.integerToNumberInt():{Object}----------" );

	if( !obj || ( obj.constructor.name.toLowerCase() != "object" && obj.constructor.name.toLowerCase() != "array" ) )
	{
		cparkLog.log( "not valid type" );
		return;
	}

	for( i in obj )
	{
		if( !obj[ i ] && obj[ i ] != 0 ) continue;

		if( obj[ i ].constructor.name.toLowerCase() == "number" && Number.isInteger( obj[ i ] ) )
			obj[ i ] = NumberInt( obj[ i ] );
		else if( obj[ i ].constructor.name.toLowerCase() == "object" ) integerToNumberInt( obj[ i ] );
		else if( obj[ i ].constructor.name.toLowerCase() == "array" ) integerToNumberInt( obj[ i ] );
	}

	// cparkLog.log( "---- [ E ] - global.mongodb.validation.integerToNumberInt():{Object}----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;