var server = require ("./server");
var router = require("./router");
var handler = require("./requestHandler");
var handle ={};
handle ["/start"] = handler.start;
handle ["/"] = handler.start;
handle ["/upload"] = handler.upload;
server.start(router.route,handle);
