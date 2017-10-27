//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/b2link/__define/200_define_window.b2link.event.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.event;

window.b2link.event = window.b2link.event || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.event;


//----------------------------------------------------------------------------------------------------window.b2link.event.a***;

/**
 * addEventListener 대신 사용하기 위한 용도
 * 무조건 동일 EventListener를 한번 removeEventListener을 실행 후 addEventListener을 한다.
 * @function
 * @param {HTMLElement} el
 * @param {String} evtType
 * @param {Function} fn
 */
window.b2link.event.addEventBeforeRemove=function(e,n,t){e.removeEventListener(n,t,!1),e.addEventListener(n,t,!1,0,!0)};

//----------------------------------------------------------------------------------------------------window.b2link.event.a***;


//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__A***;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.APPENDED_CHILD} evtDetail
 */
window.b2link.event.dispatchCE__APPENDED_CHILD=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.APPENDED_CHILD,i)};

//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__A***;


//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__C***;

/**
 * STATIC Locale 설정이 변경 되었을때 발생하는 이벤트
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.CHANGED_LOCALE} evtDetail
 */
window.b2link.event.dispatchCE__CHANGED_LOCALE=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.CHANGED_LOCALE,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.CREATED_CUSTOM_ELEMENT} evtDetail
 */
window.b2link.event.dispatchCE__CREATED_CUSTOM_ELEMENT=function(n,E){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.CREATED_CUSTOM_ELEMENT,E)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.CREATED_EL} evtDetail
 */
window.b2link.event.dispatchCE__CREATED_EL=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.CREATED_EL,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.CREATED_IMPORT_HTML_EL} evtDetail
 */
window.b2link.event.dispatchCE__CREATED_IMPORT_HTML_EL=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.CREATED_IMPORT_HTML_EL,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.CREATED_IMPORT_HTML_JS} evtDetail
 */
window.b2link.event.dispatchCE__CREATED_IMPORT_HTML_JS=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.CREATED_IMPORT_HTML_JS,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.CREATED_INCLUDE_HTML_EL} evtDetail
 */
window.b2link.event.dispatchCE__CREATED_INCLUDE_HTML_EL=function(n,E){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.CREATED_INCLUDE_HTML_EL,E)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.CREATION_COMPLETE} evtDetail
 */
window.b2link.event.dispatchCE__CREATION_COMPLETE=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.CREATION_COMPLETE,i)};

//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__C***;


//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__D***;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.DATA_WRITE_CANCEL} evtDetail
 */
window.b2link.event.dispatchCE__DATA_WRITE_CANCEL=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.DATA_WRITE_CANCEL,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.DATA_WRITE_COMPLETE} evtDetail
 */
window.b2link.event.dispatchCE__DATA_WRITE_COMPLETE=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.DATA_WRITE_COMPLETE,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.DISPOSED_EL} evtDetail
 */
window.b2link.event.dispatchCE__DISPOSED_EL=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.DISPOSED_EL,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.DISPOSED_JS} evtDetail
 */
window.b2link.event.dispatchCE__DISPOSED_JS=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.DISPOSED_JS,i)};

//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__D***;


//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__F***;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_DELETE_PRIVATE_MULTI_COMPLETE} evtDetail
 */
window.b2link.event.dispatchCE__FILE_DELETE_PRIVATE_MULTI_COMPLETE=function(E,n){window.b2link.event.dispatchCustomEvent(E,window.b2link.event.FILE_DELETE_PRIVATE_MULTI_COMPLETE,n)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_DELETE_PRIVATE_MULTI_FAILUE} evtDetail
 */
window.b2link.event.dispatchCE__FILE_DELETE_PRIVATE_MULTI_FAILUE=function(E,n){window.b2link.event.dispatchCustomEvent(E,window.b2link.event.FILE_DELETE_PRIVATE_MULTI_FAILUE,n)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_DELETE_PRIVATE_SINGLE_COMPLETE} evtDetail
 */
