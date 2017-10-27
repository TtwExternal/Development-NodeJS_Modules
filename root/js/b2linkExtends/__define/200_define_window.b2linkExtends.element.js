//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2linkExtends/__define/200_define_window.b2linkExtends.element.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2linkExtends.element;

window.b2linkExtends.element = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2linkExtends.element;


//----------------------------------------------------------------------------------------------------window.b2linkExtends.element.h***;

/**
 * HTMLElement.style.display = "none";
 * @function
 * @param {Boolean} bRemove default:false
 * @return {HTMLElement}
 */
window.b2linkExtends.element.hide=function(e){return window.b2link.element.hide(this.__el),window.b2link.event.dispatchCE__HIDED_EL(this.__el,{_:this}),this.__el.parentElement&&e&&window.b2link.element.removeChild(this.__el.parentElement,this.__el),this.__el};

/**
 * HTMLElement를 화면에서 숨긴 후 Common Modal을 숨긴다.
 * @function
 */
window.b2linkExtends.element.hideAndModal=function(i){var n=i?i:this.__el;window.b2link.ui_modal.hide_transition(),window.b2link.element.hide(n),window.b2link.event.dispatchCE__HIDED_EL(n,{_:this}),window.b2link.ui_modal.removeChild(n)};

/**
 * HTMLElement를 화면에서 숨긴 후 Common Modal을 숨긴다.
 * @function
 * @param {Object} d
 * <code>
	{
		"bEffect" : false
	}
 * </code>
 */
window.b2linkExtends.element.hideAndModal_MoveBGCLastChild=function(n){window.b2linkExtends.element.hideAndModal_Sync(this.__el),window.b2link.ui_modal.move_BGContentLastChildToContent()};

/**
 * HTMLElement를 화면에서 숨긴 후 Common Modal을 숨긴다.
 * @function
 * @param {Object} d
 * <code>
	{
		"bEffect" : false
	}
 * </code>
 */
window.b2linkExtends.element.hideAndModal_MoveCurrentChildren=function(n){window.b2linkExtends.element.hideAndModal_Sync(this.__el),window.b2link.ui_modal.move_BGContentChildrenToContent()};

/**
 * HTMLElement를 화면에서 숨긴 후 Common Modal을 숨긴다.
 * @function
 */
window.b2linkExtends.element.hideAndModal_Sync=function(i){var n=i?i:this.__el;window.b2link.ui_modal.hide(),window.b2link.element.hide(n),window.b2link.event.dispatchCE__HIDED_EL(n,{_:this}),window.b2link.ui_modal.removeChild(n)};

//----------------------------------------------------------------------------------------------------window.b2linkExtends.element.h***;


//----------------------------------------------------------------------------------------------------window.b2linkExtends.element.s***;

/**
 * HTMLElement.style.display = "";
 * parentElement를 지정하면 appendChild를 한다.
 * @function
 * @param {HTMLElement} p parentElement
 * @return {HTMLElement}
 * @example
 * <code>
	//----------Modal 객체 전환;
	var modal0 = window.b2link_ui.selector.list.category.category_partner_buyer();
	var modal0Ctrl = modal0[ 1 ];

	var modal1 = window.b2link_ui.selector.partner.partner_person();
	var modal1Ctrl = modal1[ 1 ];

	var modal0 = window.b2link_ui.selector.list.category.category_partner_buyer();

		modal0Ctrl.addEvent_mClick( function( li ){
		console.log( "메롱" );
		console.log( li );
		console.log( li.list_item_value );

		modal1Ctrl.showAndModal();
	});

	//----------다중 Modal 객체;
	var o0 =  window.b2link_ui.selector.table.list_static.country();
	var o1 = window.b2link_ui.selector.list.list_static.country();
	var o0c = o0[ 1 ];
	var o1c = o1[ 1 ];
	o0c.showAndModal( false );
	o1c.showAndModal( false );

	o0c.showAndModal_MoveCurrentChildren();
	o1c.showAndModal_MoveCurrentChildren();
 * </code>
 */
