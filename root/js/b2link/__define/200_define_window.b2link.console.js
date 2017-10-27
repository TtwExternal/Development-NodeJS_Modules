//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_window.b2link.console.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.console;

window.b2link.console = window.b2link.console || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.console;


//----------------------------------------------------------------------------------------------------window.b2link.console.g***;

/**
 * Browser Memory 정보를 반환한다.
 * @function
 * @return {MemoryInfo}
 */
window.b2link.console.getMemory=function(){return console.memory};

//----------------------------------------------------------------------------------------------------window.b2link.console.g***;


//----------------------------------------------------------------------------------------------------window.b2link.console.n***;

/**
 * Log를 Name과 {*}로 발생시킨다.
 * Name으로 Console 창에 경계선을 그어준다.
 * @function
 * @param {String} name
 * @param {*} t
 */
window.b2link.console.nameAndObject=function(n,o){window.TtwLog.timeStamp("---- [ S ] - window.b2link.console.nameAndObject():void----------"),window.TtwLog.timeStamp("---- [ E ] - window.b2link.console.nameAndObject():void----------")};

//----------------------------------------------------------------------------------------------------window.b2link.console.n***;


//----------------------------------------------------------------------------------------------------window.b2link.console.o***;

/**
 * 사용금지 - 2017.01.05
 * @function
 * @param {Object} t
 */
//window.b2link.console.objInfo=function(o){window.TtwLog.timeStamp("---- [ S ] - window.b2link.console.objInfo():void----------"),o.__status(),window.TtwLog.timeStamp("---- [ E ] - window.b2link.console.objInfo():void----------")};

/**
 * @function
 * @param {HTMLElement} t
 */
window.b2link.console.objStyle_BottomLeftRightTop=function(o){window.TtwLog.timeStamp("---- [ S ] - window.b2link.console.objStyle_BottomLeftRightTop():void----------");o.style;window.TtwLog.timeStamp("---- [ E ] - window.b2link.console.objStyle_BottomLeftRightTop():void----------")};

/**
 * @function
 * @param {HTMLElement} t
 */
window.b2link.console.objStyle_LeftTopRightBottom=function(o){window.TtwLog.timeStamp("---- [ S ] - window.b2link.console.objStyle_LeftTopRightBottom():void----------");o.style;window.TtwLog.timeStamp("---- [ E ] - window.b2link.console.objStyle_LeftTopRightBottom():void----------")};

//----------------------------------------------------------------------------------------------------window.b2link.console.o***;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;