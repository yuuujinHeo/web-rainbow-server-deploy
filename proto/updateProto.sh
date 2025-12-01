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

TARGET="$1"

if [ -n "$TARGET" ]; then
  # 확장자 안 붙이면 .proto 붙여줌
  case "$TARGET" in
    *.proto) FILE="$TARGET" ;;
    *)       FILE="$TARGET.proto" ;;
  esac

  if [ ! -f "$FILE" ]; then
    echo "Error: proto file '$FILE' not found." >&2
    exit 1
  fi

  FILES="$FILE"
else
  FILES=*.proto
fi

for FILE in $FILES; do
  # 아무 .proto 도 없을 때 방어 (인자 없는 경우)
  if [ "$FILE" = '*.proto' ]; then
    echo "Error: no .proto files found in current directory." >&2
    exit 1
  fi
  
  BASENAME=$(basename "$FILE" .proto)
  echo "$FILE";
  echo "$PROTO_OUT_PATH/$BASENAME";

  protoc --experimental_allow_proto3_optional --plugin=protoc-gen-ts_proto=$PROTO_PATH --ts_proto_out=$PROTO_OUT_PATH/$BASENAME --ts_proto_opt=nestJs=true,addGrpcMetadata=true ./$FILE
done
