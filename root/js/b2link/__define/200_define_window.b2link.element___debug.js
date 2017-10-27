//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_window.b2link.element.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.element;

//window.b2link.element = {};

//--------------------------------------------------window.b2link.element.a***;
//--------------------------------------------------window.b2link.element.a***;


//--------------------------------------------------window.b2link.element.c***;
//--------------------------------------------------window.b2link.element.c***;


//--------------------------------------------------window.b2link.element.g***;

/**
 * targetElement의 모든 form elements들을 반환한다.
 * @function
 * @param {Object} t
 * @param {HTMLElement} el HTMLElement
 * @return {Object}
 */
(function(){
	window.b2link.element.getFormElements = function( t, el )
	{
		//window.AlexLog.timeStamp( "---- [ S ] - window.b2link.element.getFormElements():{Object}----------" );

		var t0 = window.b2link.element.getFormElements;
		var f0 = t0._f0;
		var f1 = t0._f1;

		t = t ? t : {};
		var a = t0._a0;

		var io;
		var i=0, iLen=a.length;
		for( ; i<iLen; ++i )
		{
			io = a[ i ];

			f0( t, el.getElementsByTagName( io ) );
		};

		f1( t, el );

		//window.AlexLog.timeStamp( "---- [ E ] - window.b2link.element.getFormElements():{Object}----------" );

		return t;
	};

	var _ = window.b2link.element.getFormElements;
		_._a0 = [ "SELECT", "TEXTAREA", "BUTTON", "DATALIST", "KEYGEN", "OUTPUT" ];
		_._f0 = function( t, a )
		{
			var io;
			var i=0, iLen=a.length;
			for( ; i<iLen; ++i )
			{
				io = a [ i ];
				t[ io.classList[ 0 ] ] = io;
			}
		};

		_._f1 = function( t, el )
		{
			var a = el.getElementsByTagName( "INPUT" );

			var io;
			var i=0, iLen=a.length;
			for( ; i<iLen; ++i )
			{
				io = a [ i ];
				if( io.type == "radio" )
				{
					if( !t[ io.classList[ 0 ] ] )
					{
						t[ io.classList[ 0 ] ] = [];
						t[ io.classList[ 0 ] ].value = null;
					}

					t[ io.classList[ 0 ] ].push( io );

					if( io.checked )
					{
						t[ io.classList[ 0 ] ].value = io.value;
					}
				}
				else
				{
					t[ io.classList[ 0 ] ] = io;
				}
			}
		};
})();

/**
 * targetElement의 value를 반환한다.
 * @function
 * @param {HTMLElement} t HTMLElement
 * @return {Object} {}
 */
(function(){
	window.b2link.element.getValueOfElement = function( t )
	{
		//window.AlexLog.timeStamp( "---- [ S ] - window.b2link.element.getValueOfElement():{Array}----------" );

		var key = null;
		try
		{
			key = ( t.tagName == "INPUT" ) ? "_fn_" + t.type : "_fn_" + t.tagName.toLowerCase();
		}
		catch( e )
		{
			key = ( t[ 0 ].tagName == "INPUT" ) ? "_fn_" + t[ 0 ].type : "_fn_" + t[ 0 ].tagName.toLowerCase();
		}
		var r = window.b2link.element.getValueOfElement[ key ]( t );

		//window.AlexLog.timeStamp( "---- [ S ] - window.b2link.element.getValueOfElement():{Array}----------" );

		return r;
	};

	var _ = window.b2link.element.getValueOfElement;
		_[ "_fn_button"   ] = function( t ){ return t.value; };
		_[ "_fn_color"    ] = function( t ){ return t.value; };
		_[ "_fn_email"    ] = function( t ){ return t.value; };
		_[ "_fn_file"     ] = function( t ){ return t.value; };
		_[ "_fn_hidden"   ] = function( t ){ return t.value; };
		_[ "_fn_image"    ] = function( t ){ return t.value; };
		_[ "_fn_month"    ] = function( t ){ return t.value; };
		_[ "_fn_number"   ] = function( t ){ return t.value; };
		_[ "_fn_password" ] = function( t ){ return t.value; };
		_[ "_fn_range"    ] = function( t ){ return t.value; };
		_[ "_fn_reset"    ] = function( t ){ return t.value; };
		_[ "_fn_search"   ] = function( t ){ return t.value; };
		_[ "_fn_submit"   ] = function( t ){ return t.value; };
		_[ "_fn_tel"      ] = function( t ){ return t.value; };
		_[ "_fn_text"     ] = function( t ){ return t.value; };
		_[ "_fn_time"     ] = function( t ){ return t.value; };
		_[ "_fn_url"      ] = function( t ){ return t.value; };
		_[ "_fn_week"     ] = function( t ){ return t.value; };
		_[ "_fn_date"     ] = function( t ){ return t.value; };
		_[ "_fn_datetime" ] = function( t ){ return t.value; };
		_[ "_fn_datetime-local" ] = function( t ){ return t.value; };

		_[ "_fn_checkbox" ] = function( t ){ return t.checked; };

		_[ "_fn_radio" ] = function( t ){
			if( t.length > 0 )
			{
				var i=0, iLen=t.length;
				var v = null;
				for( ; i<iLen; ++i )
				{
					if( t[ i ].checked )
					{
						v = t[ i ].value;
						break;
					}
				}
			}
			else
			{
				v = t.value;
			}
			return v;
		};


		_[ "_fn_textarea" ] = function( t ){ return t.value; };
		_[ "_fn_select"   ] = function( t ){ return t.value; };
		_[ "_fn_button"   ] = function( t ){ return t.value; };
		_[ "_fn_datalist" ] = function( t ){ return t.value; };
		_[ "_fn_output"   ] = function( t ){ return t.value; };
		_[ "_fn_keygen"   ] = function( t ){ return t.value; };
})();

