//----------------------------------------------------------------------------------------------------;
var fileNm = "./js/b2linkUIClass/selector/window.b2linkUIClass.selector.List.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * ./ui_import/ 에서 사용한다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLUListElement} $el_ul 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLUListElement.
 */
window.b2linkUIClass.selector.List = function( url, $el_ul )
{
	//Extends;
	var _this = window.b2linkUIClass.base.RootElement( url, $el_ul );
	var _this = window.b2linkUIClass.selector.BaseEvent_User( url, $el_ul, _this );

	//----------------------------------------------------------------------------------------------------;

	//	STATIC;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------;

	/**
	 * @property {HTMLUListElement}
	 */
	var _el_ListContainer = $el_ul;
	//var _el_ListContainer = _this.get_el_ListContainer();

	var _fn_apply_html_child = window.b2link.html_ul.apply_child;

	var _fn_cb_mClick = null;
	var _fn_cb_mDoubleClick = null;

	var _fn_getListItem = null;

	var _fn_req_Data = null;

	var _fn_temp = function(){};

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	EVENT;

	//----------------------------------------------------------------------------------------------------;

	/**
	 * @override
	 * @function
	 */
	var _addEvent = function()
	{
		_removeEvent();

		_el_ListContainer.addEventListener( "click", _evt_mClick__el_ListContainer, false, 0, true );
		_el_ListContainer.addEventListener( "dblclick", _evt_mDoubleClick__el_ListContainer, false, 0, true );
		//KeyboardEvent;
		//_el_ListContainer.addEventListener( "keyup", _evt_kUp__el_ListContainer, false, 0, true );
	};

	/**
	 * @override
	 * @function
	 */
	var _removeEvent = function()
	{
		_el_ListContainer.removeEventListener( "click", _evt_mClick__el_ListContainer, false );
		_el_ListContainer.removeEventListener( "dblclick", _evt_mDoubleClick__el_ListContainer, false );
		//KeyboardEvent;
		//_el_ListContainer.removeEventListener( "keyup", _evt_kUp__el_ListContainer, false );
	};

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_mClick__el_ListContainer = function( e )
	{
		window.TtwLog.timeStamp( "----- [ S ] - _evt_mClick__el_ListContainer():void----------" );

		console.log( e.target );
		var listItem = _fn_getListItem( e.target );
		console.log( listItem.list_item_value );
		_fn_cb_mClick( listItem );

		window.TtwLog.timeStamp( "----- [ E ] - _evt_mClick__el_ListContainer():void----------" );
	};

	/**
	 * @function
	 * @param {MouseEvent} e event
	 */
	var _evt_mDoubleClick__el_ListContainer = function( e )
	{
		window.TtwLog.timeStamp( "----- [ S ] - _evt_mDoubleClick__el_ListContainer():void----------" );

		console.log( e.target );
		var listItem = _fn_getListItem( e.target );
		console.log( listItem.list_item_value );
		_fn_cb_mDoubleClick( listItem );

		window.TtwLog.timeStamp( "----- [ E ] - _evt_mDoubleClick__el_ListContainer():void----------" );
	};

	/**
	 * KeyboardEvent;
	 * @function
	 * @param {KeyboardEvent} e event
	 */
	/*/
	var _evt_kUp__el_ListContainer = function( e )
	{
		window.TtwLog.timeStamp( "----- [ S ] - _evt_kUp__el_ListContainer():void----------" );

		console.log( e.target );
		var listItem = _fn_getListItem( e.target );
		console.log( listItem.list_item_value );
		_fn_cb_kUp( listItem );

		window.TtwLog.timeStamp( "----- [ E ] - _evt_kUp__el_ListContainer():void----------" );
	};
	//*/

	//----------------------------------------------------------------------------------------------------;

	//	FUNCTION;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Function} evt_mClick
	 * @param {Function} evt_mDoubleClick
	 */
	var _addEvent__Callback = function( evt_mClick, evt_mDoubleClick )
	{
		_fn_cb_mClick = evt_mClick;
		_fn_cb_mDoubleClick = evt_mDoubleClick;
	};

	/**
	 * @function
	 */
	var _removeEvent__Callback = function()
	{
		_fn_cb_mClick = null;
		_fn_cb_mDoubleClick = null;
	};

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
		_removeEvent();

		$f0 = null;

		_el_ListContainer = null;

		_fn_req_Data = null;

		//_dispose.super();
	};
	//_dispose.super = _this.dispose;

	//--------------------------------------------------;

	/**
	 * @override
	 * @function
	 */
	var _req_Data = function()
	{
		window.TtwLog.timeStamp( "----- [ S ] - _req_Data():void----------" );

		if( _fn_req_Data )
		{
			if( arguments.hasOwnProperty( "0" ) ) _fn_req_Data( _res_Data, arguments );
			else _fn_req_Data( _res_Data );
		}
		//else window.b2link_ui.message.error( "_req_Data Error : _fn_req_Data가 존재하지 않습니다." );

		window.TtwLog.timeStamp( "----- [ E ] - _req_Data():void----------" );
	};

	//--------------------------------------------------;

	/**
	 * @override
	 * @function
	 * @param {Array}
	 */
	var _res_Data = function( result )
	{
		window.TtwLog.timeStamp( "----- [ S ] - _res_Data():void----------" );

		_setData__ListItems( result );

		window.TtwLog.timeStamp( "----- [ E ] - _res_Data():void----------" );
	};

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {HTMLElement} t click target
	 * @return {ListItemElement}
	 */
	/*/
	var _getListItem = function( t )
	{
//		window.TtwLog.timeStamp( "----- [ s ] - _getListItem():{ListItemElement}----------" );
//		var listItem = _fn_getListItem( t );
//			//console.log( listItem );
//		window.TtwLog.timeStamp( "----- [ E ] - _getListItem():{ListItemElement}----------" );
//		return listItem;

		return _fn_getListItem( t );
	};
	//*/

	//--------------------------------------------------;

	/**
	 * @override
	 * @function
	 * @param {Object} d
	 * <code>
	 * {
	 *	"fn" : {
	 *		"cb_mClick" : function( e ){}
	 *		"cb_mDoubleClick" : function( e ){}
	 *
	 *		, "req_Data" : function( cbComplete ){}
	 *
	 *		, "getListItem" : function( event.target ){}
	 *	}
	 * }
	 * </code>
	 */
	var _setData = function( d )
	{
		window.TtwLog.timeStamp( "----- [ S ] - _setData():void----------" );

		//_setData.super( d );

		_fn_cb_mClick = d.fn.cb_mClick ? d.fn.cb_mClick : _fn_temp;
		_fn_cb_mDoubleClick = d.fn.cb_mDoubleClick ? d.fn.cb_mDoubleClick : _fn_temp;

		_fn_req_Data = d.fn.req_Data ? d.fn.req_Data : _fn_req_Data;
		_fn_getListItem = d.fn.getListItem ? d.fn.getListItem : _fn_getListItem;

		window.TtwLog.timeStamp( "----- [ E ] - _setData():void----------" );
	};
	//_setData.super = _this.setData;

	/**
	 * @override
	 * @function
	 * @param {Array} data
	 */
	var _setData__ListItems = function( data )
	{
		window.TtwLog.timeStamp( "----- [ S ] - _setData__ListItems():void----------" );

		//console.log( data );

		var el = _el_ListContainer;

		_fn_apply_html_child( el, data );

		//window.b2link.element.injectValueForListItems( el, data );
		if( data ) window.b2link.element.injectValueForListItemsAndID( el, data );

		window.TtwLog.timeStamp( "----- [ E ] - _setData__ListItems():void----------" );
	};

	//--------------------------------------------------;

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
	//----------;

	//--------------------------------------------------this;
	var _ = _this;

		_.__el = _el_ListContainer;

		_.addEvent__Callback = _addEvent__Callback;

		_.dispose = _dispose;

		_.removeEvent__Callback = _removeEvent__Callback;

		_.req_Data = _req_Data;

		_.get_res_Data = _res_Data;

		_.setData = _setData;
	//--------------------------------------------------this;
	return _;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;