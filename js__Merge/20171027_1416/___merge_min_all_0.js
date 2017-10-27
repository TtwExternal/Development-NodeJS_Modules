
//D:/_/b2link/__define/000_define_global.b2link.js;
global.b2link=global.b2link||{};

//D:/_/b2link/__define/100_define_global.b2link.STATIC.js;
global.b2link.STATIC=global.b2link.STATIC||{};

//D:/_/b2link/__define/101_define_global.b2link.STATIC.CONFIG.js;
global.b2link.STATIC.CONFIG=global.b2link.STATIC.CONFIG||{},global.TtwLog.timeStamp("--------------------------------------------------[ S ] - global.b2link.STATIC.CONFIG.URL"),global.b2link.STATIC.CONFIG.URL=global.b2link.STATIC.CONFIG.URL||{},global.b2link.STATIC.CONFIG.URL.JS_B2LINK="./js/b2link/",global.b2link.STATIC.CONFIG.URL.PROXY="./ttwP/",global.b2link.STATIC.CONFIG.URL.SCODE="",global.TtwLog.timeStamp("--------------------------------------------------[ E ] - global.b2link.STATIC.CONFIG.URL");

//D:/_/b2link/__define/101_define_global.b2link.STATIC.CONST.js;
global.b2link.STATIC.CONST=global.b2link.STATIC.CONST||{},function(){global.b2link.STATIC.CONST.SCODES=global.b2link.STATIC.CONST.SCODES||{};var S=global.b2link.STATIC.CONST.SCODES;S.__defineGetter__("SESSION_SERVER",function(){return"SYS0010"}),S.__defineGetter__("B2KER",function(){return"SYS0020"}),S.__defineGetter__("BRAND_PORTAL",function(){return"SYS0030"}),S.__defineGetter__("FILE_SERVER",function(){return"SYS0040"}),S.__defineGetter__("WEB_HOOK_SERVER",function(){return"SYS0050"}),S.__defineGetter__("WEB_SOCKET_MESSAGE_SERVER",function(){return"SYS0060"}),S.__defineGetter__("EXCEL_SERVER",function(){return"SYS0070"}),S.__defineGetter__("WEB_SOCKET_APP_COMMUNICATION_SERVER",function(){return"SYS0080"})}();

//D:/_/b2link/__define/101_define_global.b2link.STATIC.REGEXP.js;
global.b2link.STATIC.REGEXP=global.b2link.STATIC.REGEXP||{},global.b2link.STATIC.REGEXP.MATCH=global.b2link.STATIC.REGEXP.MATCH||{},global.b2link.STATIC.REGEXP.MATCH.URI_HTTP0=/^http[s]*:\/\//,global.b2link.STATIC.REGEXP.MATCH.URL=/(http[s]?:\/\/)?([^\/\s]+\/)([^?#]*)/,global.b2link.STATIC.REGEXP.MATCH.VIP_SPUID=/spuId\s+:\s+'(.*)'/,global.b2link.STATIC.REGEXP.MATCH.VIP_COMMENT=/comment":(\[.*\])}\)/,global.b2link.STATIC.REGEXP.REPLACE=global.b2link.STATIC.REGEXP.REPLACE||{},global.b2link.STATIC.REGEXP.REPLACE.MONEY_COMMA1=/\B(?=(\d{3})+(?!\d))/g,global.b2link.STATIC.REGEXP.REPLACE.MONEY_COMMA2=/[^\d]+/g;

//D:/_/b2link/__define/200_define_global.b2link.array.js;
global.b2link.array=global.b2link.array||{};

//D:/_/b2link/__define/200_define_global.b2link.common.js;
global.b2link.common=global.b2link.common||{},global.b2link.common.clearInterval=function(l){clearInterval(l)},global.b2link.common.clearInterval_dispatchEvent=function(l){clearTimeout(l),global.b2link.event.dispatchCustomEvent(tEl,global.b2link.event.INTERVAL_END,l)},global.b2link.common.clearTimeout=function(l){clearTimeout(l)},global.b2link.common.clearTimeout_dispatchEvent=function(l){clearTimeout(l),global.b2link.event.dispatchCustomEvent(tEl,global.b2link.event.TIMEOUT_END,l)},global.b2link.common.setInterval=function(l,n){return setInterval(l,n)},global.b2link.common.setInterval_dispatchEvent=function(l,n){var t=setInterval(l,n);return global.b2link.event.dispatchCustomEvent(tEl,global.b2link.event.INTERVAL_START,t),t},global.b2link.common.setTimeout=function(l,n){return setTimeout(l,n)},global.b2link.common.setTimeout_dispatchEvent=function(l,n,t){var e=setTimeout(l,n);return global.b2link.event.dispatchCustomEvent(t,global.b2link.event.TIMEOUT_START,e),e};

//D:/_/b2link/__define/200_define_global.b2link.compress_zip.js;
global.b2link.compress_zip=global.b2link.compress_zip||{};

//D:/_/b2link/__define/200_define_global.b2link.console.js;
global.b2link.console=global.b2link.console||{};

//D:/_/b2link/__define/200_define_global.b2link.date.js;
global.b2link.date=global.b2link.date||{};

//D:/_/b2link/__define/200_define_global.b2link.debug.js;
global.b2link.debug=global.b2link.debug||{};

//D:/_/b2link/__define/200_define_global.b2link.event.js;
global.b2link.event=global.b2link.event||{},global.process.on("uncaughtException",function(t){try{global.TtwLog.error(t)}catch(n){}}),global.b2link.event.dispatchCustomEvent=function(t,n,o){SUtilCustomEvent.dispatchCustomEvent(t,n,o)},global.b2link.event.dispatchEvent=function(t,n){global.TtwLog.info(t),global.TtwLog.info("evtType : "+n),SUtilCustomEvent.dispatchEvent(t,n)};

//D:/_/b2link/__define/200_define_global.b2link.fn.js;
global.b2link.fn=global.b2link.fn||{};

//D:/_/b2link/__define/200_define_global.b2link.fs.js;
global.b2link.fs=global.b2link.fs||{},global.b2link.fs.autoLoad_JS=function(e,t){global.Lib.Ttw.autoLoad_JS.addJSFiles___Define(e,t),global.Lib.Ttw.autoLoad_JS.addJSFiles_Package(e,t);var l=global.Lib.Ttw.autoLoad_JS.addRouter__JSFiles_Services;for(var i in t)l(e+i+"/")},global.b2link.fs.autoLoad_JSs=function(e){for(var t,l=0,i=e.length;i>l;++l)t=e[l],global.TtwLog.warn(t[0]),global.b2link.fs.autoLoad_JS(t[1],t[2])},!function(){var e={};global.b2link.fs.getDBJS=function(t){return e[t]||(e[t]=STtwUtilFsReadStream.getFile(t).toString("utf8")),global._$TATIC_CONST_DEBUG&&(e[t]=STtwUtilFsReadStream.getFile(t).toString("utf8"),SUtilFsWriteStream.writeFile_UTF8(t.replace(".dbjs",".query"),e[t])),e[t]},global.b2link.fs.getDBJS.clear=function(){e={}}}(),!function(){var e={};global.b2link.fs.getDBJS__require=function(t){var l,i=16,r=10,a=-1,n=-1;if(!e[t]){for(var o=STtwUtilFsReadStream.getFile(t).toString("utf8");a=o.indexOf("<require>global."),-1!=a;)if(n=o.indexOf("</require>"),-1!=n){l=n+r;var g=o.slice(a,l),b=o.slice(a+i,n),s=Lib.Ttw.eval(b);if(!s)return global.TtwLog.error(b+" 경로에 문제가 있음."),new Error(b+" 경로에 문제가 있음.");var f=s.toString();o=o.replace(g,f)}e[t]=o}return global._$TATIC_CONST_DEBUG&&SUtilFsWriteStream.writeFile_UTF8(t.replace(".dbjs",".query"),e[t]),e[t]},global.b2link.fs.getDBJS__require.clear=function(){e={}}}(),!function(){var e={};global.b2link.fs.getDBJSObj=function(t,l,i){if(!e[t]){var r=STtwUtilFsReadStream.getFile(t).toString("utf8"),a=global.mongodb.dbjs.getCRUDStatusFromQuery(r,l,i);e[t]={nm_db:l,nm_col:i,q:r,s:a.replace("_","")}}if(global._$TATIC_CONST_DEBUG){var r=STtwUtilFsReadStream.getFile(t).toString("utf8"),a=global.mongodb.dbjs.getCRUDStatusFromQuery(r,l,i);e[t]={nm_db:l,nm_col:i,q:r,s:a.replace("_","")},SUtilFsWriteStream.writeFile_UTF8(t.replace(".dbjs",".query"),e[t].q)}return e[t]},global.b2link.fs.getDBJSObj.clear=function(){e={}}}(),!function(){var e={};global.b2link.fs.getDBJSObj__require=function(t,l,i){var r,a=16,n=10,o=-1,g=-1;if(!e[t]){for(var b=STtwUtilFsReadStream.getFile(t).toString("utf8");o=b.indexOf("<require>global."),-1!=o;)if(g=b.indexOf("</require>"),-1!=g){r=g+n;var s=b.slice(o,r),f=b.slice(o+a,g),S=Lib.Ttw.eval(f);if(!S)return global.TtwLog.error(f+" 경로에 문제가 있음."),new Error(f+" 경로에 문제가 있음.");var u=S.toString();b=b.replace(s,u)}var F=global.mongodb.dbjs.getCRUDStatusFromQuery(b,l,i);e[t]={nm_db:l,nm_col:i,q:query,s:F.replace("_","")}}return global._$TATIC_CONST_DEBUG&&SUtilFsWriteStream.writeFile_UTF8(t.replace(".dbjs",".query"),e[t].q),e[t]},global.b2link.fs.getDBJSObj__require.clear=function(){e={}}}(),global.b2link.fs.getDirectoryList=function(e){return STtwUtilFsReadStream.getList_Directory(e)},global.b2link.fs.getFile=function(e){return STtwUtilFsReadStream.getFile(e)},global.b2link.fs.getFile_UTF8=function(e){return STtwUtilFsReadStream.getFile(e).toString("utf8")},global.b2link.fs.getFileList=function(e){return STtwUtilFsReadStream.getList_File(e)},global.b2link.fs.getFileList_Extension=function(e,t){return STtwUtilFsReadStream.getList_File_Extension(e,t)},global.b2link.fs.getJS__includeJS=function(e){for(var t,l=12,i=13,r=-1,a=-1,n=STtwUtilFsReadStream.getFile(e).toString("utf8");r=n.indexOf("<include-js>global."),-1!=r;)if(a=n.indexOf("</include-js>"),-1!=a){t=a+i;var o=n.slice(r,t),g=n.slice(r+l,a),b=global.b2link.fs.getFile_UTF8(g);n=n.replace(o,b)}return n},global.b2link.fs.getJSON_UTF8=function(e){return JSON.parse(global.b2link.fs.getFile_UTF8(e))},global.b2link.fs.writeFile=function(e,t,l,i){STtwUtilFsWriteStream.writeFile(e,t,l,i)},global.b2link.fs.writeFile_Binary=function(e,t,l,i){STtwUtilFsWriteStream.writeFile_Binary(e,t,l,i)},global.b2link.fs.writeFile_UTF8=function(e,t,l){STtwUtilFsWriteStream.writeFile_UTF8(e,t,l),l&&l()},global.b2link.fs.writeFile_UTF8__NCallBack=function(e,t){STtwUtilFsWriteStream.writeFile_UTF8(e,t)},global.b2link.fs.writeQuery=function(e,t,l){STtwUtilFsWriteStream.writeFile_UTF8(e,t,l)};

