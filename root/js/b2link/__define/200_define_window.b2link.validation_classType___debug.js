//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_window.b2link.validation_classType.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.validation_classType;

//window.b2link.validation_classType = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.validation_classType;


//----------------------------------------------------------------------------------------------------;window.b2link.validation_classType.a***;

/**
 * Javascript의 자료타입 Array를 Validation 한다.
 * @function
 * @param {array} p
 * @return {Boolean}
 */
window.b2link.validation_classType.array = function( p )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_classType.array():{Boolean}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_classType.array():{Boolean}----------" );

	//if( "object" == typeof( p ) )
	if( window.b2link.validation_classType.object( p ) )
		if( p.hasOwnProperty( "length" ) )
			return true;
	return false;
};

//----------------------------------------------------------------------------------------------------;window.b2link.validation_classType.a***;


//----------------------------------------------------------------------------------------------------;window.b2link.validation_classType.b***;

/**
 * Javascript의 자료타입 Boolean을 Validation 한다.
 * @function
 * @param {Number} p
 * @return {Boolean}
 */
window.b2link.validation_classType.boolean = function( p )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_classType.boolean():{Boolean}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_classType.boolean():{Boolean}----------" );

	if( "boolean" == typeof( p ) ) return true;
	return false;
};

//----------------------------------------------------------------------------------------------------;window.b2link.validation_classType.b***;


//----------------------------------------------------------------------------------------------------;window.b2link.validation_classType.i***;

/**
 * Javascript의 자료타입 int를 Validation 한다.
 * @function
 * @param {uint} p
 * @return {Boolean}
 */
window.b2link.validation_classType.int = function( p )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_classType.int():{Boolean}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_classType.int():{Boolean}----------" );

	//if( "number" == typeof( p ) )
	if( window.b2link.validation_classType.number( p ) )
		if( -1 == p.toString.indexOf( "." ) )
			return true;
	return false;
};

//----------------------------------------------------------------------------------------------------;window.b2link.validation_classType.i***;


//----------------------------------------------------------------------------------------------------;window.b2link.validation_classType.n***;

/**
 * Javascript의 자료타입 Number를 Validation 한다.
 * @function
 * @param {Number} p
 * @return {Boolean}
 */
window.b2link.validation_classType.number = function( p )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_classType.number():{Boolean}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_classType.number():{Boolean}----------" );

	if( "number" == typeof( p ) ) return true;
	return false;
};

//----------------------------------------------------------------------------------------------------;window.b2link.validation_classType.n***;


//----------------------------------------------------------------------------------------------------;window.b2link.validation_classType.o***;

/**
 * Javascript의 자료타입 Object를 Validation 한다.
 * @function
 * @param {Number} p
 * @return {Boolean}
 */
window.b2link.validation_classType.object = function( p )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_classType.object():{Boolean}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_classType.object():{Boolean}----------" );

	if( "object" == typeof( p ) ) return true;
	return false;
};

//----------------------------------------------------------------------------------------------------;window.b2link.validation_classType.o***;


//----------------------------------------------------------------------------------------------------;window.b2link.validation_classType.s***;

/**
 * Javascript의 자료타입 String를 Validation 한다.
 * @function
 * @param {String} p
 * @return {Boolean}
 */
window.b2link.validation_classType.string = function( p )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_classType.string():{Boolean}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_classType.string():{Boolean}----------" );

	if( "string" == typeof( p ) ) return true;
	return false;
};

//----------------------------------------------------------------------------------------------------;window.b2link.validation_classType.s***;


//----------------------------------------------------------------------------------------------------;window.b2link.validation_classType.u***;

/**
 * Javascript의 자료타입 uint를 Validation 한다.
 * @function
 * @param {uint} p
 * @return {Boolean}
 */
window.b2link.validation_classType.uint = function( p )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_classType.uint():{Boolean}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_classType.uint():{Boolean}----------" );

	//if( "number" == typeof( p ) )
	if( window.b2link.validation_classType.number( p ) )
		if( -1 < p )
			if( -1 == p.toString.indexOf( "." ) )
				return true;
	return false;
};

//----------------------------------------------------------------------------------------------------;window.b2link.validation_classType.u***;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;