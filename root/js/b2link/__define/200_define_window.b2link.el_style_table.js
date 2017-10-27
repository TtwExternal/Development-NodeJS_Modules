//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_window.b2link.el_style_table.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.el_style_table;

window.b2link.el_style_table = window.b2link.el_style_table || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.el_style_table;


//----------------------------------------------------------------------------------------------------window.b2link.el_style_table.h***;

/**
 *
 * @function
 * @param {HTMLElement} el_table
 * @param {uint} cellIndex
 * @example
 * <code>
	var o = window.b2link_ui_member.member_basic.getAllList();
	var el = o[ 0 ];
	var table = el.getElementsByClassName( "table__member_basic_allList" )[ 0 ];
	window.b2link.el_style_table.hideColumn( table, 3 );
	window.b2link.el_style_table.hideColumn( table, 4 );
	window.b2link.el_style_table.hideColumn( table, 5 );

	window.b2link.el_style_table.showColumn( table, 3 );
	window.b2link.el_style_table.showColumn( table, 4 );
	window.b2link.el_style_table.showColumn( table, 5 );

	window.b2link.el_style_table.showAllColumns( table );
 * </code>
 */
!function(){var n="th:nth-of-type( <!=n=!> ),td:nth-of-type( <!=n=!> ){display: none;}";window.b2link.el_style_table.hideColumn=function(e,t){return window.b2link.el_style.addCSSText_name(e,n.replace(/\<\!\=n\=\!\>/gi,t),"table-hideColumn"+t)}}();

//----------------------------------------------------------------------------------------------------window.b2link.el_style_table.h***;


//----------------------------------------------------------------------------------------------------window.b2link.el_style_table.s***;

/**
 *
 * @function
 * @param {HTMLElement} el_table
 * <code>
	var o = window.b2link_ui_member.member_basic.getAllList();
	var el = o[ 0 ];
	var table = el.getElementsByClassName( "table__member_basic_allList" )[ 0 ];
	window.b2link.el_style_table.hideColumn( table, 3 );
	window.b2link.el_style_table.hideColumn( table, 4 );
	window.b2link.el_style_table.hideColumn( table, 5 );

	window.b2link.el_style_table.showColumn( table, 3 );
	window.b2link.el_style_table.showColumn( table, 4 );
	window.b2link.el_style_table.showColumn( table, 5 );

	window.b2link.el_style_table.showAllColumns( table );
 * </code>
 */
window.b2link.el_style_table.showAllColumns=function(l){window.b2link.el_style.removeAllStyleElements_name(l,"table-hideColumn")};

/**
 *
 * @function
 * @param {HTMLElement} el_table
 * @param {uint} cellIndex
 * @example
 * <code>
	var o = window.b2link_ui_member.member_basic.getAllList();
	var el = o[ 0 ];
	var table = el.getElementsByClassName( "table__member_basic_allList" )[ 0 ];
	window.b2link.el_style_table.hideColumn( table, 3 );
	window.b2link.el_style_table.hideColumn( table, 4 );
	window.b2link.el_style_table.hideColumn( table, 5 );

	window.b2link.el_style_table.showColumn( table, 3 );
	window.b2link.el_style_table.showColumn( table, 4 );
	window.b2link.el_style_table.showColumn( table, 5 );

	window.b2link.el_style_table.showAllColumns( table );
 * </code>
 */
window.b2link.el_style_table.showColumn=function(e,l){return window.b2link.el_style.removeStyleElement(e,"table-hideColumn"+l)};

//----------------------------------------------------------------------------------------------------window.b2link.el_style_table.s***;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;