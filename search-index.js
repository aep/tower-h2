var searchIndex = {};
searchIndex["tower_h2"] = {"doc":"","items":[[3,"BoxBody","tower_h2","Dynamic `Send` body object.",null,null],[3,"UnsyncBoxBody","","Dynamic `!Send` body object.",null,null],[3,"RecvBody","","Allows a stream to be read from the remote.",null,null],[3,"Data","","",null,null],[0,"client","","",null,null],[3,"Background","tower_h2::client","Task that performs background tasks for a client.",null,null],[3,"Connect","","Establishes an H2 client connection.",null,null],[3,"ConnectFuture","","Completes with a Connection when the H2 connection has been initialized.",null,null],[3,"Connection","","Exposes a request/response API on an h2 client connection..",null,null],[3,"Handshake","","In progress HTTP/2.0 client handshake.",null,null],[3,"ResponseFuture","","Drives the sending of a request (and its body) until a response is received (i.e. the initial HEADERS or RESET frames sent from the remote).",null,null],[3,"Error","","Errors produced by client `Connection` calls.",null,null],[4,"ConnectError","","Error produced when establishing an H2 client connection.",null,null],[13,"Connect","","An error occurred when attempting to establish the underlying session layer.",0,null],[13,"Handshake","","An error occurred while performing the HTTP/2.0 handshake.",0,null],[4,"HandshakeError","","Error produced when performing an HTTP/2.0 handshake.",null,null],[13,"Proto","","An error occurred when attempting to perform the HTTP/2.0 handshake.",1,null],[13,"Execute","","An error occured when attempting to execute a worker task",1,null],[11,"poll","","",2,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Create a new `Connect`.",3,{"inputs":[{"name":"c"},{"name":"builder"},{"name":"e"}],"output":{"name":"self"}}],[11,"new_service","","Obtains a Connection on a single plaintext h2 connection to a remote.",3,null],[11,"poll","","",4,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",0,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"cause","","",0,{"inputs":[{"name":"self"}],"output":{"generics":["error"],"name":"option"}}],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"handshake","","Perform the HTTP/2.0 handshake, yielding a `Connection` on completion.",6,{"inputs":[{"name":"t"},{"name":"e"}],"output":{"name":"handshake"}}],[11,"clone","","",6,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"poll_ready","","",6,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"call","","",6,null],[11,"poll","","",7,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"poll","","",8,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"reason","","",5,{"inputs":[{"name":"self"}],"output":{"generics":["reason"],"name":"option"}}],[11,"from","","",5,{"inputs":[{"name":"error"}],"output":{"name":"self"}}],[11,"from","","",5,{"inputs":[{"name":"reason"}],"output":{"name":"self"}}],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"cause","","",5,{"inputs":[{"name":"self"}],"output":{"generics":["error"],"name":"option"}}],[11,"description","","",5,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"from","","",1,{"inputs":[{"name":"error"}],"output":{"name":"self"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"cause","","",1,{"inputs":[{"name":"self"}],"output":{"generics":["error"],"name":"option"}}],[11,"description","","",1,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[0,"server","tower_h2","",null,null],[3,"Server","tower_h2::server","Attaches service implementations to h2 connections.",null,null],[3,"Connection","","Drives connection-level I/O .",null,null],[3,"Background","","Task used to process requests",null,null],[4,"Error","","Error produced by a `Connection`.",null,null],[13,"Handshake","","Error produced during the HTTP/2.0 handshake.",9,null],[13,"Protocol","","Error produced by the HTTP/2.0 stream",9,null],[13,"NewService","","Error produced when obtaining the service",9,null],[13,"Service","","Error produced by the service",9,null],[13,"Execute","","Error produced when attempting to spawn a task",9,null],[8,"Modify","","Modify a received request",null,null],[10,"modify","","Modify a request before calling the service.",10,{"inputs":[{"name":"self"},{"name":"request"}],"output":null}],[11,"new","","",11,{"inputs":[{"name":"s"},{"name":"builder"},{"name":"e"}],"output":{"name":"self"}}],[11,"serve","","Produces a future that is satisfied once the h2 connection has been initialized.",11,{"inputs":[{"name":"self"},{"name":"t"}],"output":{"name":"connection"}}],[11,"serve_modified","","",11,{"inputs":[{"name":"self"},{"name":"t"},{"name":"f"}],"output":{"name":"connection"}}],[11,"clone","","",11,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"poll","","",12,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"graceful_shutdown","","Start an HTTP2 graceful shutdown.",12,{"inputs":[{"name":"self"}],"output":null}],[11,"poll","","",13,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"fmt","","",9,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",9,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"cause","","",9,{"inputs":[{"name":"self"}],"output":{"generics":["error"],"name":"option"}}],[11,"description","","",9,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"new","tower_h2","Create a new `BoxBody` backed by `inner`.",14,{"inputs":[{"generics":["body"],"name":"box"}],"output":{"name":"self"}}],[11,"is_end_stream","","",14,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"poll_data","","",14,{"inputs":[{"name":"self"}],"output":{"generics":["option","error"],"name":"poll"}}],[11,"poll_trailers","","",14,{"inputs":[{"name":"self"}],"output":{"generics":["option","error"],"name":"poll"}}],[11,"fmt","","",14,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Create a new `UnsyncBoxBody` backed by `inner`.",15,{"inputs":[{"generics":["body"],"name":"box"}],"output":{"name":"self"}}],[11,"is_end_stream","","",15,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"poll_data","","",15,{"inputs":[{"name":"self"}],"output":{"generics":["option","error"],"name":"poll"}}],[11,"poll_trailers","","",15,{"inputs":[{"name":"self"}],"output":{"generics":["option","error"],"name":"poll"}}],[11,"fmt","","",15,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",16,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"default","","",16,{"inputs":[],"output":{"name":"recvbody"}}],[11,"fmt","","",17,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"is_end_stream","","",16,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"poll_data","","",16,{"inputs":[{"name":"self"}],"output":{"generics":["option","error"],"name":"poll"}}],[11,"poll_trailers","","",16,{"inputs":[{"name":"self"}],"output":{"generics":["option","error"],"name":"poll"}}],[11,"remaining","","",17,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"bytes","","",17,null],[11,"advance","","",17,{"inputs":[{"name":"self"},{"name":"usize"}],"output":null}],[11,"drop","","",17,{"inputs":[{"name":"self"}],"output":null}],[8,"Body","","A generic h2 client/server request/response body.",null,null],[16,"Data","","The body chunk type",18,null],[11,"is_end_stream","","Returns `true` when the end of stream has been reached.",18,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[10,"poll_data","","Polls a stream of data.",18,{"inputs":[{"name":"self"}],"output":{"generics":["option","error"],"name":"poll"}}],[11,"poll_trailers","","Returns possibly one `HeaderMap` for trailers.",18,{"inputs":[{"name":"self"}],"output":{"generics":["option","error"],"name":"poll"}}],[8,"HttpService","","An HTTP service",null,null],[16,"RequestBody","","Request payload.",19,null],[16,"ResponseBody","","Response payload.",19,null],[16,"Error","","Errors produced by the service.",19,null],[16,"Future","","The future response value.",19,null],[10,"poll_ready","","Returns `Ready` when the service is able to process requests.",19,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[10,"call","","Process the request and return the response asynchronously.",19,null],[11,"lift","","Wrap the HttpService so that it implements tower_service::Service directly.",19,{"inputs":[{"name":"self"}],"output":{"name":"liftservice"}}],[11,"lift_ref","","Same as `lift` but operates on an HttpService reference.",19,{"inputs":[{"name":"self"}],"output":{"name":"liftserviceref"}}],[11,"is_end_stream","","Returns `true` when the end of stream has been reached.",18,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"poll_trailers","","Returns possibly one `HeaderMap` for trailers.",18,{"inputs":[{"name":"self"}],"output":{"generics":["option","error"],"name":"poll"}}],[11,"lift","","Wrap the HttpService so that it implements tower_service::Service directly.",19,{"inputs":[{"name":"self"}],"output":{"name":"liftservice"}}],[11,"lift_ref","","Same as `lift` but operates on an HttpService reference.",19,{"inputs":[{"name":"self"}],"output":{"name":"liftserviceref"}}]],"paths":[[4,"ConnectError"],[4,"HandshakeError"],[3,"Background"],[3,"Connect"],[3,"ConnectFuture"],[3,"Error"],[3,"Connection"],[3,"ResponseFuture"],[3,"Handshake"],[4,"Error"],[8,"Modify"],[3,"Server"],[3,"Connection"],[3,"Background"],[3,"BoxBody"],[3,"UnsyncBoxBody"],[3,"RecvBody"],[3,"Data"],[8,"Body"],[8,"HttpService"]]};
initSearch(searchIndex);