//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_window.b2link.el_tbody.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.el_tbody;

//window.b2link.el_tbody = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.el_tbody;


//----------------------------------------------------------------------------------------------------window.b2link.el_tbody.c;

/**
 * 받은 데이터를 tbody.tr.td 들의 innerText에 반영한다.
 * 데이터[ i ]의 아이템들을 trs[ i ].list_item_value에 inject 한다.
 * @function
 * @param {HTMLElement} tbody
 * @param {Array} d [ {}, {}, ... ]
 */
window.b2link.el_tbody.change_child = function( tbody, d )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.el_tbody.change_child():void----------" );

	var f = window.b2link.element.injectValueForListItemAndIDX;
	var a0 = tbody.children;//trs;
	var io;//tr;
	//var i=0, iLen=a0.length;
	//수정 - 20160110 - 송선우;
	var i=0, iLen=( a0.length > d.length ) ? d.length : a0.length;
	for( ; i<iLen; ++i )
	{
		io = a0[ i ]//tr;
		var a1 = io.children;//tds;
		var j=0, jLen=a1.length;

		dio = d[ i ];
		f( io, dio, i );
		if( dio )
			for( ; j<jLen; ++j ) a1[ j ].innerText = dio[ tbody.__list_reuse_key[ j ] ];
		else
			for( ; j<jLen; ++j ) a1[ j ].innerText = "";
	}

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.el_tbody.change_child():void----------" );
};

/**
 * @function
 * @param {HTMLElement} tbody
 * @param {Array} d [ {}, {}, ... ]
 * @param {int} idx children index ex) 0
 * @param {String} thtml '<img src="http://localhost:49321/img/flag_country/cd_us3/{{cd_us3}}.png"/>'
 */
window.b2link.el_tbody.change_child_htmlOption = function( tbody, d, idx, thtml )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.el_tbody.change_child_htmlOption():void----------" );

	var a = tbody.children;//trs;
	var io;//tr;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ]//tr;
		var b = io.children;//tds;
		var j=0, jLen=b.length;

		var dio = d[ i ];
		if( dio )
		{
			for( ; j<jLen; ++j ) b[ j ].innerText = dio[ tbody.__list_reuse_key[ j ] ];
			var key = tbody.__list_reuse_key[ idx ];
				//console.log( "key : " + key );
			b[ idx ].innerHTML = thtml.replace( "{{" + key + "}}", dio[ key ] );
		}
		else for( ; j<jLen; ++j ) b[ j ].innerText = "";
	}

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.el_tbody.change_child_htmlOption():void----------" );
};

/**
 * @function
 * @param {HTMLElement} tbody
 * @param {Array} d [ {}, {}, ... ]
 * @param {Array} options [{ idx : 0, thtml : "" }, { idx : 0, thtml : "" }, ...]
 */
window.b2link.el_tbody.change_child_htmlOptions = function( tbody, d, options )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.el_tbody.change_child_htmlOptions():void----------" );

	var a = tbody.children;
	var io;//tr;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ]//tr;
		var b = io.children;
		var j=0, jLen=b.length;

		var dio = d[ i ];
		if( dio )
		{
			for( ; j<jLen; ++j ) b[ j ].innerText = dio[ tbody.__list_reuse_key[ j ] ];
			var k=0, kLen=options.length;
			for( ; k<kLen; ++k )
			{
				var option = options[ k ];
				var key = tbody.__list_reuse_key[ option.idx ];
				b[ option.idx ].innerHTML = option.thtml.replace( "{{" + key + "}}", dio[ key ] );
			}
		}
		else for( ; j<jLen; ++j ) b[ j ].innerText = "";
	}

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.el_tbody.change_child_htmlOptions():void----------" );
};

//----------------------------------------------------------------------------------------------------window.b2link.el_tbody.c;


//----------------------------------------------------------------------------------------------------window.b2link.el_tbody.g;

/**
 * @function
 * @param {HTMLElement} t tbody
 * @return {Array} [ {HTMLElement}, {HTMLElement}, .... ]
 */
