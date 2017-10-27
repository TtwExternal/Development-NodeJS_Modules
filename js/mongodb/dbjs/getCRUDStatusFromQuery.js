//----------------------------------------------------------------------------------------------------;
var fileNm = "js/mongodb/dbjs/getCRUDStatusFromQuery.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){
	var a_d = [ "deleteMany", "deleteOne"	, "findOneAndDelete", "remove" ];
	var a_u = [ "update"	, "updateMany"	, "updateOne"		, "findOneAndUpdate", "findAndModify", "findOneAndReplace", "replaceOne" ];
	var a_c = [ "insert"	, "insertMany"	, "insertOne"		, "save" ];
	var a_r = [ "find"		, "findOne" ];

	var i=0, iLen=0;
		i=0, iLen=a_d.length; for( ; i<iLen; ++i ) a_d[ i ] = a_d[ i ] + "(";
		i=0, iLen=a_u.length; for( ; i<iLen; ++i ) a_u[ i ] = a_u[ i ] + "(";
		i=0, iLen=a_c.length; for( ; i<iLen; ++i ) a_c[ i ] = a_c[ i ] + "(";
		i=0, iLen=a_r.length; for( ; i<iLen; ++i ) a_r[ i ] = a_r[ i ] + "(";

	/**
	 * 주입된 Query의 구문을 분석하여 C, R, U, D 중 어떤 타입인지 체크한다
	 * @function
	 * @param {String} query
	 * @param {String} nm_db
	 * @param {String} nm_col
	 * @return {String}
	 */
	global.mongodb.dbjs.getCRUDStatusFromQuery = function( query, nm_db, nm_col )
	{
		//TtwLog.timeStamp( "---- [ S ] - global.mongodb.dbjs.getCRUDStatusFromQuery():{String}----------" );

		var check_syntax_init = "_col$" + nm_col + ".";

		var i=0, iLen=a_d.length; for( ; i<iLen; ++i ) if( query.lastIndexOf( check_syntax_init + a_d[ i ] ) > -1 ) return "_d";
		var i=0, iLen=a_u.length; for( ; i<iLen; ++i ) if( query.lastIndexOf( check_syntax_init + a_u[ i ] ) > -1 ) return "_u";
		var i=0, iLen=a_c.length; for( ; i<iLen; ++i ) if( query.lastIndexOf( check_syntax_init + a_c[ i ] ) > -1 ) return "_c";
		var i=0, iLen=a_r.length; for( ; i<iLen; ++i ) if( query.lastIndexOf( check_syntax_init + a_r[ i ] ) > -1 ) return "_r";

		//TtwLog.timeStamp( "---- [ E ] - global.mongodb.dbjs.getCRUDStatusFromQuery():{String}----------return null;" );

		//확인하기 - 2017.08.04 - 송선우 - return null 이 맞나 return "" 이 맞나;
		return null;
	};
})();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;