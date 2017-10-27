//----------------------------------------------------------------------------------------------------;
var fileNm = "js/mongodb/date/add_arrayDate_day.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 기준일(date) 에 day를 더하여 반환한다. 
 * @function
 * @param {Array} date 기준일
 * @param {uint} day 추가할 일
 * @return {Array} [ y, m, d, ho, mi, se ]
 */
global.mongodb.date.add_arrayDate_day = function( date, day)
{
	RayLog.log( "---- [ S ] - global.mongodb.date.add_arrayDate_day():{Object}----------" );

	var d = new Date( date[ 0 ], date[ 1 ], date[ 2 ], date[ 3 ], date[ 4 ], date[ 5 ]);

	d.setDate( d.getDate() + day );

	
	var r = [ d.getFullYear(), d.getMonth() + 1, d.getDay(), d.getHours(), d.getMinutes(), d.getSeconds() ];
	RayLog.log( "---- [ E ] - global.mongodb.date.add_arrayDate_day():{Object}----------return date;" );
	return r;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;