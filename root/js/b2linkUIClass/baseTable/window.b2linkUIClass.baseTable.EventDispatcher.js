//----------------------------------------------------------------------------------------------------;
var fileNm = "./js/b2linkUIClass/baseTable/window.b2linkUIClass.baseTable.EventDispatcher.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * window.b2linkUIClass.base.EventDispatcher를 상속 받는다.
 *
 * EventDispatcher에 {HTMLTableElement}를 설정한다.
 * ListContainer 객체로 {HTMLTableElement}를 설정한다.
 * _this.dispatch_TABLE_DATA_CHANGED가 정의 되어있다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLTableElement} $el_table 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLTableElement.
 */
window.b2linkUIClass.baseTable.EventDispatcher = function( url, $el_table )
{
	//Extends;
	var _this = window.b2linkUIClass.base.EventDispatcher( url, $el_table );

	//----------------------------------------------------------------------------------------------------;

	//	STATIC;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------;

	//------------------------------;

	/**
	 * targetElement의 ChildNodes중 입력한 className과 같은 자식 객체를 검색하여 0번째 객체를 반환한다.
	 * @function
	 * @param {HTMLElement} t HTMLElement
	 * @param {String} className
	 */
	var $f0 = window.b2link.element.getElementByClassName;

	/**
	 * @property {Element}}
	 */
	var _el_tbody = $f0( $el_table, "tbody" );

	/**
	 * @property {Element}}
	 */
	var _el_thead = $f0( $el_table, "thead" );

	/**
	 * @property {Element}}
	 */
	var _el_ListContainer = _el_tbody;
	_this._el_ListContainer = _el_ListContainer;

	//------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	EVENT;

	//----------------------------------------------------------------------------------------------------;

	/**
	 * @function
	 * @param {CustomEvent} e event
	 */
	var _dispatch_TABLE_DATA_CHANGED = function()
	{
		window.b2link.event.dispatchCE__TABLE_DATA_CHANGED(
			_this.getEventDispatcher()
			, window.b2link.eventDetail.TABLE_DATA_CHANGED({
				firstItem : _this._getListItem_FirstData()
				, lastItem : _this._getListItem_LastData()
			})
		);
	};

	//----------------------------------------------------------------------------------------------------;

	//	FUNCTION;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _dispose = function()
	{
		_removeEvent();

		$f0 = null;

		_el_tbody = null;
		_el_thead = null;

		_el_ListContainer = null;
	};

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * List Container Element를 가져온다.( ul, tbody, ... )
	 * @function
	 * @return {HTMLElement}
	 */
	var _get_el_ListContainer = function(){ return _el_ListContainer; };

	/*
	 * 첫번째 데이터 정보 반환
	 * @function
	 * @return {Object} d
	 */
	var _getListItem_FirstData = function(){};
	_this._getListItem_FirstData = _getListItem_FirstData;

	/*
	 * 마지막 데이터 정보 반환
	 * @function
	 * @return {Object} d
	 */
	var _getListItem_LastData = function(){};
	_this._getListItem_LastData = _getListItem_LastData;

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Object} d
	 * <code>
	 * {
	 * }
	 * </code>
	 */
	var _setData = function(){};
	_this._setData = _setData;

	//------------------------------;

	/**
	 * @function
	 * @param {Array} data
	 */
	var _setData__ListItems = function( data ){};
	_this._setData__ListItems = _setData__ListItems;

	//------------------------------;

	//--------------------------------------------------;

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

	_.__el = $el_table;

	_.dispose = _dispose;

	_.dispatch_TABLE_DATA_CHANGED = _dispatch_TABLE_DATA_CHANGED;

	_.get_el_ListContainer = _get_el_ListContainer;

	_.setData = _setData;
	//--------------------------------------------------this;

	return _this;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;