//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/html_tbody/window.b2link.html_tbody.apply_child__multi.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * <tbody> Element의 children을 갱신한다.
 * <tbody><tr><td>{{name}}</td></tr></tbody> 형태로 작성된 HTML을 참조하여 a(data array) 갯수 만큼 <td>송선우0</td>, <td>송선우1</td> 형태로 갱신한다.
 * @function
 * @param {HTMLElement} tbody
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @return {HTMLElement}
 */
window.b2link.html_tbody.apply_child__multi = function( tbody, a )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.html_tbody.apply_child__multi():{HTMLElement}----------" );

	if( !tbody.__originalInnerHTML ) tbody.__originalInnerHTML = tbody.innerHTML;

	var argsLen = arguments.length;
	var dataLen = a.length;

	if( 0 == dataLen ){ tbody.innerHTML = ""; return tbody; }

	var i=2, iLen=argsLen;
	for( ; i<iLen; ++i )
		if( dataLen != arguments[ i ].length )
		{
			window.TtwLog.error( "window.b2link.html_tbody.apply_child__multi Error : 데이터들의 갯수가 일치하지 않음" );
			return;
		}

	var etcDatas = [];
	var i=2, iLen=argsLen;
	for( ; i<iLen; ++i ) etcDatas.push( arguments[ i ] );

	var f0 = SUtilString.applyBraceStrFromObj;
	var r = "";
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		var ir = f0( tbody.__originalInnerHTML, a[ i ] );
		var jo;
		var j=0, jLen=etcDatas.length;
		for( ; j<jLen; ++j )
		{
			jo = etcDatas[ j ];
			ir = f0( ir, jo[ i ] );
		}

		r += ir;
	}

	//console.log( r );

	if( r ) tbody.innerHTML = r;

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.html_tbody.apply_child__multi():{HTMLElement}----------return tbody;" );
	return tbody;
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;