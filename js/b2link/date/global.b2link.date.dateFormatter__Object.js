//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/date/global.b2link.date.dateFormatter__Object.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 문자열 데이트 또는 데이트를 Object 형태로 변경하여 반환한다.
 * @function
 * @param {Date|String} Date or 2017-05-04-02-03-10
 * @return {Object}
 */
global.b2link.date.dateFormatter__Object = function( d )
{
	if( typeof d === "string" ) d = new Date( d );

	var formattedDate = { y : Number( d.getFullYear() ), m : Number( d.getMonth() + 1 ), d : Number( d.getDate() ), ho : Number( d.getHours() ), mi : Number( d.getMinutes() ), se : Number( d.getSeconds() ) };

	return formattedDate;
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;