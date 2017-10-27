//----------------------------------------------------------------------------------------------------;
var fileNm = "./js/b2linkUIClass/baseTable/window.b2linkUIClass.baseTable.NextPrevAdd.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * window.b2linkUIClass.baseTable.NextPrev를 상속 받는다.
 *
 * 다량의 List Data를 범위를 지정하여 가져온다.
 * _this.setData를 이용히여 callback 및 option을 설정할 수 있다.
 * 한번에 가져올 데이터의 수량을 설정할 수 있다.
 * callback 설정 API 목록
 *	- 전체 갯수를 요청할 수 있는 API
 *	- 범위를 설정하여 데이터를 요청할 수 있는 API
 *
 * 가져온 데이터는 계속 추가로 등록되어 보여준다.
 * 기존 데이터 및 ListItemElement(HTMLLIElement, HTMLTableRowElement, ...)는 제거되지 않고 남아있다.
 * 새 데이터를 받으면 ListItemElement(HTMLLIElement, HTMLTableRowElement, ...)가 새롭게 생성된다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLTableElement} $el_table 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLTableElement.
 */
window.b2linkUIClass.baseTable.NextPrevAdd = function( url, $el_table )
{
	//Extends;
	var _this = window.b2linkUIClass.baseTable.NextPrev( url, $el_table );

	//----------------------------------------------------------------------------------------------------;

	//	STATIC;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------;

	_this._fn_apply_html_child = window.b2link.html_tbody.apply_child__ReUseKeyList;
	_this._fn_push_el_child = window.b2link.el_tbody.push_child;
	_this._fn_unsihft_el_child = window.b2link.el_tbody.unshift_child;

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

		var o = _this._status_itemListContainer;
		var n = _this._fn_getListIdx_Last( _this._el_ListContainer );
		if( n == o.maxCount )
		{
			window.TtwLog.timeStamp( "-- [ E ] - _calc_DataNext():void----------if( n == o.maxCount )" );
			o.idS = o.maxCount + 1;
			return 1;
		}

		/*/
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
			/*/
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

		var o = _this._status_itemListContainer;
		var n = _this._fn_getListIdx_First( _this._el_ListContainer );
		if( 0 == n )
		{
			window.TtwLog.timeStamp( "-- [ E ] - _cale_DataPrev():void----------if( 0 == n )" );
			o.idS = -2;
			return 1;
		}

		/*/
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
		_this._fn_req_getCount = null;
		_this._fn_req_getList_Range__id = null;

		_this._status_itemListContainer = null;

		_this._n_status_req = null;
	};

	//--------------------------------------------------;

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

		var o = _this._status_itemListContainer;
		/*/
		//if( o.idE >= o.maxCount )
		if( o.idE >= o.maxCount && o.idS == o.maxCount )
		{
			window.TtwLog.timeStamp( "-- [ E ] - _req_Data_Next():void----------return;" );
			return;
		}
		//*/

		if( o.idS < o.maxCount )
		{
			_this._n_status_req = 1;
			_this._fn_req_getList_Range__id( o.idS, o.idE, _this._res_Data );
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

		var o = _this._status_itemListContainer;
		//if( o.idE >= o.maxCount )
		if( o.idE >= o.maxCount && o.idS == o.maxCount )
		{
			window.TtwLog.timeStamp( "-- [ E ] - _req_Data_NextEnd():void----------return;" );
			return;
		}

		if( o.idS < o.maxCount )
		{
			_this._n_status_req = 1;
			_this._fn_req_getList_Range__id( o.idS, o.idE, _this._res_Data );
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

		var o = _this._status_itemListContainer;
		if( o.idS < -1 )
		{
			window.TtwLog.timeStamp( "-- [ E ] - _req_Data_Prev():void----------return;" );
			return;
		}

		if( 1 < o.idE )
		{
			_this._n_status_req = 0;
			_this._fn_req_getList_Range__id( o.idS, o.idE, _this._res_Data );
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

		var o = _this._status_itemListContainer;
		if( o.idS < -1 )
		{
			window.TtwLog.timeStamp( "-- [ E ] - _req_Data_PrevEnd():void----------return;" );
			return;
		}

		if( 1 < o.idE )
		{
			_this._n_status_req = 0;
			_this._fn_req_getList_Range__id( o.idS, o.idE, _this._res_Data );
		}

		window.TtwLog.timeStamp( "-- [ E ] - _req_Data_PrevEnd():void----------" );
	};

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {Array} data
	 */
	var _setData__ListItems = function( data )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _setData__ListItems():void----------" );

		//console.log( data );

		var el = _this._el_ListContainer;

		if( 1 == el.children.length )
		{
			_this._fn_apply_html_child( el, data );

			//window.b2link.element.injectValueForListItems( el, data );
			window.b2link.element.injectValueForListItemsAndID( el, data );
		}
		else
		{
			var f0 = window.b2link.element.injectValueForListItem;
			var len = el.children.length;
			var i=0, iLen=data.length;

			console.log( "_this._n_status_req : " + _this._n_status_req );

			if( _this._n_status_req )
			{
				_this._fn_push_el_child( el, data );
				for( ; i<iLen; ++i )
				{
					data[ i ].$idx = i;
					f0( el.children[ i + len ], data[ i ] );
					//console.log( data[ i ] );
				}
			}
			else
			{
				_this._fn_unsihft_el_child( el, data );
				for( ; i<iLen; ++i )
				{
					data[ i ].$idx = i;
					f0( el.children[ i ], data[ i ] );
					//console.log( data[ i ] );
				}
			}
			//console.log( "기존 Length : " + len );
			//console.log( "시작 Index : " + i );
			//console.log( "추가 Length : " + iLen );
		}

		_this.dispatch_TABLE_DATA_CHANGED();

		window.TtwLog.timeStamp( "-- [ E ] - _setData__ListItems():void----------" );
	};
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

	_this.setEventDispatcher( $el_table );

	//--------------------------------------------------this;
	var _ = _this;

	_.__el = $el_table;

	_.dispose = _dispose;

	_.req_Data_Next = _req_Data_Next;
	_.req_Data_NextEnd = _req_Data_NextEnd;
	_.req_Data_Prev = _req_Data_Prev;
	_.req_Data_PrevEnd = _req_Data_PrevEnd;

	//--------------------------------------------------this;

	return _this;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;