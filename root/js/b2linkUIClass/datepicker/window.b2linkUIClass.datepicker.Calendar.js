//----------------------------------------------------------------------------------------------------;
var fileNm = "./js/b2linkUIClass/datepicker/window.b2linkUIClass.datepicker.Calendar.js";
if( console ) console.log("[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @class
 * @param {String} url js file url
 * @param {HTMLDIVElement} $el_div 이 Controller 객체가 조작할 HTMLDIVElement
 */
window.b2linkUIClass.datepicker.Calendar = function( url, $el_div )
{
	//----------------------------------------------------------------------------------------------------;

	var Calendar = window.b2link.util.importJS( "./libs/ui/datePicker/libs.ui.datePicker.Calendar.js", arguments );
	//var Calendar = SUtilTemplateHTML.addJS__URL( "./libs/ui/datePicker/libs.ui.datePicker.Calendar.js", arguments );

	//----------------------------------------------------------------------------------------------------;

	//Extends;
	var _this = window.b2linkUIClass.inputor.DataInputElement( url, $el_div );
		_this = window.b2linkUIClass.base.RootElement( url, $el_div, _this );

	//----------------------------------------------------------------------------------------------------;

	//	STATIC;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------;

	/**
	 * targetElement의 ChildNodes중 입력한 className과 같은 자식 객체를 검색하여 0번째 객체를 반환한다.
	 * @function
	 * @param {HTMLElement} t HTMLElement
	 * @param {String} className
	 */
	var $f0 = window.b2link.element.getElementByClassName;

	var _el_input_field = $f0( $el_div, "datepicker-input" );

	//--------------------------------------------------;

	//--------------------------------------------------;

	var minYear = 2016;
	var maxYear = new Date().getFullYear() + 5;
		maxYear = (maxYear <= minYear) ? minYear + 5 : maxYear;

	var _calendar = new Calendar({
		field : _el_input_field
		, container : $el_div
		, bound : false
		, language : window.b2link.STATIC.CONFIG.URL.UI.LOCALE
		, minDate : new Date( minYear, 0, 1 )
		, maxDate : new Date( maxYear, 11, 31 )
		, yearRange : [ minYear, maxYear ]
		, trigger : $el_div
	, } );
	//_calendar.setInputField( $f0( $el_div, "datepicker-input" ) );

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	EVENT;

	//----------------------------------------------------------------------------------------------------;

	/**
	 * @function
	 */
	var _addEvent = function()
	{
		window.TtwLog.timeStamp( "------ [ S ] - _addEvent():void----------" );

		_removeEvent();
		_el_input_field.addEventListener( "change", _evt_mClick_$el_div, false, 0, true );

		window.TtwLog.timeStamp( "------ [ E ] - _addEvent():void----------" );
	};

	/**
	 * @function
	 */
	var _removeEvent = function()
	{
		window.TtwLog.timeStamp( "------ [ S ] - _removeEvent():void----------" );

		_el_input_field.removeEventListener( "change", _evt_mClick_$el_div, false );

		window.TtwLog.timeStamp( "------ [ E ] - _removeEvent():void----------" );
	};

	/**
	 * @function
	 * @param {MouseEvent} e
	 */
	var _evt_mClick_$el_div = function( e )
	{
		window.TtwLog.timeStamp( "------ [ S ] - _evt_mClick_$el_div():void----------" );

		_mClick._f0( _calendar );

		window.TtwLog.timeStamp( "------ [ E ] - _evt_mClick_$el_div():void----------" );
	};

	//----------------------------------------------------------------------------------------------------;

	//	FUNCTION;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _dispose = function()
	{
		_removeEvent();

		$f0 = null;

		_calendar.destroy();

		_dispose.super();
	};
	_dispose.super = _this.dispose;

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Function} cb_Complete function( date ){};
	 */
	var _mClick = function( cb_Complete )
	{
		window.TtwLog.timeStamp( "------ [ S ] - _mClick():void----------" );

		if( !cb_Complete ) return;

		_mClick._cb_Complete = cb_Complete;

		window.TtwLog.timeStamp( "------ [ E ] - _mClick():void----------" );
	};
	_mClick._cb_Complete = null;
	_mClick._f0 = function( date )
	{
		if( _mClick._cb_Complete )
		{
			_mClick._cb_Complete( date );

			//수정 - 20170214 - 송선우;
			//_mClick._cb_Complete._ownerCtrl.hideAndModal_Sync();
			_mClick._cb_Complete._ownerCtrl.hideAndModal_MoveBGCLastChild();

			//_mClick._cb_Complete = null;
		}
	};

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Object} d
	 * <code>
	 * </code>
	 */
	var _setData = function( d )
	{
		_setData.super( d );
	};
	_setData.super = _this.setData;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	LOGIC;

	//----------------------------------------------------------------------------------------------------;

	_addEvent();

	//이 객체가 상속받은 부모 객체에서 click, dbclick, keyup , ...의 EventListener를 정의하였다.;
	//아래 구문은 그 EventListener에서 구동 시킬 callback function 형태로 등록 하는 구문이다.;
	//Element에 class=""로 정의된 문자열을 Key값으로 CallBack 함수를 등록하는 함수;
	var f0 = _this.addEventCallBackFunction__ClassName;

	//Element에 evt_mClick, evt_mDoubleClick, evt_kDown, evt_kUp, ...등 약속된 Custom Attribute로 정의한 Key값으로 CallBack 함수를 등록하는 함수;
	var f1 = _this.addEventCallBackFunction__EventType;
		f1( "evt_mClick_datePicker", _evt_mClick_$el_div );

	//--------------------------------------------------this;
	var _ = _this;

		_.__el = $el_div;

		_.calendar = _calendar;

		_.dispose = _dispose;

		_.mClick = _mClick;

		_.setData = _setData;
	//--------------------------------------------------this;

	window.b2link.obj.copyReference_Public_Function( _, _calendar );

	return _;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log("[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;