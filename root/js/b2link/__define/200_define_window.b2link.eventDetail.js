//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_window.b2link.eventDetail.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.eventDetail;

window.b2link.eventDetail = window.b2link.eventDetail || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.eventDetail;


//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.A;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.APPENDED_CHILD=function(){return{}};

//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.A;


//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.C;

/**
 * STATIC Locale 설정이 변경 되었을때 발생하는 이벤트
 * @function
 * @return null
 */
 window.b2link.eventDetail.CHANGED_LOCALE=function(){return null};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.CREATED_CUSTOM_ELEMENT=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.CREATED_EL=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
 window.b2link.eventDetail.CREATED_IMPORT_HTML_EL=function(){return{}};

 /**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.CREATED_IMPORT_HTML_JS=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.CREATED_INCLUDE_HTML_EL=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.CREATION_COMPLETE=function(){return{}};

//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.C;


//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.D;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {Object} d
 * <code>
	{
	}
 * </code>
 */
//window.b2link.eventDetail.DATA_WRITE_CANCEL=function(e){return e.firstValue&&e.lastValue&&e.selectedValue||window.TtwLog.error("window.b2link.eventDetail.DATA_WRITE_CANCEL Error : event Values가 부족합니다."),e};
window.b2link.eventDetail.DATA_WRITE_CANCEL=function(n){return n};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {Object} d
 * <code>
	{
	}
 * </code>
 */
window.b2link.eventDetail.DATA_WRITE_COMPLETE=function(n){return n};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.DISPOSED_EL=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.DISPOSED_JS=function(){return{}};

//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.D;


//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.H;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.HIDED_EL=function(){return{}};

//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.H;


//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.I;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.INITIALIZED=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.INITIALIZED_ALL_CHILDREN=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.INTERVAL_END=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.INTERVAL_START=function(){return{}};

//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.I;


//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.L;

/**
 * LIST형 Component에서 Data 변경 시에 발생되는 이벤트
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"firstItem" : {Object}
 *	, "lastItem" : {Object}
 * }
 * </code>
 */
window.b2link.eventDetail.LIST_DATA_CHANGED=function(e){return e.firstItem&&e.lastItem||window.Rh2Log.error("window.b2link.eventDetail.LIST_DATA_CHANGED Error : event Values가 부족합니다."),e};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.LIST_SELECT_ITEM=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.LIST_SELECTED_ITEM=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.LOADED_CHILDREN=function(){return{}};

//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.L;


//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.N;

/**
 * Navigation 소스가 변경 되었을 시 발생되는 이벤트
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"firstValue" : {*}
 *	, "lastValue" : {*}
 *	, "selectedValue" : {*}
 * }
 * </code>
 */
window.b2link.eventDetail.NAVIGATION_DATA_CHANGED=function(e){return e.firstValue&&e.lastValue&&e.selectedValue||window.TtwLog.error("window.b2link.eventDetail.NAVIGATION_DATA_CHANGED Error : event Values가 부족합니다."),e};

/**
 * Navigation의 Item을 선택 하였을 시 발생되는 이벤트
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"firstValue" : {*}
 *	, "lastValue" : {*}
 *	, "selectedValue" : {*}
 * }
 * </code>
 */
window.b2link.eventDetail.NAVIGATION_ITEM_SELECTED=function(n){return n};

//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.N;


//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.R;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.REMOVED_CHILD=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.REQUEST_DATA=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.RESIZED_EL=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.RESPONSE_DATA=function(){return{}};

//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.R;


//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.S;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"searchKeyword" : ""
 *	, "searchType" : ""
 * }
 * </code>
 */
window.b2link.eventDetail.SEARCH_UI_INPUTED_TEXT=function(n){return n};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.SEARCH_UI_SELECTED_TYPE=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.SHOWED_EL=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.SIGN_IN_FAILURE=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.SIGN_IN_SUCCESS=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.SIGN_OUT_FAILURE=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.SIGN_OUT_SUCCESS=function(){return{}};

//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.S;


//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.T;

/**
 * Table Component에서 Data 변경 시에 발생되는 이벤트
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"firstItem" : {Object}
 *	, "lastItem" : {Object}
 * }
 * </code>
 */
window.b2link.eventDetail.TABLE_DATA_CHANGED=function(e){return e.hasOwnProperty("firstItem")&&e.hasOwnProperty("lastItem")||window.TtwLog.error("window.b2link.eventDetail.TABLE_DATA_CHANGED Error : event Values가 부족합니다."),e};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.TIMEOUT_END=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.TIMEOUT_START=function(){return{}};

//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.T;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;