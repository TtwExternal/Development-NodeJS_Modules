//----------------------------------------------------------------------------------------------------;
var fileNm = "js/b2link/__define/200_define_global.b2link.diff.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.b2link.diff;

global.b2link.diff = global.b2link.diff || {};

//----------------------------------------------------------------------------------------------------[ E ] - global.b2link.diff;

/**
 * Native Module 'Diff' Package를 설치한다
 * @function
 * @example
 * <code>
	global.b2link.diff.install();
 * </code>
 */
global.Lib.Ttw.autoLoad_JS||(global.Lib.Ttw.autoLoad_JS=new global.Lib.Ttw.CLASS.AutoLoad_JS({instanceKey:"global.Lib.Ttw.autoLoad_JS"})),global.b2link.diff.install=function(){if(global.differ)return void global.TtwLog.warn("Native Module( Diff )가 이미 설치 되어 있다.");var l,a=global.REQUIRES.fs.existsSync,o=global.b2link["import"].tll,e="Diff.dll",i="./node_modules/exes/",t="../Development-NodeJS_Modules/native_modules/",n="../"+t,r="../"+n;a(i)&&(l=i),a(t)&&(l=t),a(n)&&(l=n),a(r)&&(l=r);var b=o(l+e),d=l+"../js-Diff/";return global.b2link.diff.install._.addJSFiles___Define(d,{router:1,router_external:1,router_internal:1}),global.b2link.diff.install._.addJSFiles_Package(d,{router:1,router_external:1,router_internal:1}),b},global.b2link.diff.install._=global.Lib.Ttw.autoLoad_JS;

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;