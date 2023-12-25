/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "alice.checkers.v1";

/** Params defines the parameters of the module. */
export interface Params {}

/**
 * Counter defines a counter object.
 * It is used only for genesis purposes. Collections does not need to use it.
 */
export interface Counter {
  /** count defines the count of the counter. */
  count: Long;
  /** address defines the address that is associated with the count. */
  address: string;
}

/** GenesisState is the state that must be provided at genesis. */
export interface GenesisState {
  params?: Params;
  indexedStoredGameList: IndexedStoredGame[];
}

export interface StoredGame {
  board: string;
  turn: string;
  black: string;
  red: string;
}

export interface IndexedStoredGame {
  index: string;
  storedGame?: StoredGame;
}

function createBaseParams(): Params {
  return {};
}

export const Params = {
  encode(_: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): Params {
    return {};
  },

  toJSON(_: Params): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(_: I): Params {
    const message = createBaseParams();
    return message;
  },
};

function createBaseCounter(): Counter {
  return { count: Long.UZERO, address: "" };
}

export const Counter = {
  encode(
    message: Counter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.count.isZero()) {
      writer.uint32(8).uint64(message.count);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Counter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCounter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.count = reader.uint64() as Long;
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Counter {
    return {
      count: isSet(object.count) ? Long.fromValue(object.count) : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: Counter): unknown {
    const obj: any = {};
    message.count !== undefined &&
      (obj.count = (message.count || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Counter>, I>>(object: I): Counter {
    const message = createBaseCounter();
    message.count =
      object.count !== undefined && object.count !== null
        ? Long.fromValue(object.count)
        : Long.UZERO;
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseGenesisState(): GenesisState {
  return { params: undefined, indexedStoredGameList: [] };
}

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.indexedStoredGameList) {
      IndexedStoredGame.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.indexedStoredGameList.push(
            IndexedStoredGame.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      indexedStoredGameList: Array.isArray(object?.indexedStoredGameList)
        ? object.indexedStoredGameList.map((e: any) =>
            IndexedStoredGame.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.indexedStoredGameList) {
      obj.indexedStoredGameList = message.indexedStoredGameList.map((e) =>
        e ? IndexedStoredGame.toJSON(e) : undefined
      );
    } else {
      obj.indexedStoredGameList = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I
  ): GenesisState {
    const message = createBaseGenesisState();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    message.indexedStoredGameList =
      object.indexedStoredGameList?.map((e) =>
        IndexedStoredGame.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseStoredGame(): StoredGame {
  return { board: "", turn: "", black: "", red: "" };
}

export const StoredGame = {
  encode(
    message: StoredGame,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.board !== "") {
      writer.uint32(10).string(message.board);
    }
    if (message.turn !== "") {
      writer.uint32(18).string(message.turn);
    }
    if (message.black !== "") {
      writer.uint32(26).string(message.black);
    }
    if (message.red !== "") {
      writer.uint32(34).string(message.red);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoredGame {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoredGame();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.board = reader.string();
          break;
        case 2:
          message.turn = reader.string();
          break;
        case 3:
          message.black = reader.string();
          break;
        case 4:
          message.red = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoredGame {
    return {
      board: isSet(object.board) ? String(object.board) : "",
      turn: isSet(object.turn) ? String(object.turn) : "",
      black: isSet(object.black) ? String(object.black) : "",
      red: isSet(object.red) ? String(object.red) : "",
    };
  },

  toJSON(message: StoredGame): unknown {
    const obj: any = {};
    message.board !== undefined && (obj.board = message.board);
    message.turn !== undefined && (obj.turn = message.turn);
    message.black !== undefined && (obj.black = message.black);
    message.red !== undefined && (obj.red = message.red);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StoredGame>, I>>(
    object: I
  ): StoredGame {
    const message = createBaseStoredGame();
    message.board = object.board ?? "";
    message.turn = object.turn ?? "";
    message.black = object.black ?? "";
    message.red = object.red ?? "";
    return message;
  },
};

function createBaseIndexedStoredGame(): IndexedStoredGame {
  return { index: "", storedGame: undefined };
}

export const IndexedStoredGame = {
  encode(
    message: IndexedStoredGame,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.storedGame !== undefined) {
      StoredGame.encode(message.storedGame, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IndexedStoredGame {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexedStoredGame();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.storedGame = StoredGame.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IndexedStoredGame {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      storedGame: isSet(object.storedGame)
        ? StoredGame.fromJSON(object.storedGame)
        : undefined,
    };
  },

  toJSON(message: IndexedStoredGame): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.storedGame !== undefined &&
      (obj.storedGame = message.storedGame
        ? StoredGame.toJSON(message.storedGame)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IndexedStoredGame>, I>>(
    object: I
  ): IndexedStoredGame {
    const message = createBaseIndexedStoredGame();
    message.index = object.index ?? "";
    message.storedGame =
      object.storedGame !== undefined && object.storedGame !== null
        ? StoredGame.fromPartial(object.storedGame)
        : undefined;
    return message;
  },
};

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
