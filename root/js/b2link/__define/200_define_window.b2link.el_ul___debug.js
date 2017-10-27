//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_window.b2link.el_ul.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.el_ul;

//window.b2link.el_ul = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.el_ul;


//----------------------------------------------------------------------------------------------------window.b2link.el_ul.c;

/**
 * 받은 데이터를 ul.li 들의 innerText에 반영한다.
 * 데이터[ i ]의 아이템들을 lis[ i ].list_item_value에 inject 한다.
 * @function
 * @param {HTMLElement} ul
 * @param {Array} d [ {}, {}, ... ]
 */
window.b2link.el_ul.change_child = function( ul, d )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.el_ul.change_child():void----------" );

	var f = window.b2link.element.injectValueForListItemAndIDX;
	var a = ul.children;//lis;
	var io;//li;
	//var i=0, iLen=a.length;
	//수정 - 20160110 - 송선우;
	var i=0, iLen=( a.length > d.length ) ? d.length : a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ]//li;
		dio = d[ i ];
		f( io, dio, i );
		if( dio )
		{
			var txt = "";
			for( var p in dio ) txt += dio[ p ];
			io.innerText = txt;
		}
		else io.innerText = "";
	}

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.el_ul.change_child():void----------" );
};

/**
 * @function
 * @param {HTMLElement} ul
 * @param {Array} d [ {}, {}, ... ]
 * @param {int} key data key ex) "cd_us3"
 * @param {String} thtml '<img src="http://localhost:49321/img/flag_country/cd_us3/{{cd_us3}}.png"/>'
 */
window.b2link.el_ul.change_child_htmlOption = function( ul, d, key, thtml )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.el_ul.change_child_htmlOption():void----------" );

	var a = ul.children;//lis;
	var io;//li;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ]//li;
		var dio = d[ i ];
		if( dio )
		{
			var txt = "";
			for( var p in dio ){ if( p != "_id" ) txt += dio[ p ]; }
			io.innerText = txt;
			io.innerHTML = thtml.replace( "{{" + key + "}}", dio[ key ] );
		}
		else io.innerText = "";
	}

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.el_ul.change_child_htmlOption():void----------" );
};

/**
 * @function
 * @param {HTMLElement} ul
 * @param {Array} d [ {}, {}, ... ]
 * @param {Array} options [{ ket : "", thtml : "" }, { key : "", thtml : "" }, ...]
 * @param {String} thtml '<img src="http://localhost:49321/img/flag_country/cd_us3/{{cd_us3}}.png"/>'
 */
window.b2link.el_ul.change_child_htmlOptions = function( ul, d, options )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.el_ul.change_child_htmlOptions():void----------" );

	var a = ul.children;//lis;
	var io;//li;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ]//li;
		var dio = d[ i ];
		if( dio )
		{
			var k=0, kLen=options.length;
			for( ; k<kLen; ++k )
			{
				var txt = "";
				var option = options[ k ];
				for( var p in dio ){ if( p != "_id" ) txt += dio[ p ]; }
				io.innerText = txt;
				io.innerHTML = option.thtml.replace( "{{" + option.key + "}}", dio[ option.key ] );
			}
		}
		else io.innerText = "";
	}

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.el_ul.change_child_htmlOptions():void----------" );
};

//----------------------------------------------------------------------------------------------------window.b2link.el_ul.c;


//----------------------------------------------------------------------------------------------------window.b2link.el_ul.g;
//----------------------------------------------------------------------------------------------------window.b2link.el_ul.g;


//----------------------------------------------------------------------------------------------------window.b2link.el_ul.p;
//----------------------------------------------------------------------------------------------------window.b2link.el_ul.p;


//----------------------------------------------------------------------------------------------------window.b2link.el_ul.u;
//----------------------------------------------------------------------------------------------------window.b2link.el_ul.u;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;