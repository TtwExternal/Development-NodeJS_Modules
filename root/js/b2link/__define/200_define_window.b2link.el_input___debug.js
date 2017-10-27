//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_window.b2link.el_input-debug.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.el_input;

//window.b2link.el_input = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.el_input;


//----------------------------------------------------------------------------------------------------window.b2link.el_input.g***;

/**
 * @function
 * @param {HTMLElement} t el_div
 * @param {String} className
 * @return {Object}
 */
window.b2link.el_input.getInputRadioDataFromClassName = function( t, className )
{
	window.Rh2Log.timeStamp( "---- [ S ] - window.b2link.el_input.getInputRadioDataFromClassName():{Object}----------" );

	var a = t.getElementsByClassName( "className" );
	var radio = null;

	var i=0, iLen=a.length;
	var radio = null;
	var o = null;
	for( ; i<iLen; ++i )
	{
		o = a[ i ];
		if( o.tagName == "INPUT" && o.checked )
		{
			radio = o;
			break;
		}
	}

	var d = null;

	if( radio )
	{
		d = {};
		d.checked = true;
		d.title = o.title ? o.title : "";
		d.value = o.value ? o.value : "";
		d.value = o.className ? o.className : "";
	}

	window.Rh2Log.timeStamp( "---- [ E ] - window.b2link.el_input.getInputRadioDataFromClassName():{Object}----------return d;" );
	return d;
};

(function(){
	/**
	 * @function
	 * @param {HTMLElement} t INPUT
	 * @return {Object} {}
	 */
	window.b2link.el_input.getInputValueFromInputType = function( t )
	{
		window.TtwLog.timeStamp( "---- [ S ] - window.b2link.el_input.getInputValueFromInputType():{Object}----------" );

		/*/
		try
		{
			var r = window.b2link.el_input.getInputValueFromInputType[ "_fn_" + t.type ]( t );
		}
		catch( er )
		{
			console.error( "window.b2link.el_input.getInputValueFromInputType Error : " + er );
		}
		/*/
		var r = window.b2link.el_input.getInputValueFromInputType[ "_fn_" + t.type ]( t );
		//*/

		window.TtwLog.timeStamp( "---- [ E ] - window.b2link.el_input.getInputValueFromInputType():{Object}----------return r;" );
		return r;
	};
	var _ = window.b2link.el_input.getInputValueFromInputType;
		_._fn_button = function( t ){ return t.value; };
		_._fn_checkbox = function( t ){ return t.checked; };
		_._fn_color = function( t ){ return t.value; };
		_._fn_date = function( t ){ return t.value; };
		_[ "datetime-local" ] = function( t ){ return t.value; };
		_._fn_email = function( t ){ return t.value; };
		_._fn_file = function( t ){ return t.value; };
		_._fn_hidden = function( t ){ return t.value; };
		_._fn_image = function( t ){ return t.value; };
		_._fn_month = function( t ){ return t.value; };
		_._fn_number = function( t ){ return t.value; };
		_._fn_password = function( t ){ return t.value; };
		_._fn_radio = function( t ){ return t.value; };
		_._fn_range = function( t ){ return t.value; };
		_._fn_reset = function( t ){ return t.value; };
		_._fn_search = function( t ){ return t.value; };
		_._fn_submit = function( t ){ return t.value; };
		_._fn_tel = function( t ){ return t.value; };
		_._fn_text = function( t ){ return t.value; };
		_._fn_time = function( t ){ return t.value; };
		_._fn_url = function( t ){ return t.value; };
		_._fn_week = function( t ){ return t.value; };
})();

//----------------------------------------------------------------------------------------------------window.b2link.el_input.g***;


//----------------------------------------------------------------------------------------------------window.b2link.el_input.s***;

