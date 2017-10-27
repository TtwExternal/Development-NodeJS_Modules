//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_window.b2link.date.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.date;

window.b2link.date = window.b2link.date || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.date;


//----------------------------------------------------------------------------------------------------window,b2link.date.g***;

/**
 * 함수를 호출한 시점에서 new Date()로 Data 객체를 생성한 후 [ year, month, day, hours, minutes, seconds ]를 생성해서 return 한다.
 * @function
 * @return {Array} [ year, month, day, hour, minute, seconds ]
 */
window.b2link.date.getArrayDateFromNewDate=function(){var e=new Date,t=[e.getFullYear(),e.getMonth()+1,e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds()];return e=null,t};

/**
 * [ year, month, day, hour, minute, seconds ] 형태의 Date 배열을 "-"를 통해 year-month-day-hour-minute-seconds 형태의 문자열로 만들어서 Return 한다.
 * @function
 * @param {Array} a [ year, month, day, hour, minute, seconds ]
 * @return {String} year-month-day-hour-minute-seconds
 */
window.b2link.date.getDateStringFromArrayDate_Dash=function(n){return n.join("-")};

/**
 * @function
 * @return {Object} {"y" : 2017, "m" : 2, "d" : 25, "ho" : 11, "mi" : 20, "se" : 50}
 */
window.b2link.date.getObjectDateFromNewDate=function(){var e=new Date,t={y:e.getFullYear(),m:e.getMonth()+1,d:e.getDate(),ho:e.getHours(),mi:e.getMinutes(),se:e.getSeconds()};return e=null,t};

//----------------------------------------------------------------------------------------------------window,b2link.date.g***;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;