window.b2link.event.dispatchCE__FILE_DELETE_PRIVATE_SINGLE_COMPLETE=function(E,n){window.b2link.event.dispatchCustomEvent(E,window.b2link.event.FILE_DELETE_PRIVATE_SINGLE_COMPLETE,n)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_DELETE_PRIVATE_SINGLE_FAILUE} evtDetail
 */
window.b2link.event.dispatchCE__FILE_DELETE_PRIVATE_SINGLE_FAILUE=function(E,n){window.b2link.event.dispatchCustomEvent(E,window.b2link.event.FILE_DELETE_PRIVATE_SINGLE_FAILUE,n)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_DELETE_PUBLIC_MULTI_COMPLETE} evtDetail
 */
window.b2link.event.dispatchCE__FILE_DELETE_PUBLIC_MULTI_COMPLETE=function(E,n){window.b2link.event.dispatchCustomEvent(E,window.b2link.event.FILE_DELETE_PUBLIC_MULTI_COMPLETE,n)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_DELETE_PUBLIC_MULTI_FAILUE} evtDetail
 */
window.b2link.event.dispatchCE__FILE_DELETE_PUBLIC_MULTI_FAILUE=function(n,E){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.FILE_DELETE_PUBLIC_MULTI_FAILUE,E)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_DELETE_PUBLIC_SINGLE_COMPLETE} evtDetail
 */
window.b2link.event.dispatchCE__FILE_DELETE_PUBLIC_SINGLE_COMPLETE=function(E,n){window.b2link.event.dispatchCustomEvent(E,window.b2link.event.FILE_DELETE_PUBLIC_SINGLE_COMPLETE,n)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_DELETE_PUBLIC_SINGLE_FAILUE} evtDetail
 */
window.b2link.event.dispatchCE__FILE_DELETE_PUBLIC_SINGLE_FAILUE=function(E,n){window.b2link.event.dispatchCustomEvent(E,window.b2link.event.FILE_DELETE_PUBLIC_SINGLE_FAILUE,n)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_UPLOAD_PRIVATE_MULTI_COMPLETE} evtDetail
 */
window.b2link.event.dispatchCE__FILE_UPLOAD_PRIVATE_MULTI_COMPLETE=function(n,E){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.FILE_UPLOAD_PRIVATE_MULTI_COMPLETE,E)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_UPLOAD_PRIVATE_MULTI_FAILUE} evtDetail
 */
window.b2link.event.dispatchCE__FILE_UPLOAD_PRIVATE_MULTI_FAILUE=function(n,_){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.FILE_UPLOAD_PRIVATE_MULTI_FAILUE,_)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_UPLOAD_PRIVATE_SINGLE_COMPLETE} evtDetail
 */
window.b2link.event.dispatchCE__FILE_UPLOAD_PRIVATE_SINGLE_COMPLETE=function(n,E){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.FILE_UPLOAD_PRIVATE_SINGLE_COMPLETE,E)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_UPLOAD_PRIVATE_SINGLE_FAILUE} evtDetail
 */
window.b2link.event.dispatchCE__FILE_UPLOAD_PRIVATE_SINGLE_FAILUE=function(n,E){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.FILE_UPLOAD_PRIVATE_SINGLE_FAILUE,E)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_UPLOAD_PUBLIC_MULTI_COMPLETE} evtDetail
 */
window.b2link.event.dispatchCE__FILE_UPLOAD_PUBLIC_MULTI_COMPLETE=function(n,L){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.FILE_UPLOAD_PUBLIC_MULTI_COMPLETE,L)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_UPLOAD_PUBLIC_MULTI_FAILUE} evtDetail
 */
window.b2link.event.dispatchCE__FILE_UPLOAD_PUBLIC_MULTI_FAILUE=function(n,L){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.FILE_UPLOAD_PUBLIC_MULTI_FAILUE,L)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_UPLOAD_PUBLIC_SINGLE_COMPLETE} evtDetail
 */
window.b2link.event.dispatchCE__FILE_UPLOAD_PUBLIC_SINGLE_COMPLETE=function(n,E){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.FILE_UPLOAD_PUBLIC_SINGLE_COMPLETE,E)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_UPLOAD_PUBLIC_SINGLE_FAILUE} evtDetail
 */
