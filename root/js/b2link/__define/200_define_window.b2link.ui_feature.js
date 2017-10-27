//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_window.b2link.ui_feature.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.ui_feature;

window.b2link.ui_feature = window.b2link.ui_feature || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.ui_feature;


//--------------------------------------------------window.b2link.ui_feature.d***;

/**
 * @function
 * @param {HTMLElement} t
 * @param {Boolean} bAdd false false면 이벤트를 제거만 한다 true시 1회 이벤트 제거후 다시 이벤트를 등록한다.
 * @param {Boolean} bMDownReAppend true시 마우스 다운이 발생하면 대상객체(View 0번째 Element)를 다시 한번 부모객체에 appendChild 한다.
 * @param {Boolean} bMUpReAppend true시 마우스 업이 발생하면 대상객체(View 0번째 Element)를 다시 한번 부모객체에 appendChild 한다.
 */
!function(){var e=function(e){if("BUTTON"!=e.target.tagName){var t=e.currentTarget,r=t.parentElement,a=r.style;a.__originalLeft=a.left,a.__originalTop=a.top,a.__originalRight=a.right,a.__originalBottom=a.bottom,a.__originalWidth=a.clientWidth,a.__originalHeight=a.clientHeight,a.width=a.__originalWidth+"px",a.height=a.__originalHeight+"px",a.right="",a.bottom="",e.stopImmediatePropagation(),e.stopPropagation(),window.b2link.element._appendChild(r.parentElement,r),o._t0=r,window.removeEventListener("mousemove",o,!1),window.addEventListener("mousemove",o,!1,0,!0),r&&(r.removeEventListener("mouseout",i,!1),r.addEventListener("mouseout",i,!1,0,!0)),r&&(r.removeEventListener("mouseover",n,!1),r.addEventListener("mouseover",n,!1,0,!0))}},t=function(e){if("BUTTON"!=e.target.tagName){var t=e.currentTarget,r=t.parentElement,a=a;a.__originalLeft=a.left,a.__originalTop=a.top,a.__originalRight=a.right,a.__originalBottom=a.bottom,a.__originalWidth=a.clientWidth,a.__originalHeight=a.clientHeight,a.width=a.__originalWidth+"px",a.height=a.__originalHeight+"px",a.right="",a.bottom="",e.stopImmediatePropagation(),e.stopPropagation(),window.b2link.element._appendChild(r.parentElement,r),o._t0=r,window.removeEventListener("mousemove",o,!1),window.addEventListener("mousemove",o,!1,0,!0),r&&(r.removeEventListener("mouseout",i,!1),r.addEventListener("mouseout",i,!1,0,!0)),r&&(r.removeEventListener("mouseover",n,!1),r.addEventListener("mouseover",n,!1,0,!0))}},o=function(e){if("BUTTON"!=e.target.tagName){var t=o._t0;t.style.left=t.offsetLeft+e.movementX+"px",t.style.top=t.offsetTop+e.movementY+"px",e.stopImmediatePropagation(),e.stopPropagation()}},i=function(e){if("BUTTON"!=e.target.tagName){var t=o._t0;i._time0=setTimeout(function(){window.removeEventListener("mousemove",o,!1),t&&t.removeEventListener("mouseout",i,!1)},300),e.stopImmediatePropagation(),e.stopPropagation()}};i._time0=0;var n=function(e){"BUTTON"!=e.target.tagName&&(clearTimeout(i._time0),e.stopImmediatePropagation(),e.stopPropagation())},r=function(e){if("BUTTON"!=e.target.tagName){var t=o._t0;e.stopImmediatePropagation(),e.stopPropagation(),t&&t.removeEventListener("mouseout",i,!1),t&&t.removeEventListener("mouseover",n,!1),o._t0=null,window.removeEventListener("mousemove",o,!1)}},a=function(e){if("BUTTON"!=e.target.tagName){var t=o._t0;e.stopImmediatePropagation(),e.stopPropagation(),window.b2link.element.appendChild(t.parentElement,t),t&&t.removeEventListener("mouseout",i,!1),t&&t.removeEventListener("mouseover",n,!1),o._t0=null,window.removeEventListener("mousemove",o,!1)}};window.b2link.ui_feature.drag=function(o,i,n,m){return o?(o.removeEventListener("mousedown",e,!1),o.removeEventListener("mousedown",t,!1),o.removeEventListener("mouseup",r,!1),void(i&&(n?o.addEventListener("mousedown",t,!1,0,!0):o.addEventListener("mousedown",e,!1,0,!0),m?o.addEventListener("mouseup",a,!1,0,!0):o.addEventListener("mouseup",r,!1,0,!0)))):(window.b2link_ui.message.error("window.b2link.ui_feature.drag 't'가 존재 하지 않습니다. 로직을 다시 확인 하세요."),void window.b2link_ui.message.error("\n	 - TitleBar-***가 없다. 다른 상속 객체를 사용하거나 TitleBar-***를 생성"))}}();

//--------------------------------------------------window.b2link.ui_feature.d***;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;