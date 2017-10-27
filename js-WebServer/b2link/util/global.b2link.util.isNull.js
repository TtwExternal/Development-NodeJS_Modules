//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/url/global.b2link.util.isNull.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} data
 * @return {boolean}
 */
global.b2link.util.isNull = function( data )
{
	return (
		typeof data == undefined

		//----------;
		//작성 - 20161214_1412 - 송선우
		//현재 DB -> SERVER -> BROWSER 시 나오면 안되는 "undefined"가 나오고 있음(이호영 제보)
		//Database Schema 기반의 Document Validation 함수들이 완성되면 차후에 없을 예정(최석준 개발)
		|| data == "undefined"
		//----------;
		|| data == null
		|| data == ""
		|| data == NaN
	) ? true : false;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;