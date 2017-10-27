//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_window.b2link.html_div.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.html_div;

//window.b2link.html_div = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.html_div;


//----------------------------------------------------------------------------------------------------window.b2link.html_div.a***;

/**
 * <div> Element의 children을 갱신한다.
 * <div><??>{{name}}</??></div> 형태로 작성된 HTML을 참조하여 a(data array) 갯수 만큼 <??>송선우0</??>, <??>송선우1</??> 형태로 갱신한다.
 * @function
 * @param {HTMLElement} div
 * @param {Array} arr [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @return {HTMLElement}
 */
window.b2link.html_div.apply_repeat = function( div, arr )
{
	window.KaiLog.timeStamp( "---- [ S ] - window.b2link.html_div.apply_repeat():{HTMLElement}----------" );

	if( !div.__originalInnerHTML ) div.__originalInnerHTML = div.innerHTML;

	if( 0 === arr.length ){ div.innerHTML = ""; return div; }

	var r = "";
	for( var i in arr )
	{
		if( arr.hasOwnProperty( i ) )
			r += SUtilString.applyBraceStrFromArray( div.__originalInnerHTML, [ arr[ i ] ] );
	}

	if( r ) div.innerHTML = r;

	window.KaiLog.timeStamp( "---- [ E ] - window.b2link.html_div.apply_repeat():{HTMLElement}----------return div;" );
	return div;
};

/**
 * <div> Element의 children을 갱신한다.
 * <div><input type="text" class="product"></div> 형태로 작성된 HTML을 참조하여 a(data array) 갯수 만큼 <div><input type="text" class="product" value="a.product"></div> 형태로 갱신한다.
 * @function
 * @param {HTMLElement} div
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @return {HTMLElement}
 */
window.b2link.html_div.apply_child_set_data_by_classname = function( div, a )
{
	window.JamesLog.timeStamp( "---- [ S ] - window.b2link.html_div.apply_child_set_data_by_classname():{HTMLElement}----------" );

	if( !div.__originalInnerHTML ) div.__originalInnerHTML = div.innerHTML;

	if( 0 == a.length ){ div.innerHTML = ""; return div; }

	var $f3 = window.b2link.element.getElementsByClassName;
	var arr_length = a.length;

	var parentDiv = div.parentNode;
	var div_class_name = div.className;


	var i = $f3( parentDiv, div_class_name ).length;
	for( ; i > 0; i-- ) parentDiv.removeChild( parentDiv.childNodes[ i ] );

	for( var i = 0; i < arr_length; i++ )
	{
		var new_div = document.createElement( "div" );
			new_div.innerHTML = div.__originalInnerHTML;
			new_div.className = div_class_name;

		window.b2link.el_input.setInputValueAttributeFromClassNameDataObject( new_div, a[ i ] );

		new_div.setAttribute( "item_data", JSON.stringify( a[ i ] ) );
		parentDiv.appendChild( new_div );
		new_div = null;
	}

	window.JamesLog.timeStamp( "---- [ E ] - window.b2link.html_div.apply_child_set_data_by_classname():{HTMLElement}----------return div;" );
	return parentDiv;
};

/**
 * <div> Element의 children을 갱신한다.
 * <div><input type="text" class="product"></div> 형태로 작성된 HTML을 참조하여 a(data array) 갯수 만큼 <div><input type="text" class="product" value="a.product"></div> 형태로 갱신한다.
 * @function
 * @param {HTMLElement} div
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @return {HTMLElement}
 */
window.b2link.html_div.apply_child_set_data_by_classname_include_other_child = function( div, a , classname )
{
	window.JamesLog.timeStamp( "---- [ S ] - window.b2link.html_div.apply_child_set_data_by_classname_include_other_child():{HTMLElement}----------" );

	if( !div.__originalInnerHTML ) div.__originalInnerHTML = div.innerHTML;

	if( 0 == a.length ){ div.innerHTML = ""; return div; }

	var arr_length = a.length;

	var r = "";

	for( var i = 0; i < arr_length; i++ )
	{
		window.b2link.el_input.setInputValueAttributeFromClassNameDataObject( div, a[ i ] );
		if( a[ i ][ classname ].length > 0 )
		{
			var child = window.b2link.element.getElementByClassName( div, classname );
				child.innerHTML = window.b2link.html_div.apply_child_set_data_by_classname( child, a[ i ][ classname ] ).innerHTML;
		}
		r += div.innerHTML;
		div.innerHTML = div.__originalInnerHTML;
	}

	//console.log( r );
	if( r ) div.innerHTML = r;

	window.JamesLog.timeStamp( "---- [ E ] - window.b2link.html_div.apply_child_set_data_by_classname_include_other_child():{HTMLElement}----------return div;" );
	return div;
};

//----------------------------------------------------------------------------------------------------window.b2link.html_div.a***;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;