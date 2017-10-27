//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_window.b2link.html_tbody.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.html_tbody;

window.b2link.html_tbody = window.b2link.html_tbody || {};

//--------------------------------------------------window.b2link.el_tbody.a***;

/**
 * <tbody> Element의 children을 갱신한다.
 * <tbody><tr><td>{{name}}</td></tr></tbody> 형태로 작성된 HTML을 참조하여 a(data array) 갯수 만큼 <td>송선우0</td>, <td>송선우1</td> 형태로 갱신한다.
 *
 * @function
 * @param {HTMLElement} tbody
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @return {HTMLElement}
 */
window.b2link.html_tbody.apply_child=function(n,r){if(n.__originalInnerHTML||(n.__originalInnerHTML=n.innerHTML),0==r.length)return n.innerHTML="",n;var i=SUtilString.applyBraceStrFromArray(n.__originalInnerHTML,r);return i&&(n.innerHTML=i),n};

/**
 * <tbody> Element의 children을 갱신한다.
 * <tbody><tr><td>{{name}}</td></tr></tbody> 형태로 작성된 HTML을 참조하여 a(data array) 갯수 만큼 <td>송선우0</td>, <td>송선우1</td> 형태로 갱신한다.
 * {{name0}}, {{name1}} 등의 name0, name1을 보관 후 재사용한다.
 *
 * @function
 * @param {HTMLElement} tbody
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @return {HTMLElement}
 */
window.b2link.html_tbody.apply_child__ReUseKeyList=function(n,r){if(n.__originalInnerHTML||(n.__originalInnerHTML=n.innerHTML),0==r.length)return n.innerHTML="",n;n.__list_reuse_key||(n.__list_reuse_key=SUtilString.extraction_applyStr(n.innerHTML));var i=SUtilString.applyBraceStrFromArray(n.__originalInnerHTML,r);return i&&(n.innerHTML=i),n};

//--------------------------------------------------window.b2link.el_tbody.a***;

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.html_tbody;

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;