//----------------------------------------------------------------------------------------------------;
var fileNm = "./js/b2linkUIClass/baseList/window.b2linkUIClass.baseList.NextPrevSearch.js";
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
window.b2linkUIClass.baseList.NextPrevSearch = function( url, $el_ul )
{
	//Extends;
	var _this = window.b2linkUIClass.baseList.EventDispatcher( url, $el_ul );

	//----------------------------------------------------------------------------------------------------;

	//	STATIC;

	//----------------------------------------------------------------------------------------------------;

	/**
	 * @property {Element}}
	 */
	var _el_ListContainer = _this.get_el_ListContainer();

	//--------------------------------------------------;


	/**
	 * function( ListElement ){}
	 * @function
	 */
	_this._fn_apply_html_child = window.b2link.html_ul.apply_child;
	_this._fn_getListIdx_First = window.b2link.el_list.getIndex_First;
	_this._fn_getListIdx_Last = window.b2link.el_list.getIndex_Last;
	_this._fn_getItemData_First = window.b2link.el_list.getItemData_First;
	_this._fn_getItemData_Last = window.b2link.el_list.getItemData_Last;

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _fn_req_getSearchCount = null;
	_this._fn_req_getSearchCount = _fn_req_getSearchCount;

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _fn_req_getSearchList = null;
	_this._fn_req_getSearchList = _fn_req_getSearchList;

	//--------------------------------------------------;

	/**
	 * @property {Object}
	 */
	var _status_itemListContainer = {};
	_this._status_itemListContainer = _status_itemListContainer;

	//----------------------------------------------------------------------------------------------------;

	//	EVENT;

	//----------------------------------------------------------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	FUNCTION;

	//----------------------------------------------------------------------------------------------------;

	/**
	 * @function
	 */
	var _calc_DataNext = function()
	{
		window.KaiLog.timeStamp( "-- [ S ] - _calc_DataNext():void----------" );

		var o = _status_itemListContainer;
		var d = _this._fn_getItemData_Last( _el_ListContainer );
		if(d == null){
			window.KaiLog.timeStamp( "-- [ E ] - _calc_DataNext():void----------if( d == null )" );
			o.skip = 0;
			return;
		}
		var n = d.seq;
		if( n == o.maxCount )
		{
			window.KaiLog.timeStamp( "-- [ E ] - _calc_DataNext():void----------if( n == o.maxCount )" );
			o.skip = 0;
			return;
		}

		o.skip = n;

		window.KaiLog.timeStamp( "-- [ E ] - _calc_DataNext():void----------" );
	};

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _calc_DataPrev = function()
	{
		window.KaiLog.timeStamp( "-- [ S ] - _cale_DataPrev():void----------" );

		var o = _status_itemListContainer;
		var n = _this._fn_getItemData_First( _el_ListContainer ).seq;
		if( 1 == n )
		{
			window.KaiLog.timeStamp( "-- [ E ] - _cale_DataPrev():void----------if( 1 == n )" );
			if( parseInt( o.maxCount % o.limit ) === 0 ){
				o.skip = (parseInt( o.maxCount / o.limit ) - 1) * o.limit;
			} else {
				o.skip = parseInt( o.maxCount / o.limit ) * o.limit;
			}
			return;
		}

		o.skip = n - 1 - o.limit;

		window.KaiLog.timeStamp( "-- [ E ] - _cale_DataPrev():void----------" );
	};

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _req_Data_Next = function()
	{
		window.KaiLog.timeStamp( "-- [ S ] - _req_Data_Next():void----------" );

		var o = _status_itemListContainer;
		if(o.maxCount > o.limit)
		{
			_calc_DataNext();
			_fn_req_getSearchList( o.skip, o.limit, o.searchDivision, o.searchTeam, o.searchType, o.searchKeyword, _res_Data );
		}

		window.KaiLog.timeStamp( "-- [ E ] - _req_Data_Next():void----------" );
	};

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _req_Data_Prev = function()
	{
		window.KaiLog.timeStamp( "-- [ S ] - _req_Data_Prev():void----------" );

		var o = _status_itemListContainer;
		if(o.maxCount > o.limit)
		{
			_calc_DataPrev();
			_fn_req_getSearchList( o.skip, o.limit, o.searchDivision, o.searchTeam, o.searchType, o.searchKeyword, _res_Data );
		}

		window.KaiLog.timeStamp( "-- [ E ] - _req_Data_Prev():void----------" );
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Object}
	 */
	var _setData = function( d )
	{
		window.KaiLog.timeStamp( "-- [ S ] - _setData():void----------" );

		_setData.super();

		_this._fn_req_getSearchCount = _fn_req_getSearchCount = d.fn.req_getSearchCount;
		_this._fn_req_getSearchList = _fn_req_getSearchList = d.fn.req_getSearchList;

		_set__status_itemListContainer( d.skip, d.limit, d.maxCount, d.searchDivision, d.searchTeam, d.searchType, d.searchKeyword );

		window.KaiLog.timeStamp( "-- [ E ] - _setData():void----------" );
	};
	_setData.super = _this.setData;

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _req_Data = function()
	{
		window.KaiLog.timeStamp( "-- [ S ] - _req_Data():void----------" );

		var o = _status_itemListContainer;
		_this._fn_req_getSearchList( o.skip, o.limit, o.searchDivision, o.searchTeam, o.searchType, o.searchKeyword, _res_Data );

		window.KaiLog.timeStamp( "-- [ E ] - _req_Data():void----------" );
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Array} result
	 */
	var _res_Data = function( result )
	{
		window.KaiLog.timeStamp( "-- [ S ] - _res_Data():void----------" );

		_this._setData__ListItems( result );

		window.KaiLog.timeStamp( "-- [ E ] - _res_Data():void----------" );
	};
	_this._res_Data = _res_Data;

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Array} data
	 */
	var _setData__ListItems = function( data ) // override 당함
	{
		window.KaiLog.timeStamp( "-- [ S ] - _setData__ListItems():void----------" );

		var el = _this._el_ListContainer;

		_this._fn_apply_html_child( el, data );

		//window.b2link.element.injectValueForListItems( el, data );
		window.b2link.element.injectValueForListItemsAndID( el, data );

		_this.dispatch_LIST_DATA_CHANGED();

		window.KaiLog.timeStamp( "-- [ E ] - _setData__ListItems():void----------" );
	};
	_this._setData__ListItems = _setData__ListItems;//override;

	//--------------------------------------------------;

	/**
	 * @function
	 * @return {HTMLElement}
	 */
	var _get_el_ListContainer = function()
	{
		return _el_ListContainer;
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @return {Object}
	 */
	var _get__status_itemListContainer = function()
	{
		return _status_itemListContainer;
	};

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {uint} skip
	 * @param {uint} limit
	 * @param {uint} maxCount
	 * @param {String} searchType
	 * @param {String} searchKeyword
	 */
	var _set__status_itemListContainer = function( _skip, _limit, _maxCount, _searchDivision, _searchTeam, _searchType, _searchKeyword )
	{
		window.KaiLog.timeStamp( "-- [ S ] - _set__status_itemListContainer():void----------" );

		_status_itemListContainer.skip = _skip ? _skip : 0;
		_status_itemListContainer.limit = _limit ? _limit : 40;
		_status_itemListContainer.searchDivision = _searchDivision ? _searchDivision : "";
		_status_itemListContainer.searchTeam = _searchTeam ? _searchTeam : "";
		_status_itemListContainer.searchType = _searchType ? _searchType : "";
		_status_itemListContainer.searchKeyword = _searchKeyword ? _searchKeyword : "";

		if( _maxCount ) _status_itemListContainer.maxCount = _maxCount;
		else _set_Req__status_itemListContainer_maxCount();

		window.KaiLog.timeStamp( "-- [ E ] - _set__status_itemListContainer():void----------" );
	};

	//--------------------------------------------------;

	/**
	 * @function
	 */
	var _set_Req__status_itemListContainer_maxCount = function()
	{
		window.KaiLog.timeStamp( "-- [ S ] - _set_Req__status_itemListContainer_maxCount():void----------" );

		_this._fn_req_getSearchCount(
			_this._status_itemListContainer.searchDivision,
			_this._status_itemListContainer.searchTeam,
			_this._status_itemListContainer.searchType,
			_this._status_itemListContainer.searchKeyword,
			_set_Req__status_itemListContainer_maxCount._f0
		);

		window.KaiLog.timeStamp( "-- [ E ] - _set_Req__status_itemListContainer_maxCount():void----------" );
	};

	_this._set_Req__status_itemListContainer_maxCount = _set_Req__status_itemListContainer_maxCount;

	_set_Req__status_itemListContainer_maxCount._f0 = function( r ){
		_status_itemListContainer.maxCount = r;
	};

	//--------------------------------------------------;

	/**
	* @function
	*/
	var _dispose = function()
	{
		_removeEvent();

		_el_ListContainer = null;
		_fn_req_getSearchCount = null;
		_fn_req_getSearchList = null;
		_status_itemListContainer = null;

		_dispose.super();
	};
	_dispose.super = _this.dispose;

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER;

	//----------------------------------------------------------------------------------------------------;

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
	_.req_Data_Prev = _req_Data_Prev;
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
