//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_service/base_query/window.b2link_service.base_query.getDoc__id.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
	{
		"nm_db" : ""
		, "nm_col" : ""

		, "_id" : NaN

		, "cbFunction" : function( result ){};
	}
 * </code>
 */
window.b2link_service.base_query.getDoc__id = function( d )
{
	//window.TtwLog.timeStamp( "---- [ S ] -window.b2link_service.base_query.getDoc__id():void----------" );

	//Database Name과 Collection Name를 체크한다.;
	window.b2link_service.common._checkDBColNames( d.nm_db, d.nm_col );

	//수정하기 - 20170506 - 송선우 - nm_db와 nm_col 제한 목록 로직 추가하기;

	var _url = window.b2link.STATIC.CONFIG.URL.PROXY + window.b2link.url.getServerURLByDB( d.nm_db ) + "_query/findOne/getDoc__id?";

	window.b2link_service.common._fn_req( _url + "&nm_db=" + d.nm_db + "&nm_col=" + d.nm_col + "&_id=" + d._id, d.cbFunction );

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link_service.base_query.getDoc__id():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;