window.b2linkExtends.element.show=function(_){return this.__el.parentElement||_||(_=window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT?window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT:window.b2link.STATIC.CONST.ROOT_DIV.EL_UI_COMPONENT_FIXED),window.b2link.element.show(this.__el,_),window.b2link.event.dispatchCE__SHOWED_EL(this.__el,{_:this}),this.__el};

/**
 * Common Modal을 화면에 표출한 후 HTMLElement를 표출한다.
 * @function
 * @example
 * <code>
	//----------Modal 객체 전환;
	var modal0 = window.b2link_ui.selector.list.category.category_partner_buyer();
	var modal0Ctrl = modal0[ 1 ];

	var modal1 = window.b2link_ui.selector.partner.partner_person();
	var modal1Ctrl = modal1[ 1 ];

	var modal0 = window.b2link_ui.selector.list.category.category_partner_buyer();

		modal0Ctrl.addEvent_mClick( function( li ){
		console.log( "메롱" );
		console.log( li );
		console.log( li.list_item_value );

		modal1Ctrl.showAndModal();
	});

	//----------다중 Modal 객체;
	var o0 =  window.b2link_ui.selector.table.list_static.country();
	var o1 = window.b2link_ui.selector.list.list_static.country();
	var o0c = o0[ 1 ];
	var o1c = o1[ 1 ];
	o0c.showAndModal( false );
	o1c.showAndModal( false );

	o0c.showAndModal_MoveCurrentChildren();
	o1c.showAndModal_MoveCurrentChildren();
 * </code>
 */
window.b2linkExtends.element.showAndModal=function(n){var e=this.__el;window.b2link.ui_modal.appendChild(e,n),window.b2link.ui_modal.show_transition(),window.b2link.element.hide(e),window.b2link.element.setPosition_CenterMiddle_FromBody__NMinus(e),clearTimeout(window.b2linkExtends.element.showAndModal._timeout0);var i=window.b2linkExtends.element.showAndModal._t;if(i&&i!=e){window.b2link.element.show(window.b2linkExtends.element.showAndModal._t);var t=e.style;if(t.position="absolute",e.__FULL_SIZE_MODE){var o=window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT.parentElement.offsetLeft+10,d=15,l=1;t.left=o+"px",t.right=d+"px",t.top=l+"px";var w=window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT.clientWidth-10-d+"px";t.minWidth=t.maxWidth=w,window.b2link.event.dispatchCE__RESIZED_EL(e,null)}window.b2link.event.dispatchCE__SHOWED_EL(e,{_:this}),window.b2link.element.setPosition_CenterMiddle_FromBody__NMinus(i)}window.b2linkExtends.element.showAndModal._t=e,window.b2linkExtends.element.showAndModal._timeout0=setTimeout(function(){window.b2link.element.show(e),window.b2link.element.setPosition_CenterMiddle_FromBody__NMinus(e),window.b2link.event.dispatchCE__SHOWED_EL(e,{_:this})},300)},window.b2linkExtends.element.showAndModal._t=null,window.b2linkExtends.element.showAndModal._timeout0=0;

/**
 * Common Modal을 화면에 표출한 후 HTMLElement를 표출한다.
 * @function
 * @param {Object} d
 * <code>
	{
		"bEffect" : false
	}
 * </code>
 * @example
 * <code>
	//----------Modal 객체 전환;
	var modal0 = window.b2link_ui.selector.list.category.category_partner_buyer();
	var modal0Ctrl = modal0[ 1 ];

	var modal1 = window.b2link_ui.selector.partner.partner_person();
	var modal1Ctrl = modal1[ 1 ];

	var modal0 = window.b2link_ui.selector.list.category.category_partner_buyer();

		modal0Ctrl.addEvent_mClick( function( li ){
		console.log( "메롱" );
		console.log( li );
		console.log( li.list_item_value );

		modal1Ctrl.showAndModal();
	});

	//----------다중 Modal 객체;
	var o0 =  window.b2link_ui.selector.table.list_static.country();
	var o1 = window.b2link_ui.selector.list.list_static.country();
	var o0c = o0[ 1 ];
	var o1c = o1[ 1 ];
	o0c.showAndModal( false );
	o1c.showAndModal( false );

	o0c.showAndModal_MoveCurrentChildren();
	o1c.showAndModal_MoveCurrentChildren();
 * </code>
 */
