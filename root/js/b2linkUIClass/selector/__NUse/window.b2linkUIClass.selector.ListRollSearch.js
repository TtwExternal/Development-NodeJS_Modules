//----------------------------------------------------------------------------------------------------;
var fileNm = "./js/b2linkUIClass/selector/window.b2linkUIClass.selector.ListRollSearch.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
/**
 * ./ui_import/ 에서 사용한다.
 *
 * 다량의 List Data를 범위를 지정하여 가져온다.
 * _this.setData를 이용히여 callback 및 option을 설정할 수 있다.
 * 한번에 가져올 데이터의 수량을 설정할 수 있다.
 * callback 설정 API 목록
 *	- 전체 갯수를 요청할 수 있는 API
 *	- 범위를 설정하여 데이터를 요청할 수 있는 API
 *
 * 기존 데이터는 제거된다.
 * ListItemElement(HTMLLIElement, HTMLTableRowElement, ...)는 제거되지 않고 새 데이터 표출시 재사용한다.
 *
 * MouseWheelEvent를 감지하여 List 조회가 가능하게 한다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLUListElement} $el_ul 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLUListElement.
 */
window.b2linkUIClass.selector.ListRollSearch = function( url, $el_ul )
{
	//Extends;
	var _this = window.b2linkUIClass.baseList.NextPrevRollUserHandleEvtSearch( url, $el_ul );
	var _this = window.b2linkUIClass.base.RootElement( url, $el_ul, _this );
		_this = window.b2linkUIClass.selector.BaseEvent_User( url, $el_ul, _this );

	//----------------------------------------------------------------------------------------------------;

	//	STATIC;

	//----------------------------------------------------------------------------------------------------;

	var _el_ListContainer = _this.get_el_ListContainer();
	var _fn_cb_mClick = null;
	var _fn_cb_mDoubleClick = null;
	var _fn_getListItem = null;
	var _fn_req_Data = null;
	var _fn_temp = function(){};

	//----------------------------------------------------------------------------------------------------;

	//	EVENT;

	//----------------------------------------------------------------------------------------------------;

	/**
	 * @function
	 */
	var _addEvent = function()
	{
		_removeEvent();
		_el_ListContainer.addEventListener( "click", _evt_mClick__el_ListContainer, false, 0, true );
		_el_ListContainer.addEventListener( "dblclick", _evt_mDoubleClick__el_ListContainer, false, 0, true );
	};

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _removeEvent = function()
	{
		_el_ListContainer.removeEventListener( "click", _evt_mClick__el_ListContainer, false );
		_el_ListContainer.removeEventListener( "dblclick", _evt_mDoubleClick__el_ListContainer, false );
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_mClick__el_ListContainer = function( e )
	{
		window.KaiLog.timeStamp( "----- [ S ] - _evt_mClick__el_ListContainer():void----------" );

		console.log( e.target );
		if (e.target.nodeName.toLowerCase() === 'ul' )
		{
			_fn_cb_mClick( null );
			e.stopPropagation();
			e.preventDefault();
			window.KaiLog.timeStamp( "----- [ E ] - _evt_mClick__el_ListContainer():void----------" );
			return;
		}
		var listItem = _fn_getListItem( e.target );
		console.log( listItem.list_item_value );

		_fn_cb_mClick( listItem );

		window.KaiLog.timeStamp( "----- [ E ] - _evt_mClick__el_ListContainer():void----------" );
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_mDoubleClick__el_ListContainer = function( e )
	{
		window.KaiLog.timeStamp( "----- [ S ] - _evt_mDoubleClick__el_ListContainer():void----------" );

		console.log( e.target );
		if (e.target.nodeName.toLowerCase() === 'ul' )
		{
			_fn_cb_mClick( null );
			e.stopPropagation();
			e.preventDefault();
			window.KaiLog.timeStamp( "----- [ E ] - _evt_mDoubleClick__el_ListContainer():void----------" );
			return;
		}
		var listItem = _fn_getListItem( e.target );
		console.log( listItem.list_item_value );

		_fn_cb_mDoubleClick( listItem );

		window.KaiLog.timeStamp( "----- [ E ] - _evt_mDoubleClick__el_ListContainer():void----------" );
	};

	//----------------------------------------------------------------------------------------------------;

	//	FUNCTION;

	//----------------------------------------------------------------------------------------------------;

	/**
	 * @function
	 * @param {HTMLElement} t click target
	 * @return {ListItemElement}
	 */
	var _getListItem = function( t )
	{
		return _fn_getListItem( t );
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Object} d
	 */
	var _setData = function( d )
	{
		window.KaiLog.timeStamp( "----- [ S ] - _setData():void----------" );

		_setData.super( d );
		_fn_cb_mClick = d.fn.cb_mClick ? d.fn.cb_mClick : _fn_temp;
		_fn_cb_mDoubleClick = d.fn.cb_mDoubleClick ? d.fn.cb_mDoubleClick : _fn_temp;
		_fn_getListItem = d.fn.getListItem;

		window.KaiLog.timeStamp( "----- [ E ] - _setData():void----------" );
	};
	_setData.super = _this.setData;

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _dispose = function()
	{
		_removeEvent();

		$f0 = null;

		_el_ListContainer = null;

		_dispose.super();
	};
	_dispose.super = _this.dispose;

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER;

	//----------------------------------------------------------------------------------------------------;


	//----------------------------------------------------------------------------------------------------;

	//	LOGIC;

	//----------------------------------------------------------------------------------------------------;

	//----------;
	_addEvent();
	//----------;

	//--------------------------------------------------this;
	var _ = _this;

	_.__el = $el_ul;
	_.dispose = _dispose;
	_.setData = _setData;
	//--------------------------------------------------this;

	return _this;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;
