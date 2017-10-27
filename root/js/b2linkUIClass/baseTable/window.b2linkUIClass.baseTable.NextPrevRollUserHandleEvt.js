//----------------------------------------------------------------------------------------------------;
var fileNm = "./js/b2linkUIClass/baseTable/window.b2linkUIClass.baseTable.NextPrevRollUserHandleEvt.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * window.b2linkUIClass.baseTable.NextPrevRoll를 상속 한다.
 *
 * MouseWheelEvent를 감지하여 List 조회가 가능하게 한다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLTableElement} $el_table 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLTableElement.
 */
window.b2linkUIClass.baseTable.NextPrevRollUserHandleEvt = function( url, $el_table )
{
	//Extends;
	var _this = window.b2linkUIClass.baseTable.NextPrevRoll( url, $el_table );

	//----------------------------------------------------------------------------------------------------;

	//	STATIC;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;

	//--------------------------------------------------;

	var _el_ListContainer = _this.get_el_ListContainer();

	var _bScrollBottomEnd = false;
	var _bScrollTopEnd = false;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	EVENT;

	//----------------------------------------------------------------------------------------------------;

	/**
	 * @function
	 */
	var _addEvent = function()
	{
		_removeEvent();
		_addEvent_scroll_listItemContainer();
	};

	/**
	 * @function
	 */
	var _removeEvent = function()
	{
		_removeEvent_scroll_listItemContainer();
		_removeEvent_mWheel_listItemContainer();
	};

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _addEvent_scroll_listItemContainer = function()
	{
		_removeEvent_scroll_listItemContainer();
		_el_ListContainer.addEventListener( "scroll", _evt_mScroll_listItemContainer, false, 0, true );
	};

	/**
	 * @function
	 */
	var _removeEvent_scroll_listItemContainer = function()
	{
		_el_ListContainer.removeEventListener( "scroll", _evt_mScroll_listItemContainer, false );
	};

	/**
	 * @function
	 */
	var _addEvent_mWheel_listItemContainer = function()
	{
		_removeEvent_mWheel_listItemContainer();
		_el_ListContainer.addEventListener( "mousewheel", _evt_mWheel_listItemContainer, false, 0, true );
	};

	/**
	 * @function
	 */
	var _removeEvent_mWheel_listItemContainer = function()
	{
		_el_ListContainer.removeEventListener( "mousewheel", _evt_mWheel_listItemContainer, false );
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_mScroll_listItemContainer = function( e )
	{
		//window.TtwLog.timeStamp( "-- [ S ] - _evt_mScroll_listItemContainer():void----------" );

		//console.log( e );

		e.stopImmediatePropagation();
		e.stopPropagation();

		_removeEvent_scroll_listItemContainer();

		var t = e.target;//console.log( t );

		/*/
		console.log( "t.scrollLeft : " + t.scrollLeft );
		console.log( "t.scrollHeight : " + t.scrollHeight );
		console.log( "t.scrollTop : " + t.scrollTop );
		console.log( "t.scrollWidth : " + t.scrollWidth );
		//*/

		if( t.scrollHeight == ( t.clientHeight + t.scrollTop ) )
		{
			console.log( "scroll is Bottom." );

			_bScrollBottomEnd = true;
			_bScrollTopEnd = false;
			_addEvent_scroll_listItemContainer();
			window.TtwLog.timeStamp( "-- [ E ] - _evt_mScroll_listItemContainer():void----------Bottom" );

			//listItemContainer.addEventListener( "mousewheel", _evt_mWheel_listItemContainer, false, 0, true );
			_addEvent_mWheel_listItemContainer();

			return;
		}
		else if( 0 == t.scrollTop )
		{
			//console.log( "scroll is Top." );

			_bScrollBottomEnd = false;
			_bScrollTopEnd = true;
			_addEvent_scroll_listItemContainer();
			window.TtwLog.timeStamp( "-- [ E ] - _evt_mScroll_listItemContainer():void----------Top" );

			//listItemContainer.addEventListener( "mousewheel", _evt_mWheel_listItemContainer, false, 0, true );
			_addEvent_mWheel_listItemContainer();

			return;
		}

		_bScrollBottomEnd = false;
		_bScrollTopEnd = false;

		_addEvent_scroll_listItemContainer();

		//window.TtwLog.timeStamp( "-- [ E ] - _evt_mScroll_listItemContainer():void----------" );
	};

	/**
	 * @function
	 * @param {MouseWheelEvent} e event
	 */
	var _evt_mWheel_listItemContainer = function( e )
	{
		//window.TtwLog.timeStamp( "-- [ S ] - _evt_mWheel_listItemContainer():void----------" );

		console.log( "e.wheelDelta : " + e.wheelDelta );
		//e = _fn_setMouseDeltaNomalize( e );

		//listItemContainer.removeEventListener( "mousewheel", _evt_mWheel_listItemContainer, false );
		_removeEvent_mWheel_listItemContainer();

		e.stopImmediatePropagation();
		e.stopPropagation();

		if( _bScrollBottomEnd && ( 0 > e.wheelDelta ) )
		{
			_bScrollBottomEnd = _bScrollTopEnd = false;

			//_el_ListContainer.removeEventListener( "mousewheel", _evt_mWheel_listItemContainer, false );
			//_removeEvent_mWheel_listItemContainer();

			_el_ListContainer.scrollTop = _el_ListContainer.scrollTop / 2;
			$el_table.js.req_Data_Next();
		}
		else if( _bScrollTopEnd && ( 0 < e.wheelDelta ) )
		{
			_bScrollBottomEnd = _bScrollTopEnd = false;

			//_el_ListContainer.removeEventListener( "mousewheel", _evt_mWheel_listItemContainer, false );
			//_removeEvent_mWheel_listItemContainer();

			_el_ListContainer.scrollTop = _el_ListContainer.scrollHeight / 2;
			$el_table.js.req_Data_Prev();
		}

		//window.TtwLog.timeStamp( "-- [ E ] - _evt_mWheel_listItemContainer():void----------" );
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

		_el_ListContainer = null;

		_dispose.super();
	};
	_dispose.super = _this.dispose;

	//--------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {MouseWheelEvent} e event
	 * @return {MouseWheelEvent}
	 */
	/*/
	var _fn_setMouseDeltaNomalize = function( e )
	{
		var o = e,
			d = o.detail, w = o.wheelDelta,
			n = 225, n1 = n-1;

		//Normalize delta;
		d = d ? w && (f = w/d) ? d/f : -d/1.35 : w/120;
		//Quadratic scale if |d| > 1;
		d = d < 1 ? d < -1 ? (-Math.pow(d, 2) - n1) / n : d : (Math.pow(d, 2) + n1) / n;
		//Delta *should* not be greater than 2...;
		e.delta = Math.min(Math.max(d / 2, -1), 1);

		return e;
	}
	//*/

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Object} d
	 * <code>
	 * {
	 *	"idStart" : -1
	 *	, "idEnd" : 20
	 *	, "limit" : 20
	 *	, "limitTerm" : 2
	 *	, "maxCount" : null
	 *	, "fn" : {
	 *		"req_getCount" : {Function}
	 *		, "req_getList_Range__id" : {Function}
	 *	}
	 * }
	 * </code>
	 */
	var _setData = function( d )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _setData():void----------" );

		_setData.super( d );

		window.TtwLog.timeStamp( "-- [ E ] - _setData():void----------" );
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

	//----------;
	_addEvent();
	_this.setEventDispatcher( $el_table );
	//----------;

	//--------------------------------------------------this;
	var _ = _this;

	_.__el = $el_table;

	_.dispose = _dispose;

	_.setData = _setData;
	//--------------------------------------------------this;

	return _this;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;