//D:/_/b2link/__define/200_define_global.b2link.ip.js;
global.b2link.ip=global.b2link.ip||{},!function(){var l={1:1,localhost:1,"127.0.0.1":1,"::1":1,"::localhost":1,"::127.0.0.1":1,"::ffff:localhost":1,"::ffff:127.0.0.1":1,"::ffff:1.212.71.98":1,"::ffff:1.212.71.99":0,"222.239.10.115":0,"222.239.10.116":0,"222.239.10.120":1,"222.239.10.121":0,"222.239.10.122":0,"222.239.10.123":0,"::ffff:222.239.10.115":0,"::ffff:222.239.10.116":0,"::ffff:222.239.10.120":1,"::ffff:222.239.10.121":0,"::ffff:222.239.10.122":0,"::ffff:222.239.10.123":0};global.b2link.ip.adminCheckAvailable=function(f){return l.hasOwnProperty(f)?l[f]:0}}(),global.b2link.ip.adminCheckAvailable__http$ClientRequest=function(l,f){try{return global.b2link.ip.adminCheckAvailable(l.client.remoteAddress)}catch(e){global.TtwLog.error("global.b2link.ip.adminCheckAvailable__http$ClientRequest::req.client Error : "+e)}try{return global.b2link.ip.adminCheckAvailable(l.connection.remoteAddress)}catch(e){global.TtwLog.error("global.b2link.ip.adminCheckAvailable__http$ClientRequest::req.connection Error : "+e)}};

//D:/_/b2link/__define/200_define_global.b2link.log.js;
global.b2link.log=global.b2link.log||{},global.b2link.log.comment_Dash_20=function(){global.TtwLog.timeStamp("//--------------------;")},global.b2link.log.comment_Dash_30=function(){global.TtwLog.timeStamp("//------------------------------;")},global.b2link.log.comment_Dash_40=function(){global.TtwLog.timeStamp("//----------------------------------------;")},global.b2link.log.comment_Dash_50=function(){global.TtwLog.timeStamp("//--------------------------------------------------;")},global.b2link.log.comment_Dash_60=function(){global.TtwLog.timeStamp("//------------------------------------------------------------;")},global.b2link.log.comment_Dash_70=function(){global.TtwLog.timeStamp("//----------------------------------------------------------------------;")},global.b2link.log.comment_Dash_80=function(){global.TtwLog.timeStamp("//--------------------------------------------------------------------------------;")},global.b2link.log.comment_Dash_90=function(){global.TtwLog.timeStamp("//------------------------------------------------------------------------------------------;")},global.b2link.log.comment_Dash_100=function(){global.TtwLog.timeStamp("")};

//D:/_/b2link/__define/200_define_global.b2link.math.js;
global.b2link.math=global.b2link.math||{};

//D:/_/b2link/__define/200_define_global.b2link.obj.js;
global.b2link.obj=global.b2link.obj||{};

//D:/_/b2link/__define/200_define_global.b2link.request.js;
global.b2link.request=global.b2link.request||{},global.b2link.request.get=function(e,r,l){var o=STtwUtilURL.getParseResult(e),s=o.host.split(":"),n={encoding:"utf8",options:{host:s[0],port:s[1],path:o.path,headers:l?l:null},cbFunctions:{end:r,error:global.b2link.request.get._error}};try{STtwUtilHttp.request_GET(n)}catch(t){global.TtwLog.error(t)}},global.b2link.request.get._error=function(e){global.TtwLog.error(e)},global.b2link.request.get__Binary=function(e,r,l){var o=STtwUtilURL.getParseResult(e),s=o.host.split(":"),n={encoding:"binary",options:{host:s[0],port:s[1],path:o.path,headers:l?l:null},cbFunctions:{end:r}};try{STtwUtilHttp.request_GET__Binary(n)}catch(t){global.TtwLog.error(t)}},global.b2link.request.get__Binary._error=function(e){global.TtwLog.error(e)},global.b2link.request.get__member_session$checkSession=function(e,r,l,o){global.b2link.request.get(global.b2link.url.getServerURLByServers("session_server")+"/member/session/check_session?sid="+l.sid,o,e.headers)},global.b2link.request.get__member_session$checkSessionAndReqMongoDB=function(e,r,l,o,s){var n=global.server;global.b2link.request.get(global.b2link.url.getServerURLByServers("session_server")+"/member/session/check_session?sid="+l.sid,function(t){return 0==global.b2link.response.getResultStatus(t)?(global.b2link.response.send_200_False(e,r),void global.b2link_router.STATIC.REQUEST_COUNT.M1()):(l.db=o,l.q=s,global.b2link_router.STATIC.REQUEST_COUNT.P1(),n.req_DB(e,r,l,function(o,s){return o?(global.b2link_router.STATIC.REQUEST_COUNT.M1(),void global.b2link.response.send_200_False__ErrorLog(e,r,l,o)):(global.b2link_router.STATIC.REQUEST_COUNT.M1(),void global.b2link.response.send_200_JSON(e,r,s))}),void global.b2link_router.STATIC.REQUEST_COUNT.M1())},e.headers)};try{!function(){var e=global.b2link.fs.getDBJS("./js__b2link__sessionServer/b2link_router/member/session/check_session.dbjs");global.b2link.request.get__member_session$checkSessionAndReqMongoDB__CallBack=function(r,l,o,s,n,t){var i=global.server,i=global.server;o.db="member",o.q=e.replace("<!=sid=!>",o.sid),i.req_DB(r,l,o,function(e,b){return e?void global.b2link.response.send_200_False(r,l):void(0==b?global.b2link.response.send_301_DestroySession(r,l):1==b&&(o.db=s?s:"admin",o.q=n,i.req_DB(r,l,o,function(e,o){t(r,l,e,o)})))})}}()}catch(e){}global.b2link.request.get__member_session$checkSessionAndReqNameFromsid=function(e,r,l){var o=global.server;global.b2link.request.get(global.b2link.url.getServerURLByServers("session_server")+"/member/session/check_session?sid="+l.sid,function(s){return 0==global.b2link.response.getResultStatus(s)?(global.b2link.response.send_200_False(e,r),void global.b2link_router.STATIC.REQUEST_COUNT.M1()):(l.db="member",l.q='member_session$getProp__idFromsid("'+l.sid+'")',global.b2link_router.STATIC.REQUEST_COUNT.P1(),o.req_DB(e,r,l,function(s,n){return s?(global.b2link_router.STATIC.REQUEST_COUNT.M1(),void global.b2link.response.send_200_False__ErrorLog(e,r,l,s)):(global.b2link_router.STATIC.REQUEST_COUNT.M1(),l.db="member",l.q="member_public$getProp_NameFrom_id("+n+")",global.b2link_router.STATIC.REQUEST_COUNT.P1(),void o.req_DB(e,r,l,function(o,s){return o?(global.b2link_router.STATIC.REQUEST_COUNT.M1(),void global.b2link.response.send_200_False__ErrorLog(e,r,l,o)):(global.b2link_router.STATIC.REQUEST_COUNT.M1(),void global.b2link.response.send_200_JSON(e,r,s))}))}),void global.b2link_router.STATIC.REQUEST_COUNT.M1())},e.headers)},global.b2link.request.get__ReqMongoDB=function(e,r,l,o){var s=global.server;global.b2link_router.STATIC.REQUEST_COUNT.P1(),s.req_DB(e,r,{db:l,q:o},function(l,s){return l?(global.b2link_router.STATIC.REQUEST_COUNT.M1(),global.b2link.response.setHeaders__b2ker(r),void global.b2link.response.send_200_False__ErrorLog(e,r,o,l)):(global.b2link_router.STATIC.REQUEST_COUNT.M1(),global.b2link.response.setHeaders__b2ker(r),void global.b2link.response.send_200_JSON(e,r,s))})},global.b2link.request.post=function(e,r,l,o){var s=STtwUtilURL.getParseResult(e);if(s.protocol&&s.host){var n=s.host.split(":"),t={encoding:"utf8",options:{host:n[0],port:n[1],path:s.path,headers:l?l:null,rejectUnauthorized:!1},cbFunctions:r,data:o};global.b2link_router.STATIC.REQUEST_COUNT.P1(),"https:"==s.protocol?STtwUtilHttps.request_POST(t):STtwUtilHttp.request_POST(t)}};

