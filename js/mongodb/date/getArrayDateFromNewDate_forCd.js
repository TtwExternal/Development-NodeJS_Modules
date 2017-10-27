//----------------------------------------------------------------------------------------------------;
var fileNm = "js/mongodb/date/getArrayDateFromNewDate_forCd.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 호출한 시점의 data를 Array로 반환
 * 코드 생성을 위함. NumberInt()를 사용하게 되면 Object로 들어가게 되어 코드 생성을 못함.
 * 데이터 삽입용 아님.
 * @function
 * @return {Array} [ y, m, d, ho, mi, se ]
 */
global.mongodb.date.getArrayDateFromNewDate_forCd = function()
{
	Rh2Log.log( "---- [ S ] - global.mongodb.date.getArrayDateFromNewDate_forCd():{Array}----------" );

	var d = new Date();
	var r = [ d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds() ];

	Rh2Log.log( "---- [ E ] - global.mongodb.date.getArrayDateFromNewDate_forCd():{Array}----------return r;" );
	return r;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;