//----------------------------------------------------------------------------------------------------;
var fileNm = "./js/b2linkUIClass/base/window.b2linkUIClass.base.Locale.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLElement} $el 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLElement.
 * @param {Object} _this 이 API를 통해 기능이 상속되어질 객체. 없으면 새로 생성한다.
 */
window.b2linkUIClass.base.Locale = function( url, $el, _this )
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


	//--------------------------------------------------;

	/**
	 * @property {Object}
	 */
	var _this = _this ? _this : { __url : url };

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
		//window.b2link.event.dispatchCE__CHANGED_LOCALE( window.document, {} );
		window.document.addEventListener( window.b2link.event.CHANGED_LOCALE, _this._evt_ChangedLocale, false, 0, true );
	};

	/**
	 * @function
	 */
	var _removeEvent = function()
	{
		window.document.removeEventListener( window.b2link.event.CHANGED_LOCALE, _this._evt_ChangedLocale, false );
	};

	/**
	 * @override
	 * @function
	 */
	var _evt_ChangedLocale = function( e )
	{
		window.TtwLog.timeStamp( "---- [ S ] - _evt_ChangedLocale():void----------" );

		_this._reset_locale();

		window.TtwLog.timeStamp( "---- [ E ] - _evt_ChangedLocale():void----------" );
	};
	if( _this._evt_ChangedLocale ) _evt_ChangedLocale.super = _this._evt_ChangedLocale;
	_this._evt_ChangedLocale = _evt_ChangedLocale;

	//----------------------------------------------------------------------------------------------------;

	//	FUNCTION;

	//----------------------------------------------------------------------------------------------------;

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

		if( _dispose.super ) _dispose.super();
	};
	if( _this.dispose ) _dispose.super = _this._dispose;

	/**
	 * @override
	 * @function
	 */
	var _reset_locale = function()
	{
		window.TtwLog.timeStamp( "---- [ S ] - _reset_locale():void----------" );

		debugger;

		$el.innerHTML = $el.__originalInnerHTML_Locale;
		$el.__originalInnerHTML = null;

		//***.local.**.json을 가져온 후 TargetElement.children[ i ].innerHTML의 ((label)) 문자열에 치환 시켜준다.;
		window.b2link.ui_resource.applyParentheses_LocaleLabel_Children( url, $el );

		window.TtwLog.timeStamp( "---- [ E ] - _reset_locale():void----------" );
	};
	_this._reset_locale = _reset_locale;

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * window.b2link.STATIC.CONFIG.URL.UI.LOCALE를 리턴한다.
	 *
	 * @function
	 * @return {String}
	 */
	var _getLocale = function(){ return window.b2link.STATIC.CONFIG.URL.UI.LOCALE };

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	LOGIC;

	//----------------------------------------------------------------------------------------------------;

	_addEvent();

	//--------------------------------------------------this;
	var _ = _this;

		_.__el = $el;

		_.dispose = _dispose;

		_.reset_locale = _reset_locale;

		_.getLocale = _getLocale;
	//--------------------------------------------------this;
	return _;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;