window.b2link.event.dispatchCE__FILE_UPLOAD_PUBLIC_SINGLE_FAILUE=function(n,L){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.FILE_UPLOAD_PUBLIC_SINGLE_FAILUE,L)};

//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__F***;


//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__G***;

/**
 * 대상 HTMLElement에 걸려있는 EventListener 목록을 보여준다.
 * @function
 * @param {HTMLElement} el
 * @return {Array}
 */
window.b2link.event.getEventListeners=function(e){return window.getEventListeners?window.getEventListeners(e):null};

//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__G***;


//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__H***;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.HIDED_EL} evtDetail
 */
window.b2link.event.dispatchCE__HIDED_EL=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.HIDED_EL,i)};

//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__H***;


//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__I***;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.INITIALIZED} evtDetail
 */
window.b2link.event.dispatchCE__INITIALIZED=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.INITIALIZED,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.INITIALIZED_ALL_CHILDREN} evtDetail
 */
window.b2link.event.dispatchCE__INITIALIZED_ALL_CHILDREN=function(n,I){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.INITIALIZED_ALL_CHILDREN,I)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.INTERVAL_END} evtDetail
 */
window.b2link.event.dispatchCE__INTERVAL_END=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.INTERVAL_END,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.INTERVAL_START} evtDetail
 */
window.b2link.event.dispatchCE__INTERVAL_START=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.INTERVAL_START,i)};

//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__I***;


//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__L***;

/**
 * LIST형 Component에서 Data 변경 시에 발생되는 이벤트
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.LIST_DATA_CHANGED} evtDetail
 */
window.b2link.event.dispatchCE__LIST_DATA_CHANGED=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.LIST_DATA_CHANGED,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.LIST_SELECT_ITEM} evtDetail
 */
window.b2link.event.dispatchCE__LIST_SELECT_ITEM=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.LIST_SELECT_ITEM,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.LIST_SELECTED_ITEM} evtDetail
 */
window.b2link.event.dispatchCE__LIST_SELECTED_ITEM=function(n,E){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.LIST_SELECTED_ITEM,E)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.LOADED_CHILDREN} evtDetail
 */
window.b2link.event.dispatchCE__LOADED_CHILDREN=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.LOADED_CHILDREN,i)};

//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__L***;


//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__N***;

/**
 * Navigation 소스가 변경 되었을 시 발생되는 이벤트
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.NAVIGATION_DATA_CHANGED} evtDetail
 */
window.b2link.event.dispatchCE__NAVIGATION_DATA_CHANGED=function(n,A){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.NAVIGATION_DATA_CHANGED,A)};

/**
 * Navigation의 Item을 선택 하였을 시 발생되는 이벤트
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.NAVIGATION_ITEM_SELECTED} evtDetail
 */
window.b2link.event.dispatchCE__NAVIGATION_ITEM_SELECTED=function(n,E){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.NAVIGATION_ITEM_SELECTED,E)};

//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__N***;


//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__R***;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.REMOVED_CHILD} evtDetail
 */
window.b2link.event.dispatchCE__REMOVED_CHILD=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.REMOVED_CHILD,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.REQUEST_DATA} evtDetail
 */
window.b2link.event.dispatchCE__REQUEST_DATA=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.REQUEST_DATA,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.RESPONSE_DATA} evtDetail
 */
window.b2link.event.dispatchCE__RESPONSE_DATA=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.RESPONSE_DATA,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.REMOVED_CHILD} evtDetail
 */
window.b2link.event.dispatchCE__RESIZED_EL=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.RESIZED_EL,i)};

//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__R***;


//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__S***;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.SEARCH_UI_INPUTED_TEXT} evtDetail
 */
window.b2link.event.dispatchCE__SEARCH_UI_INPUTED_TEXT=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.SEARCH_UI_INPUTED_TEXT,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.SEARCH_UI_SELECTED_TYPE} evtDetail
 */
