//----------------------------------------------------------------------------------------------------;
var fileNm = "./js/b2linkUIClass/inputor/window.b2linkUIClass.inputor.InputBox.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * ./ui_import/ 에서 사용한다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLElement} $el 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLElement.
 */
window.b2linkUIClass.inputor.InputBox = function( url, $el )
{
	//Extends;
	var _this = window.b2linkUIClass.inputor.DataInputElement( url, $el );
		_this = window.b2linkUIClass.base.RootElement( url, $el, _this );

	//Extends - Injection;
	window.b2linkExtends.injection.inputBox( _this );

	//----------------------------------------------------------------------------------------------------;

	//	STATIC;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


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

	/**
	 * 이 Controller(_this)와 TargetElement(_this.__el)를 GC가 정상적으로 메모리에서 완전히 제거될수 있는 상태를 만든다.
	 * Reference Count를 0으로 만드는 행위를 한다.
	 * 각종 인스턴트 = null처리
	 * 모든 EventListener 제거
	 * 특정 자료구조에서 참조값 제거
	 * @override
	 * @function
	 */
	var _dispose = function()
	{
		_dispose.super();
	};
	_dispose.super = _this.dispose;

	/**
	 * Modal을 동반한 Static Selector UI를 화면에 띄운 후 해당 List 항목을 MouseClick하였을 시에 Callback Function에 SelectedItem을 Parameter로 넘겨서 실행 시킨다.
	 * @function
	 * @param {Function} modalUIAPI window.b2link_ui.staticSelector***.***;
	 * @param {Function} callback function( selectedItem ){};
	 */
	var _showModal_SelectorItem_mClick = function( modalUIAPI, callback )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _showModal_SelectorItem_mClick():void----------" );

		var o = modalUIAPI();

		var js = o[ 1 ];
			js.getListElement().js.addEvent_mClick( function( selectedItem ){
				//js.hideAndModal();
				js.hideAndModal_Sync();
				callback( selectedItem );
			});

		window.TtwLog.timeStamp( "-- [ E ] - _showModal_SelectorItem_mClick():void----------" );
	};

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * @Override
	 * @function
	 * @param {Object} d
	 */
	//*/
	var _setData = function( d )
	{
		_setData.super( d );
	};
	_setData.super = _this.setData;
	//*/

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	LOGIC;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------this;
	var _ = _this;

		_.__el = $el;

		_.dispose = _dispose;

		//Modal을 동반한 Static Selector UI를 화면에 띄운 후 해당 List 항목을 MouseClick하였을 시에 Callback Function에 SelectedItem을 Parameter로 넘겨서 실행 시킨다.;
		_.showModal_SelectorItem_mClick = _showModal_SelectorItem_mClick;

		_.setData = _setData;
	//--------------------------------------------------this;
	return _;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;