window.b2linkExtends.element.showAndModal_MoveCurrentChildren=function(e){var n=this.__el;window.b2link.ui_modal.appendChild_MoveCurrentChildren(n),window.b2link.ui_modal.show(),window.b2link.element.hide(n),window.b2link.element.setPosition_CenterMiddle_FromBody__NMinus(n),window.b2link.element.show(n),clearTimeout(window.b2linkExtends.element.showAndModal._timeout0),window.b2linkExtends.element.showAndModal_MoveCurrentChildren._timeout0=setTimeout(function(){window.b2link.element.show(n),window.b2link.element.setPosition_CenterMiddle_FromBody__NMinus(n);var e=n.style;if(e.position="absolute",n.__FULL_SIZE_MODE){var i=window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT.parentElement.offsetLeft+10,t=15,o=1;e.left=i+"px",e.right=t+"px",e.top=o+"px";var d=window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT.clientWidth-10-t+"px";e.minWidth=e.maxWidth=d,window.b2link.event.dispatchCE__RESIZED_EL(n,null)}window.b2link.event.dispatchCE__SHOWED_EL(n,{_:this})},300)},window.b2linkExtends.element.showAndModal_MoveCurrentChildren._timeout0=0;

/**
 * Common Modal을 화면에 표출한 후 HTMLElement를 표출한다.
 * @function
 * @example
 * <code>
	//----------Modal 객체 전환;
	var modal0 = window.b2link_ui.selector.list.category.category_partner_buyer();
	var modal0Ctrl = modal0[ 1 ];

	var modal1 = window.b2link_ui.selector.partner.partner_person();
	var modal1Ctrl = modal1[ 1 ];

	var modal0 = window.b2link_ui.selector.list.category.category_partner_buyer();

		modal0Ctrl.addEvent_mClick( function( li ){
		console.log( "메롱" );
		console.log( li );
		console.log( li.list_item_value );

		modal1Ctrl.showAndModal();
	});

	//----------다중 Modal 객체;
	var o0 =  window.b2link_ui.selector.table.list_static.country();
	var o1 = window.b2link_ui.selector.list.list_static.country();
	var o0c = o0[ 1 ];
	var o1c = o1[ 1 ];
	o0c.showAndModal( false );
	o1c.showAndModal( false );

	o0c.showAndModal_MoveCurrentChildren();
	o1c.showAndModal_MoveCurrentChildren();
 * </code>
 */
window.b2linkExtends.element.showAndModal_Sync=function(n){var i=this.__el;window.b2link.ui_modal.appendChild(i,n),window.b2link.ui_modal.show(),window.b2link.element.show(i),clearTimeout(window.b2linkExtends.element.showAndModal_Sync._timeout0),window.b2linkExtends.element.showAndModal_Sync._t=i;var e=i.style;if(e.position="absolute",i.__FULL_SIZE_MODE){var t=window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT.parentElement.offsetLeft+10,o=15,d=1;e.left=t+"px",e.right=o+"px",e.top=d+"px";var l=window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT.clientWidth-10-o+"px";e.minWidth=e.maxWidth=l,window.b2link.event.dispatchCE__RESIZED_EL(i,null)}window.b2link.event.dispatchCE__SHOWED_EL(i,{_:this}),window.b2linkExtends.element.showAndModal_Sync._timeout0=setTimeout(function(){window.b2link.element.setPosition_CenterMiddle_FromBody__NMinus(i)},300)},window.b2linkExtends.element.showAndModal_Sync._t=null,window.b2linkExtends.element.showAndModal_Sync._timeout0=0;

//----------------------------------------------------------------------------------------------------window.b2linkExtends.element.s***;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;