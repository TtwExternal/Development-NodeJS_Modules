//----------------------------------------------------------------------------------------------------;
var fileNm = "./js/b2linkUIClass/inputor/window.b2linkUIClass.inputor.DataInputElement.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * ./ui_import/ 에서 사용한다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLElement} $el 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLElement.
 */
window.b2linkUIClass.inputor.DataInputElement = function( url, $el )
{
	//Extends;
	var _this = window.b2linkUIClass.base.EventDispatcher( url, $el );
		//_this = window.b2linkUIClass.base.Event_User_Keyboard( url, $el, _this );
		_this = window.b2linkUIClass.base.Event_User_KeyboardAndMouse( url, $el, _this );
		//_this = window.b2linkUIClass.base.Event_User_Mouse( url, $el, _this );

	//----------------------------------------------------------------------------------------------------;

	//	STATIC;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------;

	/**
	 * 이 Controller의 TargetElement의 ChildElements들 중 Input Data 형태 Element들의 Value(값)를 초기화 시키는 로직은 담은 Callback Function
	 * @function
	 */
	var _fn_clearDataInputElements = null;
	var _fn_getDataForQuery = null;
	var _fn_setDataInputElements = null;

	/**
	 * 대상 Element($el)에서 가지고 있는 데이터 Element의 Reference
	 * @property {Object}
	 */
	var _o_DataInputElements = {};

	//--------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * targetElement의 ChildNodes중 입력한 className과 같은 자식 객체를 검색하여 0번째 객체를 반환한다.
	 * @function
	 * @param {HTMLElement} t HTMLElement
	 * @param {String} className
	 */
	_this.$f0 = window.b2link.element.getElementByClassName;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	EVENT;

	//----------------------------------------------------------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	FUNCTION;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * 이 Controller의 TargetElement의 ChildElements들 중 Input Data 형태 Element들의 Value(값)를 초기화 시킨다.
	 * @function
	 */
	var _clearDataInputElements = function(){ _fn_clearDataInputElements(); };

	//--------------------------------------------------;

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
		_fn_clearDataInputElements = null;
		_fn_getDataForQuery = null;
		_fn_setDataInputElements = null;

		_o_DataInputElements = null;

		_dispose.super();
	};
	_dispose.super = _this.dispose;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * Input Data 형태 Elements에서 Value(값)를 가져온다.
	 * @function
	 * @return {Object}
	 */
	var _getDataForQuery = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _getDataForQuery():{Object}----------" );

		var r = _fn_getDataForQuery();
		window.TtwLog.info( r );

		window.TtwLog.timeStamp( "-- [ E ] - _getDataForQuery():{Object}----------" );
		return r;
	};

	//--------------------------------------------------;

	/**
	 * @Override
	 * @function
	 * @param {Object} d
	 * <code>
	 * {
	 *	"fn" : {
	 *		"clearDataInputElements" : function(){ var o = _this.getDataInputElements(); o.??? = ... }
	 *
	 *		, "getDataForQuery" : function( dataInputElements ){}
	 *
	 *		, "setDataInputElements" : function(){ var o = _this.getDataInputElements(); o.??? = ... }
	 *	}
	 * }
	 * </code>
	 */
	var _setData = function( d )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _setData():void----------" );

		_setData.super( d );

		_fn_clearDataInputElements = d.fn.clearDataInputElements;
		_fn_getDataForQuery = d.fn.getDataForQuery;
		_fn_setDataInputElements = d.fn.setDataInputElements;

		//_fn_setDataInputElements();
		_setDataInputElements();

		window.TtwLog.timeStamp( "-- [ E ] - _setData():void----------" );
	};
	_setData.super = _this.setData;

	//--------------------------------------------------;

	/**
	 * Input Data 형태 Elements들을 담아놓은 구조체를 리턴해준다.
	 * @Override
	 * @function
	 * @return {Object}
	 */
	var _getDataInputElements = function(){ return _o_DataInputElements; };

	/**
	 * Input Data 형태 Elements들을 컨트롤 하기위한 하나의 구조체에 담는다.
	 * var o = _this.getDataInputElements();로 가져와서 사용한다.
	 * @function
	 */
	var _setDataInputElements = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _setDataInputElements():void----------" );

		_fn_setDataInputElements();

		window.TtwLog.timeStamp( "-- [ E ] - _setDataInputElements():void----------" );
	};

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

		//이 Controller의 TargetElement의 ChildElements들 중 Input Data 형태 Element들의 Value(값)를 초기화 시킨다.;
		_.clearDataInputElements = _clearDataInputElements;

		//Input Data 형태 Elements에서 Value(값)를 가져온다.;
		_.getDataForQuery = _getDataForQuery;

		_.setData = _setData;

		//Input Data 형태 Elements들을 담아놓은 구조체를 리턴해준다.;
		_.getDataInputElements = _getDataInputElements;

		//Input Data 형태 Elements들을 컨트롤 하기위한 하나의 구조체에 담는다.;
		_.setDataInputElements = _setDataInputElements;
	//--------------------------------------------------this;
	return _;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;