//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_window.b2link.html_thead.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.html_thead;

//window.b2link.html_thead = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.html_thead;


//----------------------------------------------------------------------------------------------------window.b2link.html_thread.c***;

/**
 * @function
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @return {String}
 */
window.b2link.html_thead.create_child = function( a )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.html_thead.create_child():{String}----------" );
	var r = "<tr>";
	var th = '<th style="width: $w">$nm</th>';
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		r += th.replace( "$w", io.w + "px;" ).replace( "$nm", io.nm );
	}
	r += "</tr>";
	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.html_thead.create_child():{String}----------" );

	return r;
};

//----------------------------------------------------------------------------------------------------window.b2link.html_thread.c***;

//----------------------------------------------------------------------------------------------------window.b2link.html_thread.s***;

/**
 * @function
 * @param {HTMLElement}
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 */
window.b2link.html_thead.set_child = function( element, a )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.html_thead.set_child():void----------" );

	element.innerHTML = window.b2link.html.create_thead_child( a );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.html_thead.set_child():void----------" );
};

//----------------------------------------------------------------------------------------------------window.b2link.html_thread.s***;

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;