//D:/_/b2link/__define/200_define_global.b2link.response.js;
global.b2link.response=global.b2link.response||{},global.b2link.response.send_200_False=function(e,t){t&&(global.b2link.response.setHeaders__b2ker(t),global.server.sendResponse_200_False(e,t))},global.b2link.response.send_200_False__ErrorLog=function(e,t,n,l){global.TtwLog.error(n.q+" Error : "+l),t&&(global.b2link.response.setHeaders__b2ker(t),global.b2link.response.send_200_False(e,t))};try{global.REQUIRES=global.REQUIRES||{};var _fs=require("fs"),_path=require("path");global.REQUIRES.__defineGetter__("fs",function(){return _fs}),global.REQUIRES.__defineGetter__("path",function(){return _path})}catch(e){}global.b2link.response.sendStream_200_File=function(e,t,n){if(t){var l,r=global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES;n.cbFunction&&t.on("finish",function(e){n.cbFunction(e,n.filePath)});try{l=global.REQUIRES.fs.lstatSync(n.filePath)}catch(o){return void global.b2link.response.send_404(t)}if(l.isFile()){t.writeHead(200,{"Content-Type":r[global.REQUIRES.path.extname(n.filePath).split(".").reverse()[0]],"Content-Disposition":"attachment; filename="+encodeURI(n.fileNm)});var s=global.REQUIRES.fs.createReadStream(n.filePath);s.pipe(t)}else l.isDirectory()?(t.writeHead(200,{"Content-Type":r.txt}),t.end()):global.b2link.response.send_500(t)}};try{global.REQUIRES=global.REQUIRES||{};var _fs=require("fs"),_path=require("path");global.REQUIRES.__defineGetter__("fs",function(){return _fs}),global.REQUIRES.__defineGetter__("path",function(){return _path})}catch(e){}global.b2link.response.sendStream_200_File_NCallback=function(e,t,n){if(t){var l,r=global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES;try{l=global.REQUIRES.fs.lstatSync(n.filePath)}catch(o){return void global.b2link.response.send_404(t)}if(l.isFile()){t.writeHead(200,{"Content-Type":r[global.REQUIRES.path.extname(n.filePath).split(".").reverse()[0]],"Content-Disposition":"attachment; filename="+encodeURI(n.fileNm)});var s=global.REQUIRES.fs.createReadStream(n.filePath);s.pipe(t)}else l.isDirectory()?(t.writeHead(200,{"Content-Type":r.txt}),t.end()):global.b2link.response.send_500(t)}};try{global.REQUIRES=global.REQUIRES||{};var _fs=require("fs"),_path=require("path");global.REQUIRES.__defineGetter__("fs",function(){return _fs}),global.REQUIRES.__defineGetter__("path",function(){return _path})}catch(e){}global.b2link.response.sendStream_200_File_URI=function(e,t,n,l,r){return global.TtwLog.timeStamp("---- [ S ] - global.b2link.response.sendStream_200_File_URI():void----------"),void global.TtwLog.error("사용금지 - 만약 필요시 협의 바람")};try{global.REQUIRES=global.REQUIRES||{};var _fs=require("fs"),_path=require("path");global.REQUIRES.__defineGetter__("fs",function(){return _fs}),global.REQUIRES.__defineGetter__("path",function(){return _path})}catch(e){}global.b2link.response.sendStream_200_File_URI_NCallback=function(e,t,n,l){if(t){var r,o=global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES,s=_path.join(n,unescape(l));try{r=global.REQUIRES.fs.lstatSync(s)}catch(a){return void global.b2link.response.send_404(t)}if(r.isFile()){t.writeHead(200,{"Content-Type":global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES[_path.extname(s).split(".").reverse()[0]]});var i=global.REQUIRES.fs.createReadStream(s);i.pipe(t)}else r.isDirectory()?(t.writeHead(200,{"Content-Type":o.txt}),t.end()):global.b2link.response.send_500(t)}};try{global.REQUIRES=global.REQUIRES||{};var _fs=require("fs"),_path=require("path");global.REQUIRES.__defineGetter__("fs",function(){return _fs}),global.REQUIRES.__defineGetter__("path",function(){return _path})}catch(e){}global.b2link.response.sendStream_200_FileFromURI=function(e,t,n){return global.TtwLog.timeStamp("---- [ S ] - global.b2link.response.sendStream_200_FileFromURI():void----------"),void global.TtwLog.error("사용금지 - 만약 필요시 협의 바람")};try{global.REQUIRES=global.REQUIRES||{};var _fs=require("fs"),_path=require("path");global.REQUIRES.__defineGetter__("fs",function(){return _fs}),global.REQUIRES.__defineGetter__("path",function(){return _path})}catch(e){}global.b2link.response.sendStream_200_FileFromURI_NCallback=function(e,t,n){if(t){var l,r=global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES,o=STtwUtilHttpServer.getURIFromURL(e.url),s=_path.join(n,unescape(o));try{l=global.REQUIRES.fs.lstatSync(s)}catch(a){return void global.b2link.response.send_404(t)}if(l.isFile()){t.writeHead(200,{"Content-Type":global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES[_path.extname(s).split(".").reverse()[0]]});var i=global.REQUIRES.fs.createReadStream(s);i.pipe(t)}else l.isDirectory()?(t.writeHead(200,{"Content-Type":r.txt}),t.end()):global.b2link.response.send_500(t)}},global.b2link.response.send_200_JSON=function(e,t,n){t&&(global.b2link.response.setHeaders__b2ker(t),global.server.sendResponse_200_String(e,t,JSON.stringify(n)))},global.b2link.response.send_200_String=function(e,t,n){t&&(global.b2link.response.setHeaders__b2ker(t),global.server.sendResponse_200_String(e,t,n))},global.b2link.response.send_200_String_DestroySessionComplete=function(e,t){t&&(global.b2link.response.setHeaders__b2ker(t),global.server.sendResponse_200_String(e,t,"destroySessionComplete"))},global.b2link.response.send_200_True=function(e,t){t&&(global.b2link.response.setHeaders__b2ker(t),global.server.sendResponse_200_True(e,t))},global.b2link.response.send_301_DestroySession=function(e,t){t&&(global.b2link.response.setHeaders__b2ker(t),t.writeHead(301,{Location:global.b2link_router.STATIC.CONFIG.URL.MEMBER.MEMBER_SESSION.DESTROY_SESSION}),t.end())},global.b2link.response.send_404=function(e,t){t&&(global.b2link.response.setHeaders__b2ker(t),SUtilHttpServerResponse.responseWrite_404(t))},global.b2link.response.send_500=function(e,t){t&&(global.b2link.response.setHeaders__b2ker(t),SUtilHttpServerResponse.responseWrite_500(t))},global.b2link.response.setHeader__setcookie=function(e,t,n){t&&t.setHeader("set-cookie","connect.sid="+n.sid+"; session_id="+n.sid+"; Expires="+n.d_ex+"; HttpOnly")},global.b2link.response.setHeader__setcookie__null=function(e,t){t&&t.setHeader("set-cookie","connect.sid=; session_id=; Expires=; HttpOnly")},global.b2link.response.setHeaders__b2ker=function(e){e.setHeader("X-Powered-By","B2KER"),e.setHeader("Access-Control-Allow-Origin","*"),e.setHeader("Access-Control-Allow-Credentials",!0),e.setHeader("Access-Control-Allow-Methods","GET, PUT, POST, DELETE, OPTIONS"),e.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Cache-Control, Content-Type, Content-Length, Authorization, Accept")},global.b2link.response.setHeaders__brandPortal=function(e){e.setHeader("X-Powered-By","B2LiNK-BrandPortal"),e.setHeader("Access-Control-Allow-Origin","*"),e.setHeader("Access-Control-Allow-Credentials",!0),e.setHeader("Access-Control-Allow-Methods","GET, PUT, POST, DELETE, OPTIONS"),e.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Cache-Control, Content-Type, Content-Length, Authorization, Accept")},global.b2link.response.setHeaders__excelServer=function(e){e.setHeader("X-Powered-By","B2LiNK-ExcelServer"),e.setHeader("Access-Control-Allow-Origin","*"),e.setHeader("Access-Control-Allow-Credentials",!0),e.setHeader("Access-Control-Allow-Methods","GET, PUT, POST, DELETE, OPTIONS"),e.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Cache-Control, Content-Type, Content-Length, Authorization, Accept")},global.b2link.response.setHeaders__fileServer=function(e){e.setHeader("X-Powered-By","B2LiNK-FileServer"),e.setHeader("Access-Control-Allow-Origin","*"),e.setHeader("Access-Control-Allow-Credentials",!0),e.setHeader("Access-Control-Allow-Methods","GET, PUT, POST, DELETE, OPTIONS"),e.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Cache-Control, Content-Type, Content-Length, Authorization, Accept")};

//D:/_/b2link/__define/200_define_global.b2link.router_file.js;
global.b2link.router_file=global.b2link.router_file||{};

//D:/_/b2link/__define/200_define_global.b2link.router_resource.js;
global.b2link.router_resource=global.b2link.router_resource||{};

