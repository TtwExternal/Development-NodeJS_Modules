//----------------------------------------------------------------------------------------------------;
var fileNm = "/js/b2link_router/_query/count/getCount__SearchKeyword.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * MongoDB Template Query�� dbjs ���Ϸκ��� ��������
 * �˻� Ű���忡 �ش��ϴ� �˻� ����� ������ ��ȯ�Ѵ�.
 * @property {String}
 */
var _query = global.b2link.fs.getDBJS( "../../../Development-NodeJS_Modules/js/b2link_router/_query/count/getCount__SearchKeyword.dbjs" );

/**
 * @function
 * @param {http.ClientRequest} req
 * <code>
	{

	}
 * </code>
 *
 * @param {http.ClientResponse} res
 * <code>
	{

	}
 * </code>
 *
 * @example
 * <code>
	http://localhost:49320/_query/count/getCount__SearchKeyword
	http://localhost:49320/_query/count/getCount__SearchKeyword?
 * </code>
 */
(function( req, res ){
	global.TtwLog.log( "- [ S ] - _query/count/getCount__SearchKeyword():void----------" );

	var q = global.b2link.url.getQueryFromURL( req.url );//URL to Query Object;

	//MongoDB�� Query�� �����ϱ� ���� �Ķ���� ����ü�� üũ�ϴ� �Լ�;
	global.b2link.debug._check_mongodb_queryParameter( q );

	//MongoDB Template Query�� dbjs ���Ϸκ��� �������� - �˻� Ű���忡 �ش��ϴ� �˻� ����� ������ ��ȯ�Ѵ�.;
	//var _query = global.b2link.fs.getDBJS( "../../../Development-NodeJS_Modules/js/b2link_router/_query/count/getCount__SearchKeyword.dbjs" );
	var query = _query.replace( "<!=nm_db=!>", q.nm_db ).replace( "<!=nm_col=!>", q.nm_col )
		.replace( "<!=data=!>", q.data );

	//Template Query�� ���� ���� �ݿ� ���� ���ÿ� query�� �����ϱ�;
	//global.b2link.fs.writeQuery( "../../../Development-NodeJS_Modules/js/b2link_router/_query/count/getCount__SearchKeyword.query", q.q );

	//*/
	//ClientRequest�� ���ԵǾ�� Session�� ���� �� MongoDB�� Request��;
	global.b2link.request.get__member_session$checkSessionAndReqMongoDB__CallBack( req, res, q, "admin", query
		, function( req, res, error, result ){
			if( error )
			{
				//MongoDB Query ����� Error �Ͻ� ó�� �� Client�� ����;
				global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
				return;
			}

			//MongoDB Query ���� �� ����� Client�� �����ϱ�;
			global.b2link.response.send_200_JSON( req, res, result );
		}
	);
	/*/
	if( q.nm_db == "brand" && q.nm_col == "brand_basic" )
	{
		q.db = q.nm_db;
		q.q = query;

		//MongoDB�� Query�� ��û�� - �ٸ� ������ ������;
		global.server.req_DB( req, res, q, function( error, result ){
			if( error )
			{
				//MongoDB Query ����� Error �Ͻ� ó�� �� Client�� ����;
				global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
				return;
			}

			//MongoDB Query ���� �� ����� Client�� �����ϱ�;
			global.b2link.response.send_200_JSON( req, res, result );
		});
	}
	else
	{
		//ClientRequest�� ���ԵǾ�� Session�� ���� �� MongoDB�� Request��;
		global.b2link.request.get__member_session$checkSessionAndReqMongoDB__CallBack( req, res, q, "admin", query
			, function( req, res, error, result ){
				if( error )
				{
					//MongoDB Query ����� Error �Ͻ� ó�� �� Client�� ����;
					global.b2link.response.send_200_False__ErrorLog( req, res, q, error );
					return;
				}

				//MongoDB Query ���� �� ����� Client�� �����ϱ�;
				global.b2link.response.send_200_JSON( req, res, result );
			}
		);
	}
	//*/

	global.TtwLog.log( "- [ E ] - _query/count/getCount__SearchKeyword():void----------" );
});