//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/html_div/window.b2link.html_div.apply_tbody_set_data_by_classname_include_other_tbody.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * <div> Element의 tbodyren을 갱신한다.
 * <div><input type="text" class="product"></div> 형태로 작성된 HTML을 참조하여 a(data array) 갯수 만큼 <div><input type="text" class="product" value="a.product"></div> 형태로 갱신한다.
 * @function
 * @param {HTMLElement} div
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @param {String} classname
 * @return {HTMLElement}
 */
window.b2link.html_div.apply_tbody_set_data_by_classname_include_other_tbody = function( div, a , classname )
{
	window.JamesLog.timeStamp( "---- [ S ] - window.b2link.html_div.apply_tbody_set_data_by_classname_include_other_tbody():{HTMLElement}----------" );

	if( !div.__originalInnerHTML ) div.__originalInnerHTML = div.innerHTML;

	if( 0 == a.length ){ div.innerHTML = ""; return div; }

	var arr_length = a.length;

	var r = "";

	for( var i = 0; i < arr_length; i++ )
	{
		window.b2link.el_input.setInputValueAttributeFromClassNameDataObject( div, a[ i ] );
		if( a[ i ][ classname ].length > 0 )
		{
			var tbody = window.b2link.element.getElementByClassName( div, "tbody_" + classname );
				tbody.innerHTML = window.b2link.html_tbody.apply_child( tbody, a[ i ][ classname ] ).innerHTML;
		}
		r += div.innerHTML;
		div.innerHTML = div.__originalInnerHTML;
	}

	//console.log( r );
	if( r ) div.innerHTML = r;

	window.JamesLog.timeStamp( "---- [ E ] - window.b2link.html_div.apply_tbody_set_data_by_classname_include_other_tbody():{HTMLElement}----------return div;" );
	return div;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;