//D:/_/b2link/__define/200_define_global.b2link.server_http.js;
global.b2link.server_http=global.b2link.server_http||{};

//D:/_/b2link/__define/200_define_global.b2link.service.js;
global.b2link.service=global.b2link.service||{};

//D:/_/b2link/__define/200_define_global.b2link.session.js;
global.b2link.session=global.b2link.session||{},global.b2link.session.get_or_create__Session=function(e,t,s){var n,i,l=STtwUtilHttpClientRequest.getHeader_Cookie(e),o=0;return l&&(l.hasOwnProperty("connect.sid")&&(i=l["connect.sid"],o=1),l.Expires&&(n=l.expires)),i&&null!=i&&""!=i&&"null"!=i||(i=STtwUtilHttpClientResponse.create_Session(e),o=0),n&&null!=n&&""!=n&&"null"!=n||(n=STtwUtilHttpClientResponse.create_Date__Expired()),{bFirstSession:o,sid:i,d_ex:n}};

//D:/_/b2link/__define/200_define_global.b2link.timer.js;
global.b2link.timer=global.b2link.timer||{};

//D:/_/b2link/__define/200_define_global.b2link.uri.js;
global.b2link.uri=global.b2link.uri||{},!function(){var n={};global.b2link.uri.decodeURI=function(o){return n.hasOwnProperty(o)||(n[o]=global.decodeURI(o)),n[o]},global.b2link.uri.decodeURI._clear=function(){n={}}}(),!function(){var n={};global.b2link.uri.decodeURIComponent=function(o){return n.hasOwnProperty(o)||(n[o]=global.decodeURIComponent(o)),n[o]},global.b2link.uri.decodeURIComponent._clear=function(){n={}}}(),!function(){var n={};global.b2link.uri.encodeURI=function(o){return n.hasOwnProperty(o)||(n[o]=global.encodeURI(o)),n[o]},global.b2link.uri.encodeURI._clear=function(){n={}}}(),!function(){var n={};global.b2link.uri.encodeURIComponent=function(o){return n.hasOwnProperty(o)||(n[o]=global.encodeURIComponent(o)),n[o]},global.b2link.uri.encodeURIComponent._clear=function(){n={}}}();

//D:/_/b2link/__define/200_define_global.b2link.url.js;
global.b2link.url=global.b2link.url||{},global.b2link.url.getQueryFromURL=function(e){return global.server.getQueryFromURL(e)},global.b2link.url.getQueryFromURL_Decode=function(e){e=decodeURIComponent(e);var r=global.server.getQueryFromURL(e);delete r[""];var l=JSON.stringify(r).replace('"":"",',"");return l=l.replace(/!MzU=!/gi,"#").replace(/!Mzg=!/gi,"&"),JSON.parse(l)};

//D:/_/b2link/__define/200_define_global.b2link.util.js;
global.b2link.util=global.b2link.util||{};

//D:/_/b2link/__define/200_define_global.b2link.validation_classType.js;
global.b2link.validation_classType=global.b2link.validation_classType||{};

//D:/_/b2link/__define/200_define_global.b2link.validation_mongodb.js;
global.b2link.validation_mongodb=global.b2link.validation_mongodb||{};

//D:/_/b2link/array/global.b2link.array.mergeArrays.js;
global.b2link.array.mergeArrays=function(r){if(global.TtwLog.timeStamp("---- [ S ] - global.b2link.array.mergeArrays():{Array}----------"),0===r.length)return[];for(var a=r[0],l=1;l<r.length;++l)r[l]&&r[l].length>0&&(a=a.concat(r[l]));return global.TtwLog.timeStamp("---- [ E ] - global.b2link.array.mergeArrays():{Array}----------return tmp;"),a};

//D:/_/b2link/compress_zip/global.b2link.compress_zip.compress_file.js;
global.b2link.compress_zip.compress_file=function(i){window.TtwLog.timeStamp("---- [ S ] - global.b2link.compress_zip.compress_file():{String}----------"),i.pop&&i.push?_array(i):_object(i),window.TtwLog.timeStamp("---- [ E ] - global.b2link.compress_zip.compress_file():{String}----------")};

//D:/_/b2link/date/global.b2link.date.dateFormatter.js;
global.b2link.date.dateFormatter=function(e,t){"string"==typeof e&&(e=new Date(e));var s=e.getFullYear(),o=e.getMonth()+1,r=e.getDate(),a=e.getHours(),n=e.getMinutes(),u=e.getSeconds(),g=e.getMilliseconds(),l=null;return t?"array"==t.toLowerCase()?(l=[],l.push(s),l.push(o),l.push(r),l.push(a),l.push(n),l.push(g)):l="object"==t.toLowerCase()?{y:s,m:o,d:r,ho:a,mi:n,se:u}:"string"==t.toLowerCase()?s+"-"+o+"-"+r:s+"-"+o+"-"+r:l=s+"-"+o+"-"+r,l};

//D:/_/b2link/date/global.b2link.date.dateFormatter__Object.js;
global.b2link.date.dateFormatter__Object=function(e){"string"==typeof e&&(e=new Date(e));var t={y:Number(e.getFullYear()),m:Number(e.getMonth()+1),d:Number(e.getDate()),ho:Number(e.getHours()),mi:Number(e.getMinutes()),se:Number(e.getSeconds())};return t};

//D:/_/b2link/date/global.b2link.date.getArrayDateFromExcelNumber.js;
global.b2link.date.getArrayDateFromExcelNumber=function(e){var t=new Date(1899,12,e);if("Invalid Date"===t.toString())return null;var n=[t.getFullYear(),t.getMonth()+1,t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds()];return t=null,n};

//D:/_/b2link/date/global.b2link.date.getArrayDateFromNewDate.js;
global.b2link.date.getArrayDateFromNewDate=function(){var e=new Date,t=[e.getFullYear(),e.getMonth()+1,e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds()];return e=null,t};

//D:/_/b2link/date/global.b2link.date.getDateStringFromArrayDate_Dash.js;
global.b2link.date.getDateStringFromArrayDate_Dash=function(t){return t.join("-")};

//D:/_/b2link/date/global.b2link.date.getObjectDateFromExcelNumber.js;
global.b2link.date.getObjectDateFromExcelNumber=function(e){var t=new Date(1899,12,e);if("Invalid Date"===t.toString())return null;var n={y:t.getFullYear(),m:t.getMonth()+1,d:t.getDate(),ho:t.getHours(),mi:t.getMinutes(),se:t.getSeconds()};return t=null,n};

//D:/_/b2link/date/global.b2link.date.getObjectDateFromNewDate.js;
global.b2link.date.getObjectDateFromNewDate=function(){var e=new Date,t={y:e.getFullYear(),m:e.getMonth()+1,d:e.getDate(),ho:e.getHours(),mi:e.getMinutes(),se:e.getSeconds()};return e=null,t};

//D:/_/b2link/date/global.b2link.date.getObjectDateFromString.js;
global.b2link.date.getObjectDateFromString=function(t){var e=new Date(t);if("Invalid Date"===e.toString())return null;var n={y:e.getFullYear(),m:e.getMonth()+1,d:e.getDate(),ho:e.getHours(),mi:e.getMinutes(),se:e.getSeconds()};return e=null,n};

//D:/_/b2link/debug/global.b2link.debug._check_mongodb_queryParameter.js;
!function(){var e=function(e){if("object"==e[0])for(var n,t=0,o=e.length;o>t;++t)n=e[t],"object"==typeof n&&i(n)},i=function(e){var i;for(var n in e)if(i=e[n],"price"==n||0==n.indexOf("quantity"),0==n.indexOf("_ids$")){var t;for(var o in i)t=i[o]}else 0==n.indexOf("_id$")||0==n.indexOf("cd$")||"quantity_predict_release"!=n&&0==n.indexOf("quantity_")||0==n.indexOf("total_quantity_")};global.b2link.debug._check_mongodb_queryParameter=function(n){window.TtwLog.timeStamp("---- [ S ] - global.b2link.debug._check_mongodb_queryParameter():void----------"),n.pop&&n.push?e(n):i(n),window.TtwLog.timeStamp("---- [ E ] - global.b2link.debug._check_mongodb_queryParameter():void----------")}}();

//D:/_/b2link/event/global.b2link.event.DefineEvents.js;
!function(){var _=global.b2link.event;_.APPENDED_CHILD="appended_child",_.CHANGED_LOCALE="changed_locale",_.CREATED_CUSTOM_ELEMENT="created_custom_element",_.CREATED_EL="created_element",_.CREATED_IMPORT_HTML_EL="created_import-html_element",_.CREATED_IMPORT_HTML_JS="created_import-html_js",_.CREATED_INCLUDE_HTML_EL="created_include-html_element",_.CREATION_COMPLETE="creation_complete",_.DATA_WRITE_CANCEL="data_write_cancel",_.DATA_WRITE_COMPLETE="data_write_complete",_.DISPOSED_EL="disposed_element",_.DISPOSED_JS="disposed_js",_.INTERVAL_END="interval_end",_.INTERVAL_START="interval_start",_.INITIALIZED="initialized",_.INITIALIZED_ALL_CHILDREN="initialized_all_children",_.HIDED_EL="hided_element",_.LIST_DATA_CHANGED="list_data_changed",_.LIST_SELECT_ITEM="list_select_item",_.LIST_SELECTED_ITEM="list_selected_item",_.NAVIGATION_DATA_CHANGED="navigation_data_changed",_.NAVIGATION_ITEM_SELECTED="navigation_item_selected",_.LOADED_CHILDREN="loaded_children",_.REMOVED_CHILD="removed_child",_.RESIZED_EL="resized_element",_.RESPONSE_DATA="response_data",_.REQUEST_DATA="requese_data",_.SEARCH_UI_INPUTED_TEXT="search_ui_inputed_text",_.SEARCH_UI_SELECTED_TYPE="search_ui_selected_type",_.SHOWED_EL="showed_element",_.SIGN_IN_FAILURE="sign_in_failure",_.SIGN_IN_SUCCESS="sign_in_success",_.SIGN_OUT_FAILURE="sign_out_failure",_.SIGN_OUT_SUCCESS="sign_out_success",_.TABLE_DATA_CHANGED="table_data_changed",_.TIMEOUT_END="timeout_end",_.TIMEOUT_START="timeout_start",_.__initialize_Events=function(){global.b2link.log.comment_Dash_100(),global.TtwLog.timeStamp("	B2LiNK Events List"),global.b2link.log.comment_Dash_100();for(var e in _)"function"!=typeof _[e]&&(_[e]="b2link_"+_[e],global.TtwLog.info("global.b2link.event."+e+' - "'+_[e]+'"'));global.b2link.log.comment_Dash_100(),delete _.__initialize_Events}}();

