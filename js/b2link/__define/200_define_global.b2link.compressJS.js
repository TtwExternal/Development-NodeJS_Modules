//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/__define/200_define_global.b2link.compressJS.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.compressJS;

global.b2link.compressJS = global.b2link.compressJS || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.compressJS;

/**
 * Native Module 'CompressJS' Package를 설치한다
 * @function
 * @example
 * <code>
	global.b2link.compressJS.install();

	global.compressJS.*** API 추가
 * </code>
 */
global.Lib.Ttw.autoLoad_JS||(global.Lib.Ttw.autoLoad_JS=new global.Lib.Ttw.CLASS.AutoLoad_JS({instanceKey:"global.Lib.Ttw.autoLoad_JS"})),global.b2link.compressJS.install=function(){if(global.compressJS)return void global.TtwLog.warn("Native Module( CompressJS )가 이미 설치 되어 있다.");var l,o=global.REQUIRES.fs.existsSync,e=global.b2link["import"].tll,a="CompressJS.dll",t="./node_modules/exes/",r="../Development-NodeJS_Modules/native_modules/",s="../"+r,i="../"+s;o(t)&&(l=t),o(r)&&(l=r),o(s)&&(l=s),o(i)&&(l=i);var n=e(l+a),b=l+"../js-CompressJS/";return global.b2link.compressJS.install._.addJSFiles___Define(b,{router:1,router_external:1,router_internal:1}),global.b2link.compressJS.install._.addJSFiles_Package(b,{router:1,router_external:1,router_internal:1}),global.compressJS=global.Lib.Ttw.compressor,n},global.b2link.compressJS.install._=global.Lib.Ttw.autoLoad_JS;

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;