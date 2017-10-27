//----------------------------------------------------------------------------------------------------;
var fileNm = "./js/b2linkUIClass/select/window.b2linkUIClass.select.Locale_DBSchemaResource.js";
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
window.b2linkUIClass.select.Locale_DBSchemaResource = function( url, $el_select, _this )
{
	//Extends;
	var _this = window.b2linkUIClass.base.Locale( url, $el_select, _this ? _this : null );

	//--------------------------------------------------;

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
	var _evt_ChangedLocale = function( e )
	{
		window.TtwLog.timeStamp( "---- [ S ] - _evt_ChangedLocale():void----------" );

		_reset_locale();

		window.TtwLog.timeStamp( "---- [ E ] - _evt_ChangedLocale():void----------" );
	};
	if( _this._evt_ChangedLocale ) _evt_ChangedLocale.super = _this._evt_ChangedLocale;
	_this._evt_ChangedLocale = _evt_ChangedLocale;

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
		_removeEvent();

		_this = null;

		if( _dispose.super ) _dispose.super();
	};
	if( _this.dispose ) _dispose.super = _this._dispose;

	//--------------------------------------------------;

	/**
	 * @override
	 * @function
	 * @example
	 * <code>
		//Test HTML에 삽입;
		<import-html url_js="./ui_import/select-db-value/select-db-value.js">
			./ui_include/select-db-value/category/category_delivery_info_remark__nm_kr.html
		</import-html>

		//Browser Console에서 입력;
		window.b2link.STATIC.CONFIG.URL.UI.LOCALE = "us";
		window.b2link.event.dispatchCE__CHANGED_LOCALE( window.document, {} );
	 * </code>
	 */
	var _reset_locale = function()
	{
		window.TtwLog.timeStamp( "---- [ S ] - _reset_locale():void----------" );

		var $el = $el_select;

		var url = $el.__URL_HTML.replace( ".html", "" );
		var urlLen = url.length;

		var idx__cd = url.lastIndexOf( "__cd" );
		if( -1 != idx__cd ){}
		else
		{
			var idx__nm = url.lastIndexOf( "__nm" );
			if( -1 != idx__nm )
			{
				//if( ( urlLen - 5 ) != idx__nm ){}else{}//__nm_kr, __nm_cn, __nm_us, ...;
				var replaceStr = url.slice( urlLen - 2, urlLen );
				var html = window.b2link.xhr.reqSync_String( url.replace( "__nm_" + replaceStr, "__nm_" + _this.getLocale() ) + ".html" );
				var el = window.b2link.html.createHTMLElement( html );

				$el.innerHTML = el.innerHTML;

				el.innerHTML = "";
				el = null;
			}
		}

		window.TtwLog.timeStamp( "---- [ E ] - _reset_locale():void----------" );
	};
	_this._reset_locale = _reset_locale;

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	LOGIC;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------this;
	var _ = _this;
	//--------------------------------------------------this;
	return _;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;