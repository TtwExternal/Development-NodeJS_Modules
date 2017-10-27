//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/compress_zip/global.b2link.compress_zip.compress_file.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} data
 * @return {boolean}
 */
global.b2link.compress_zip.compress_file = function( data )
{
	window.TtwLog.timeStamp( "---- [ S ] - global.b2link.compress_zip.compress_file():{String}----------" );

	if( data.pop && data.push )
	{
		_array( data );
	}
	else
	{
		_object( data );
	}

	window.TtwLog.timeStamp( "---- [ E ] - global.b2link.compress_zip.compress_file():{String}----------" );
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;