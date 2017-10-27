//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_window.b2link.el_table.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.el_table;

window.b2link.el_table = window.b2link.el_table || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.el_table;


//----------------------------------------------------------------------------------------------------window.b2link.el_table.h***;

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
	window.b2link.el_table.hideColumn( table, 3 );
	window.b2link.el_table.hideColumn( table, 4 );
	window.b2link.el_table.hideColumn( table, 5 );
	console.log( table.tHead.children[ 0 ].__hideColumns );
	console.log( table.tBodies[ 0 ].children[ 0 ].__hideColumns );

	window.b2link.el_table.showColumn( table, 3 );
	window.b2link.el_table.showColumn( table, 4 );
	window.b2link.el_table.showColumn( table, 5 );
	console.log( table.tHead.children[ 0 ].__hideColumns );
	console.log( table.tBodies[ 0 ].children[ 0 ].__hideColumns );

	window.b2link.el_table.showAllColumns( table );
	console.log( table.tHead.children[ 0 ].__hideColumns );
	console.log( table.tBodies[ 0 ].children[ 0 ].__hideColumns );
 * </code>
 */
window.b2link.el_table.hideColumn=function(e,n){var l=table.tHead,i=l.children[l.children.length-1];i.__hideColumns||(i.__hideColumns="");var d=","+n;-1==i.__hideColumns.indexOf(d)&&(i.__hideColumns+=","+n);var _=i.children;_[n].style.display="none";for(var h,o=table.tBodies[0],_=o.children,s=0,a=_.length;a>s;++s)h=_[s],h.__hideColumns||(h.__hideColumns=""),-1==h.__hideColumns.indexOf(d)&&(h.__hideColumns+=","+n),h.children[n].style.display="none"};

//----------------------------------------------------------------------------------------------------window.b2link.el_table.h***;


//----------------------------------------------------------------------------------------------------window.b2link.el_table.s***;

/**
 *
 * @function
 * @param {HTMLElement} el_table
 * <code>
	var o = window.b2link_ui_member.member_basic.getAllList();
	var el = o[ 0 ];
	var table = el.getElementsByClassName( "table__member_basic_allList" )[ 0 ];
	window.b2link.el_table.hideColumn( table, 3 );
	window.b2link.el_table.hideColumn( table, 4 );
	window.b2link.el_table.hideColumn( table, 5 );
	console.log( table.tHead.children[ 0 ].__hideColumns );
	console.log( table.tBodies[ 0 ].children[ 0 ].__hideColumns );

	window.b2link.el_table.showColumn( table, 3 );
	window.b2link.el_table.showColumn( table, 4 );
	window.b2link.el_table.showColumn( table, 5 );
	console.log( table.tHead.children[ 0 ].__hideColumns );
	console.log( table.tBodies[ 0 ].children[ 0 ].__hideColumns );

	window.b2link.el_table.showAllColumns( table );
	console.log( table.tHead.children[ 0 ].__hideColumns );
	console.log( table.tBodies[ 0 ].children[ 0 ].__hideColumns );
 * </code>
 */
window.b2link.el_table.showAllColumns=function(l){for(var e=table.tHead,n=e.children[e.children.length-1],i=n.children,d=n.__hideColumns.split(","),h=1,t=d.length;t>h;++h)i[d[h]].style.display="";n.__hideColumns="";var s,o=table.tBodies[0],i=o.children;for(h=0,t=i.length;t>h;++h){for(var s=i[h],r=s.children,a=s.__hideColumns.split(","),_=1,c=a.length;c>_;++_)r[a[_]].style.display="";s.__hideColumns=""}};

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
	window.b2link.el_table.hideColumn( table, 3 );
	window.b2link.el_table.hideColumn( table, 4 );
	window.b2link.el_table.hideColumn( table, 5 );
	console.log( table.tHead.children[ 0 ].__hideColumns );
	console.log( table.tBodies[ 0 ].children[ 0 ].__hideColumns );

	window.b2link.el_table.showColumn( table, 3 );
	window.b2link.el_table.showColumn( table, 4 );
	window.b2link.el_table.showColumn( table, 5 );
	console.log( table.tHead.children[ 0 ].__hideColumns );
	console.log( table.tBodies[ 0 ].children[ 0 ].__hideColumns );

	window.b2link.el_table.showAllColumns( table );
	console.log( table.tHead.children[ 0 ].__hideColumns );
	console.log( table.tBodies[ 0 ].children[ 0 ].__hideColumns );
 * </code>
 */
window.b2link.el_table.showColumn=function(e,l){var n=table.tHead,i=n.children[n.children.length-1];i.__hideColumns=i.__hideColumns.replace(","+l,"");var d=i.children;d[l].style.display="";for(var h,a=table.tBodies[0],d=a.children,r=0,o=d.length;o>r;++r)h=d[r],h.__hideColumns=h.__hideColumns.replace(","+l,""),h.children[l].style.display=""};

//----------------------------------------------------------------------------------------------------window.b2link.el_table.s***;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;