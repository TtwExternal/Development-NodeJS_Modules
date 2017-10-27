//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_window.b2link.ui.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.ui;

//window.b2link.ui = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.ui;


//----------------------------------------------------------------------------------------------------window.b2link.ui.g***;

/**
 * @function
 * @param {HTMLElement} t
 * @return {Array} [ {HTMLElement}, {HTMLElement}, .... ]
 */
window.b2link.ui.getArray_ClassNameAndValueFromParentElement__Input = function( t )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui.getArray_ClassNameAndValueFromParentElement__Input():{Array}----------" );

	var r = [];
	var a = t.children;
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		if( "INPUT" == io.tagName ) r.push( [ io.className, io.value ] );
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui.getArray_ClassNameAndValueFromParentElement__Input():{Array}----------" );
	return r;
};

/**
 * @function
 * @param {HTMLElement} t
 * @return {Array} [ {HTMLElement}, {HTMLElement}, .... ]
 */
window.b2link.ui.getArray_ElementFromParentElement__Input = function( t )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui.getArray_ElementFromParentElement__Input():{Array}----------" );

	var r = [];
	var a = t.children;
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		if( "INPUT" == io.tagName ) r.push( io );
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui.getArray_ElementFromParentElement__Input():{Array}----------" );
	return r;
};

/**
 * @function
 * @param {HTMLElement} t
 * @return {Array} [ {HTMLElement}, {HTMLElement}, .... ]
 */
window.b2link.ui.getArray_IDAndValueFromParentElement__Input = function( t )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui.getArray_IDAndValueFromParentElement__Input():{Array}----------" );

	var r = [];
	var a = t.children;
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		if( "INPUT" == io.tagName ) r.push( [ io.id, io.value ] );
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui.getArray_IDAndValueFromParentElement__Input():{Array}----------" );
	return r;
};

/**
 * @function
 * @param {HTMLElement} t
 * @return {Array}
 */
window.b2link.ui.getArray_ValueFromParentElement__Input = function( t )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui.getArray_ValueFromParentElement__Input():{Array}----------" );

	var r = [];
	var a = t.children;
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		if( "INPUT" == io.tagName ) r.push( io.value );
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui.getArray_ValueFromParentElement__Input():{Array}----------" );
	return r;
};

/**
 * @function
 * @param {HTMLElement} t
 * @return {Object}
 */
window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Controller = function( t )
{
	window.KaiLog.timeStamp( "---- [ S ] - window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Controller():{Object}----------" );

	var r = {};
	var a = t.children;
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		switch (io.tagName){
		case 'INPUT':
		case 'TEXTAREA':
			r[ io.className ] = io.value;
			break;
		default:
			break;
		}
	}

	window.KaiLog.timeStamp( "---- [ E ] - window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Controller():{Object}----------" );
	return r;
};

/**
 * @function
 * @param {HTMLElement} t
 * @return {Object}
 */
window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Input = function( t )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Input():{Object}----------" );

	var r = {};
	var a = t.children;
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		if( "INPUT" == io.tagName ) r[ io.className ] = io.value;
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Input():{Object}----------" );
	return r;
};

/**
 * targetElement의 ChildElement에 InputElement가 존재하는 경우 className으로 Object를 추출하기 위한 용도
 * targetElement로부터 Depth2 위치에 InputElement가 존재
 * @public
 * @function
 * @param {HTMLElement} t targetElement
 * @return {Object}
 * <code>
 * { "className" : "", "className" : "", "className" : "", ... }
 * </code>
 */
window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Input_Depth2 = function( t )
{
	window.Rh2Log.timeStamp( "---- [ S ] - window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Input_Depth2():{Object}----------" );

	var r = {};
	/*/
	var f = window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Input;
	var io;
	var a = t.children;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		var ir = f( io );
		for( var s in ir ) r[ s ] = ir[ s ];
	}
	//*/
	var a0 = t.children;
	var i=0, iLen=a0.length;
	for( ; i<iLen; ++i )
	{
		var a1 = a0[ i ].children;
		var jo;
		var j=0, jLen=a1.length;
		for( ; j<jLen; ++j )
		{
			jo = a1[ j ];
			if( "INPUT" == jo.tagName ) r[ jo.className ] = jo.value;
		}
	}
	//*/

	window.Rh2Log.timeStamp( "---- [ E ] - window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Input_Depth2():{Object}----------" );
	return r;
};

/**
 * @function
 * @param {HTMLElement} t
 * @return {Object}
 */
window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Input_Type = function( t )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Input_Type():{Object}----------" );

	var of = window.b2link.el_input.setObjectInputValueFromInputTypeAndClassName;
	var r = {};
	var a = t.children;
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		if( "INPUT" == io.tagName ) of( r, io );
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Input_Type():{Object}----------" );
	return r;
};

/**
 * @function
 * @param {HTMLElement} t
 * @return {Object} [ {HTMLElement}, {HTMLElement}, .... ]
 */
window.b2link.ui.getObject_Element_ClassNameFromParentElement__Input = function( t )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui.getObject_Element_ClassNameFromParentElement__Input():{Object}----------" );

	var r = {};
	var a = t.children;
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		if( "INPUT" == io.tagName ) r[ io.className ] = io;
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui.getObject_Element_ClassNameFromParentElement__Input():{Object}----------" );
	return r;
};

/**
 * @function
 * @param {HTMLElement} t
 * @return {Object}
 */
window.b2link.ui.getObject_Element_IDFromParentElement__Input = function( t )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui.getObject_Element_IDFromParentElement__Input():{Object}----------" );

	var r = {};
	var a = t.children;
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		if( "INPUT" == io.tagName ) r[ io.id ] = io;
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui.getObject_Element_IDFromParentElement__Input():{Object}----------" );
	return r;
};

/**
 * @function
 * @param {HTMLElement} t
 * @return {Object}
 */
window.b2link.ui.getObject_IDAndValueFromParentElement__Input = function( t )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui.getObject_IDAndValueFromParentElement__Input():{Object}----------" );

	var r = {};
	var a = t.children;
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		if( "INPUT" == io.tagName ) r[ io.id ] = io.value;
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui.getObject_IDAndValueFromParentElement__Input():{Object}----------" );
	return r;
};

//----------------------------------------------------------------------------------------------------window.b2link.ui.g***;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;