//D:/_/b2link/obj/global.b2link.obj.check_RequiredValueHasOwnProperty.js;
global.b2link.obj.check_RequiredValueHasOwnProperty=function(r,e){for(var n=0,o=e.length;o>n;++n)if(!r.hasOwnProperty(e[n]))return 0;return 1};

//D:/_/b2link/obj/global.b2link.obj.sortJSONObject_key_NumberASC.js;
global.b2link.obj.sortJSONObject_key_NumberASC=function(r){var n=[];for(p in r)n.push(p);n.sort(function(r,n){return r-n});for(var o=[],t=0,e=n.length;e>t;++t)o[t]=r[n[t]];return o};

//D:/_/b2link/obj/global.b2link.obj.sortJSONObject_key_StringASC.js;
global.b2link.obj.sortJSONObject_key_StringASC=function(r){var t=Object.keys(r);t.sort();for(var e=[],n=0,o=t.length;o>n;++n)e[n]=r[t[n]];return e};

//D:/_/b2link/request/global.b2link.request.get__checkSessionToSessionServer.js;
global.b2link.request.get__checkSessionToSessionServer=function(e,l,o,s){global.TtwLog.timeStamp("\n"),global.TtwLog.timeStamp("---- [ S ] - global.b2link.request.get__checkSessionToSessionServer():void----------");global.server;global.b2link.request.get(global.b2link.url.getServerURLByServers("session_server")+"/member/session/check_session?sid="+o,function(o){return 0==global.b2link.response.getResultStatus(o)?(global.b2link.response.send_200_False(e,l),void global.b2link_router.STATIC.REQUEST_COUNT.M1()):(global.b2link_router.STATIC.REQUEST_COUNT.P1(),s(e,l),void global.b2link_router.STATIC.REQUEST_COUNT.M1())},e.headers),global.TtwLog.timeStamp("---- [ E ] - global.b2link.request.get__checkSessionToSessionServer():void----------"),global.TtwLog.timeStamp("\n")};

//D:/_/b2link/request/global.b2link.request.get__checkSessionToSessionServer__WebSocket.js;
global.b2link.request.get__checkSessionToSessionServer__WebSocket=function(e,o,s){global.TtwLog.timeStamp("\n"),global.TtwLog.timeStamp("---- [ S ] - global.b2link.request.get__checkSessionToSessionServer__WebSocket():void----------");global.server;global.b2link.request.get(global.b2link.url.getServerURLByServers("session_server")+"/member/session/check_session?sid="+o,function(e){s(e)}),global.TtwLog.timeStamp("---- [ E ] - global.b2link.request.get__checkSessionToSessionServer__WebSocket():void----------"),global.TtwLog.timeStamp("\n")};

//D:/_/b2link/request/global.b2link.request.get__member_session$checkSessionAndReqMongoDB__CallBack.js;
global.b2link.request.get__member_session$checkSessionAndReqMongoDB__CallBack=function(e,l,o,s,n,i){global.TtwLog.timeStamp("\n"),global.TtwLog.timeStamp("---- [ S ] - global.b2link.request.get__member_session$checkSessionAndReqMongoDB__CallBack():void----------");var t=global.server;global.b2link.request.get(global.b2link.url.getServerURLByServers("session_server")+"/member/session/check_session?sid="+o.sid,function(b){return 0==global.b2link.response.getResultStatus(b)?(global.b2link.response.send_200_False(e,l),void global.b2link_router.STATIC.REQUEST_COUNT.M1()):(o.db=s,o.q=n,global.b2link_router.STATIC.REQUEST_COUNT.P1(),t.req_DB(e,l,o,function(o,s){i(e,l,o,s)}),void global.b2link_router.STATIC.REQUEST_COUNT.M1())},e.headers),global.TtwLog.timeStamp("---- [ E ] - global.b2link.request.get__member_session$checkSessionAndReqMongoDB__CallBack():void----------"),global.TtwLog.timeStamp("\n")};

//D:/_/b2link/request/global.b2link.request.get__member_session$checkSessionAuthorityAndReqMongoDB_QueryObj__CallBack.js;
global.b2link.request.get__member_session$checkSessionAuthorityAndReqMongoDB_QueryObj__CallBack=function(e,o,l,r,n,b){global.TtwLog.timeStamp("\n"),global.TtwLog.timeStamp("---- [ S ] - global.b2link.request.get__member_session$checkSessionAuthorityAndReqMongoDB_QueryObj__CallBack():void----------");var s,i=global.server;if(global.mongodb.dbjs.isProhibitedSyntaxFromQuery(n.q,n.nm_db,n.nm_col))return global.TtwLog.error("[ ERROR ] - Query에 금지된 구문이 존재 한다."),void global.b2link.response.send_200_False(e,o);if("member"!=n.nm_db&&"_authority_matrix"!=n.nm_col){if(global.mongodb.dbjs.isProhibitedSyntaxFromQuery(n.q,n.nm_db,n.nm_col))return global.TtwLog.error("[ ERROR ] - Query에 금지된 구문이 존재 한다."),void global.b2link.response.send_200_False(e,o);s=global.mongodb.dbjs.getCRUDStatusFromQuery(n.q,n.nm_db,n.nm_col)}else{if(global.mongodb.dbjs.isProhibitedSyntaxFromQuery(n.q,n.nm_db,n.nm_col))return global.TtwLog.error("[ ERROR ] - Query에 금지된 구문이 존재 한다."),void global.b2link.response.send_200_False(e,o);s="O"}global.b2link.request.get(global.b2link.url.getServerURLByServers("session_server")+"/member/session/check_sessionAndAuthority?sid="+l.sid+"&SCODE="+l.SCODE+"&queryCRUDStatus="+s+"&nm_db="+n.nm_db+"&nm_col="+n.nm_col,function(s){if(0==global.b2link.response.getResultStatus(s)){if(global.b2link_service.STATIC.CONST.RESPONSE_CODE.AUTHENTICATION_FAILED==s){var t={r:s,d:n.nm_db+"."+n.nm_col};return global.b2link.response.send_200_JSON(e,o,t),void global.b2link_router.STATIC.REQUEST_COUNT.M1()}return global.b2link.response.send_200_False(e,o),void global.b2link_router.STATIC.REQUEST_COUNT.M1()}l.db=r,l.q=n.q,global.b2link_router.STATIC.REQUEST_COUNT.P1(),i.req_DB(e,o,l,function(l,r){b(e,o,l,r)}),global.b2link_router.STATIC.REQUEST_COUNT.M1()},e.headers),global.TtwLog.timeStamp("---- [ E ] - global.b2link.request.get__member_session$checkSessionAuthorityAndReqMongoDB_QueryObj__CallBack():void----------"),global.TtwLog.timeStamp("\n")};

//D:/_/b2link/request/global.b2link.request.get__member_session$checkSessionAuthorityAndReqMongoDB__CallBack.js;
global.b2link.request.get__member_session$checkSessionAuthorityAndReqMongoDB__CallBack=function(e,o,l,r,s,n){global.TtwLog.timeStamp("\n"),global.TtwLog.timeStamp("---- [ S ] - global.b2link.request.get__member_session$checkSessionAuthorityAndReqMongoDB__CallBack():void----------");var t,i=global.server,b=global.server.getURLParse(e.url),a=b.pathname.split("/"),g=a[1],_=a[2];if(global.mongodb.dbjs.isProhibitedSyntaxFromQuery(s,g,_))return global.TtwLog.error("[ ERROR ] - Query에 금지된 구문이 존재 한다."),void global.b2link.response.send_200_False(e,o);if("member"!=g&&"_authority_matrix"!=_){if(global.mongodb.dbjs.isProhibitedSyntaxFromQuery(s,g,_))return global.TtwLog.error("[ ERROR ] - Query에 금지된 구문이 존재 한다."),void global.b2link.response.send_200_False(e,o);t=global.mongodb.dbjs.getCRUDStatusFromQuery(s,g,_)}else{if(global.mongodb.dbjs.isProhibitedSyntaxFromQuery(s,g,_))return global.TtwLog.error("[ ERROR ] - Query에 금지된 구문이 존재 한다."),void global.b2link.response.send_200_False(e,o);t="O"}global.b2link.request.get(global.b2link.url.getServerURLByServers("session_server")+"/member/session/check_sessionAndAuthority?sid="+l.sid+"&SCODE="+l.SCODE+"&queryCRUDStatus="+t+"&nm_db="+g+"&nm_col="+_,function(t){if(0==global.b2link.response.getResultStatus(t)){if(global.b2link_service.STATIC.CONST.RESPONSE_CODE.AUTHENTICATION_FAILED==t){var b={r:t,d:g+"."+_};return global.b2link.response.send_200_JSON(e,o,b),void global.b2link_router.STATIC.REQUEST_COUNT.M1()}return global.b2link.response.send_200_False(e,o),void global.b2link_router.STATIC.REQUEST_COUNT.M1()}l.db=r,l.q=s,global.b2link_router.STATIC.REQUEST_COUNT.P1(),i.req_DB(e,o,l,function(l,r){n(e,o,l,r)}),global.b2link_router.STATIC.REQUEST_COUNT.M1()},e.headers),global.TtwLog.timeStamp("---- [ E ] - global.b2link.request.get__member_session$checkSessionAuthorityAndReqMongoDB__CallBack():void----------"),global.TtwLog.timeStamp("\n")};

