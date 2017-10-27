//----------------------------------------------------------------------------------------------------;
var fileNm = "./js/b2linkUIClass/baseList/window.b2linkUIClass.baseList.NextPrev.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * window.b2linkUIClass.baseList.EventDispatcher를 상속 받는다.
 *
 * 다량의 List Data를 범위를 지정하여 가져온다.
 * _this.setData를 이용히여 callback 및 option을 설정할 수 있다.
 * 한번에 보여줄 데이터의 수량을 설정할 수 있다.
 * callback 설정 API 목록
 *	- 전체 갯수를 요청할 수 있는 API
 *	- 범위를 설정하여 데이터를 요청할 수 있는 API
 *
 * 기존 데이터 및 ListItemElement(HTMLLIElement, HTMLTableRowElement, ...)는 제거된다.
 * 새 데이터를 받으면 ListItemElement(HTMLLIElement, HTMLTableRowElement, ...)가 새롭게 생성된다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLUListElement} $el_ul 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLUListElement.
 */
window.b2linkUIClass.baseList.NextPrev = function( url, $el_ul )
{
	//Extends;
	var _this = window.b2linkUIClass.baseList.EventDispatcher( url, $el_ul );

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
	 * @property {Element}}
	 */
	var _el_ListContainer = _this.get_el_ListContainer();

	//------------------------------;

	_this._fn_apply_html_child = window.b2link.html_ul.apply_child;

	/**
	 * function( ListElement ){}
	 * @function
	 */
	_this._fn_getListIdx_First = window.b2link.el_list.getIndex_First;
	_this._fn_getListIdx_Last = window.b2link.el_list.getIndex_Last;

	//------------------------------;

	/**
	 * @function
	 */
	var _fn_req_getCount = null;
	_this._fn_req_getCount = _fn_req_getCount;

	/**
	 * @function
	 */
	var _fn_req_getList_Range__id = null;
	_this._fn_req_getList_Range__id = _fn_req_getList_Range__id;

	//------------------------------;

	/**
	 * @Property {uint} 0 or 1 - 0(Prev), 1(Next)
	 */
	var _n_status_req = null;
	_this._n_status_req = _n_status_req;

	//------------------------------;

	/**
	 * @property {Object}
	 */
	var _status_itemListContainer = { idS : -1, idE : 10, limit : 10, maxCount : 0 };
	_this._status_itemListContainer = _status_itemListContainer;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	EVENT;

	//----------------------------------------------------------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	FUNCTION;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _calc_DataNext = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _calc_DataNext():void----------" );

		var o = _status_itemListContainer;
		var n = _this._fn_getListIdx_Last( _el_ListContainer );
		if( n == o.maxCount )
		{
			window.TtwLog.timeStamp( "-- [ E ] - _calc_DataNext():void----------if( n == o.maxCount )" );
			o.idS = o.maxCount + 1;
			return 1;
		}

		//*/
		o.idS += o.limit;
		o.idE += o.limit;
		/*/
		o.idS = n + 1;
		o.idE = o.idS + o.limit;
		//*/

		console.log( "o.maxCount : " + o.maxCount );
		console.log( "o.idS : " + o.idS );
		console.log( "o.idE : " + o.idE );

		if( o.idS > o.maxCount )
		{
			//*/
			o.idE = o.maxCount;
			o.idS = o.maxCount - o.limit;
			//*/
			return;
		}

		window.TtwLog.timeStamp( "-- [ E ] - _calc_DataNext():void----------" );
	};

	/**
	 * @function
	 */
	var _calc_DataPrev = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _cale_DataPrev():void----------" );

		var o = _status_itemListContainer;
		var n = _this._fn_getListIdx_First( _el_ListContainer );
		if( 0 == n )
		{
			window.TtwLog.timeStamp( "-- [ E ] - _cale_DataPrev():void----------if( 0 == n )" );
			o.idS = -2;
			return 1;
		}

		//*/
		o.idS -= o.limit;
		o.idE -= o.limit;
		/*/
		o.idE = n - 1;
		o.idS = o.idE - o.limit;
		//*/

		console.log( "o.maxCount : " + o.maxCount );
		console.log( "o.idS : " + o.idS );
		console.log( "o.idE : " + o.idE );

		if( -1 > o.idS )
		{
			o.idS = -1;
			o.idE = o.idS + o.limit;
		}

		window.TtwLog.timeStamp( "-- [ E ] - _cale_DataPrev():void----------" );
	};

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _dispose = function()
	{
		_removeEvent();

		_el_ListContainer = null;

		_fn_req_getCount = null;
		_fn_req_getList_Range__id = null;

		_n_status_req = null;

		_status_itemListContainer = null;

		_dispose.super();
	};
	_dispose.super = _this.dispose;

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _req_Data = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _req_Data():void----------" );

		var o = _status_itemListContainer;
		_this._fn_req_getList_Range__id( o.idS, o.idE, _res_Data );

		window.TtwLog.timeStamp( "-- [ E ] - _req_Data():void----------" );
	};

	/**
	 * @function
	 */
	var _req_Data_Next = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _req_Data_Next():void----------" );

		if( _calc_DataNext() )
		{
			window.TtwLog.timeStamp( "-- [ E ] - _req_Data_Next():void----------if( _calc_DataNext() )" );
			return;
		}

		var o = _status_itemListContainer;
		/*/
		if( o.idE >= o.maxCount )
		{
			window.TtwLog.timeStamp( "-- [ E ] - _req_Data_Next():void----------return;" );
			return;
		}
		//*/

		if( o.idS < o.maxCount )
		{
			_n_status_req = 1;
			_fn_req_getList_Range__id( o.idS, o.idE, _res_Data );
		}

		window.TtwLog.timeStamp( "-- [ E ] - _req_Data_Next():void----------" );
	};

	/**
	 * @function
	 */
	var _req_Data_NextEnd = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _req_Data_NextEnd():void----------" );

		_calc_DataNext();
		_calc_DataNext();

		var o = _status_itemListContainer;
		if( o.idE >= o.maxCount )
		{
			window.TtwLog.timeStamp( "-- [ E ] - _req_Data_NextEnd():void----------return;" );
			return;
		}

		if( o.idS < o.maxCount )
		{
			_n_status_req = 1;
			_fn_req_getList_Range__id( o.idS, o.idE, _res_Data );
		}

		window.TtwLog.timeStamp( "-- [ E ] - _req_Data_NextEnd():void----------" );
	};

	/**
	 * @function
	 */
	var _req_Data_Prev = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _req_Data_Prev():void----------" );

		if( _calc_DataPrev() )
		{
			window.TtwLog.timeStamp( "-- [ E ] - _req_Data_Prev():void----------if( _calc_DataPrev() )" );
			return;
		}

		var o = _status_itemListContainer;
		if( o.idS < -1 )
		{
			window.TtwLog.timeStamp( "-- [ E ] - _req_Data_Prev():void----------return;" );
			return;
		}

		if( 1 < o.idE )
		{
			_n_status_req = 0;
			_fn_req_getList_Range__id( o.idS, o.idE, _res_Data );
		}

		window.TtwLog.timeStamp( "-- [ E ] - _req_Data_Prev():void----------" );
	};

	/**
	 * @function
	 */
	var _req_Data_PrevEnd = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _req_Data_PrevEnd():void----------" );

		_calc_DataPrev();
		_calc_DataPrev();

		var o = _status_itemListContainer;
		if( o.idS < -1 )
		{
			window.TtwLog.timeStamp( "-- [ E ] - _req_Data_PrevEnd():void----------return;" );
			return;
		}

		if( 1 < o.idE )
		{
			_n_status_req = 0;
			_fn_req_getList_Range__id( o.idS, o.idE, _res_Data );
		}

		window.TtwLog.timeStamp( "-- [ E ] - _req_Data_PrevEnd():void----------" );
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Array} result
	 */
	var _res_Data = function( result )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _res_Data():void----------" );

		_this._setData__ListItems( result );

		window.TtwLog.timeStamp( "-- [ E ] - _res_Data():void----------" );
	};
	_this._res_Data = _res_Data;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * @function
	 * @return {HTMLElement}
	 */
	var _get_el_ListContainer = function(){ return _el_ListContainer; };

	//--------------------------------------------------;

	/*
	 * 첫번째 데이터 정보 반환
	 * @function
	 * @return {Object}
	 */
	var _getListItem_FirstData = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _getListItem_FirstData():{Object}----------" );


		if( _el_ListContainer.children.length > 0 )
		{
			window.TtwLog.timeStamp( "-- [ E ] - _getListItem_FirstData():{Object}----------return window.b2link.el_list.getItemData_First( _el_ListContainer );" );
			return window.b2link.el_list.getItemData_First( _el_ListContainer );
		}

		window.TtwLog.timeStamp( "-- [ E ] - _getListItem_FirstData():{Object}----------return null;" );
		return null;
	};
	_this._getListItem_FirstData = _getListItem_FirstData;

	/*
	 * 마지막 데이터 정보 반환
	 * @function
	 * @return {Object} d
	 */
	var _getListItem_LastData = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _getListItem_LastData():{Object}----------" );

		var d;
		if( _el_ListContainer.children.length > 0 )
			d = window.b2link.el_list.getItemData_Last( _el_ListContainer );

		if( !d )
			//수정하기 - 20170117 - 송선우 - 수식으로 계산이 이상함;
			d = window.b2link.el_list.getItemData_Last__maxCount_Limit( _el_ListContainer, _this.get__status_itemListContainer() );

		window.TtwLog.timeStamp( "-- [ E ] - _getListItem_LastData():{Object}----------" );
		return d;
	};
	_this._getListItem_LastData = _getListItem_LastData;

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Object} d
	 * <code>
	 * {
	 *	"idStart" : -1
	 *	, "idEnd" : 20
	 *	, "limit" : 20
	 *	, "maxCount" : null
	 *	"fn" : {
	 *		"req_getCount" : {Function}
	 *		, "req_getList_Range__id" : {Function}
	 *	}
	 * }
	 * </code>
	 */
	var _setData = function( d )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _setData():void----------" );

		_setData.super();

		_this._fn_req_getCount = _fn_req_getCount = d.fn.req_getCount;
		_this._fn_req_getList_Range__id = _fn_req_getList_Range__id = d.fn.req_getList_Range__id;

		_set__status_itemListContainer( d.idStart, d.idEnd, d.limit, d.maxCount );

		window.TtwLog.timeStamp( "-- [ E ] - _setData():void----------" );
	};
	_setData.super = _this.setData;

	//------------------------------;

	/**
	 * @function
	 * @param {Array} data
	 */
	var _setData__ListItems = function( data )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _setData__ListItems():void----------" );

		//console.log( data );

		var el = _this._el_ListContainer;

		_this._fn_apply_html_child( el, data );

		//window.b2link.element.injectValueForListItems( el, data );
		window.b2link.element.injectValueForListItemsAndID( el, data );

		_this.dispatch_LIST_DATA_CHANGED();

		window.TtwLog.timeStamp( "-- [ E ] - _setData__ListItems():void----------" );
	};
	_this._setData__ListItems = _setData__ListItems;//override;

	//------------------------------;

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _set_Req__status_itemListContainer_maxCount = function()
	{
		window.TtwLog.timeStamp( "-- [ S ] - _set_Req__status_itemListContainer_maxCount():void----------" );

		_this._fn_req_getCount( _set_Req__status_itemListContainer_maxCount._f0 );

		window.TtwLog.timeStamp( "-- [ E ] - _set_Req__status_itemListContainer_maxCount():void----------" );
	};
	_this._set_Req__status_itemListContainer_maxCount = _set_Req__status_itemListContainer_maxCount;

	_set_Req__status_itemListContainer_maxCount._f0 = function( r ){ _status_itemListContainer.maxCount = r; };

	//--------------------------------------------------;

	/**
	 * @function
	 * @return {Object} { "idS" : 0, "idE" : 10, "limit" : 10, "maxCount" : 0 };
	 */
	var _get__status_itemListContainer = function(){ return _status_itemListContainer; };
	/**
	 * @function
	 * @param {uint} idStart
	 * @param {uint} idEnd
	 * @param {uint} limit
	 * @param {uint} maxCount
	 */
	var _set__status_itemListContainer = function( idStart, idEnd, limit, maxCount )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _set__status_itemListContainer():void----------" );

		_status_itemListContainer.idS = idStart ? idStart : -1;
		_status_itemListContainer.idE = idEnd ? idEnd : 20;
		_status_itemListContainer.limit = limit ? limit : 20;

		if( maxCount ) _status_itemListContainer.maxCount = maxCount;
		else _set_Req__status_itemListContainer_maxCount();

		console.log( _status_itemListContainer );

		window.TtwLog.timeStamp( "-- [ E ] - _set__status_itemListContainer():void----------" );
	};

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	LOGIC;

	//----------------------------------------------------------------------------------------------------;

	_this.setEventDispatcher( $el_ul );

	//--------------------------------------------------this;
	var _ = _this;

	_.__el = $el_ul;

	_.dispose = _dispose;

	_.req_Data = _req_Data;
	_.req_Data_Next = _req_Data_Next;
	_.req_Data_NextEnd = _req_Data_NextEnd;
	_.req_Data_Prev = _req_Data_Prev;
	_.req_Data_PrevEnd = _req_Data_PrevEnd;

	_.get_el_ListContainer = _get_el_ListContainer

	_.get__status_itemListContainer = _get__status_itemListContainer;
	_.set__status_itemListContainer = _set__status_itemListContainer;

	_.setData = _setData;
	//--------------------------------------------------this;

	return _this;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;