window.b2link.event.dispatchCE__SEARCH_UI_SELECTED_TYPE=function(n,E){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.SEARCH_UI_SELECTED_TYPE,E)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.SHOWED_EL} evtDetail
 */
window.b2link.event.dispatchCE__SHOWED_EL=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.SHOWED_EL,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.SIGN_IN_FAILURE} evtDetail
 */
window.b2link.event.dispatchCE__SIGN_IN_FAILURE=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.SIGN_IN_FAILURE,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.SIGN_IN_SUCCESS} evtDetail
 */
window.b2link.event.dispatchCE__SIGN_IN_SUCCESS=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.SIGN_IN_SUCCESS,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.SIGN_OUT_FAILURE} evtDetail
 */
 window.b2link.event.dispatchCE__SIGN_OUT_FAILURE=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.SIGN_OUT_FAILURE,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.SIGN_OUT_SUCCESS} evtDetail
 */
window.b2link.event.dispatchCE__SIGN_OUT_SUCCESS=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.SIGN_OUT_SUCCESS,i)};

//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__S***;


//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__T***;

/**
 * Table Component에서 Data 변경 시에 발생되는 이벤트
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.TABLE_DATA_CHANGED} evtDetail
 */
window.b2link.event.dispatchCE__TABLE_DATA_CHANGED=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.TABLE_DATA_CHANGED,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.TIMEOUT_END} evtDetail
 */
 window.b2link.event.dispatchCE__TIMEOUT_END=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.TIMEOUT_END,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.TIMEOUT_START} evtDetail
 */
 window.b2link.event.dispatchCE__TIMEOUT_START=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.TIMEOUT_START,i)};

//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__T***;


//----------------------------------------------------------------------------------------------------window.b2link.event.d***;

/**
 * CustomEvent를 Dispatch 시킨다.
 * @function
 * @param {HTMLElement} el
 * @param {String} evtType
 * @param {Obejct} evtDetail
 * @example
 * <code>
 * window.document.addEventListener( "asd", function( e ){ console.log( e ); }, false, 0, true );
 * window.b2link.event.dispatchCustomEvent( window.document, "asd", 1 );
 * window.b2link.event.dispatchEvent( window.document, "asd" );
 *
 * window.b2link.event.dispatchCustomEvent( window.document, "asd", { a : 1 } );
 * window.b2link.event.dispatchEvent( window.document, "asd" );
 * </code>
 */
//window.b2link.event.dispatchCustomEvent=function(t,n,o){window.TtwLog.info(t),window.TtwLog.info("evtType : "+n),window.TtwLog.info("evtDetail : "+o),SUtilCustomEvent.dispatchCustomEvent(t,n,o)};
window.b2link.event.dispatchCustomEvent=function(t,n,o){SUtilCustomEvent.dispatchCustomEvent(t,n,o)};

/**
 * Event를 Dispatch 시킨다.
 * @function
 * @param {HTMLElement} el
 * @param {String} evtType
 * @example
 * <code>
 * window.document.addEventListener( "asd", function( e ){ console.log( e ); }, false, 0, true );
 * window.b2link.event.dispatchCustomEvent( window.document, "asd", 1 );
 * window.b2link.event.dispatchEvent( window.document, "asd" );
 *
 * window.b2link.event.dispatchCustomEvent( window.document, "asd", { a : 1 } );
 * window.b2link.event.dispatchEvent( window.document, "asd" );
 * </code>
 */
window.b2link.event.dispatchEvent=function(n,t){window.TtwLog.info(n),window.TtwLog.info("evtType : "+t),SUtilCustomEvent.dispatchEvent(n,t)};

//----------------------------------------------------------------------------------------------------window.b2link.event.d***;


//----------------------------------------------------------------------------------------------------window.b2link.event.g***;

/**
 * 대상 HTMLElement에 걸려있는 EventListener 목록을 보여준다.
 * @function
 * @param {HTMLElement} el
 * @return {Array}
 */
window.b2link.event.getEventListeners=function(e){return window.getEventListeners?window.getEventListeners(e):null};

//----------------------------------------------------------------------------------------------------window.b2link.event.g***;


//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;