//D:/_/b2link/request/__Backup/global.b2link.request.get__member_session$checkSessionAndReqMongoDB__CallBack.js;
global.b2link.request.get__member_session$checkSessionAndReqMongoDB__CallBack=function(e,l,o,n,t,s){global.TtwLog.timeStamp("\n"),global.TtwLog.timeStamp("---- [ S ] - global.b2link.request.get__member_session$checkSessionAndReqMongoDB__CallBack():void----------");var a=global.server;global.b2link.request.get(global.b2link_router.STATIC.CONFIG.URL.MEMBER.MEMBER_SESSION.CHECK_SESSION+"sid="+o.sid,function(b){return 0==global.b2link.response.getResultStatus(b)?(global.b2link.response.send_200_False(e,l),void global.b2link_router.STATIC.REQUEST_COUNT.M1()):(o.db=n,o.q=t,global.b2link_router.STATIC.REQUEST_COUNT.P1(),a.req_DB(e,l,o,function(o,n){s(e,l,o,n)}),void global.b2link_router.STATIC.REQUEST_COUNT.M1())},e.headers),global.TtwLog.timeStamp("---- [ E ] - global.b2link.request.get__member_session$checkSessionAndReqMongoDB__CallBack():void----------"),global.TtwLog.timeStamp("\n")};

//D:/_/b2link/response/global.b2link.response.getResultStatus.js;
!function(){var r={0:1,2:0,3:0,18:0},t={0:0,1:1,18:0,"false":0,"true":1,"result.r":function(t){return r[t.r]}};global.b2link.response.getResultStatus=function(r){try{if(t.hasOwnProperty(r)){var e=t[r];return global.TtwLog.timeStamp("return r : "+e),e}if(r.hasOwnProperty("r")&&t.hasOwnProperty("result.r")){var e=t["result.r"](r);return global.TtwLog.timeStamp("return r : "+e),e}if(r.hasOwnProperty("state")){var e=t[r.state];return global.TtwLog.timeStamp("return r : "+e),e}}catch(a){global.TtwLog.error("global.b2link.response.getResultStatus Error : "+a)}return r}}();

//D:/_/b2link/router_file/global.b2link.router_file.download.js;
global.b2link.router_file.download=function(l,e,o,i){global.Rh2Log.timeStamp("---- [ S ] - global.b2link.router_file.download():void----------");var o=global.b2link.url.getQueryFromURL_Decode(l.url);global.b2link.request.get__checkSessionToSessionServer(l,e,o.sid,function(n){if(!global.b2link.response.getResultStatus(n))return void global.b2link.response.send_200_False(l,e);var r=global.REQUIRES.fs.existsSync(i);if(!r)return void global.b2link.response.send_200_False__ErrorLog(l,e,o,"file is not exist.");var s={filePath:i,fileNm:o.fileNm,cbFunction:null};global.b2link.response.sendStream_200_File(l,e,s)}),global.Rh2Log.timeStamp("---- [ E ] - global.b2link.router_file.download():void----------")};

//D:/_/b2link/router_file/global.b2link.router_file.downloadAndDelete.js;
try{global.REQUIRE=global.REQUIRE||{};var _fs=require("fs");global.REQUIRE.__defineGetter__("fs",function(){return _fs})}catch(e){}var deleteFile=function(e,l){global.REQUIRES.fs.unlink(l,function(e){global.CSJLog.log("Delete Complete.")})};global.b2link.router_file.downloadAndDelete=function(e,l,o,n){global.Rh2Log.timeStamp("---- [ S ] - global.b2link.router_file.downloadAndDelete():void----------"),global.b2link.request.get__checkSessionToSessionServer(e,l,o.sid,function(i){if(!global.b2link.response.getResultStatus(i))return void global.b2link.response.send_200_False(e,l);var t=global.REQUIRES.fs.existsSync(n);if(!t)return void global.b2link.response.send_200_False__ErrorLog(e,l,o,"file is not exist.");var a={filePath:n,fileNm:o.fileNm,cbFunction:deleteFile};global.b2link.response.sendStream_200_File(e,l,a)}),global.Rh2Log.timeStamp("---- [ E ] - global.b2link.router_file.downloadAndDelete():void----------")};

//D:/_/b2link/router_file/global.b2link.router_file.post_ReceiveData__Base64.js;
global.b2link.router_file.post_ReceiveData__Base64=function(e,a,o){global.TtwLog.timeStamp("---- [ S ] - global.b2link.router_file.post_ReceiveData__Base64():void----------");var l="";e.on("data",function(e){l+=e}),e.on("end",function(){var t=l.indexOf("base64,");if(-1==t)return global.TtwLog.error("global.b2link.router_file.post_ReceiveData__Base64 Error : base64 문자열이 아니다."),void global.b2link.response.send_200_False(e,a);var i=t+7,r=l.substring(0,i);o(e,a,l,r)}),global.TtwLog.timeStamp("---- [ E ] - global.b2link.router_file.post_ReceiveData__Base64():void----------")};

//D:/_/b2link/router_file/global.b2link.router_file.post_ReceiveData__String.js;
global.b2link.router_file.post_ReceiveData__String=function(t,o,i){global.TtwLog.timeStamp("---- [ S ] - global.b2link.router_file.post_ReceiveData__String():void----------");var e="";t.on("data",function(t){e+=t}),t.on("end",function(){i(t,o,e)}),global.TtwLog.timeStamp("---- [ E ] - global.b2link.router_file.post_ReceiveData__String():void----------")};

//D:/_/b2link/router_resource/global.b2link.router_resource._common_FileSend_RootPathAndFilePath.js;
global.b2link.router_resource._common_FileSend_RootPathAndFilePath=function(o,e,l){global.TtwLog.timeStamp("---- [ S ] - global.b2link.router_resource._common_FileSend_RootPathAndFilePath():void----------");var r=global.b2link.url.getQueryFromURL(o.url);global.b2link.request.get__checkSessionToSessionServer(o,e,r.sid,function(n){return n?void global.b2link.response.sendStream_200_File_URI_NCallback(o,e,l,r.filePath):void global.b2link.response.send_200_False__ErrorLog(o,e,r,error)}),global.TtwLog.log("---- [ E ] - global.b2link.router_resource._common_FileSend_RootPathAndFilePath():void----------")};

//D:/_/b2link/server_http/global.b2link.server_http.globalServer__setMode__Dev__FileResCommonPath.js;
global.b2link.server_http.globalServer__setMode__Dev__FileResCommonPath=function(e,t){global.TtwLog.timeStamp("---- [ S ] - global.b2link.server_http.globalServer__setMode__Dev__FileResCommonPath():void----------"),global._$TATIC_CONST_DEBUG&&function(){var e=SUtilHttpServer.__evt_request__APIAndFilePath=SUtilHttpServer.evt_request__APIAndFilePath,t=global.process.cwd()+"/../../Development-Browser-Libraries/WebPage/root/";SUtilHttpServer.evt_request__APIAndFilePath=function(l,_){var r=SUtilHttpServer.getURIFromURL(l.url);return 0==r.indexOf("/js/")?void global.b2link.response.sendStream_200_File_URI_NCallback(l,_,t,r):void e(l,_)}}(),global.TtwLog.timeStamp("---- [ E ] - global.b2link.server_http.globalServer__setMode__Dev__FileResCommonPath():void----------")};

//D:/_/b2link/server_http/global.b2link.server_http.newServer__WebServer.js;
global.b2link.server_http.newServer__WebServer=function(){global.TtwLog.timeStamp("---- [ S ] - global.b2link.server_http.newServer__WebServer():{http.Server}----------");var e=global.Instance.httpServer_API=new global.Lib.Ttw.CLASS.Http.Server.HttpServer_API({instanceKey:"global.Instance.httpServer__API",requestMode:"all"});return e.listen(global._$TATIC_CONST_SERVER_HTTP_PORT,null),e.getQueryFromURL=SUtilHttpServer.getQueryFromURL,e.sendResponse_200_False=function(e,t){SUtilHttpServer.evt_request__httpServer_200_False(e,t)},e.sendResponse_200_True=function(e,t){SUtilHttpServer.evt_request__httpServer_200_True(e,t)},e.sendResponse_200_String=function(e,t,r){SUtilHttpServer.evt_request__httpServer_200_String(e,t,r)},global.b2link.fs.autoLoad_JSs([["JavaScript Import","./js/",{b2link_router:1,b2link_router_external:1,b2link_router_internal:1}]]),global.TtwLog.timeStamp("---- [ E ] - global.b2link.server_http.newServer__WebServer():{http.Server}----------return _;"),e};

