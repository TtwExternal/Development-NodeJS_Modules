//----------------------------------------------------------------------------------------------------;
var fileNm = "./js/b2linkUIClass/form/window.b2linkUIClass.form.DataElements.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

window.b2linkUIClass.form.DataElements = function( url, $el_div, _this )
{
	//Extends;
	var _this = _this ? _this : { __url : url };
	//----------------------------------------------------------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	var _o_DataInputElements = {};

	//----------------------------------------------------------------------------------------------------;
	var _setDataInputElements = function(){
		window.cparkLog.timeStamp( "----- [ E ] - _setDataInputElements():void----------" );

		var o = _getDataInputElements();
		var a = $el_div.getElementsByTagName( "INPUT" );
		var io;

		for( i=0; i<a.length; i++ )
		{
			io = a[ i ];

			if( io.type == "radio" )
			{
				if( ! o[ io.name ] ) o[ io.name ] = {};
				o[ io.name ][ io.id ] = io;

				if( io.checked ) o[ io.name ][ "checked" ] = io.value;
				continue;
			}

			if( io.className || io.id ) o[ io.className || io.id ] = io;
		}

		//Textarea;
		var t = $el_div.getElementsByTagName( "TEXTAREA" );
		Array.from( t ).forEach( function( io ){ if( io.className || io.id ) o[ io.className || io.id ] = io; });

		//Select;
		t = $el_div.getElementsByTagName( "SELECT" );
		Array.from( t ).forEach( function( io ){ if( io.className || io.id ) o[ io.className || io.id ] = io; });

		//window.b2link.element.getFormElements( o, $el_div );

		window.cparkLog.timeStamp( "----- [ E ] - _setDataInputElements():void----------" );
	};

	var _getDataInputElements = function()
	{
		window.cparkLog.timeStamp( "----- [ E ] - _getDataInputElements():void----------" );

		return _o_DataInputElements;

		window.cparkLog.timeStamp( "----- [ E ] - _getDataInputElements():void----------" );
	};

	var _getDataInputElements_fromDiv = function( el )
	{
		window.cparkLog.timeStamp( "----- [ E ] - _getDataInputElements():void----------" );

		var o = {};
		var a = el.getElementsByTagName( "INPUT" );
		var io;
		for( i=0; i<a.length; i++ )
		{
			io = a[ i ];
			if( io.className || io.id )
			{
				if( io.className ) o[ io.className ] = io;
				else o[ io.id ] = io;
			}
		}

		//window.b2link.element.getFormElements( o, $el_div );

		return o;

		window.cparkLog.timeStamp( "----- [ E ] - _getDataInputElements():void----------" );
	};

	var _clearDataInputElements = function()
	{
		window.cparkLog.timeStamp( "----- [ S ] - _clearDataInputElements():void----------" );
		var o = _getDataInputElements();
		for( key in o ){
			o[ key ].value = "";
		}
		window.cparkLog.timeStamp( "----- [ E ] - _clearDataInputElements():void----------" );
	};

	/**
	 * [_setInputValues description]
	 * @param {[type]} data		[description]
	 * @param {[type]} cls_segment [description]
	 */
	var _setInputValues = function( data, cls_segment, dataInputElements ){

		if( !data || Object.keys(data).length == 0 ){
			return;
		}

		var o = dataInputElements ? dataInputElements : _this.getDataInputElements();

		var el = null;
		var cls_nm = null;
		var input_prefix = "input__";

		for( key in data ){
			//console.log( key + " : " + typeof obj[key] + " : " + obj[key] );
			//if( typeof data[ key ] !== "object" && typeof data[ key ] !== "array" ){
			if( [ "array", "object" ].indexOf( (typeof data[ key ]).toLowerCase() ) < 0){
				cls_nm = input_prefix + (cls_segment ? cls_segment + "." : "") + key;
				el = o[ cls_nm ];
				if( el ){
					el.value = data[ key ];
				}
			} else {
				if( !Array.isArray(data[key]) ){
					_setInputValues( data[key], (cls_segment ? cls_segment + "." : "") + key, o );
				}
			}
		};
	}

	//----------------------------------------------------------------------------------------------------;
	_this.setDataInputElements = _setDataInputElements;
	_this.getDataInputElements = _getDataInputElements;
	_this.getDataInputElements_fromDiv = _getDataInputElements_fromDiv;
	_this.clearDataInputElements = _clearDataInputElements;
	_this.setInputValues = _setInputValues;
	//----------------------------------------------------------------------------------------------------;
	return _this;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;