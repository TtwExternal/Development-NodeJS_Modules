//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_window.b2link.open.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.open;

window.b2link.open = window.b2link.open || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.open;


//----------------------------------------------------------------------------------------------------window.b2link.open.n***;

/**
 * @function
 * @param {String} url
 * @param {String} winName
 * @param {String} options
 * @return {Window}
 *
 * @see https://developer.mozilla.org/ko/docs/Web/API/Window/open
 * @example
 * <code>
	var p = window.open( "./index-popup.html", "B2Ker-Popup"
		, "left=0, top=0, height=500, width=800, screenX=0, screenY=0, centerscreen=1"
		//, "outerHeight=100, outerWidth=100, innerHeight=100, innerWidth=100"
		//, "menubar=0, toolbar=0, personalbar=0, directories=0, status=0"
		//, "attention=0, dependent=0, minimizable=0, fullscreen=0, noopener=1, resizable=0, scrollbars=0, dialog=0, modal=1, titlebar=0, alwaysRaised=1, alwaysLowered=0, close=0"
	);

	var p = window.open( "./index-popup.html", "B2Ker-Popup", "height=500, width=800, centerscreen=1" );

	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=30, height=500, width=800" );

	//alwaysRaised 안됨;
	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=30, height=500, width=800, alwaysRaised=yes" );

	//close 안됨;
	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=30, height=500, width=800, close=no" );

	//modal 안됨;
	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=30, height=500, width=800, modal=yes" );

	var p = window.open( "./index-popup.html", "B2Ker-Popup", "fullscreen=1" );

	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=0, height=500, width=800, screenX=0, screenY=0, centerscreen=1" );

	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=0, height=500, width=800, screenX=0, screenY=0, centerscreen=1, attention=0, dependent=0, minimizable=0, fullscreen=0, noopener=1, resizable=0, scrollbars=0, dialog=0, modal=1, titlebar=0, alwaysRaised=1, alwaysLowered=0, close=0" );
 * </code>
 */
!function(){window.b2link.open._map={},window.b2link.open.newWindow=function(n,w,o){return window.TtwLog.timeStamp("---- [ S ] - window.b2link.open.newWindow():{Window}----------"),window.b2link.open._map[w]=window.open(n,w,o),window.TtwLog.timeStamp("새로운 윈도우 생성 - "+w+" - "+o),window.TtwLog.timeStamp("---- [ E ] - window.b2link.open.newWindow():{Window}----------"),window.b2link.open._map[w]}}();

/**
 * @function
 * @param {String} url
 * @param {String} winName
 * @param {String} opt__pos_size
 * @param {String} opt__functionality
 * @param {String} opt__requiring_privileges
 * @return {Window}

 * @see https://developer.mozilla.org/ko/docs/Web/API/Window/open
 * @example
 * <code>
	var p = window.open( "./index-popup.html", "B2Ker-Popup"
		, "left=0, top=0, height=500, width=800, screenX=0, screenY=0, centerscreen=1"
		//, "outerHeight=100, outerWidth=100, innerHeight=100, innerWidth=100"
		//, "menubar=0, toolbar=0, personalbar=0, directories=0, status=0"
		//, "attention=0, dependent=0, minimizable=0, fullscreen=0, noopener=1, resizable=0, scrollbars=0, dialog=0, modal=1, titlebar=0, alwaysRaised=1, alwaysLowered=0, close=0"
	);

	var p = window.open( "./index-popup.html", "B2Ker-Popup", "height=500, width=800, centerscreen=1" );

	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=30, height=500, width=800" );

	//alwaysRaised 안됨;
	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=30, height=500, width=800, alwaysRaised=yes" );

	//close 안됨;
	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=30, height=500, width=800, close=no" );

	//modal 안됨;
	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=30, height=500, width=800, modal=yes" );

	var p = window.open( "./index-popup.html", "B2Ker-Popup", "fullscreen=1" );

	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=0, height=500, width=800, screenX=0, screenY=0, centerscreen=1" );

	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=0, height=500, width=800, screenX=0, screenY=0, centerscreen=1, attention=0, dependent=0, minimizable=0, fullscreen=0, noopener=1, resizable=0, scrollbars=0, dialog=0, modal=1, titlebar=0, alwaysRaised=1, alwaysLowered=0, close=0" );
 * </code>
 */
window.b2link.open.newWindow_opts=function(n,w,o,i,d){window.TtwLog.timeStamp("---- [ S ] - window.b2link.open.newWindow_opts.js():{Window}----------");var p=o+", "+i+", "+d;return window.b2link.open._map[w]=window.open(n,w,p),window.TtwLog.timeStamp("새로운 윈도우 생성 - "+w+" - "+p),window.TtwLog.timeStamp("---- [ E ] - window.b2link.open.newWindow_opts.js():{Window}----------"),window.b2link.open._map[w]};

//----------------------------------------------------------------------------------------------------window.b2link.open.n***;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;