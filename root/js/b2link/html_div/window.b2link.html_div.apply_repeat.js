//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/html_div/window.b2link.html_div.apply_repeat.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

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

	if ( !div.__originalInnerHTML ) div.__originalInnerHTML = div.innerHTML;

	if ( 0 === arr.length ) { div.innerHTML = ""; return div; }

	var r = "";
	var i=0, iLen=arr.length;
	for( ; i<iLen; ++i )
	{
		r += SUtilString.applyBraceStrFromArray( div.__originalInnerHTML, [ arr[ i ] ] );
	}

	if( r ) div.innerHTML = r;

	window.KaiLog.timeStamp( "---- [ E ] - window.b2link.html_div.apply_repeat():{HTMLElement}----------return div;" );
	return div;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;