//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/response/global.b2link.response.getResultStatus.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

(function(){

	var _result_r = {
		0 : 1
		//, 1 : 1//사용안함;
		, 2 : 0//Bad Value;
		, 3 : 0//OBSOLETE_DuplicateKey;
		, 18 : 0//AuthenticationFailed;
	};

	var _fnStore = {
		0 : 0
		, 1 : 1
		, 18 : 0
		, "false" : 0
		, "true" : 1

		, "result.r" : function( result ){
			return _result_r[ result.r ];
		}
	};

	/**
	 * Request후 Response에서 받아온 결과 데이터의 Boolean Status를 확인하는데 사용한다.
	 * @function
	 * @param {*} result
	 * @return {*}
	 */
	global.b2link.response.getResultStatus = function( result )
	{
		//global.TtwLog.timeStamp( "---- [ S ] - global.b2link.response.getResultStatus():{*}----------" );
		//global.TtwLog.timeStamp( "Input result : " );
		//global.TtwLog.timeStamp( result );

		try
		{
			if( _fnStore.hasOwnProperty( result ) )
			{
				var r = _fnStore[ result ];
				global.TtwLog.timeStamp( "return r : " + r );
				//global.TtwLog.timeStamp( "---- [ E ] - global.b2link.response.getResultStatus():{*}----------return r;" );
				return r;
			}

			//MongoDB 표준 에러 코드를 준수해야한다;
			//{ r : NaN, m : "" };
			if( result.hasOwnProperty( "r" ) )
			{
				if( _fnStore.hasOwnProperty( "result.r" ) )
				{
					var r = _fnStore[ "result.r" ]( result );
					global.TtwLog.timeStamp( "return r : " + r );
					//global.TtwLog.timeStamp( "---- [ E ] - global.b2link.response.getResultStatus():{*}----------return r;" );
					return r;
				}
			}

			//삭제하기 - 20170514 - 송선우 - 사용되는 모든 소스에서 제거하기;
			//{ state : NaN, ??? : ?? };
			if( result.hasOwnProperty( "state" ) )
			{
				var r = _fnStore[ result.state ];
				global.TtwLog.timeStamp( "return r : " + r );
				//global.TtwLog.timeStamp( "---- [ E ] - global.b2link.response.getResultStatus():{*}----------return r;" );
				return r;
			}
		}
		catch( er )
		{
			global.TtwLog.error( "global.b2link.response.getResultStatus Error : " + er );
		}

		//global.TtwLog.timeStamp( "return result : " );
		//global.TtwLog.timeStamp( result );

		//global.TtwLog.timeStamp( "---- [ E ] - global.b2link.response.getResultStatus():{*}----------return result;" );
		return result;
	};
})();

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;