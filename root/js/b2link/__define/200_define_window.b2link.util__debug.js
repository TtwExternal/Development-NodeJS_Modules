//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_window.b2link.util.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.util;

//window.b2link.util = {};

//--------------------------------------------------window.b2link.util.d***;

window.b2link.util.dateDifference_object = function( date_obj1, date_obj2 )
{
	window.b2link_ui.message.error( "window.b2link.util.dateDifference_object -> window.b2link.date.dateDifference_object 교체 바람" );
	return window.b2link.date.dateDifference_object( date_obj1, date_obj2 );
};

window.b2link.util.dateFormatFromDateArray = function( d )
{
	window.b2link_ui.message.error( "window.b2link.util.dateFormatFromDateArray -> window.b2link.date.dateFormatFromDateArray 교체 바람" );
	return window.b2link.date.dateFormatFromDateArray( d );
};

window.b2link.util.dateFormatFromDateObject = function( d )
{
	window.b2link_ui.message.error( "window.b2link.util.dateFormatFromDateObject -> window.b2link.date.dateFormatFromDateObject 교체 바람" );
	return window.b2link.date.dateFormatFromDateObject( d );
};

window.b2link.util.dateGetObjectDateFromDateString_Dash = function( dateString )
{
	window.b2link_ui.message.error( "window.b2link.util.dateGetObjectDateFromDateString_Dash -> window.b2link.date.getObjectDateFromDateString_Dash 교체 바람" );
	return window.b2link.date.getObjectDateFromDateString_Dash( dateString );
};

//--------------------------------------------------window.b2link.util.d***;


//--------------------------------------------------window.b2link.util.f***;

/**
 * String format
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {String} targetElementID
 * @return {*}
 * @author  cpark
 *
 * -- Usage
 * !!! {0} = {#IDX_OF_ARRAY}
 *
 * var str = "http://localhost?key0={0}&key1={1}&key2={2}&key3={0}";
 * var values = [ "val0", 111, "val2"];
 * var str = window.b2link.util.format(str, values);
 *
 * result : http://localhost?key0=val0&key1=111&key2=val2&key3=val0
 */
window.b2link.util.format = function( str, values )
{
	var formatted = str;
	for( var i=0; i<values.length; i++ )
	{
		var regexp = new RegExp( '\\{' + i + '\\}', 'gi' );
		formatted = formatted.replace( regexp, values[ i ] );
	}
	return formatted;
};

//--------------------------------------------------window.b2link.util.f***;


//--------------------------------------------------window.b2link.util.t***;

/**
 * trim
 * @function
 * @param {String} s
 * @return {String}
 * @author cpark
 */
(function(){
	var _reg0 = /(^\s*)|(\s*$)/gi;
	window.b2link.util.trim = function( s ){ return s.replace( _reg0, "" ); };
})();

//--------------------------------------------------window.b2link.util.t***;


//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.util;

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;