//D:/_/b2link/uri/global.b2link.uri.getURIReplaceSharp.js;
global.b2link.uri.getURIReplaceSharp=function(e){return e.replace(/#/gi,"!MzU=!").replace(/&/gi,"!Mzg=!")};

//D:/_/b2link/uri/global.b2link.uri.getURIReplaceSharp__JSON.js;
global.b2link.uri.getURIReplaceSharp__JSON=function(e){return JSON.stringify(e).replace(/#/gi,"!MzU=!").replace(/&/gi,"!Mzg=!")};

//D:/_/b2link/url/global.b2link.url.getServerURLByServers.js;
!function(){var t,r,e={},h={},p={SYS0010_APIServer:["http://211.251.236.148:49320","http://211.251.236.148:49320","http://211.251.236.148:49320"],session_server:["http://211.251.236.148:49320","http://211.251.236.148:49320","http://211.251.236.148:49320"],SYS0015_WebServer:["http://211.251.236.148:49323","http://211.251.236.148:49323","http://211.251.236.148:49323"],webhook_server:["http://211.251.236.148:49320","http://211.251.236.148:49320"]};for(var n in p)t=p[n],r=t.length,h[n]=r,e[n]=SUtilMath.random(0,r,0);global.b2link.url.getServerURLByServers=function(t){!p[t];var r;return h[t]>e[t]?(r=p[t][e[t]],++e[t]):(e[t]=0,r=p[t][e[t]]),r}}();

//D:/_/b2link/util/global.b2link.util.isNull.js;
global.b2link.util.isNull=function(l){return void 0==typeof l||"undefined"==l||null==l||""==l||NaN==l?!0:!1};

//D:/_/b2link/util/global.b2link.util.isUndefined.js;
global.b2link.util.isUndefined=function(n){return void 0==typeof n||"undefined"==n||null==n||NaN==n?!0:!1};

//D:/_/b2link/validation_classType/global.b2link.validation_classType.array.js;
global.b2link.validation_classType.array=function(a){return global.b2link.validation_classType.object(a)&&a.hasOwnProperty("length")?!0:!1};

//D:/_/b2link/validation_classType/global.b2link.validation_classType.boolean.js;
global.b2link.validation_classType["boolean"]=function(o){return"boolean"==typeof o?!0:!1};

//D:/_/b2link/validation_classType/global.b2link.validation_classType.number.js;
global.b2link.validation_classType.number=function(n){return"number"==typeof n?!0:!1};

//D:/_/b2link/validation_classType/global.b2link.validation_classType.object.js;
global.b2link.validation_classType.object=function(o){return"object"==typeof o?!0:!1};

//D:/_/b2link/validation_classType/global.b2link.validation_classType.string.js;
global.b2link.validation_classType.string=function(n){return"string"==typeof n?!0:!1};

//D:/_/b2link/validation_classType/global.b2link.validation_classType.uint.js;
global.b2link.validation_classType.uint=function(n){return global.b2link.validation_classType.number(n)&&n>-1&&-1==n.toString.indexOf(".")?!0:!1};

//D:/_/b2link/validation_mongodb/global.b2link.validation_mongodb._id__string.js;
global.b2link.validation_mongodb._id__string=function(i){return global.b2link.validation_classType.string(i)?!0:!1};

//D:/_/b2link/validation_mongodb/global.b2link.validation_mongodb._id__uint.js;
global.b2link.validation_mongodb._id__uint=function(i){return global.b2link.validation_classType.uint(i)&&999999999>i?!0:!1};

//D:/_/b2link_service/__define/000_define_global.b2link_service.js;
global.b2link_service=global.b2link_service||{};

//D:/_/b2link_service/__define/100_define_global.b2link_service.STATIC.js;
global.b2link_service.STATIC=global.b2link_service.STATIC||{};

//D:/_/b2link_service/__define/101_define_global.b2link_service.STATIC.CONST.js;
global.b2link_service.STATIC.CONST=global.b2link_service.STATIC.CONST||{},global.b2link_service.STATIC.CONST.RESPONSE_CODE=global.b2link_service.STATIC.CONST.RESPONSE_CODE||{},function(){var e=global.b2link_service.STATIC.CONST.RESPONSE_CODE;e.__defineGetter__("REQUEST_FAILED",function(){return 0}),e.__defineGetter__("REQUEST_SUCCESS",function(){return 1}),e.__defineGetter__("BAD_VALUE",function(){return 2}),e.__defineGetter__("HOST_NOT_FOUND",function(){return 7}),e.__defineGetter__("AUTHENTICATION_FAILED",function(){return 18}),e.__defineGetter__("NETWORK_TIMEOUT",function(){return 89}),e.__defineGetter__("OPERATION_FAILED",function(){return 96})}();

//D:/_/mongodb/__define/000_define_global.mongodb.js;
global.mongodb=global.mongodb||{};

//D:/_/mongodb/__define/200_define_global.mongodb.date.js;
global.mongodb.date=global.mongodb.date||{};

//D:/_/mongodb/__define/200_define_global.mongodb.dbjs.js;
global.mongodb.dbjs=global.mongodb.dbjs||{};

//D:/_/mongodb/__define/200_define_global.mongodb.make_query.js;
global.mongodb.make_query=global.mongodb.make_query||{};

//D:/_/mongodb/__define/200_define_global.mongodb.member.js;
global.mongodb.member=global.mongodb.member||{};

//D:/_/mongodb/__define/200_define_global.mongodb.obj.js;
global.mongodb.obj=global.mongodb.obj||{};

//D:/_/mongodb/__define/200_define_global.mongodb.regex.js;
global.mongodb.regex=global.mongodb.regex||{};

//D:/_/mongodb/__define/200_define_global.mongodb.string.js;
global.mongodb.string=global.mongodb.string||{};

//D:/_/mongodb/__define/200_define_global.mongodb.validation.js;
global.mongodb.validation=global.mongodb.validation||{};

//D:/_/mongodb/date/add_arrayDate_day.js;
global.mongodb.date.add_arrayDate_day=function(a,e){RayLog.log("---- [ S ] - global.mongodb.date.add_arrayDate_day():{Object}----------");var t=new Date(a[0],a[1],a[2],a[3],a[4],a[5]);t.setDate(t.getDate()+e);var d=[t.getFullYear(),t.getMonth()+1,t.getDay(),t.getHours(),t.getMinutes(),t.getSeconds()];return RayLog.log("---- [ E ] - global.mongodb.date.add_arrayDate_day():{Object}----------return date;"),d};

//D:/_/mongodb/date/convertDateToNumberInt.js;
global.mongodb.date.convertDateToNumberInt=function(e){if(!e)return{};var n={y:NumberInt(e.y),m:NumberInt(e.m),d:NumberInt(e.d),ho:NumberInt(e.ho),mi:NumberInt(e.mi),se:NumberInt(e.se)};return n};

//D:/_/mongodb/date/getArrayDateFromNewDate_forCd.js;
global.mongodb.date.getArrayDateFromNewDate_forCd=function(){Rh2Log.log("---- [ S ] - global.mongodb.date.getArrayDateFromNewDate_forCd():{Array}----------");var e=new Date,t=[e.getFullYear(),e.getMonth()+1,e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds()];return Rh2Log.log("---- [ E ] - global.mongodb.date.getArrayDateFromNewDate_forCd():{Array}----------return r;"),t};

//D:/_/mongodb/date/getDate__Hyphen__Empty.js;
global.mongodb.date.getDate__Hyphen__Empty=function(){return"-"};

//D:/_/mongodb/date/getDate__Now.js;
global.mongodb.date.getDate__Now=function(){Rh2Log.log("---- [ S ] - global.mongodb.date.getDate__Now():{Object}----------");var e=new Date,t={y:e.getFullYear(),m:e.getMonth()+1,d:e.getDate(),ho:e.getHours(),mi:e.getMinutes(),se:e.getSeconds()};return Rh2Log.log("---- [ E ] - global.mongodb.date.getDate__Now():{Object}----------return date;"),t};

//D:/_/mongodb/date/getDate__Object__Empty.js;
global.mongodb.date.getDate__Object__Empty=function(){return{y:"",m:"",d:"",ho:"",mi:"",se:""}};

//D:/_/mongodb/date/getLeadTime.js;
global.mongodb.date.getLeadTime=function(e,t){Rh2Log.log("---- [ S ] - global.mongodb.date.getLeadTime():{Object}----------");var o={},a=6e4,r=60*a,m=24*r,b=30*m,g=12*b,n=new Date(t.y,t.m-1,t.d,t.ho,t.mi,t.se),l=n.getTime();n.setYear(e.y),n.setMonth(e.m-1),n.setDate(e.d),n.setHours(e.ho,e.mi,e.se);var d=l-n.getTime(),h=1;0>d&&(d=Math.abs(d),h=-1);var u=Math.floor(d/g);d-=u*g;var i=Math.floor(d/b);d-=i*b;var s=Math.floor(d/m);d-=s*m;var v=Math.floor(d/r);d-=v*r;var M=Math.floor(d/a);d-=M*a;var f=Math.floor(d/1e3);return o.y=NumberInt(u*h),o.m=NumberInt(i*h),o.d=NumberInt(s*h),o.ho=NumberInt(v*h),o.mi=NumberInt(M*h),o.se=NumberInt(f*h),Rh2Log.log("---- [ E ] - global.mongodb.date.getLeadTime():{Object}----------return date;"),o};

//D:/_/mongodb/date/getNumberIntDate__Now.js;
global.mongodb.date.getNumberIntDate__Now=function(){Rh2Log.log("---- [ S ] - global.mongodb.date.getNumberIntDate__Now():{Object}----------");var e=new Date,t={y:NumberInt(e.getFullYear()),m:NumberInt(e.getMonth()+1),d:NumberInt(e.getDate()),ho:NumberInt(e.getHours()),mi:NumberInt(e.getMinutes()),se:NumberInt(e.getSeconds())};return Rh2Log.log("---- [ E ] - global.mongodb.date.getNumberIntDate__Now():{Object}----------return date;"),t};

//D:/_/mongodb/date/getObjectDateFromNewDate_forCd.js;
global.mongodb.date.getObjectDateFromNewDate_forCd=function(){CSJLog.log("---- [ S ] - global.mongodb.date.getObjectDateFromNewDate_forCd():{Object}----------");var e=new Date,t={y:NumberInt(e.getFullYear()),m:NumberInt(e.getMonth()+1),d:NumberInt(e.getDate()),ho:NumberInt(e.getHours()),mi:NumberInt(e.getMinutes()),se:NumberInt(e.getSeconds())};return CSJLog.log("---- [ E ] - global.mongodb.date.getObjectDateFromNewDate_forCd():{Object}----------return r;"),t};

//D:/_/mongodb/date/getObjectDateFromNewDate_NumberInt.js;
global.mongodb.date.getObjectDateFromNewDate_NumberInt=function(){var e=new Date,t={y:NumberInt(e.getFullYear()),m:NumberInt(e.getMonth()+1),d:NumberInt(e.getDate()),ho:NumberInt(e.getHours()),mi:NumberInt(e.getMinutes()),se:NumberInt(e.getSeconds())};return e=null,t};

//D:/_/mongodb/date/objDateToNumberIntObjDate.js;
global.mongodb.date.objDateToNumberIntObjDate=function(e){return Rh2Log.log("---- [ S ] - global.mongodb.date.objDateToNumberIntObjDate():{Object}----------"),e.y&&(e.y=NumberInt(e.y)),e.m&&(e.m=NumberInt(e.m)),e.d&&(e.d=NumberInt(e.d)),e.ho?e.ho=NumberInt(e.ho):e.ho=NumberInt(0),e.mi?e.mi=NumberInt(e.mi):e.mi=NumberInt(0),e.se?e.se=NumberInt(e.se):e.se=NumberInt(0),Rh2Log.log("---- [ E ] - global.mongodb.date.objDateToNumberIntObjDate():{Object}----------return date;"),e};

//D:/_/mongodb/date/setNumberIntDateArray.js;
global.mongodb.date.setNumberIntDateArray=function(r){RayLog.log("---- [ S ] - global.mongodb.date.setNumberIntDateArray():{Array}----------");for(var a=0,t=r.length;t>a;++a)r[a]=NumberInt(r[a]);return RayLog.log("---- [ E ] - global.mongodb.date.setNumberIntDateArray():{Array}----------return array_date;"),r};

//D:/_/mongodb/date/setNumberIntDateLeadTime.js;
global.mongodb.date.setNumberIntDateLeadTime=function(e){return Rh2Log.log("---- [ S ] - global.mongodb.date.setNumberIntDateLeadTime():{Object}----------"),e.y?e.y=NumberInt(e.y):e.y=NumberInt(0),e.m?e.m=NumberInt(e.m):e.m=NumberInt(0),e.d?e.d=NumberInt(e.d):e.d=NumberInt(0),e.ho?e.ho=NumberInt(e.ho):e.ho=NumberInt(0),e.mi?e.mi=NumberInt(e.mi):e.mi=NumberInt(0),e.se?e.se=NumberInt(e.se):e.se=NumberInt(0),Rh2Log.log("---- [ E ] - global.mongodb.date.setNumberIntDateLeadTime():{Object}----------return date;"),e};

//D:/_/mongodb/dbjs/getCRUDStatusFromQuery.js;
!function(){var e=["deleteMany","deleteOne","findOneAndDelete","remove"],n=["update","updateMany","updateOne","findOneAndUpdate","findAndModify","findOneAndReplace","replaceOne"],t=["insert","insertMany","insertOne","save"],r=["find","findOne"],f=0,d=0;for(f=0,d=e.length;d>f;++f)e[f]=e[f]+"(";for(f=0,d=n.length;d>f;++f)n[f]=n[f]+"(";for(f=0,d=t.length;d>f;++f)t[f]=t[f]+"(";for(f=0,d=r.length;d>f;++f)r[f]=r[f]+"(";global.mongodb.dbjs.getCRUDStatusFromQuery=function(f,d,l){for(var a="_col$"+l+".",o=0,i=e.length;i>o;++o)if(f.lastIndexOf(a+e[o])>-1)return"_d";for(var o=0,i=n.length;i>o;++o)if(f.lastIndexOf(a+n[o])>-1)return"_u";for(var o=0,i=t.length;i>o;++o)if(f.lastIndexOf(a+t[o])>-1)return"_c";for(var o=0,i=r.length;i>o;++o)if(f.lastIndexOf(a+r[o])>-1)return"_r";return null}}();

//D:/_/mongodb/dbjs/isProhibitedSyntaxFromQuery.js;
!function(){for(var e=["_createWriteConcern","_db","_dbCommand","_dbReadCommand","_distinct","_fullName","_genIndexName","_getIndexesCommand","_getIndexesSystemIndexes","_indexSpec","_makeCommand","_massageObject","_mongo","_parseRemove","_parseUpdate","_printExtraInfo","_shortName","_validateForStorage","_validateObject","_validateRemoveDoc","_validateUpdateDoc","reIndex","renameCollection","runCommand","runReadCommand","drop","dropIndex","dropIndexes","ensureIndex"],n=0,a=e.length;a>n;++n)e[n]=e[n]+"(";global.mongodb.dbjs.isProhibitedSyntaxFromQuery=function(n,a,d){for(var o="_col$"+d+".",r=0,t=e.length;t>r;++r)if(n.lastIndexOf(o+e[r])>-1)return 1;return 0}}();

//D:/_/mongodb/make_query/makeQuery__Array__OR__RegExpPattern__description.js;
global.mongodb.make_query.makeQuery__Array__OR__RegExpPattern__description=function(e){return[{description:makeQuery__RegExpPattern__SymbolString(e)},{description_kr:makeQuery__RegExpPattern__SymbolString(e)},{description_us:makeQuery__RegExpPattern__SymbolString(e)},{description_cn:makeQuery__RegExpPattern__SymbolString(e)}]};

//D:/_/mongodb/make_query/makeQuery__Array__OR__RegExpPattern__nm.js;
global.mongodb.make_query.makeQuery__Array__OR__RegExpPattern__nm=function(_){return[{nm:makeQuery__RegExpPattern__SymbolString(_)},{nm_kr:makeQuery__RegExpPattern__SymbolString(_)},{nm_us:makeQuery__RegExpPattern__SymbolString(_)},{nm_cn:makeQuery__RegExpPattern__SymbolString(_)}]};

//D:/_/mongodb/make_query/makeQuery__Array__OR__RegExpPattern__nm_a.js;
global.mongodb.make_query.makeQuery__Array__OR__RegExpPattern__nm_a=function(_){return[{"nm.a":makeQuery__RegExpPattern__SymbolString(_)},{"nm_kr.a":makeQuery__RegExpPattern__SymbolString(_)},{"nm_us.a":makeQuery__RegExpPattern__SymbolString(_)},{"nm_cn.a":makeQuery__RegExpPattern__SymbolString(_)}]};

//D:/_/mongodb/make_query/makeQuery__RegExpPattern__SymbolString.js;
global.mongodb.make_query.makeQuery__RegExpPattern__SymbolString=function(e){return-1!=e.indexOf("(")&&(e=e.replace(/\(/gi,"\\(")),-1!=e.indexOf(")")&&(e=e.replace(/\)/gi,"\\)")),-1!=e.indexOf("[")&&(e=e.replace(/\[/gi,"\\[")),-1!=e.indexOf("[")&&(e=e.replace(/\]/gi,"\\]")),{$regex:"(.*"+e+")"}};

//D:/_/mongodb/make_query/makeQuery__RegExpPattern__SymbolString_Options.js;
global.mongodb.make_query.makeQuery__RegExpPattern__SymbolString_Options=function(e,i){return-1!=e.indexOf("(")&&(e=e.replace(/\(/gi,"\\(")),-1!=e.indexOf(")")&&(e=e.replace(/\)/gi,"\\)")),-1!=e.indexOf("[")&&(e=e.replace(/\[/gi,"\\[")),-1!=e.indexOf("[")&&(e=e.replace(/\]/gi,"\\]")),{$regex:"(.*"+e+")",$options:i}};

//D:/_/mongodb/member/delete_mpw__Array.js;
global.mongodb.member.delete_mpw__Array=function(e){if(e&&e[0]&&e[0].hasOwnProperty("mpw"))for(var r,m=0,o=e.length;o>m;++m)r=e[m],delete r.mpw};

//D:/_/mongodb/obj/check_RequiredValueHasOwnProperty.js;
global.mongodb.obj.check_RequiredValueHasOwnProperty=function(r,e){for(var n=0,o=e.length;o>n;++n)if(!r.hasOwnProperty(e[n]))return 0;return 1};

//D:/_/mongodb/string/lpad.js;
global.mongodb.string.lpad=function(n,g){return n+="",n.length>=g?n:new Array(g-n.length+1).join("0")+n};

//D:/_/mongodb/validation/integerToNumberInt.js;
global.mongodb.validation.integerToNumberInt=function(o){if(!o||"object"!=o.constructor.name.toLowerCase()&&"array"!=o.constructor.name.toLowerCase())return void cparkLog.log("not valid type");for(i in o)(o[i]||0==o[i])&&("number"==o[i].constructor.name.toLowerCase()&&Number.isInteger(o[i])?o[i]=NumberInt(o[i]):"object"==o[i].constructor.name.toLowerCase()?integerToNumberInt(o[i]):"array"==o[i].constructor.name.toLowerCase()&&integerToNumberInt(o[i]))};
