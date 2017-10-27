//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_window.b2link.validation_input.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.validation_input;

//window.b2link.validation_input = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.validation_input;


//----------------------------------------------------------------------------------------------------window.b2link.validation_input.e***;

(function(){

	var _regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	/**
	 * @function
	 * @param {String} e_id email_id
	 * @param {String} e_domain email_domain
	 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
	 */
	window.b2link.validation_input.email = function( e_id, e_domain )
	{
		//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_input.email():{Object}----------" );

		var r = { r : 1, m : "" };

		if( -1 == e_domain.indexOf( "." ) ){ r.r = 0; r.m = "이메일 도메인 구문 오류"; return r; }

		if( !e_id || !e_domain ){ r.r = 0; r.m = "이메일 입력 오류"; return r; }

		var email = e_id + "@" + e_domain;
		if( !email.match( _regExp ) ){ r.r = 0; r.m = "이메일 구문 오류"; return r; }

		//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_input.email():{Object}----------return r;" );
		return r;
	};
})();

/**
 * 수정하기 - 2017.01.05 - "", inputType가 Text일때만 사용?
 * @function
 * @param {array} p
 * @return {Boolean}
 */
window.b2link.validation_input.empty = function( val )
{
	if( !val )
	{
		return false;
	}
	return true;
};

//----------------------------------------------------------------------------------------------------window.b2link.validation_input.e***;


//----------------------------------------------------------------------------------------------------window.b2link.validation_input.i***;

(function(){

	var _regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	/**
	 * @function
	 * @param {String} id
	 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
	 */
	window.b2link.validation_input.id_emailType = function( id )
	{
		//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_input.id_emailType():{Object}----------" );

		var r = { r : 1, m : "" };

		if( !id.match( _regExp ) ){ r.r = 0; r.m = "아이디 구문 오류"; return r; }

		//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_input.id_emailType():{Object}----------return r;" );
		return r;
	};
})();

//----------------------------------------------------------------------------------------------------window.b2link.validation_input.i***;


//----------------------------------------------------------------------------------------------------window.b2link.validation_input.n***;

/**
 * @function
 * @param {String} nm_f name_first
 * @param {String} nm_l name_last
 * @param {String} m message first word
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_input.name = function( nm_f, nm_l, m )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_input.name():{Object}----------" );

	m = m || "이름";

	var r = { r : 1, m : "" };

	if( !nm_f || !nm_l ){ r.r = 0; r.m = m + " 입력오류"; return r; }

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_input.name():{Object}----------" );
	return r;
};

/**
 * @function
 * @param {String} v
 * @param {String} m
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_input.notInputed = function( v, m )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_input.notInputed():{Object}----------" );

	m = m || "";

	var r = { r : 1, m : "" };

	if( !v ){ r.r = 0; r.m = " 미입력"; return r; }

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_input.notInputed():{Object}----------" );
	return r;
};

//----------------------------------------------------------------------------------------------------window.b2link.validation_input.n***;


//----------------------------------------------------------------------------------------------------window.b2link.validation_input.p***;

/**
 * @function
 * @param {String} pw password
 * @param {String} pw_re password confirm
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_input.password = function( pw, pw_re )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_input.password():{Object}----------" );

	var r = { r : 1, m : "" };

	if( pw.length < 9 ){ r.r = 0; r.m = "암호 9자 이상 입력해야합니다."; return r; }

	if( !pw || !pw_re ){ r.r = 0; r.m = "암호 미입력"; return r; }

	if( pw != pw_re ){ r.r = 0; r.m = "암호 불일치"; return r; }

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_input.password():{Object}----------" );
	return r;
};

/**
 * @function
 * @param {String} country
 * @param {String} area
 * @param {String} num0
 * @param {String} num1
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_input.phone_cell = function( country, area, num0, num1 )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_input.phone_cell():{Object}----------" );

	var r = { r : 1, m : "" };

	if( !country || !area || !num0 || !num1 ){ r.r = 0; r.m = "휴대전화번호 입력오류"; return r; }

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_input.phone_cell():{Object}----------" );
	return r;
};

/**
 * @function
 * @param {String} country
 * @param {String} area
 * @param {String} num0
 * @param {String} num1
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_input.phone_tel = function( country, area, num0, num1 )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_input.phone_tel():{Object}----------" );

	var r = { r : 1, m : "" };

	if( !country || !area || !num0 || !num1 ){ r.r = 0; r.m = "전화번호 입력오류"; return r; }

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_input.phone_tel():{Object}----------" );
	return r;
};

//----------------------------------------------------------------------------------------------------window.b2link.validation_input.p***;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;