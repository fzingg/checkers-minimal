/* eslint-disable */
import { StoredGame } from "./types";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "alice.checkers.v1";

/**
 * QueryGetGameRequest is the request type for the Query/GetGame RPC
 * method.
 */
export interface QueryGetGameRequest {
  /** index defines the index of the game to retrieve. */
  index: string;
}

/**
 * QueryGetGameResponse is the response type for the Query/GetGame RPC
 * method.
 */
export interface QueryGetGameResponse {
  /** Game defines the game at the requested index. */
  Game?: StoredGame;
}

function createBaseQueryGetGameRequest(): QueryGetGameRequest {
  return { index: "" };
}

export const QueryGetGameRequest = {
  encode(
    message: QueryGetGameRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetGameRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetGameRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetGameRequest {
    return {
      index: isSet(object.index) ? String(object.index) : "",
    };
  },

  toJSON(message: QueryGetGameRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetGameRequest>, I>>(
    object: I
  ): QueryGetGameRequest {
    const message = createBaseQueryGetGameRequest();
    message.index = object.index ?? "";
    return message;
  },
};

function createBaseQueryGetGameResponse(): QueryGetGameResponse {
  return { Game: undefined };
}

export const QueryGetGameResponse = {
  encode(
    message: QueryGetGameResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.Game !== undefined) {
      StoredGame.encode(message.Game, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetGameResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetGameResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Game = StoredGame.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetGameResponse {
    return {
      Game: isSet(object.Game) ? StoredGame.fromJSON(object.Game) : undefined,
    };
  },

  toJSON(message: QueryGetGameResponse): unknown {
    const obj: any = {};
    message.Game !== undefined &&
      (obj.Game = message.Game ? StoredGame.toJSON(message.Game) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetGameResponse>, I>>(
    object: I
  ): QueryGetGameResponse {
    const message = createBaseQueryGetGameResponse();
    message.Game =
      object.Game !== undefined && object.Game !== null
        ? StoredGame.fromPartial(object.Game)
        : undefined;
    return message;
  },
};

/** Query defines the module Query service. */
export interface Query {
  /** GetGame returns the game at the requested index. */
  GetGame(request: QueryGetGameRequest): Promise<QueryGetGameResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetGame = this.GetGame.bind(this);
  }
  GetGame(request: QueryGetGameRequest): Promise<QueryGetGameResponse> {
    const data = QueryGetGameRequest.encode(request).finish();
    const promise = this.rpc.request(
      "alice.checkers.v1.Query",
      "GetGame",
      data
    );
    return promise.then((data) =>
      QueryGetGameResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
