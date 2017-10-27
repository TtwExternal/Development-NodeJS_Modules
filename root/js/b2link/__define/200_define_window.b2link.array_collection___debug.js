//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_window.b2link.array_collection.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.array_collection;

//window.b2link.array_collection = window.b2link.array_collection || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.array_collection;


//----------------------------------------------------------------------------------------------------window.b2link.array_collection.g***;

/**
 * JSON Array에서 key, value가 동일한 값을 찾아 해당 JSON Object를 반환
 * @function
 * @param {Array} a JsonArray
 * @param {String} key
 * @param {String} value
 * @return {Object}
 */
window.b2link.array_collection.getObjFromJsonArrayByKeyAndValue = function( a, key, value )
{
	window.Rh2Log.timeStamp( "---- [ S ] - window.b2link.array_collection.getObjFromJsonArrayByKeyAndValue():{Object}----------" );
	var i=0, iLen=a.length;
	var o = null;
	for( ; i<iLen; ++i )
	{
		o = a[ i ];
		if( o[ key ] == value )
		{
			break;
		}
	}

	window.Rh2Log.timeStamp( "---- [ E ] - window.b2link.array_collection.getObjFromJsonArrayByKeyAndValue():{Object}----------return o;" );
	return o;
};

//----------------------------------------------------------------------------------------------------window.b2link.array_collection.g***;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;