//----------------------------------------------------------------------------------------------------;
var fileNm = "./js/b2linkUIClass/base/window.b2linkUIClass.base.Event.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 일반적인 Event Listener를 사전에 등록 후 약속된 callback를 실행하는 기능을 상속 시킨다.
 * HTMLElement의 className과 같은 callback을 등록 및 제거 하는 기능을 상속시킨다.
 * HTML Tag의 Attributes에 약속된 AttributeName으로 callback을 등록 및 제거하는 기능을 상속시킨다.
 *	- 약속된 Attributes : evt_mclick, evt_mdoubleclick, evt_kdown, evt_kup, ...
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLElement} $el 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLElement.
 * @param {Object} _this 이 API를 통해 기능이 상속되어질 객체. 없으면 새로 생성한다.
 */
window.b2linkUIClass.base.Event = function( url, $el, _this )
{
	if( !_this )
	{
		//window.b2link.ui_resource.applyParentheses_LocaleLabel( url, $el );//***.local.**.json을 가져온 후 TargetElement.innerHTML의 ((label)) 문자열에 치환 시켜준다.;
		window.b2link.ui_resource.applyParentheses_LocaleLabel_Children( url, $el );//***.local.**.json을 가져온 후 TargetElement.children[ i ].innerHTML의 ((label)) 문자열에 치환 시켜준다.;
	}

	//----------------------------------------------------------------------------------------------------;

	//	STATIC;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	/**
	 * @private
	 * @property {Object}
	 */
	var _this = _this ? _this : { __url : url };

	/**
	 * @private
	 * @property {Boolean}
	 */
	_this.bAddEvent_Keyboard = false;

	/**
	 * @private
	 * @property {Boolean}
	 */
	_this.bAddEvent_Mouse = false;

	/**
	 * @private
	 * @property {Object}
	 */
	var _o_events_callback = {};

	/**
	 * @private
	 * @property {Object}
	 */
	var _o_events_callback__className = {};

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	EVENT;

	//----------------------------------------------------------------------------------------------------;

	/**
	 * 이 Controller의 HTMLElement에 사용할 EventListener를 추가한다.
	 * 무조건 등록할 예정인 이벤트를 한번 제거 후 등록한다.
	 * @function
	 */
	var _addEvent = function()
	{
		_removeEvent();
	};

	/**
	 * 이 Controller의 HTMLElement에 추가한 EventListener를 제거한다.
	 * @function
	 */
	var _removeEvent = function(){};

	//----------------------------------------------------------------------------------------------------;

	//	FUNCTION;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * Element에 class=""로 정의된 문자열을 Key값으로 CallBack 함수를 등록하는 함수
	 * @function
	 * @param {String} key
	 * @param {Function} func
	 */
	var _addEventCallBackFunction__ClassName = function( key, func )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _addEventCallBackFunction__ClassName():void----------" );

		var t = _o_events_callback__className;
		if( t[ key ] )
		{
			console.log( key + "가 존재한다." );
		}
		else
		{
			t[ key ] = func;
			console.log( key + "생성." );
		}

		window.TtwLog.timeStamp( "-- [ E ] - _addEventCallBackFunction__ClassName():void----------" );
	};

	/**
	 * Element에 evt_mClick, evt_mDoubleClick, evt_kDown, evt_kUp, ...등 약속된 Custom Attribute로 정의한 Key값으로 CallBack 함수를 등록하는 함수
	 * @function
	 * @param {String} key
	 * @param {Function}
	 */
	var _addEventCallBackFunction__EventType = function( key, func )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _addEventCallBackFunction__EventType():void----------" );

		var t = _o_events_callback;
		if( t[ key ] )
		{
			console.log( key + "가 존재한다." );
		}
		else
		{
			t[ key ] = func;
			console.log( key + "생성." );
		}

		window.TtwLog.timeStamp( "-- [ E ] - _addEventCallBackFunction__EventType():void----------" );
	};

	//--------------------------------------------------;

	/**
	 * 이 Controller(_this)와 TargetElement(_this.__el)를 GC가 정상적으로 메모리에서 완전히 제거될수 있는 상태를 만든다.
	 * Reference Count를 0으로 만드는 행위를 한다.
	 * 각종 인스턴트 = null처리
	 * 모든 EventListener 제거
	 * 특정 자료구조에서 참조값 제거
	 * @Override
	 * @function
	 */
	var _dispose = function()
	{
		_removeEvent();

		_o_events_callback = null;

		_o_events_callback__className = null;

		window.b2link.ui.staticUIMap_Remove( _this.__el.__KEY_UI );

		if( _dispose.super ) _dispose.super();

		_this = null;
	};
	if( _this.dispose ) _dispose.super = _this._dispose;

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {String} k
	 * @param {Event} e
	 */
	var _execute__evtType = function( k, e )
	{
		//window.TtwLog.timeStamp( "-- [ S ] - _execute__evtType():void----------" );

		if( k )
		{
			console.log( "Key : " + k );
			var f = _o_events_callback[ k ];
			if( f ) f( e );
		}

		//window.TtwLog.timeStamp( "-- [ E ] - _execute__evtType():void----------" );
	};
	_this._execute__evtType = _execute__evtType;

	/**
	 * @function
	 * @param {String} k
	 * @param {Event} e
	 */
	var _execute__className = function( k, e )
	{
		//window.TtwLog.timeStamp( "-- [ S ] - _execute__className():void----------" );

		if( "" == k ) return;

		var idx_blank = k.indexOf( " " );
		if( -1 != idx_blank ) k = k.substr( 0, idx_blank );

		if( k )
		{
			console.log( "Key : " + k );
			var f = _o_events_callback__className[ k ];
			if( f ) f( e );
		}

		//window.TtwLog.timeStamp( "-- [ E ] - _execute__className():void----------" );
	};
	_this._execute__className = _execute__className;

	//--------------------------------------------------;

	/**
	 * @function
	 * @param {String} key
	 * @param {Function}
	 */
	var _removeEventCallBackFunction__ClassName = function( key, func )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _removeEventCallBackFunction__ClassName():void----------" );

		var t = _o_events_callback__className;
		if( t[ key ] )
		{
			console.log( key + "가 존재한다." );
		}
		else
		{
			t[ key ] = func;
			console.log( key + "생성." );
		}

		window.TtwLog.timeStamp( "-- [ E ] - _removeEventCallBackFunction__ClassName():void----------" );
	};

	/**
	 * @function
	 * @param {String} key
	 * @param {Function}
	 */
	var _removeEventCallBackFunction__EventType = function( key, func )
	{
		window.TtwLog.timeStamp( "-- [ S ] - _removeEventCallBackFunction__EventType():void----------" );

		var t = _o_events_callback;
		if( t[ key ] )
		{
			console.log( key + "가 존재한다." );
		}
		else
		{
			t[ key ] = func;
			console.log( key + "생성." );
		}

		window.TtwLog.timeStamp( "-- [ E ] - _removeEventCallBackFunction__EventType():void----------" );
	};

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------GET;

	/**
	 * Parent HTMLElement에 evt_mClick등의 속성을 부여해놓았을시 자식 객체로 부터 부모객체를 검색한다.
	 * @function
	 * @param {HTMLElement} el
	 * @param {String} key
	 * @param {Event} e
	 * @return {String}
	 * @example
	 * <code>
		var o = b2link.STATIC.UI.SUI_MODALPANEL_TEXTAREABOX$MEMO;
		var el = o[ 0 ];
		var elCtrl = o[ 1 ];

		el.setAttribute( "evt_mclick", "asd");
		elCtrl.addEventCallBackFunction__EventType( "asd", function(){
			console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
		});
	 * </code>
	 */
	var _getCallBackKeyFromEventType = function( el, key, e )
	{
		//window.TtwLog.timeStamp( "-- [ S ] - _getCallBackKeyFromEventType():{String}----------" );

		var t = el;
		var k = null;
		while( !k )
		{
			try
			{
				//console.log( t );
				k = t.getAttribute( key );
				e.__defineTarget = t;
				t = t.parentElement;
			}
			catch( er )
			{
				window.TtwLog.log( "_getCallBackKeyFromEventType Error : " + er );
				break;
			}
		}

		//window.TtwLog.timeStamp( "-- [ E ] - _getCallBackKeyFromEventType():{String}----------" );

		return k;
	};
	_this._getCallBackKeyFromEventType = _getCallBackKeyFromEventType;

	//--------------------------------------------------SET;

	/**
	 * 이 컨트롤러가 정상적으로 구동되기 위한 데이터들을 주입 받는다.
	 * @override
	 * @function
	 * @param {Object} d
	 * <code>
	 * {
	 *	"fn" : {
	 *	}
	 * }
	 * </code>
	 */
	var _setData = function( d )
	{
		if( _setData.super ) _setData.super( d );
	};
	if( _this.setData ) _setData.super = _this.setData;

	//--------------------------------------------------GET / SET;

	//--------------------------------------------------GETTER;

	//--------------------------------------------------SETTER;

	//--------------------------------------------------GETTER / SETTER;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	LOGIC;

	//----------------------------------------------------------------------------------------------------;


	//----------;
	_addEvent();
	//----------;


	//----------;
	//Event Bubble은 발생시키지 않지만 유사한 효과를 위해;
	//while을 사용하여 eventTarget 객체부터 부모 객체들을 거쳐가며;
	//이벤트 속성을 검색하는데 종속적인 rootElement에서 중단 시키기 위한 로직;
	var f = function( s ){
		if( !$el.getAttribute( s ) )
		{
			/*/
			console.log( "Element.id : " +  $el.id );
			console.log( "강제추가 : " + s );
			//*/
			$el.setAttribute( s, "_temp_" );
		}
	};
	var a = [ "evt_mclick", "evt_mdoubleclick", "evt_kdown", "evt_kup" ];
		a.forEach( function( s ){ f( s ); } );
	var _tempFn_ = function( e ){};
	_addEventCallBackFunction__ClassName( "_temp_", _tempFn_ );
	//----------;


	//--------------------------------------------------this;
	var _ = _this;

		_.__el = $el;

		_.addEvent = _addEvent;
		_.removeEvent = _removeEvent;

		_.dispose = _dispose;

		_.addEventCallBackFunction__ClassName = _addEventCallBackFunction__ClassName;
		_.addEventCallBackFunction__EventType = _addEventCallBackFunction__EventType;
		_.removeEventCallBackFunction__ClassName = _removeEventCallBackFunction__ClassName;
		_.removeEventCallBackFunction__EventType = _removeEventCallBackFunction__EventType;

		_.setData = _setData;
	//--------------------------------------------------this;
	return _;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//---------------------------------------------------------------------------------------------------;