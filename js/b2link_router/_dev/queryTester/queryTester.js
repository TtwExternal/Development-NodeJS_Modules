(function(e,o){if(!global.b2link.ip.adminCheckAvailable__http$ClientRequest(e,o))return global.TtwLog.error("!!!!!!!!!! Warning !!!!!!!!!!"),global.TtwLog.error("IP/Port : "+e.client.remoteAddress+":"+e.client.remotePort),global.TtwLog.error("!!!!!!!!!! Warning !!!!!!!!!!"),void global.b2link.response.send_404(e,o);var r=(global.b2link.url.getQueryFromURL(e.url),"");e.on("data",function(e){r+=e}),e.on("end",function(){global.b2link.response.setHeaders__b2ker(o),global.server.req_DB(e,o,{db:"admin",q:r},function(r,l){return r?void global.b2link.response.send_200_JSON(e,o,r):(global.mongodb.member.delete_mpw__Array(l),void global.b2link.response.send_200_JSON(e,o,l))})})});