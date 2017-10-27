//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/response/window.b2link.response.getAPIResultStatus.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){

	/**
	 * Request후 Response에서 받아온 결과 데이터의 Boolean Status를 확인하는데 사용한다.
	 * @function
	 * @param {*} result
	 * @return {*}
	 */
	window.b2link.response.getAPIResultStatus = function( result )
	{
		//window.JamesLog.timeStamp( "---- [ S ] - window.b2link.response.getAPIResultStatus():{*}----------" );
		//window.JamesLog.timeStamp( "Input result : " );
		//window.JamesLog.timeStamp( result );

		try
		{
			if ( result.status === "success" ) {
				return 1;
			} else {
				return 0;
			}

		}
		catch( er )
		{
			window.JamesLog.error( "window.b2link.response.getAPIResultStatus Error : " + er );
		}

		//window.JamesLog.timeStamp( "return result : " );
		//window.JamesLog.timeStamp( result );

		//window.JamesLog.timeStamp( "---- [ E ] - window.b2link.response.getAPIResultStatus():{*}----------return result;" );
		return result;
	};
})();

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