//--------------------------------------------------window.b2link.element.g***;


//--------------------------------------------------window.b2link.element.s***;

/**
 * targetElement의 value를 set 한다.
 * @function
 * @param {HTMLElement} t HTMLElement
 * @param {String} value
 */
(function(){
	window.b2link.element.setValueOfElement = function( t, value )
	{
		//window.AlexLog.timeStamp( "---- [ S ] - window.b2link.element.setValueOfElement():void----------" );

		var key = ( t.tagName == "INPUT" ) ? "_fn_" + t.type : "_fn_" + t.tagName.toLowerCase();
		var r = window.b2link.element.setValueOfElement[ key ]( t, value );

		//window.AlexLog.timeStamp( "---- [ E ] - window.b2link.element.setValueOfElement():void----------" );
	};

	var _ = window.b2link.element.setValueOfElement;
		_[ "_fn_button"   ] = function( t, value ){ t.value = value; };
		_[ "_fn_color"    ] = function( t, value ){ t.value = value; };
		_[ "_fn_email"    ] = function( t, value ){ t.value = value; };
		_[ "_fn_file"     ] = function( t, value ){ t.value = value; };
		_[ "_fn_hidden"   ] = function( t, value ){ t.value = value; };
		_[ "_fn_image"    ] = function( t, value ){ t.value = value; };
		_[ "_fn_month"    ] = function( t, value ){ t.value = value; };
		_[ "_fn_number"   ] = function( t, value ){ t.value = value; };
		_[ "_fn_password" ] = function( t, value ){ t.value = value; };
		_[ "_fn_range"    ] = function( t, value ){ t.value = value; };
		_[ "_fn_reset"    ] = function( t, value ){ t.value = value; };
		_[ "_fn_search"   ] = function( t, value ){ t.value = value; };
		_[ "_fn_submit"   ] = function( t, value ){ t.value = value; };
		_[ "_fn_tel"      ] = function( t, value ){ t.value = value; };
		_[ "_fn_text"     ] = function( t, value ){ t.value = value; };
		_[ "_fn_time"     ] = function( t, value ){ t.value = value; };
		_[ "_fn_url"      ] = function( t, value ){ t.value = value; };
		_[ "_fn_week"     ] = function( t, value ){ t.value = value; };
		_[ "_fn_date"     ] = function( t, value ){ t.value = value; };
		_[ "_fn_datetime" ] = function( t, value ){ t.value = value; };
		_[ "_fn_datetime-local" ] = function( t, value ){ t.value = value; };

		_[ "_fn_checkbox" ] = function( t, value ){ t.checked = Boolean(value); };

		_[ "_fn_radio" ] = function( a, value ){
			var i=0, iLen=a.length;

			if( !Boolean(value) ){ a.value = null; }

			for( ; i<iLen; ++i )
			{
				if( a[i].value == value ){
					a[i].checked = true;
					a.value = value;
				}
				else
				{
					a[i].checked = false;
				}
			}
		};

		_[ "_fn_textarea" ] = function( t, value ){ t.value = value; };
		_[ "_fn_select"   ] = function( t, value ){ t.value = value; };
		_[ "_fn_datalist" ] = function( t, value ){ t.value = value; };
		_[ "_fn_output"   ] = function( t, value ){ t.value = value; };
		_[ "_fn_keygen"   ] = function( t, value ){ t.value = value; };
})();

//--------------------------------------------------window.b2link.element.s***;


//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.element;

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;