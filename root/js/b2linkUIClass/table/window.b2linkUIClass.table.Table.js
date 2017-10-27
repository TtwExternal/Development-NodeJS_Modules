//----------------------------------------------------------------------------------------------------;
var fileNm = "./js/b2linkUIClass/table/window.b2linkUIClass.table.Table.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * ./ui_import/ 에서 사용한다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLElement} $el_select 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLElement.
 * @param {Object} _this 이 API를 통해 기능이 상속되어질 객체. 없으면 새로 생성한다.
 */
window.b2linkUIClass.table.Table = function( url, $el_table )
{
	//Extends;
	var _this = window.b2linkUIClass.base.EventDispatcher( url, $el_table );
		_this = window.b2linkUIClass.base.RootElement( url, $el_table, _this );
		_this = window.b2linkUIClass.base.Event_User_KeyboardAndMouse( url, $el_table, _this );

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
	_this.$f0 = window.b2link.element.getElementByClassName;

	/**
	 * @property {HTMLElement}
	 */
	var _el_tbody = _this.$f0( $el_table, "tbody" );

	/**
	 * @property {HTMLElement}
	 */
	var _el_thead = _this.$f0( $el_table, "thead" );

	//--------------------------------------------------;

	/**
	 * _el_thead.children[ 0 ]이(tr_th) template html( {{}}등으로 작성되있는 상태 ) 상태인지 여부
	 * @property {Boolean}
	 */
	var _bFirst_template_html_tr_td = 1;

	/**
	 * _el_tbody.children[ 0 ]이(tr_td) template html( {{}}등으로 작성되있는 상태 ) 상태인지 여부
	 * @property {Boolean}
	 */
	var _bFirst_template_html_tr_th = 1;

	/**
	 * @property {Array}
	 */
	var _data = null;

	/**
	 * @property {String}
	 */
	var _template_html_tr_td = null;

	/**
	 * @property {String}
	 */
	var _template_html_tr_th = null;

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
		window.TtwLog.timeStamp( "---- [ S ] - window.b2linkUIClass.table.Table._addEvent():void----------" );

		//_addEvent.super()
		_removeEvent();

		window.TtwLog.timeStamp( "---- [ E ] -  window.b2linkUIClass.table.Table._addEvent():void----------" );
	};
	_addEvent.super = _this.addEvent;

	/**
	 * @function
	 */
	var _removeEvent = function()
	{
		window.TtwLog.timeStamp( "---- [ S ] - window.b2linkUIClass.table.Table._removeEvent():void----------" );

		//_removeEvent.super();

		window.TtwLog.timeStamp( "---- [ E ] - window.b2linkUIClass.table.Table._removeEvent():void----------" );
	};
	_removeEvent.super = _this.removeEvent;

	//----------------------------------------------------------------------------------------------------;

	//	FUNCTION;

	//----------------------------------------------------------------------------------------------------;

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
		window.TtwLog.timeStamp( "---- [ S ] - window.b2linkUIClass.table.Table._dispose():void----------" );

		_removeEvent();

		if( _dispose.super ) _dispose.super();

		_this = null;

		window.TtwLog.timeStamp( "---- [ E ] - window.b2linkUIClass.table.Table._dispose():void----------" );
	};
	if( _this.dispose ) _dispose.super = _this._dispose;

	//--------------------------------------------------;

	/**
	 * @Override
	 * @function
	 */
	var _draw = function()
	{
		window.TtwLog.timeStamp( "---- [ S ] - window.b2linkUIClass.table.Table._draw():void----------" );

		if( _bFirst_template_html_tr_td )
		{
			_bFirst_template_html_tr_td = 0;
			window.b2link.html_tbody.apply_child__ReUseKeyList( _el_tbody, _data );
			window.b2link.element.injectValueForListItemsAndID( _el_tbody, _data );
		}
		else
		{
			_redraw();
		}

		window.TtwLog.timeStamp( "---- [ E ] - window.b2linkUIClass.table.Table._draw():void----------" );
	};

	/**
	 * 내부 상태 값에 따라서 <tr>들을 객체들을 생성하거나 재사용한다.
	 * @Override
	 * @function
	 */
	var _draw_or_redraw = function()
	{
		window.TtwLog.timeStamp( "---- [ S ] - window.b2linkUIClass.table.Table._draw_or_redraw():void----------" );

		if( 1 == _el_tbody.children[ 0 ].length && _bFirst_template_html_tr_td )
		{
			_draw();
		}
		else
		{
			_redraw();
		}

		window.TtwLog.timeStamp( "---- [ E ] - window.b2linkUIClass.table.Table._draw_or_redraw():void----------" );
	};

	//--------------------------------------------------;



	//--------------------------------------------------;

	/**
	 * @Override
	 * @function
	 */
	var _redraw = function()
	{
		window.TtwLog.timeStamp( "---- [ S ] - window.b2linkUIClass.table.Table._redraw():void----------" );

		if( _bFirst_template_html_tr_td )
		{
			_draw();
		}
		else
		{
			window.b2link.el_tbody.change_child( _el_tbody, _data );
		}

		window.TtwLog.timeStamp( "---- [ E ] - window.b2linkUIClass.table.Table._redraw():void----------" );
	};

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------GET;

	//--------------------------------------------------SET;

	/**
	 * @function
	 * @param {String} s
	 */
	var _setTemplateHTML_TR_TD = function( s )
	{
		window.TtwLog.timeStamp( "---- [ S ] - window.b2linkUIClass.table.Table._setTemplateHTML_TR_TD():void----------" );

		_template_html_tr_td = s;

		_el_tbody.innerHTML = "";
		_el_tbody.innerHTML = _template_html_tr_td;

		_bFirst_template_html_tr_td = 1;

		_draw_or_redraw();

		window.TtwLog.timeStamp( "---- [ E ] - window.b2linkUIClass.table.Table._setTemplateHTML_TR_TD():void----------" );
	};

	/**
	 * @function
	 * @param {String} s
	 */
	var _setTemplateHTML_TR_TH = function( s )
	{
		window.TtwLog.timeStamp( "---- [ S ] - window.b2linkUIClass.table.Table._setTemplateHTML_TR_TH():void----------" );

		_template_html_tr_th = s;

		_el_tbody.innerHTML = "";
		_el_tbody.innerHTML = _template_html_tr_th;

		_bFirst_template_html_tr_td = 1;

		_draw_or_redraw();

		window.TtwLog.timeStamp( "---- [ E ] - window.b2linkUIClass.table.Table._setTemplateHTML_TR_TH():void----------" );
	};

	//--------------------------------------------------GET / SET;

	/**
	 * @function
	 * @return {Array}
	 */
	var _getDataProvider = function(){ return _data; };

	/**
	 * @function
	 * @param {Array} data
	 */
	var _setDataProvider = function( data )
	{
		window.TtwLog.timeStamp( "---- [ S ] - window.b2linkUIClass.table.Table._setDataProvider():void----------" );

		_data = data;
		_draw_or_redraw();

		window.TtwLog.timeStamp( "---- [ E ] - window.b2linkUIClass.table.Table._setDataProvider():void----------" );
	};

	/**
	 * @function
	 * @return {HTMLElement}
	 */
	var _getTBody = function(){ return _el_tbody; }

	/**
	 * @function
	 * @param {HTMLElement} el_tbody
	 */
	var _setTBody = function( el_tbody )
	{
		window.TtwLog.timeStamp( "---- [ S ] - window.b2linkUIClass.table.Table._setTBody():void----------" );

		if( el_tbody.parentElement == $el_table )
		{
			_el_tbody = el_tbody;
		}

		window.TtwLog.timeStamp( "---- [ E ] - window.b2linkUIClass.table.Table._setTBody():void----------" );
	};

	/**
	 * @function
	 * @return {HTMLElement}
	 */
	var _getTHead = function(){ return _el_thead; };

	/**
	 * @function
	 * @param {HTMLElement} el_thead
	 */
	var _setTHead = function( el_thead )
	{
		window.TtwLog.timeStamp( "---- [ S ] - window.b2linkUIClass.table.Table._setTHead():void----------" );

		if( el_thead.parentElement == $el_table )
		{
			_el_thead = el_thead;
		}

		window.TtwLog.timeStamp( "---- [ E ] - window.b2linkUIClass.table.Table._setTHead():void----------" );
	};

	//--------------------------------------------------GETTER;

	//--------------------------------------------------SETTER;

	_this.__defineSetter__( "thead_th", _setTemplateHTML_TR_TH );
	_this.__defineSetter__( "tbody_tr", _setTemplateHTML_TR_TD );

	//--------------------------------------------------GETTER / SETTER;

	_this.__defineGetter__( "dataProvider", _getDataProvider );
	_this.__defineSetter__( "dataProvider", _setDataProvider );

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	LOGIC;

	//----------------------------------------------------------------------------------------------------;

	window.b2link.el_tbody.change_child( _el_tbody, [] );

	//--------------------------------------------------this;
	var _ = _this;

		_.__el = $el_table;

		_.addEvent = _addEvent;
		_.removeEvent = _removeEvent;

		_.dispose = _dispose;

		_.draw_or_redraw = _draw_or_redraw;

		_.getTBody = _getTBody;
		_.setTBody = _setTBody;

		_.getTHead = _getTHead;
		_.setTHead = _setTHead;
	//--------------------------------------------------this;
	return _;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;