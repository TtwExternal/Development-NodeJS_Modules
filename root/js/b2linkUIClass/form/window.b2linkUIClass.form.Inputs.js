//----------------------------------------------------------------------------------------------------;
var fileNm = "./js/b2linkUIClass/form/window.b2linkUIClass.form.Inputs.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 한개의 input을 add와 update 양쪽에서 사용할 수 있도록 도와주는 class
 * ## 주의: 리스트/테이블 성 데이터가 있는경우 사용 불가
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLElement} $el 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLElement.
 */
window.b2linkUIClass.form.Inputs = function( url, $el_div )
{
	//Extends;
	var _this = window.b2linkUIClass.inputor.InputBox( url, $el_div );

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	EVENT;

	//----------------------------------------------------------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	FUNCTION;

	//----------------------------------------------------------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * $el_div에서 모든 form elements를 o 에 inject 해주는 function
	 * @Override
	 * @function
	 */
	var _setDataInputElements = function()
	{
		window.AlexLog.timeStamp( "----- [ S ] - _setDataInputElements():void----------" );

		var o = _this.getDataInputElements();
		window.b2link.element.getFormElements( o, $el_div );

		window.AlexLog.timeStamp( "----- [ E ] - _setDataInputElements():void----------" );
	};

	//--------------------------------------------------;

	/**
	 * $el_div의 form element들의 클래스 이름과 value를 key, value object로 get 해주는 function
	 *
	 * @function
	 * @return {Object} form elements들에 setting 할 데이터
	 */
	var _getDetailData = function()
	{
		window.AlexLog.timeStamp( "----- [ S ] - _getDetailData():{Object}----------" );

		var d = {};
		var formElements = window.b2link.element.getFormElements( null, $el_div );

		for( var key in formElements )
		{
			if( !formElements.hasOwnProperty( key ) ) continue;

			try
			{
				d[ formElements[ key ].classList[0] ] = window.b2link.element.getValueOfElement( formElements[ key ] );
			}
			catch( e ) // radio 등;
			{
				d[ formElements[ key ][0].classList[0] ] = window.b2link.element.getValueOfElement( formElements[ key ] );
			}
		}

		window.AlexLog.timeStamp( "----- [ E ] - _getDetailData():{Object}----------" );
		return d;
	};

	/**
	 * $el_div의 form element들에 value를 data의 key와 form element의 1번째 클래스 이름을 매칭하여 value를 set 해주는 function
	 * ## 주의: data의 키값과 form element의 1번째 클래스 이름이 매칭되어야함
	 *
	 * @function
	 * @param {Object} data form elements들에 setting 할 데이터
	 */
	var _setDetailData = function( data )
	{
		window.AlexLog.timeStamp( "----- [ S ] - _setDetailData():void----------" );

		var o = _this.getDataInputElements();

		for( var s in o )
		{
			var value = data;
			var keys = s.split('.');

			for( var key in keys )
			{
				if( value == undefined ){ break; }

				value = value[ keys[ key ] ];
			}

			if( value != undefined )
			{
				window.b2link.element.setValueOfElement( o[s], value );
			}
		}

		window.AlexLog.timeStamp( "----- [ E ] - _setDetailData():void----------" );
	};


	var _clearDetailData = function()
	{
		window.AlexLog.timeStamp( "----- [ S ] - _setDetailData():void----------" );

		var o = _this.getDataInputElements();

		for( var s in o )
		{
			window.b2link.element.setValueOfElement( o[s], "" );
		}

		window.AlexLog.timeStamp( "----- [ E ] - _setDetailData():void----------" );
	};

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	LOGIC;

	//----------------------------------------------------------------------------------------------------;

	_this.setData({
		fn : {
			setDataInputElements : _setDataInputElements
		}
	})

	//--------------------------------------------------this;
	var _ = _this;

		_.setDetailData = _setDetailData;
		_.getDetailData = _getDetailData;
		_.clearDetailData = _clearDetailData;

	//--------------------------------------------------this;
	return _;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;