window.b2link.el_tbody.getIndices_FromTBody_CheckBoxSelected = function( t )
{
	window.JamesLog.timeStamp( "---- [ S ] - window.b2link.el_tbody.getIndices_FromTBody_CheckBoxSelected():{Array}----------" );

	var r = [];
	var a = t.children;
	var io;
	var ioCheckBox;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		ioCheckBox = io.children[ 0 ].children[ 0 ];
		if( ioCheckBox.checked ) r.push( i );
	}

	//console.log( r );
	window.JamesLog.timeStamp( "---- [ E ] - window.b2link.el_tbody.getIndices_FromTBody_CheckBoxSelected():{Array}----------" );
	return r;
};

/**
 * @function
 * @param {HTMLElement} t tbody
 * @return {Array} [ {HTMLElement}, {HTMLElement}, .... ]
 */
window.b2link.el_tbody.getInputFromTBody_CheckBoxSelected = function( t )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.el_tbody.getInputFromTBody_CheckBoxSelected():{Array}----------" );

	var r = [];
	var a = t.children;
	var io;
	var ioCheckBox;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		ioCheckBox = io.children[ 0 ].children[ 0 ];
		if( ioCheckBox.checked ) r.push( ioCheckBox );
	}

	//console.log( r );
	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.el_tbody.getInputFromTBody_CheckBoxSelected():{Array}----------return r;" );
	return r;
};

/**
 * @function
 * @param {HTMLElement} t tbody
 * @return {Array} [ {HTMLElement}, {HTMLElement}, .... ]
 */
window.b2link.el_tbody.getInputValue_IntFromTBody_CheckBoxSelected = function( t )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.el_tbody.getInputValue_IntFromTBody_CheckBoxSelected():{Array}----------" );

	var r = [];
	var a = t.children;
	var io;
	var ioCheckBox;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		ioCheckBox = io.children[ 0 ].children[ 0 ];

		/*/
		if( ioCheckBox.checked ) r.push( parseInt( ioCheckBox.value ) );
		/*/
		//수정 - 20161218 - 정재명;
		if( ioCheckBox.checked ) r.push( parseInt( i ) );
		//*/
	}

	console.log( r );
	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.el_tbody.getInputValue_IntFromTBody_CheckBoxSelected():{Array}----------" );
	return r;
};

/**
 * @function
 * @param {HTMLElement} t tbody
 * @return {Array} [ {HTMLElement}, {HTMLElement}, .... ]
 */
window.b2link.el_tbody.getInputValueFromTBody_CheckBoxSelected = function( t )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.el_tbody.getInputValueFromTBody_CheckBoxSelected():{Array}----------" );

	var r = [];
	var a = t.children;
	var io;
	var ioCheckBox;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		ioCheckBox = io.children[ 0 ].children[ 0 ];
		if( ioCheckBox.checked ) r.push( ioCheckBox.value );
	}

	console.log( r );
	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.el_tbody.getInputValueFromTBody_CheckBoxSelected():{Array}----------" );
	return r;
};

/**
 * @function
 * @param {HTMLElement} t tr
 * @return {Object} {}
 */
window.b2link.el_tbody.getInputValueFromTR = function( t )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.el_tbody.getInputValueFromTR():{Object}----------" );

	var f = window.b2link.el_input.setObjectInputValueFromInputTypeAndClassName;

	var r = {};
	var a = t.getElementsByTagName( "INPUT" );
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];//HTMLInputElement;
		f( r, io );
	}

	console.log( r );
	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.el_tbody.getInputValueFromTR():{Object}----------" );
	return r;
};

/**
 * @function
 * @param {HTMLElement} t tbody
 * @return {Array} [ {HTMLElement}, {HTMLElement}, .... ]
 */
window.b2link.el_tbody.getTDFromTBody_CheckBoxSelected = function( t )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.el_tbody.getTDFromTBody_CheckBoxSelected():{Array}----------" );

	var r = [];
	var a = t.children;
	var io;
	var ioCheckBox;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		ioCheckBox = io.children[ 0 ].children[ 0 ];
		if( ioCheckBox.checked ) r.push( io.children[ 0 ] );
	}

	console.log( r );
	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.el_tbody.getTDFromTBody_CheckBoxSelected():{Array}----------" );
	return r;
};

//----------------------------------------------------------------------------------------------------window.b2link.el_tbody.g;


//----------------------------------------------------------------------------------------------------window.b2link.el_tbody.p;
//----------------------------------------------------------------------------------------------------window.b2link.el_tbody.p;


//----------------------------------------------------------------------------------------------------window.b2link.el_tbody.u;
//----------------------------------------------------------------------------------------------------window.b2link.el_tbody.u;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;