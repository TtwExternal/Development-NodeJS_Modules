//----------------------------------------------------------------------------------------------------;
var fileNm = "./js/b2linkUIClass/base/window.b2linkUIClass.base.EventDispatcher.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * EventDispatcher를 설정할수 있는 기능을 가진 객체를 생성한다. 또는 상속시킨다.
 * EventDispatcher의 Reference를 보관하고 가져오는 API가 존재한다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLElement} $el 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLElement.
 * @param {Object} _this 이 API를 통해 기능이 상속되어질 객체. 없으면 새로 생성한다.
 */
window.b2linkUIClass.base.EventDispatcher = function( url, $el, _this )
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
	 * 이 API를 통해 생성되는 Object
	 * @property {Object}
	 */
	var _this = _this ? _this : { __url : url };

	/**
	 * 이 Controller에서 dispatchEvent또는 dispatchCustomEvent를 할시에 사용할 EventDispatcher
	 * @property {HTMLElement}
	 */
	var __eventDispatcher = null;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	EVENT;

	//----------------------------------------------------------------------------------------------------;

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
		if( _dispose.super ) _dispose.super();

		__eventDispatcher = null;

		_this = null;
	};
	if( _this.dispose ) _dispose.super = _this._dispose;

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	/**
	 * 설정한 EventDispatcher을 가져온다.
	 * @function
	 * @return {HTMLElement}
	 */
	var _getEventDispatcher = function(){ return __eventDispatcher; };
	/**
	 * 이 Controller에서 dispatchEvent또는 dispatchCustomEvent를 할시에 사용할 EventDispatcher을 설정한다.
	 * @function
	 * @param {HTMLElement} eventDispatcherElement
	 */
	var _setEventDispatcher = function( eventDispatcherElement ){ __eventDispatcher = eventDispatcherElement; };

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	LOGIC;

	//----------------------------------------------------------------------------------------------------;

	_setEventDispatcher( $el );

	//--------------------------------------------------this;
	var _ = _this;

		_.__el = $el;

		_.dispose = _dispose;

		_.getEventDispatcher = _getEventDispatcher;
		_.setEventDispatcher = _setEventDispatcher;
	//--------------------------------------------------this;
	return _;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;