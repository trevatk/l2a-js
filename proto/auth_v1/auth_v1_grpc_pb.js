// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_auth_v1_auth_v1_pb = require('../../proto/auth_v1/auth_v1_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_auth_v1_NewUser(arg) {
  if (!(arg instanceof proto_auth_v1_auth_v1_pb.NewUser)) {
    throw new Error('Expected argument of type auth_v1.NewUser');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_v1_NewUser(buffer_arg) {
  return proto_auth_v1_auth_v1_pb.NewUser.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_v1_User(arg) {
  if (!(arg instanceof proto_auth_v1_auth_v1_pb.User)) {
    throw new Error('Expected argument of type auth_v1.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_v1_User(buffer_arg) {
  return proto_auth_v1_auth_v1_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_v1_UserLookup(arg) {
  if (!(arg instanceof proto_auth_v1_auth_v1_pb.UserLookup)) {
    throw new Error('Expected argument of type auth_v1.UserLookup');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_v1_UserLookup(buffer_arg) {
  return proto_auth_v1_auth_v1_pb.UserLookup.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_v1_Users(arg) {
  if (!(arg instanceof proto_auth_v1_auth_v1_pb.Users)) {
    throw new Error('Expected argument of type auth_v1.Users');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_v1_Users(buffer_arg) {
  return proto_auth_v1_auth_v1_pb.Users.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var Auth_V1Service = exports.Auth_V1Service = {
  createUser: {
    path: '/auth_v1.Auth_V1/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: proto_auth_v1_auth_v1_pb.NewUser,
    responseType: proto_auth_v1_auth_v1_pb.User,
    requestSerialize: serialize_auth_v1_NewUser,
    requestDeserialize: deserialize_auth_v1_NewUser,
    responseSerialize: serialize_auth_v1_User,
    responseDeserialize: deserialize_auth_v1_User,
  },
  getUser: {
    path: '/auth_v1.Auth_V1/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: proto_auth_v1_auth_v1_pb.UserLookup,
    responseType: proto_auth_v1_auth_v1_pb.User,
    requestSerialize: serialize_auth_v1_UserLookup,
    requestDeserialize: deserialize_auth_v1_UserLookup,
    responseSerialize: serialize_auth_v1_User,
    responseDeserialize: deserialize_auth_v1_User,
  },
  getAllUsers: {
    path: '/auth_v1.Auth_V1/GetAllUsers',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: proto_auth_v1_auth_v1_pb.Users,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_auth_v1_Users,
    responseDeserialize: deserialize_auth_v1_Users,
  },
  updateUser: {
    path: '/auth_v1.Auth_V1/UpdateUser',
    requestStream: false,
    responseStream: false,
    requestType: proto_auth_v1_auth_v1_pb.User,
    responseType: proto_auth_v1_auth_v1_pb.User,
    requestSerialize: serialize_auth_v1_User,
    requestDeserialize: deserialize_auth_v1_User,
    responseSerialize: serialize_auth_v1_User,
    responseDeserialize: deserialize_auth_v1_User,
  },
  deleteUser: {
    path: '/auth_v1.Auth_V1/DeleteUser',
    requestStream: false,
    responseStream: false,
    requestType: proto_auth_v1_auth_v1_pb.UserLookup,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_auth_v1_UserLookup,
    requestDeserialize: deserialize_auth_v1_UserLookup,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.Auth_V1Client = grpc.makeGenericClientConstructor(Auth_V1Service);
