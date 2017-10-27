//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link_ui/__define/200_define_window.b2link_ui.message.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link_ui.message;

window.b2link_ui.message = window.b2link_ui.message || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link_ui.message;

/**
 * @function
 * @param {String} text
 * @param {String} type null
 * @param {Function} calllback function( result ){}
 * @return {HTMLElement}
 * @example
 * <code>
	window.b2link_ui.message.alert( "경고", null, function( result ){ console.log( result ); } );

	window.b2link_ui.message.alert({
		left : 10
		, top : 20
		, width : 300
		, height : 300
		, title : "타이틀"
		, text : "내용 메세지"
	}, null, function( result ){ console.log( result ); } );

	window.b2link_ui.message.alert({
		left : 10
		, top : 20
		, width : 300
		, height : 300
		, title : "타이틀"

		//, text : "내용 메세지"
		, content : window.b2link.html.createHTMLElement( '<div><ul class="list-group"><li class="list-group-item"><img src="./img/flag_country/cd_us3/KOR.png"/><span>미국입니다.</span></li></ul></div>' )

		, type : null
		, callback : function( result ){ console.log( result ); }
	});
 * </code>
 */
window.b2link_ui.message.alert = TtwMessageBox.alert;

/**
 * @function
 * @param {String} text
 * @param {String} type null
 * @param {Function} calllback function( result ){}
 * @return {HTMLElement}
 * @example
 * <code>
	window.b2link_ui.message.confirm( "확인", null, function( result ){ console.log( result ); } );

	window.b2link_ui.message.confirm({
		left : 10
		, top : 20
		, width : 300
		, height : 300
		, title : "타이틀"
		, text : "내용 메세지"

		, type : null

		, callback : function( result ){ console.log( result ); }
	});

	window.b2link_ui.message.confirm({
		left : 10
		, top : 20
		, width : 300
		, height : 300
		, title : "타이틀"

		//, text : "내용 메세지"
		, content : window.b2link.html.createHTMLElement( '<div><ul class="list-group"><li class="list-group-item"><img src="./img/flag_country/cd_us3/KOR.png"/><span>미국입니다.</span></li></ul></div>' )
	}, null, function( result ){ console.log( result ); } );
 * </code>
 */
window.b2link_ui.message.confirm = TtwMessageBox.confirm;

/**
 * @function
 * @param {String} text
 * @return {HTMLElement}
 * <code>
	var o = window.b2link_ui.message.error( "모달 메세지를 띄우겠다" );
	window.b2link_ui.message.modalbox.hide( o );
 * </code>
 */
window.b2link_ui.message.error = function( s )
{
	window.TtwLog.error( s );
	return window.b2link_ui.message.message( s );
}

/**
 * @function
 * @param {String} text
 * @param {String} type null
 * @param {Number} time 1000이 1초
 * @return {HTMLElement}
 * @example
 * <code>
	window.b2link_ui.message.message( "잠시 보이고 사라질 메세지" );

	window.b2link_ui.message.message( "10초 보이고 사라질 메세지", null, 10000 );
 * </code>
 */
window.b2link_ui.message.message = TtwMessageBox.message;

/**
 * @function
 * @param {String} text
 * @return {HTMLElement}
 * <code>
	var o = window.b2link_ui.message.modalbox( "모달 메세지를 띄우겠다" );
	window.b2link_ui.message.modalbox.hide( o );
 * </code>
 */
window.b2link_ui.message.modalbox = TtwMessageBox.modalbox;

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;