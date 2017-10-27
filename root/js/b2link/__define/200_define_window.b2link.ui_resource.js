//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_window.b2link.ui_resource.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.ui_resource;

window.b2link.ui_resource = window.b2link.ui_resource || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.ui_resource;


//----------------------------------------------------------------------------------------------------window.b2link.ui_reousrce.a***;

/**
 * ***.local.**.json을 가져온 후 TargetElement.innerHTML의 ((label)) 문자열에 치환 시켜준다.
 * @function
 * @param {String} url ./ui/...
 * @param {HTMLElement} el
 */
window.b2link.ui_resource.applyParentheses_LocaleLabel=function(e,n){n.__originalInnerHTML_Locale||(n.__originalInnerHTML_Locale=n.innerHTML),window.b2link.html.applyParentheses(n,window.b2link.ui_resource.reqSync_JSON_HTMLLocaleLabel(e))};

/**
 * ***.local.**.json을 가져온 후 TargetElement.children[ i ].innerHTML의 ((label)) 문자열에 치환 시켜준다.
 * @function
 * @param {String} url ./ui/...
 * @param {HTMLElement} el
 */
window.b2link.ui_resource.applyParentheses_LocaleLabel_Children=function(e,n){n.__originalInnerHTML_Locale||(n.__originalInnerHTML_Locale=n.innerHTML),SUtilString.applyParenthesesStrFromObj__NV_NA__El_Children(n,window.b2link.ui_resource.reqSync_JSON_HTMLLocaleLabel(e))};

/**
 * ***.locale.**.json을 가져온 후 TargetElement.children[ i ].innerHTML의 ((label)) 문자열에 치환 시켜준다.
 * @function
 * @param {String} url ./ui/...
 * @param {HTMLElement} el
 */
window.b2link.ui_resource.applyParentheses_LocaleLabel_Children__localeToCountryCode=function(e,r){r.__originalInnerHTML_Locale||(r.__originalInnerHTML_Locale=r.innerHTML);try{var i=e.replace("{{locale}}",window.b2link.STATIC.CONFIG.URL.UI.LOCALE),n=window.b2link.xhr.reqSync_JSON(i);SUtilString.applyParenthesesStrFromObj__NV_NA__El_Children(r,n)}catch(l){window.b2link_ui.message.error("window.b2link.ui_resource.applyParentheses_LocaleLabel_Children__localeToCountryCode Error : "+l),window.b2link_ui.message.error(i+" 파일을 만들어야 함."),window.b2link_ui.message.error("./ui_include/li/에서 {{}} 구문 파일 설정 하기."),window.b2link_ui.message.error("./ui_include/tr-th/에서 {{}} 구문 파일 설정 하기."),window.b2link_ui.message.error("./ui_include/tr-td/에서 {{}} 구문 파일 설정 하기.")}};

/**
 * url에서 .js를 .json으로 변경 후 ***.local.**.json 파일을 불러와 JSON 문자열을 Object로 만든 후 Return 한다.
 * @function
 * @param {String} url ./ui/.../.../***.js
 * @return {Object}
 */
window.b2link.ui_resource.reqSync_JSON_HTMLLocaleLabel=function(r){r=r.replace(".js",".locale."+window.b2link.STATIC.CONFIG.URL.UI.LOCALE+".json");var n;try{n=window.b2link.xhr.reqSync_JSON(r)}catch(e){window.TtwLog.error("window.b2link.ui_resource.reqSync_JSON_HTMLLocaleLabel Error : "+e),n=null}return n};

/**
 * url에서 .js를 .json으로 변경 후 ***. 'type' .local.**.json 파일을 불러와 JSON 문자열을 Object로 만든 후 Return 한다.
 * @function
 * @param {String} url ./ui/.../.../***.js
 * @param {String} type "alert", "confirm", "label", "message", "tooltip"
 * @return {Object}
 */
window.b2link.ui_resource.reqSync_JSON_Locale=function(e,n){e=e.replace(".js","."+n+".locale."+window.b2link.STATIC.CONFIG.URL.UI.LOCALE+".json");var r;try{r=window.b2link.xhr.reqSync_JSON(e)}catch(o){window.TtwLog.error("window.b2link.ui_resource.reqSync_JSON_Locale "+n+"Error : "+o),r=null}return r};
window.b2link.ui_resource.reqSync_JSON_Locale.alert=function(e){return window.b2link.ui_resource.reqSync_JSON_Locale(e,"alert")};
window.b2link.ui_resource.reqSync_JSON_Locale.confirm=function(e){return window.b2link.ui_resource.reqSync_JSON_Locale(e,"confirm")};
window.b2link.ui_resource.reqSync_JSON_Locale.label=function(e){return window.b2link.ui_resource.reqSync_JSON_Locale(e,"label")};
window.b2link.ui_resource.reqSync_JSON_Locale.message=function(e){return window.b2link.ui_resource.reqSync_JSON_Locale(e,"message")};
window.b2link.ui_resource.reqSync_JSON_Locale.tooltip=function(e){return window.b2link.ui_resource.reqSync_JSON_Locale(e,"tooltip")};

//----------------------------------------------------------------------------------------------------window.b2link.ui_reousrce.a***;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;