
const messages = require('./proto/auth_v1/auth_v1_pb');
var services = require('./proto/auth_v1/auth_v1_grpc_pb');

var grpc = require('@grpc/grpc-js');


function main() {
    
    var client = new services.Auth_V1Client("localhost:50051", grpc.credentials.createInsecure());
}

main();





