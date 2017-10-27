//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_window.b2link.session.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.session;

window.b2link.session = window.b2link.session || {};

//--------------------------------------------------window.b2link.session.g***;

/**
 * @function
 * @return {Object} { "sid" : "", "Expires" : "", "mid" : "" }
 */
//(function(){var _a=["Expires","sid","mid"];window.b2link.session.getSession=function(){for(var e,i=window.sessionStorage,n={},s=0,t=_a.length;t>s;++s)e=_a[s],n[e]=i.getItem(e),n[e]||delete n[e],""==n[e]&&delete n[e];return n};})();
(function(){var e=["Expires","sid","mid"],n=window.b2link.STATIC.CONFIG.URL;window.b2link.session.getSession=function(){for(var i,o=window.sessionStorage,s={},t=0,d=e.length;d>t;++t)i=e[t],s[i]=o.getItem(i),s[i]||delete s[i],""==s[i]&&delete s[i];return s.SCODE=n.SCODE,s}})();

/**
 * @function
 * @return {String}
 */
window.b2link.session.getSession__sid=function(){return window.sessionStorage.getItem("sid")};

//--------------------------------------------------window.b2link.session.g***;


//--------------------------------------------------window.b2link.session.r***;

/**
 * @function
 */
!function(){var e=["Expires","sid","mid"];window.b2link.session.removeSession=function(){for(var i=window.sessionStorage,n=0,o=e.length;o>n;++n)i.removeItem(e[n])}}();

//--------------------------------------------------window.b2link.session.r***;


//--------------------------------------------------window.b2link.session.s***;

/**
 * @function
 * @param {Object} d data { "Expires" : "", "sid" : "", "mid" : mid }
 */
window.b2link.session.setSession=function(s){var i=window.sessionStorage;s.sid&&i.setItem("sid",s.sid),s.Expires&&i.setItem("Expires",s.Expires),s.mid&&i.setItem("mid",s.mid)};


//--------------------------------------------------window.b2link.session.s***;


//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.session;

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;