/**
 * @function
 * @param {HTMLElement} t el_div
 * @param {Array} d data Object Array
 * @param {String} className
 * @param {String} valueName data Object 안에서 라디오 버튼의 value로 사용할 Property name
 * @param {String} textName data Object 안에서 라디오 버튼에 대한 text로 사용할 Property name
 */
window.b2link.el_input.setInputRadioFromDataObject = function( t, d, className, valueName, textName )
{
	window.Rh2Log.timeStamp( "---- [ S ] - window.b2link.el_input.setInputRadioFromDataObject():void----------" );

	var f = window.b2link.element.getElementByClassName;

	var o = f( t, className );
	if( o )
	{
		var p = o.parentElement;
			p.innerHTML = "";

		var tempObj = null;
		var tempStr = null;

		var i=0, iLen=d.length;
		for( ; i<iLen; ++i )
		{
			tempObj = document.createElement( "input" );
			tempObj.type = o.type;
			tempObj.className = o.className;
			tempObj.name = o.name;
			tempObj.value = d[ i ][ valueName ];
			tempObj.title = d[ i ][ textName ];

			if( o.required ) tempObj.required = o.required;

			tempObj.item_value = d[ i ];

			tempStr = document.createElement( "span" );
			tempStr.innerText = d[ i ][ textName ];

			p.appendChild( tempObj );
			p.appendChild( tempStr );
		}
	}
	else
	{
		window.Rh2Log.error( "---- [ E ] - window.b2link.el_input.setInputRadioFromDataObject() ----------" );
		window.Rh2Log.error( "className : " + className + "인 element 존재하지 않음" );
	}

	window.Rh2Log.timeStamp( "---- [ E ] - window.b2link.el_input.setInputRadioFromDataObject():void----------" );
};

/**
 * @function
 * @param {HTMLElement} t el_div
 * @param {Object} d
 */
window.b2link.el_input.setInputValueAttributeFromClassNameDataObject = function( t, d )
{
	window.JamesLog.timeStamp( "---- [ S ] - window.b2link.el_input.setInputValueAttributeFromClassNameDataObject():void----------" );

	var f = window.b2link.element.getElementByClassName;

	for( var p in d )
		if( f( t, p ) && f( t, p ).value != undefined ) f( t, p ).setAttribute( "value", d[ p ] );

	window.JamesLog.timeStamp( "---- [ E ] - window.b2link.el_input.setInputValueAttributeFromClassNameDataObject():void----------" );
};

/**
 * @function
 * @param {HTMLElement} t el_div
 * @param {Object} d
 */
window.b2link.el_input.setInputValueFromClassNameDataObject = function( t, d )
{
	window.Rh2Log.timeStamp( "---- [ S ] - window.b2link.el_input.setInputValueFromClassNameDataObject():void----------" );

	var f = window.b2link.element.getElementByClassName;

	for( var p in d )
		if( f( t, p ) && f( t, p ).value != undefined ) f( t, p ).value = d[ p ];

	window.Rh2Log.timeStamp( "---- [ E ] - window.b2link.el_input.setInputValueFromClassNameDataObject():void----------" );
};

/**
 * @function
 * @param {Object} t INPUT
 * @param {HTMLElement} el INPUT
 */
window.b2link.el_input.setObjectInputValueFromInputTypeAndClassName = function( t, el )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.el_input.setObjectInputValueFromInputTypeAndClassName():void----------" );

	/*/
	try
	{
		var r = window.b2link.el_input.setObjectInputValueFromInputTypeAndClassName[ "_fn_" + el.type ]( t );
	}
	catch( er )
	{
		console.error( "window.b2link.el_input.setObjectInputValueFromInputTypeAndClassName Error : " + er );
	}
	/*/

	var r = window.b2link.el_input.getInputValueFromInputType[ "_fn_" + el.type ]( t );
	//*/

	t[ el.className ] = r;

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.el_input.setObjectInputValueFromInputTypeAndClassName():void----------" );
};

//----------------------------------------------------------------------------------------------------window.b2link.el_input.s***;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;