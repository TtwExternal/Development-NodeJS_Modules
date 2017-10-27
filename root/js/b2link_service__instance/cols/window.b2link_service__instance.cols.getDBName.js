//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_service/_instance/cols/window.b2link_service__instance.cols.getDBName.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * transaction_entity의 progress 순서 구조체 가져오기
 * DB목록와 Collection 목록을 가져온다.
 * @function
 * @param {Function} cbFunction function( result ){}
 */
window.b2link_service__instance.cols.getDBName = function( col_nm, cbFunction )
{
	//window.TtwLog.timeStamp( "---- [ S ] -window.b2link_service__instance.cols.getDBName():void----------" );

	window.b2link_service.common._fn_req( window.b2link_service__instance.cols.URL + "getDBName?col_nm=" + col_nm, cbFunction );

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link_service__instance.cols.getDBName():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;