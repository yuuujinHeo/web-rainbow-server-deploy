#!/bin/sh

# sudo apt install -y protobuf-compiler
# pnpm install @grpc/grpc-js @grpc/proto-loader ts-proto

ROOT_PATH=$(dirname "$(pwd)");

case "$OSTYPE" in
  msys*|win32*|cygwin*)
    PROTO_PATH="$ROOT_PATH/node_modules/.bin/protoc-gen-ts_proto.cmd"
    ;;
  *)
    PROTO_PATH="$ROOT_PATH/node_modules/.bin/protoc-gen-ts_proto"
    ;;
esac

PROTO_OUT_PATH="$ROOT_PATH/libs/common/src/grpc/proto/";

for FILE in *.proto; do
  BASENAME=$(basename "$FILE" .proto)
  echo "$FILE";
  echo "$PROTO_OUT_PATH/$BASENAME";

  protoc --experimental_allow_proto3_optional --plugin=protoc-gen-ts_proto=$PROTO_PATH --ts_proto_out=$PROTO_OUT_PATH/$BASENAME --ts_proto_opt=nestJs=true,addGrpcMetadata=true ./$FILE
done
