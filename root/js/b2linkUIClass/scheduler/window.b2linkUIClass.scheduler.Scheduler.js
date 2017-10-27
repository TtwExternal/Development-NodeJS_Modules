//----------------------------------------------------------------------------------------------------;
var fileNm = "./js/b2linkUIClass/datepicker/window.b2linkUIClass.scheduler.Scheduler.js";
if( console ) console.log("[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @class
 * @param {String} url js file url
 * @param {HTMLDIVElement} $el_div 이 Controller 객체가 조작할 HTMLDIVElement
 */
window.b2linkUIClass.scheduler.Scheduler = function( url, $el_div )
{
	//----------------------------------------------------------------------------------------------------;

	var Scheduler = window.b2link.util.importJS( "./libs/ui/scheduler/libs.ui.scheduler.Scheduler.js", arguments );
	//var Scheduler = SUtilTemplateHTML.addJS__URL( "./libs/ui/scheduler/libs.ui.scheduler.Scheduler.js", arguments );

	//----------------------------------------------------------------------------------------------------;

	var _this = window.b2linkUIClass.container.FullSizeLayout( url, $el_div );
		_this.removeEvent();

	//----------------------------------------------------------------------------------------------------;

	//	STATIC;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------public;

	//--------------------------------------------------protected;

	//--------------------------------------------------private;

	//--------------------------------------------------;


	//--------------------------------------------------;

	/**
	 * @property
	 */
	var scheduler = Scheduler.getSchedulerInstance();

	//--------------------------------------------------;

	//--------------------------------------------------;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	EVENT;

	//----------------------------------------------------------------------------------------------------;

	/**
	 * @function
	 */
	var _addEvent = function()
	{
		_removeEvent();

		window.addEventListener( "resize", _evt_resize$parentElement, false, 0, true );

		$el_div.addEventListener( window.b2link.event.RESIZED_EL, _evt_resized_el, false, 0, true );
	};

	/**
	 * @function
	 */
	var _removeEvent = function()
	{
		window.removeEventListener( "resize", _evt_resize$parentElement, false );
		$el_div.removeEventListener( window.b2link.event.RESIZED_EL, _evt_resized_el, false );
	};

	/**
	 * @function
	 * @param {ResizeEvent} e event
	 */
	var _evt_resize$parentElement = function( e )
	{
		window.JaceLog.timeStamp( "-- [ S ] - _evt_resize$parentElement():void----------" );

		_setPosition();

		window.JaceLog.timeStamp( "-- [ E ] - _evt_resize$parentElement():void----------" );
	};

	/**
	 * @function
	 * @param {ResizeEvent} e event
	 */
	var _evt_resized_el = function( e )
	{
		window.JaceLog.timeStamp( "-- [ S ] - _evt_resized_el():void----------" );

		_setPosition();

		window.JaceLog.timeStamp( "-- [ E ] - _evt_resized_el():void----------" );
	};

	//----------------------------------------------------------------------------------------------------;

	//	FUNCTION;

	//----------------------------------------------------------------------------------------------------;

	/**
	 * @function
	 */
	var _dispose = function()
	{
		_removeEvent();

		//수정하기 - 20170602 - 송선우 - dispose 없나?;
		scheduler = null;
	};
	_dispose.super = _this.dispose;

	/**
	 * @function
	 * @param {Array} result
	 */
	var _res_Data = function( result )
	{
		window.JaceLog.timeStamp( "-- [ S ] - _res_Data():void----------" );

		//load json schedule data;
		scheduler.load( result );

		window.JaceLog.timeStamp( "-- [ E ] - _res_Data():void----------" );
	};

	//----------------------------------------------------------------------------------------------------;

	//	GETTER / SETTER;

	//----------------------------------------------------------------------------------------------------;

	//--------------------------------------------------GET;

	//--------------------------------------------------SET;

	/**
	 * @function
	 * @param {Object} d
	 * <code>
		{
			"schedulerType" : "wearing"//"wearing", "release";
		}
	 * </code>
	 */
	var _setData = function( d )
	{
		window.b2link_service_schedule.schedule_logistics.getSearchList( "type", d.schedulerType, _res_Data );
		_setData.super( d );
	};
	_setData.super = _this.setData;

	/**
	 * @function
	 */
	var _setPosition = function()
	{
		window.JaceLog.timeStamp( "-- [ S ] - _setPosition():void----------" );

		scheduler._obj.style.height = ( window.innerHeight - 5 ) + "px";
		scheduler.update_view();

		window.JaceLog.timeStamp( "-- [ E ] - _setPosition():void----------" );
	};

	//--------------------------------------------------GET / SET;

	//--------------------------------------------------GETTER;

	//--------------------------------------------------SETTER;

	//--------------------------------------------------GETTER / SETTER;

	//--------------------------------------------------;

	//----------------------------------------------------------------------------------------------------;

	//	LOGIC;

	//----------------------------------------------------------------------------------------------------;


	//change options and refresh scheduler;
	//목록(리스트) 보기 스케줄을 보여줄 기간 - 현재 월 기준으로 1개월 전부터 ~ 3개월 후까지의 내용만 보여줌;
	//scheduler.config.list_start = scheduler.date.add(new Date(), -1, "month");
	//scheduler.config.list_end = scheduler.date.add(new Date(), 3, "month");

	//init scheduler;
	scheduler.init( $el_div, new Date(), "month" );

	/**
	 * @param {String} id
	 */
	scheduler.showModalPage = function( id )
	{
		//스케줄 클릭(더블클릭시) 이벤트를 디스패치 시킨다.;
		console.log( "id : " + id );

		scheduler._hideMonthToolTip();

		//수정하기 - 20170602 - 송선우 - getEvent() 명명 수정하기 Event 객체를 가져오는게 아니다;
		var selectedItem = scheduler.getEvent( id );
		debugger;

		window.b2link.event.dispatchCE__LIST_SELECTED_ITEM( $el_div, { data : selectedItem });
	};

	//----------;
	_addEvent();
	_setPosition();

	//_setData();
	//----------;


	//--------------------------------------------------this;
	var _ = _this;

		_.__el = $el_div;

		_.dispose = _dispose;

		_.setData = _setData;
	//--------------------------------------------------this;

	window.b2link.obj.copyReference_Public_Function( _, Scheduler );

	return _;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log("[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;