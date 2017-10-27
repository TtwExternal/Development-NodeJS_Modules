//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/element/window.b2link.element.setPosition_CenterMiddle_FromParent__NMinus_ScrollTop.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * 대상 HTMLElement의 left를 부모 HTMLElement 와 대상 HTMLElement의 width를 비교하여 중심으로 이동 시킨다.
 * 대상 HTMLElement의 top을 부모 HTMLElement 와 대상 HTMLElement의 height를 비교하여 중심으로 이동 시킨다.
 * bottom, right는 "auto"를 넣는다.
 * 이동 해야할 위치가 -일 경우는 left 또는 top은 "auto"가 된다.
 * @function
 * @param {HTMLElement} t HTML Element
 */
window.b2link.element.setPosition_CenterMiddle_FromParent__NMinus_ScrollTop = function( t )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.element.setPosition_CenterMiddle_FromParent__NMinus_ScrollTop():void----------" );

	var pw = t.parentElement.clientWidth;//parent width;
	var ph = t.parentElement.clientHeight;//parent height;

	var dw = t.clientWidth;//div width;
	var dh = t.clientHeight;//div height;

	var hDW = dw / 2;//half div width;
	var hDH = dh / 2;//half div height;

	var hPW = pw / 2;//half parent width;
	var hPH = ph / 2;//half parent height;

	var s = t.style;

	var left = hPW - hDW;
	( left > 0 ) ? s.left = left + "px" : s.left = "auto";
	console.log( "s.left : " + s.left );

	var top = hPH - hDH;
	( top > 0 ) ? s.top = top + t.parentElement.scrollTop + "px" : s.top = "auto";
	console.log( "s.top : " + s.top );

	s.bottom = "auto";
	s.right = "auto";

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.element.setPosition_CenterMiddle_FromParent__NMinus_ScrollTop():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;