//----------------------------------------------------------------------------------------------------;
var fileNm = "./js/b2linkUIClass/base/window.b2linkUIClass.base.RootElement.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 추상적인 개념의 RootElement를 설정하는 기능을 가진 객체를 생성한다. 또는 상속시킨다.
 *
 * @function
 * @param {String} url 최하위 JS 파일, 이 함수를 호출한 가장 마지막 함수가 존재하는 JS 파일 URL, HTML과 셋트인 파일의 URL이다.
 * @param {HTMLElement} $el 이 API에서 생성되는 Controller(_this) 객체의 Target HTMLElement.
 * @param {Object} _this 이 API를 통해 기능이 상속되어질 객체. 없으면 새로 생성한다.
 */
window.b2linkUIClass.base.RootElement = function( url, $el, _this )
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

	/**
	 * @property {Object}
	 */
	var _this = _this ? _this : { __url : url };

	/**
	 * @property {HTMLElement}
	 */
	var __rootElement = null;
	/**
	 * __rootElement : {HTMLElement}'s Controller
	 * @property {Object}
	 */
	var __rootElementCtrl = null;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

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

		__rootElement = null;
		__rootElementCtrl = null;
	};
	if( _this.dispose ) _dispose.super = _this._dispose;

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------GET;

	//--------------------------------------------------SET;

	/**
	 * @Override
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

	/**
	 * @function
	 * @param {HTMLElement} rootElement
	 * @param {HTMLElement} rootElementCtrl
	 */
	var _setRootElementAndCtrl = function( rootElement, rootElementCtrl ){ _setRootElement( rootElement ); _setRootElementCtrl( rootElementCtrl ); };

	//--------------------------------------------------GET / SET;

	/**
	 * @function
	 * @return {HTMLElement}
	 */
	var _getRootElement = function(){ return __rootElement; };
	/**
	 * @function
	 * @param {HTMLElement} rootElement
	 * @param {HTMLElement} rootElementCtrl
	 */
	var _setRootElement = function( rootElement ){ __rootElement = rootElement; };

	/**
	 * @function
	 * @return {Object}
	 */
	var _getRootElementCtrl = function(){ return __rootElementCtrl; };
	/**
	 * @function
	 * @param {Object} rootElementCtrl
	 */
	var _setRootElementCtrl = function( rootElementCtrl ){ __rootElementCtrl = rootElementCtrl; };

	//--------------------------------------------------GETTER;

	//--------------------------------------------------SETTER;

	//--------------------------------------------------GETTER / SETTER;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	LOGIC;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------this;
	var _ = _this;

		_.__el = $el;

		_.dispose = _dispose;

		_.setData = _setData;

		_.setRootElementAndCtrl = _setRootElementAndCtrl;

		_.getRootElement = _getRootElement;
		_.setRootElement = _setRootElement;
		_.getRootElementCtrl = _getRootElementCtrl;
		_.setRootElementCtrl = _setRootElementCtrl;
	//--------------------------------------------------this;
	return _;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;