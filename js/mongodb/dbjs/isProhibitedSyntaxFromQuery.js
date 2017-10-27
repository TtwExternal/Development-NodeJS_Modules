//----------------------------------------------------------------------------------------------------;
var fileNm = "js/mongodb/dbjs/isProhibitedSyntaxFromQuery.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){
	//--------------------------------------------------;
	var x = [
		  "_createWriteConcern"	, "_db"				, "_dbCommand"			, "_dbReadCommand"			, "_distinct"
		, "_fullName"			, "_genIndexName"	, "_getIndexesCommand"	, "_getIndexesSystemIndexes", "_indexSpec"
		, "_makeCommand"		, "_massageObject"	, "_mongo"				, "_parseRemove"			, "_parseUpdate"
		, "_printExtraInfo"		, "_shortName"		, "_validateForStorage"	, "_validateObject"			, "_validateRemoveDoc"
		, "_validateUpdateDoc"	, "reIndex"			, "renameCollection"	, "runCommand"				, "runReadCommand"
		, "drop"				, "dropIndex"		, "dropIndexes"			, "ensureIndex"
	];

	var i=0, iLen=x.length;
	for( ; i<iLen; ++i ) x[ i ] = x[ i ] + "(";
	//--------------------------------------------------;

	/**
	 * 주입된 Query의 구문을 분석하여 금지된 구문이 존재하는 지 체크한다
	 * @function
	 * @param {String} query
	 * @param {String} nm_db
	 * @param {String} nm_col
	 * @return {Boolean} true면 금지된 구문이 존재함. false면 금지된 구문이 존재하지 않음.
	 */
	global.mongodb.dbjs.isProhibitedSyntaxFromQuery = function( query, nm_db, nm_col )
	{
		//TtwLog.timeStamp( "---- [ S ] - global.mongodb.dbjs.isProhibitedSyntaxFromQuery():{String}----------" );

		var check_syntax_init = "_col$" + nm_col + ".";

		var i=0, iLen=x.length; for( ; i<iLen; ++i ) if( query.lastIndexOf( check_syntax_init + x[ i ] ) > -1 ) return 1;

		//TtwLog.timeStamp( "---- [ E ] - global.mongodb.dbjs.isProhibitedSyntaxFromQuery():{String}----------return 0;" );
		return 0;
	};
})();

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;