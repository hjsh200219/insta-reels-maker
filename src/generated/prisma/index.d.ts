
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ReelRequest
 * 
 */
export type ReelRequest = $Result.DefaultSelection<Prisma.$ReelRequestPayload>
/**
 * Model ImageDescription
 * 
 */
export type ImageDescription = $Result.DefaultSelection<Prisma.$ImageDescriptionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ReelRequests
 * const reelRequests = await prisma.reelRequest.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ReelRequests
   * const reelRequests = await prisma.reelRequest.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.reelRequest`: Exposes CRUD operations for the **ReelRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReelRequests
    * const reelRequests = await prisma.reelRequest.findMany()
    * ```
    */
  get reelRequest(): Prisma.ReelRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.imageDescription`: Exposes CRUD operations for the **ImageDescription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImageDescriptions
    * const imageDescriptions = await prisma.imageDescription.findMany()
    * ```
    */
  get imageDescription(): Prisma.ImageDescriptionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ReelRequest: 'ReelRequest',
    ImageDescription: 'ImageDescription'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "reelRequest" | "imageDescription"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ReelRequest: {
        payload: Prisma.$ReelRequestPayload<ExtArgs>
        fields: Prisma.ReelRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReelRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReelRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelRequestPayload>
          }
          findFirst: {
            args: Prisma.ReelRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReelRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelRequestPayload>
          }
          findMany: {
            args: Prisma.ReelRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelRequestPayload>[]
          }
          create: {
            args: Prisma.ReelRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelRequestPayload>
          }
          createMany: {
            args: Prisma.ReelRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReelRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelRequestPayload>[]
          }
          delete: {
            args: Prisma.ReelRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelRequestPayload>
          }
          update: {
            args: Prisma.ReelRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelRequestPayload>
          }
          deleteMany: {
            args: Prisma.ReelRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReelRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReelRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelRequestPayload>[]
          }
          upsert: {
            args: Prisma.ReelRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReelRequestPayload>
          }
          aggregate: {
            args: Prisma.ReelRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReelRequest>
          }
          groupBy: {
            args: Prisma.ReelRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReelRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReelRequestCountArgs<ExtArgs>
            result: $Utils.Optional<ReelRequestCountAggregateOutputType> | number
          }
        }
      }
      ImageDescription: {
        payload: Prisma.$ImageDescriptionPayload<ExtArgs>
        fields: Prisma.ImageDescriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageDescriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageDescriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageDescriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageDescriptionPayload>
          }
          findFirst: {
            args: Prisma.ImageDescriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageDescriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageDescriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageDescriptionPayload>
          }
          findMany: {
            args: Prisma.ImageDescriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageDescriptionPayload>[]
          }
          create: {
            args: Prisma.ImageDescriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageDescriptionPayload>
          }
          createMany: {
            args: Prisma.ImageDescriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageDescriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageDescriptionPayload>[]
          }
          delete: {
            args: Prisma.ImageDescriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageDescriptionPayload>
          }
          update: {
            args: Prisma.ImageDescriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageDescriptionPayload>
          }
          deleteMany: {
            args: Prisma.ImageDescriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageDescriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageDescriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageDescriptionPayload>[]
          }
          upsert: {
            args: Prisma.ImageDescriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageDescriptionPayload>
          }
          aggregate: {
            args: Prisma.ImageDescriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImageDescription>
          }
          groupBy: {
            args: Prisma.ImageDescriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageDescriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageDescriptionCountArgs<ExtArgs>
            result: $Utils.Optional<ImageDescriptionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    reelRequest?: ReelRequestOmit
    imageDescription?: ImageDescriptionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ReelRequestCountOutputType
   */

  export type ReelRequestCountOutputType = {
    images: number
  }

  export type ReelRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | ReelRequestCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * ReelRequestCountOutputType without action
   */
  export type ReelRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelRequestCountOutputType
     */
    select?: ReelRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReelRequestCountOutputType without action
   */
  export type ReelRequestCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageDescriptionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ReelRequest
   */

  export type AggregateReelRequest = {
    _count: ReelRequestCountAggregateOutputType | null
    _min: ReelRequestMinAggregateOutputType | null
    _max: ReelRequestMaxAggregateOutputType | null
  }

  export type ReelRequestMinAggregateOutputType = {
    id: string | null
    title: string | null
    instagramUrl: string | null
    referenceUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReelRequestMaxAggregateOutputType = {
    id: string | null
    title: string | null
    instagramUrl: string | null
    referenceUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReelRequestCountAggregateOutputType = {
    id: number
    title: number
    instagramUrl: number
    referenceUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReelRequestMinAggregateInputType = {
    id?: true
    title?: true
    instagramUrl?: true
    referenceUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReelRequestMaxAggregateInputType = {
    id?: true
    title?: true
    instagramUrl?: true
    referenceUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReelRequestCountAggregateInputType = {
    id?: true
    title?: true
    instagramUrl?: true
    referenceUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReelRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReelRequest to aggregate.
     */
    where?: ReelRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReelRequests to fetch.
     */
    orderBy?: ReelRequestOrderByWithRelationInput | ReelRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReelRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReelRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReelRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReelRequests
    **/
    _count?: true | ReelRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReelRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReelRequestMaxAggregateInputType
  }

  export type GetReelRequestAggregateType<T extends ReelRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateReelRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReelRequest[P]>
      : GetScalarType<T[P], AggregateReelRequest[P]>
  }




  export type ReelRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReelRequestWhereInput
    orderBy?: ReelRequestOrderByWithAggregationInput | ReelRequestOrderByWithAggregationInput[]
    by: ReelRequestScalarFieldEnum[] | ReelRequestScalarFieldEnum
    having?: ReelRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReelRequestCountAggregateInputType | true
    _min?: ReelRequestMinAggregateInputType
    _max?: ReelRequestMaxAggregateInputType
  }

  export type ReelRequestGroupByOutputType = {
    id: string
    title: string
    instagramUrl: string
    referenceUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: ReelRequestCountAggregateOutputType | null
    _min: ReelRequestMinAggregateOutputType | null
    _max: ReelRequestMaxAggregateOutputType | null
  }

  type GetReelRequestGroupByPayload<T extends ReelRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReelRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReelRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReelRequestGroupByOutputType[P]>
            : GetScalarType<T[P], ReelRequestGroupByOutputType[P]>
        }
      >
    >


  export type ReelRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    instagramUrl?: boolean
    referenceUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    images?: boolean | ReelRequest$imagesArgs<ExtArgs>
    _count?: boolean | ReelRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reelRequest"]>

  export type ReelRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    instagramUrl?: boolean
    referenceUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["reelRequest"]>

  export type ReelRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    instagramUrl?: boolean
    referenceUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["reelRequest"]>

  export type ReelRequestSelectScalar = {
    id?: boolean
    title?: boolean
    instagramUrl?: boolean
    referenceUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReelRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "instagramUrl" | "referenceUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["reelRequest"]>
  export type ReelRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | ReelRequest$imagesArgs<ExtArgs>
    _count?: boolean | ReelRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReelRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ReelRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ReelRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReelRequest"
    objects: {
      images: Prisma.$ImageDescriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      instagramUrl: string
      referenceUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reelRequest"]>
    composites: {}
  }

  type ReelRequestGetPayload<S extends boolean | null | undefined | ReelRequestDefaultArgs> = $Result.GetResult<Prisma.$ReelRequestPayload, S>

  type ReelRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReelRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReelRequestCountAggregateInputType | true
    }

  export interface ReelRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReelRequest'], meta: { name: 'ReelRequest' } }
    /**
     * Find zero or one ReelRequest that matches the filter.
     * @param {ReelRequestFindUniqueArgs} args - Arguments to find a ReelRequest
     * @example
     * // Get one ReelRequest
     * const reelRequest = await prisma.reelRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReelRequestFindUniqueArgs>(args: SelectSubset<T, ReelRequestFindUniqueArgs<ExtArgs>>): Prisma__ReelRequestClient<$Result.GetResult<Prisma.$ReelRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReelRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReelRequestFindUniqueOrThrowArgs} args - Arguments to find a ReelRequest
     * @example
     * // Get one ReelRequest
     * const reelRequest = await prisma.reelRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReelRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, ReelRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReelRequestClient<$Result.GetResult<Prisma.$ReelRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReelRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelRequestFindFirstArgs} args - Arguments to find a ReelRequest
     * @example
     * // Get one ReelRequest
     * const reelRequest = await prisma.reelRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReelRequestFindFirstArgs>(args?: SelectSubset<T, ReelRequestFindFirstArgs<ExtArgs>>): Prisma__ReelRequestClient<$Result.GetResult<Prisma.$ReelRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReelRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelRequestFindFirstOrThrowArgs} args - Arguments to find a ReelRequest
     * @example
     * // Get one ReelRequest
     * const reelRequest = await prisma.reelRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReelRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, ReelRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReelRequestClient<$Result.GetResult<Prisma.$ReelRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReelRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReelRequests
     * const reelRequests = await prisma.reelRequest.findMany()
     * 
     * // Get first 10 ReelRequests
     * const reelRequests = await prisma.reelRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reelRequestWithIdOnly = await prisma.reelRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReelRequestFindManyArgs>(args?: SelectSubset<T, ReelRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReelRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReelRequest.
     * @param {ReelRequestCreateArgs} args - Arguments to create a ReelRequest.
     * @example
     * // Create one ReelRequest
     * const ReelRequest = await prisma.reelRequest.create({
     *   data: {
     *     // ... data to create a ReelRequest
     *   }
     * })
     * 
     */
    create<T extends ReelRequestCreateArgs>(args: SelectSubset<T, ReelRequestCreateArgs<ExtArgs>>): Prisma__ReelRequestClient<$Result.GetResult<Prisma.$ReelRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReelRequests.
     * @param {ReelRequestCreateManyArgs} args - Arguments to create many ReelRequests.
     * @example
     * // Create many ReelRequests
     * const reelRequest = await prisma.reelRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReelRequestCreateManyArgs>(args?: SelectSubset<T, ReelRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReelRequests and returns the data saved in the database.
     * @param {ReelRequestCreateManyAndReturnArgs} args - Arguments to create many ReelRequests.
     * @example
     * // Create many ReelRequests
     * const reelRequest = await prisma.reelRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReelRequests and only return the `id`
     * const reelRequestWithIdOnly = await prisma.reelRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReelRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, ReelRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReelRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReelRequest.
     * @param {ReelRequestDeleteArgs} args - Arguments to delete one ReelRequest.
     * @example
     * // Delete one ReelRequest
     * const ReelRequest = await prisma.reelRequest.delete({
     *   where: {
     *     // ... filter to delete one ReelRequest
     *   }
     * })
     * 
     */
    delete<T extends ReelRequestDeleteArgs>(args: SelectSubset<T, ReelRequestDeleteArgs<ExtArgs>>): Prisma__ReelRequestClient<$Result.GetResult<Prisma.$ReelRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReelRequest.
     * @param {ReelRequestUpdateArgs} args - Arguments to update one ReelRequest.
     * @example
     * // Update one ReelRequest
     * const reelRequest = await prisma.reelRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReelRequestUpdateArgs>(args: SelectSubset<T, ReelRequestUpdateArgs<ExtArgs>>): Prisma__ReelRequestClient<$Result.GetResult<Prisma.$ReelRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReelRequests.
     * @param {ReelRequestDeleteManyArgs} args - Arguments to filter ReelRequests to delete.
     * @example
     * // Delete a few ReelRequests
     * const { count } = await prisma.reelRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReelRequestDeleteManyArgs>(args?: SelectSubset<T, ReelRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReelRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReelRequests
     * const reelRequest = await prisma.reelRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReelRequestUpdateManyArgs>(args: SelectSubset<T, ReelRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReelRequests and returns the data updated in the database.
     * @param {ReelRequestUpdateManyAndReturnArgs} args - Arguments to update many ReelRequests.
     * @example
     * // Update many ReelRequests
     * const reelRequest = await prisma.reelRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReelRequests and only return the `id`
     * const reelRequestWithIdOnly = await prisma.reelRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReelRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, ReelRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReelRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReelRequest.
     * @param {ReelRequestUpsertArgs} args - Arguments to update or create a ReelRequest.
     * @example
     * // Update or create a ReelRequest
     * const reelRequest = await prisma.reelRequest.upsert({
     *   create: {
     *     // ... data to create a ReelRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReelRequest we want to update
     *   }
     * })
     */
    upsert<T extends ReelRequestUpsertArgs>(args: SelectSubset<T, ReelRequestUpsertArgs<ExtArgs>>): Prisma__ReelRequestClient<$Result.GetResult<Prisma.$ReelRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReelRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelRequestCountArgs} args - Arguments to filter ReelRequests to count.
     * @example
     * // Count the number of ReelRequests
     * const count = await prisma.reelRequest.count({
     *   where: {
     *     // ... the filter for the ReelRequests we want to count
     *   }
     * })
    **/
    count<T extends ReelRequestCountArgs>(
      args?: Subset<T, ReelRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReelRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReelRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReelRequestAggregateArgs>(args: Subset<T, ReelRequestAggregateArgs>): Prisma.PrismaPromise<GetReelRequestAggregateType<T>>

    /**
     * Group by ReelRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReelRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReelRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReelRequestGroupByArgs['orderBy'] }
        : { orderBy?: ReelRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReelRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReelRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReelRequest model
   */
  readonly fields: ReelRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReelRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReelRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends ReelRequest$imagesArgs<ExtArgs> = {}>(args?: Subset<T, ReelRequest$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageDescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReelRequest model
   */
  interface ReelRequestFieldRefs {
    readonly id: FieldRef<"ReelRequest", 'String'>
    readonly title: FieldRef<"ReelRequest", 'String'>
    readonly instagramUrl: FieldRef<"ReelRequest", 'String'>
    readonly referenceUrl: FieldRef<"ReelRequest", 'String'>
    readonly createdAt: FieldRef<"ReelRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"ReelRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReelRequest findUnique
   */
  export type ReelRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelRequest
     */
    select?: ReelRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReelRequest
     */
    omit?: ReelRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelRequestInclude<ExtArgs> | null
    /**
     * Filter, which ReelRequest to fetch.
     */
    where: ReelRequestWhereUniqueInput
  }

  /**
   * ReelRequest findUniqueOrThrow
   */
  export type ReelRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelRequest
     */
    select?: ReelRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReelRequest
     */
    omit?: ReelRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelRequestInclude<ExtArgs> | null
    /**
     * Filter, which ReelRequest to fetch.
     */
    where: ReelRequestWhereUniqueInput
  }

  /**
   * ReelRequest findFirst
   */
  export type ReelRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelRequest
     */
    select?: ReelRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReelRequest
     */
    omit?: ReelRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelRequestInclude<ExtArgs> | null
    /**
     * Filter, which ReelRequest to fetch.
     */
    where?: ReelRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReelRequests to fetch.
     */
    orderBy?: ReelRequestOrderByWithRelationInput | ReelRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReelRequests.
     */
    cursor?: ReelRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReelRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReelRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReelRequests.
     */
    distinct?: ReelRequestScalarFieldEnum | ReelRequestScalarFieldEnum[]
  }

  /**
   * ReelRequest findFirstOrThrow
   */
  export type ReelRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelRequest
     */
    select?: ReelRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReelRequest
     */
    omit?: ReelRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelRequestInclude<ExtArgs> | null
    /**
     * Filter, which ReelRequest to fetch.
     */
    where?: ReelRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReelRequests to fetch.
     */
    orderBy?: ReelRequestOrderByWithRelationInput | ReelRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReelRequests.
     */
    cursor?: ReelRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReelRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReelRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReelRequests.
     */
    distinct?: ReelRequestScalarFieldEnum | ReelRequestScalarFieldEnum[]
  }

  /**
   * ReelRequest findMany
   */
  export type ReelRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelRequest
     */
    select?: ReelRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReelRequest
     */
    omit?: ReelRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelRequestInclude<ExtArgs> | null
    /**
     * Filter, which ReelRequests to fetch.
     */
    where?: ReelRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReelRequests to fetch.
     */
    orderBy?: ReelRequestOrderByWithRelationInput | ReelRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReelRequests.
     */
    cursor?: ReelRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReelRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReelRequests.
     */
    skip?: number
    distinct?: ReelRequestScalarFieldEnum | ReelRequestScalarFieldEnum[]
  }

  /**
   * ReelRequest create
   */
  export type ReelRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelRequest
     */
    select?: ReelRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReelRequest
     */
    omit?: ReelRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a ReelRequest.
     */
    data: XOR<ReelRequestCreateInput, ReelRequestUncheckedCreateInput>
  }

  /**
   * ReelRequest createMany
   */
  export type ReelRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReelRequests.
     */
    data: ReelRequestCreateManyInput | ReelRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReelRequest createManyAndReturn
   */
  export type ReelRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelRequest
     */
    select?: ReelRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReelRequest
     */
    omit?: ReelRequestOmit<ExtArgs> | null
    /**
     * The data used to create many ReelRequests.
     */
    data: ReelRequestCreateManyInput | ReelRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReelRequest update
   */
  export type ReelRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelRequest
     */
    select?: ReelRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReelRequest
     */
    omit?: ReelRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a ReelRequest.
     */
    data: XOR<ReelRequestUpdateInput, ReelRequestUncheckedUpdateInput>
    /**
     * Choose, which ReelRequest to update.
     */
    where: ReelRequestWhereUniqueInput
  }

  /**
   * ReelRequest updateMany
   */
  export type ReelRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReelRequests.
     */
    data: XOR<ReelRequestUpdateManyMutationInput, ReelRequestUncheckedUpdateManyInput>
    /**
     * Filter which ReelRequests to update
     */
    where?: ReelRequestWhereInput
    /**
     * Limit how many ReelRequests to update.
     */
    limit?: number
  }

  /**
   * ReelRequest updateManyAndReturn
   */
  export type ReelRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelRequest
     */
    select?: ReelRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReelRequest
     */
    omit?: ReelRequestOmit<ExtArgs> | null
    /**
     * The data used to update ReelRequests.
     */
    data: XOR<ReelRequestUpdateManyMutationInput, ReelRequestUncheckedUpdateManyInput>
    /**
     * Filter which ReelRequests to update
     */
    where?: ReelRequestWhereInput
    /**
     * Limit how many ReelRequests to update.
     */
    limit?: number
  }

  /**
   * ReelRequest upsert
   */
  export type ReelRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelRequest
     */
    select?: ReelRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReelRequest
     */
    omit?: ReelRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the ReelRequest to update in case it exists.
     */
    where: ReelRequestWhereUniqueInput
    /**
     * In case the ReelRequest found by the `where` argument doesn't exist, create a new ReelRequest with this data.
     */
    create: XOR<ReelRequestCreateInput, ReelRequestUncheckedCreateInput>
    /**
     * In case the ReelRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReelRequestUpdateInput, ReelRequestUncheckedUpdateInput>
  }

  /**
   * ReelRequest delete
   */
  export type ReelRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelRequest
     */
    select?: ReelRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReelRequest
     */
    omit?: ReelRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelRequestInclude<ExtArgs> | null
    /**
     * Filter which ReelRequest to delete.
     */
    where: ReelRequestWhereUniqueInput
  }

  /**
   * ReelRequest deleteMany
   */
  export type ReelRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReelRequests to delete
     */
    where?: ReelRequestWhereInput
    /**
     * Limit how many ReelRequests to delete.
     */
    limit?: number
  }

  /**
   * ReelRequest.images
   */
  export type ReelRequest$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageDescription
     */
    select?: ImageDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageDescription
     */
    omit?: ImageDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageDescriptionInclude<ExtArgs> | null
    where?: ImageDescriptionWhereInput
    orderBy?: ImageDescriptionOrderByWithRelationInput | ImageDescriptionOrderByWithRelationInput[]
    cursor?: ImageDescriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageDescriptionScalarFieldEnum | ImageDescriptionScalarFieldEnum[]
  }

  /**
   * ReelRequest without action
   */
  export type ReelRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReelRequest
     */
    select?: ReelRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReelRequest
     */
    omit?: ReelRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReelRequestInclude<ExtArgs> | null
  }


  /**
   * Model ImageDescription
   */

  export type AggregateImageDescription = {
    _count: ImageDescriptionCountAggregateOutputType | null
    _avg: ImageDescriptionAvgAggregateOutputType | null
    _sum: ImageDescriptionSumAggregateOutputType | null
    _min: ImageDescriptionMinAggregateOutputType | null
    _max: ImageDescriptionMaxAggregateOutputType | null
  }

  export type ImageDescriptionAvgAggregateOutputType = {
    order: number | null
  }

  export type ImageDescriptionSumAggregateOutputType = {
    order: number | null
  }

  export type ImageDescriptionMinAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    description: string | null
    order: number | null
    reelRequestId: string | null
    createdAt: Date | null
  }

  export type ImageDescriptionMaxAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    description: string | null
    order: number | null
    reelRequestId: string | null
    createdAt: Date | null
  }

  export type ImageDescriptionCountAggregateOutputType = {
    id: number
    imageUrl: number
    description: number
    order: number
    reelRequestId: number
    createdAt: number
    _all: number
  }


  export type ImageDescriptionAvgAggregateInputType = {
    order?: true
  }

  export type ImageDescriptionSumAggregateInputType = {
    order?: true
  }

  export type ImageDescriptionMinAggregateInputType = {
    id?: true
    imageUrl?: true
    description?: true
    order?: true
    reelRequestId?: true
    createdAt?: true
  }

  export type ImageDescriptionMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    description?: true
    order?: true
    reelRequestId?: true
    createdAt?: true
  }

  export type ImageDescriptionCountAggregateInputType = {
    id?: true
    imageUrl?: true
    description?: true
    order?: true
    reelRequestId?: true
    createdAt?: true
    _all?: true
  }

  export type ImageDescriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImageDescription to aggregate.
     */
    where?: ImageDescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageDescriptions to fetch.
     */
    orderBy?: ImageDescriptionOrderByWithRelationInput | ImageDescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageDescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageDescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageDescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImageDescriptions
    **/
    _count?: true | ImageDescriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageDescriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageDescriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageDescriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageDescriptionMaxAggregateInputType
  }

  export type GetImageDescriptionAggregateType<T extends ImageDescriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateImageDescription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImageDescription[P]>
      : GetScalarType<T[P], AggregateImageDescription[P]>
  }




  export type ImageDescriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageDescriptionWhereInput
    orderBy?: ImageDescriptionOrderByWithAggregationInput | ImageDescriptionOrderByWithAggregationInput[]
    by: ImageDescriptionScalarFieldEnum[] | ImageDescriptionScalarFieldEnum
    having?: ImageDescriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageDescriptionCountAggregateInputType | true
    _avg?: ImageDescriptionAvgAggregateInputType
    _sum?: ImageDescriptionSumAggregateInputType
    _min?: ImageDescriptionMinAggregateInputType
    _max?: ImageDescriptionMaxAggregateInputType
  }

  export type ImageDescriptionGroupByOutputType = {
    id: string
    imageUrl: string
    description: string
    order: number
    reelRequestId: string
    createdAt: Date
    _count: ImageDescriptionCountAggregateOutputType | null
    _avg: ImageDescriptionAvgAggregateOutputType | null
    _sum: ImageDescriptionSumAggregateOutputType | null
    _min: ImageDescriptionMinAggregateOutputType | null
    _max: ImageDescriptionMaxAggregateOutputType | null
  }

  type GetImageDescriptionGroupByPayload<T extends ImageDescriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageDescriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageDescriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageDescriptionGroupByOutputType[P]>
            : GetScalarType<T[P], ImageDescriptionGroupByOutputType[P]>
        }
      >
    >


  export type ImageDescriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    description?: boolean
    order?: boolean
    reelRequestId?: boolean
    createdAt?: boolean
    reelRequest?: boolean | ReelRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imageDescription"]>

  export type ImageDescriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    description?: boolean
    order?: boolean
    reelRequestId?: boolean
    createdAt?: boolean
    reelRequest?: boolean | ReelRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imageDescription"]>

  export type ImageDescriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    description?: boolean
    order?: boolean
    reelRequestId?: boolean
    createdAt?: boolean
    reelRequest?: boolean | ReelRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imageDescription"]>

  export type ImageDescriptionSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    description?: boolean
    order?: boolean
    reelRequestId?: boolean
    createdAt?: boolean
  }

  export type ImageDescriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageUrl" | "description" | "order" | "reelRequestId" | "createdAt", ExtArgs["result"]["imageDescription"]>
  export type ImageDescriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reelRequest?: boolean | ReelRequestDefaultArgs<ExtArgs>
  }
  export type ImageDescriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reelRequest?: boolean | ReelRequestDefaultArgs<ExtArgs>
  }
  export type ImageDescriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reelRequest?: boolean | ReelRequestDefaultArgs<ExtArgs>
  }

  export type $ImageDescriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImageDescription"
    objects: {
      reelRequest: Prisma.$ReelRequestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imageUrl: string
      description: string
      order: number
      reelRequestId: string
      createdAt: Date
    }, ExtArgs["result"]["imageDescription"]>
    composites: {}
  }

  type ImageDescriptionGetPayload<S extends boolean | null | undefined | ImageDescriptionDefaultArgs> = $Result.GetResult<Prisma.$ImageDescriptionPayload, S>

  type ImageDescriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageDescriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageDescriptionCountAggregateInputType | true
    }

  export interface ImageDescriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImageDescription'], meta: { name: 'ImageDescription' } }
    /**
     * Find zero or one ImageDescription that matches the filter.
     * @param {ImageDescriptionFindUniqueArgs} args - Arguments to find a ImageDescription
     * @example
     * // Get one ImageDescription
     * const imageDescription = await prisma.imageDescription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageDescriptionFindUniqueArgs>(args: SelectSubset<T, ImageDescriptionFindUniqueArgs<ExtArgs>>): Prisma__ImageDescriptionClient<$Result.GetResult<Prisma.$ImageDescriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ImageDescription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageDescriptionFindUniqueOrThrowArgs} args - Arguments to find a ImageDescription
     * @example
     * // Get one ImageDescription
     * const imageDescription = await prisma.imageDescription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageDescriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageDescriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageDescriptionClient<$Result.GetResult<Prisma.$ImageDescriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImageDescription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageDescriptionFindFirstArgs} args - Arguments to find a ImageDescription
     * @example
     * // Get one ImageDescription
     * const imageDescription = await prisma.imageDescription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageDescriptionFindFirstArgs>(args?: SelectSubset<T, ImageDescriptionFindFirstArgs<ExtArgs>>): Prisma__ImageDescriptionClient<$Result.GetResult<Prisma.$ImageDescriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImageDescription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageDescriptionFindFirstOrThrowArgs} args - Arguments to find a ImageDescription
     * @example
     * // Get one ImageDescription
     * const imageDescription = await prisma.imageDescription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageDescriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageDescriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageDescriptionClient<$Result.GetResult<Prisma.$ImageDescriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ImageDescriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageDescriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImageDescriptions
     * const imageDescriptions = await prisma.imageDescription.findMany()
     * 
     * // Get first 10 ImageDescriptions
     * const imageDescriptions = await prisma.imageDescription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageDescriptionWithIdOnly = await prisma.imageDescription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageDescriptionFindManyArgs>(args?: SelectSubset<T, ImageDescriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageDescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ImageDescription.
     * @param {ImageDescriptionCreateArgs} args - Arguments to create a ImageDescription.
     * @example
     * // Create one ImageDescription
     * const ImageDescription = await prisma.imageDescription.create({
     *   data: {
     *     // ... data to create a ImageDescription
     *   }
     * })
     * 
     */
    create<T extends ImageDescriptionCreateArgs>(args: SelectSubset<T, ImageDescriptionCreateArgs<ExtArgs>>): Prisma__ImageDescriptionClient<$Result.GetResult<Prisma.$ImageDescriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ImageDescriptions.
     * @param {ImageDescriptionCreateManyArgs} args - Arguments to create many ImageDescriptions.
     * @example
     * // Create many ImageDescriptions
     * const imageDescription = await prisma.imageDescription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageDescriptionCreateManyArgs>(args?: SelectSubset<T, ImageDescriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ImageDescriptions and returns the data saved in the database.
     * @param {ImageDescriptionCreateManyAndReturnArgs} args - Arguments to create many ImageDescriptions.
     * @example
     * // Create many ImageDescriptions
     * const imageDescription = await prisma.imageDescription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ImageDescriptions and only return the `id`
     * const imageDescriptionWithIdOnly = await prisma.imageDescription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageDescriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageDescriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageDescriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ImageDescription.
     * @param {ImageDescriptionDeleteArgs} args - Arguments to delete one ImageDescription.
     * @example
     * // Delete one ImageDescription
     * const ImageDescription = await prisma.imageDescription.delete({
     *   where: {
     *     // ... filter to delete one ImageDescription
     *   }
     * })
     * 
     */
    delete<T extends ImageDescriptionDeleteArgs>(args: SelectSubset<T, ImageDescriptionDeleteArgs<ExtArgs>>): Prisma__ImageDescriptionClient<$Result.GetResult<Prisma.$ImageDescriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ImageDescription.
     * @param {ImageDescriptionUpdateArgs} args - Arguments to update one ImageDescription.
     * @example
     * // Update one ImageDescription
     * const imageDescription = await prisma.imageDescription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageDescriptionUpdateArgs>(args: SelectSubset<T, ImageDescriptionUpdateArgs<ExtArgs>>): Prisma__ImageDescriptionClient<$Result.GetResult<Prisma.$ImageDescriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ImageDescriptions.
     * @param {ImageDescriptionDeleteManyArgs} args - Arguments to filter ImageDescriptions to delete.
     * @example
     * // Delete a few ImageDescriptions
     * const { count } = await prisma.imageDescription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDescriptionDeleteManyArgs>(args?: SelectSubset<T, ImageDescriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImageDescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageDescriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImageDescriptions
     * const imageDescription = await prisma.imageDescription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageDescriptionUpdateManyArgs>(args: SelectSubset<T, ImageDescriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImageDescriptions and returns the data updated in the database.
     * @param {ImageDescriptionUpdateManyAndReturnArgs} args - Arguments to update many ImageDescriptions.
     * @example
     * // Update many ImageDescriptions
     * const imageDescription = await prisma.imageDescription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ImageDescriptions and only return the `id`
     * const imageDescriptionWithIdOnly = await prisma.imageDescription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ImageDescriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageDescriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageDescriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ImageDescription.
     * @param {ImageDescriptionUpsertArgs} args - Arguments to update or create a ImageDescription.
     * @example
     * // Update or create a ImageDescription
     * const imageDescription = await prisma.imageDescription.upsert({
     *   create: {
     *     // ... data to create a ImageDescription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImageDescription we want to update
     *   }
     * })
     */
    upsert<T extends ImageDescriptionUpsertArgs>(args: SelectSubset<T, ImageDescriptionUpsertArgs<ExtArgs>>): Prisma__ImageDescriptionClient<$Result.GetResult<Prisma.$ImageDescriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ImageDescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageDescriptionCountArgs} args - Arguments to filter ImageDescriptions to count.
     * @example
     * // Count the number of ImageDescriptions
     * const count = await prisma.imageDescription.count({
     *   where: {
     *     // ... the filter for the ImageDescriptions we want to count
     *   }
     * })
    **/
    count<T extends ImageDescriptionCountArgs>(
      args?: Subset<T, ImageDescriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageDescriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImageDescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageDescriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImageDescriptionAggregateArgs>(args: Subset<T, ImageDescriptionAggregateArgs>): Prisma.PrismaPromise<GetImageDescriptionAggregateType<T>>

    /**
     * Group by ImageDescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageDescriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImageDescriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageDescriptionGroupByArgs['orderBy'] }
        : { orderBy?: ImageDescriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImageDescriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageDescriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImageDescription model
   */
  readonly fields: ImageDescriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImageDescription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageDescriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reelRequest<T extends ReelRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReelRequestDefaultArgs<ExtArgs>>): Prisma__ReelRequestClient<$Result.GetResult<Prisma.$ReelRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ImageDescription model
   */
  interface ImageDescriptionFieldRefs {
    readonly id: FieldRef<"ImageDescription", 'String'>
    readonly imageUrl: FieldRef<"ImageDescription", 'String'>
    readonly description: FieldRef<"ImageDescription", 'String'>
    readonly order: FieldRef<"ImageDescription", 'Int'>
    readonly reelRequestId: FieldRef<"ImageDescription", 'String'>
    readonly createdAt: FieldRef<"ImageDescription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ImageDescription findUnique
   */
  export type ImageDescriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageDescription
     */
    select?: ImageDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageDescription
     */
    omit?: ImageDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageDescriptionInclude<ExtArgs> | null
    /**
     * Filter, which ImageDescription to fetch.
     */
    where: ImageDescriptionWhereUniqueInput
  }

  /**
   * ImageDescription findUniqueOrThrow
   */
  export type ImageDescriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageDescription
     */
    select?: ImageDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageDescription
     */
    omit?: ImageDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageDescriptionInclude<ExtArgs> | null
    /**
     * Filter, which ImageDescription to fetch.
     */
    where: ImageDescriptionWhereUniqueInput
  }

  /**
   * ImageDescription findFirst
   */
  export type ImageDescriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageDescription
     */
    select?: ImageDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageDescription
     */
    omit?: ImageDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageDescriptionInclude<ExtArgs> | null
    /**
     * Filter, which ImageDescription to fetch.
     */
    where?: ImageDescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageDescriptions to fetch.
     */
    orderBy?: ImageDescriptionOrderByWithRelationInput | ImageDescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImageDescriptions.
     */
    cursor?: ImageDescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageDescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageDescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImageDescriptions.
     */
    distinct?: ImageDescriptionScalarFieldEnum | ImageDescriptionScalarFieldEnum[]
  }

  /**
   * ImageDescription findFirstOrThrow
   */
  export type ImageDescriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageDescription
     */
    select?: ImageDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageDescription
     */
    omit?: ImageDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageDescriptionInclude<ExtArgs> | null
    /**
     * Filter, which ImageDescription to fetch.
     */
    where?: ImageDescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageDescriptions to fetch.
     */
    orderBy?: ImageDescriptionOrderByWithRelationInput | ImageDescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImageDescriptions.
     */
    cursor?: ImageDescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageDescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageDescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImageDescriptions.
     */
    distinct?: ImageDescriptionScalarFieldEnum | ImageDescriptionScalarFieldEnum[]
  }

  /**
   * ImageDescription findMany
   */
  export type ImageDescriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageDescription
     */
    select?: ImageDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageDescription
     */
    omit?: ImageDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageDescriptionInclude<ExtArgs> | null
    /**
     * Filter, which ImageDescriptions to fetch.
     */
    where?: ImageDescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageDescriptions to fetch.
     */
    orderBy?: ImageDescriptionOrderByWithRelationInput | ImageDescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImageDescriptions.
     */
    cursor?: ImageDescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageDescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageDescriptions.
     */
    skip?: number
    distinct?: ImageDescriptionScalarFieldEnum | ImageDescriptionScalarFieldEnum[]
  }

  /**
   * ImageDescription create
   */
  export type ImageDescriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageDescription
     */
    select?: ImageDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageDescription
     */
    omit?: ImageDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageDescriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a ImageDescription.
     */
    data: XOR<ImageDescriptionCreateInput, ImageDescriptionUncheckedCreateInput>
  }

  /**
   * ImageDescription createMany
   */
  export type ImageDescriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImageDescriptions.
     */
    data: ImageDescriptionCreateManyInput | ImageDescriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImageDescription createManyAndReturn
   */
  export type ImageDescriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageDescription
     */
    select?: ImageDescriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImageDescription
     */
    omit?: ImageDescriptionOmit<ExtArgs> | null
    /**
     * The data used to create many ImageDescriptions.
     */
    data: ImageDescriptionCreateManyInput | ImageDescriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageDescriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ImageDescription update
   */
  export type ImageDescriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageDescription
     */
    select?: ImageDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageDescription
     */
    omit?: ImageDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageDescriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a ImageDescription.
     */
    data: XOR<ImageDescriptionUpdateInput, ImageDescriptionUncheckedUpdateInput>
    /**
     * Choose, which ImageDescription to update.
     */
    where: ImageDescriptionWhereUniqueInput
  }

  /**
   * ImageDescription updateMany
   */
  export type ImageDescriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImageDescriptions.
     */
    data: XOR<ImageDescriptionUpdateManyMutationInput, ImageDescriptionUncheckedUpdateManyInput>
    /**
     * Filter which ImageDescriptions to update
     */
    where?: ImageDescriptionWhereInput
    /**
     * Limit how many ImageDescriptions to update.
     */
    limit?: number
  }

  /**
   * ImageDescription updateManyAndReturn
   */
  export type ImageDescriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageDescription
     */
    select?: ImageDescriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ImageDescription
     */
    omit?: ImageDescriptionOmit<ExtArgs> | null
    /**
     * The data used to update ImageDescriptions.
     */
    data: XOR<ImageDescriptionUpdateManyMutationInput, ImageDescriptionUncheckedUpdateManyInput>
    /**
     * Filter which ImageDescriptions to update
     */
    where?: ImageDescriptionWhereInput
    /**
     * Limit how many ImageDescriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageDescriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ImageDescription upsert
   */
  export type ImageDescriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageDescription
     */
    select?: ImageDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageDescription
     */
    omit?: ImageDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageDescriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the ImageDescription to update in case it exists.
     */
    where: ImageDescriptionWhereUniqueInput
    /**
     * In case the ImageDescription found by the `where` argument doesn't exist, create a new ImageDescription with this data.
     */
    create: XOR<ImageDescriptionCreateInput, ImageDescriptionUncheckedCreateInput>
    /**
     * In case the ImageDescription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageDescriptionUpdateInput, ImageDescriptionUncheckedUpdateInput>
  }

  /**
   * ImageDescription delete
   */
  export type ImageDescriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageDescription
     */
    select?: ImageDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageDescription
     */
    omit?: ImageDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageDescriptionInclude<ExtArgs> | null
    /**
     * Filter which ImageDescription to delete.
     */
    where: ImageDescriptionWhereUniqueInput
  }

  /**
   * ImageDescription deleteMany
   */
  export type ImageDescriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImageDescriptions to delete
     */
    where?: ImageDescriptionWhereInput
    /**
     * Limit how many ImageDescriptions to delete.
     */
    limit?: number
  }

  /**
   * ImageDescription without action
   */
  export type ImageDescriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageDescription
     */
    select?: ImageDescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageDescription
     */
    omit?: ImageDescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageDescriptionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ReelRequestScalarFieldEnum: {
    id: 'id',
    title: 'title',
    instagramUrl: 'instagramUrl',
    referenceUrl: 'referenceUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReelRequestScalarFieldEnum = (typeof ReelRequestScalarFieldEnum)[keyof typeof ReelRequestScalarFieldEnum]


  export const ImageDescriptionScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    description: 'description',
    order: 'order',
    reelRequestId: 'reelRequestId',
    createdAt: 'createdAt'
  };

  export type ImageDescriptionScalarFieldEnum = (typeof ImageDescriptionScalarFieldEnum)[keyof typeof ImageDescriptionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ReelRequestWhereInput = {
    AND?: ReelRequestWhereInput | ReelRequestWhereInput[]
    OR?: ReelRequestWhereInput[]
    NOT?: ReelRequestWhereInput | ReelRequestWhereInput[]
    id?: StringFilter<"ReelRequest"> | string
    title?: StringFilter<"ReelRequest"> | string
    instagramUrl?: StringFilter<"ReelRequest"> | string
    referenceUrl?: StringNullableFilter<"ReelRequest"> | string | null
    createdAt?: DateTimeFilter<"ReelRequest"> | Date | string
    updatedAt?: DateTimeFilter<"ReelRequest"> | Date | string
    images?: ImageDescriptionListRelationFilter
  }

  export type ReelRequestOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    instagramUrl?: SortOrder
    referenceUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    images?: ImageDescriptionOrderByRelationAggregateInput
  }

  export type ReelRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReelRequestWhereInput | ReelRequestWhereInput[]
    OR?: ReelRequestWhereInput[]
    NOT?: ReelRequestWhereInput | ReelRequestWhereInput[]
    title?: StringFilter<"ReelRequest"> | string
    instagramUrl?: StringFilter<"ReelRequest"> | string
    referenceUrl?: StringNullableFilter<"ReelRequest"> | string | null
    createdAt?: DateTimeFilter<"ReelRequest"> | Date | string
    updatedAt?: DateTimeFilter<"ReelRequest"> | Date | string
    images?: ImageDescriptionListRelationFilter
  }, "id">

  export type ReelRequestOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    instagramUrl?: SortOrder
    referenceUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReelRequestCountOrderByAggregateInput
    _max?: ReelRequestMaxOrderByAggregateInput
    _min?: ReelRequestMinOrderByAggregateInput
  }

  export type ReelRequestScalarWhereWithAggregatesInput = {
    AND?: ReelRequestScalarWhereWithAggregatesInput | ReelRequestScalarWhereWithAggregatesInput[]
    OR?: ReelRequestScalarWhereWithAggregatesInput[]
    NOT?: ReelRequestScalarWhereWithAggregatesInput | ReelRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReelRequest"> | string
    title?: StringWithAggregatesFilter<"ReelRequest"> | string
    instagramUrl?: StringWithAggregatesFilter<"ReelRequest"> | string
    referenceUrl?: StringNullableWithAggregatesFilter<"ReelRequest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ReelRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ReelRequest"> | Date | string
  }

  export type ImageDescriptionWhereInput = {
    AND?: ImageDescriptionWhereInput | ImageDescriptionWhereInput[]
    OR?: ImageDescriptionWhereInput[]
    NOT?: ImageDescriptionWhereInput | ImageDescriptionWhereInput[]
    id?: StringFilter<"ImageDescription"> | string
    imageUrl?: StringFilter<"ImageDescription"> | string
    description?: StringFilter<"ImageDescription"> | string
    order?: IntFilter<"ImageDescription"> | number
    reelRequestId?: StringFilter<"ImageDescription"> | string
    createdAt?: DateTimeFilter<"ImageDescription"> | Date | string
    reelRequest?: XOR<ReelRequestScalarRelationFilter, ReelRequestWhereInput>
  }

  export type ImageDescriptionOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    order?: SortOrder
    reelRequestId?: SortOrder
    createdAt?: SortOrder
    reelRequest?: ReelRequestOrderByWithRelationInput
  }

  export type ImageDescriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImageDescriptionWhereInput | ImageDescriptionWhereInput[]
    OR?: ImageDescriptionWhereInput[]
    NOT?: ImageDescriptionWhereInput | ImageDescriptionWhereInput[]
    imageUrl?: StringFilter<"ImageDescription"> | string
    description?: StringFilter<"ImageDescription"> | string
    order?: IntFilter<"ImageDescription"> | number
    reelRequestId?: StringFilter<"ImageDescription"> | string
    createdAt?: DateTimeFilter<"ImageDescription"> | Date | string
    reelRequest?: XOR<ReelRequestScalarRelationFilter, ReelRequestWhereInput>
  }, "id">

  export type ImageDescriptionOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    order?: SortOrder
    reelRequestId?: SortOrder
    createdAt?: SortOrder
    _count?: ImageDescriptionCountOrderByAggregateInput
    _avg?: ImageDescriptionAvgOrderByAggregateInput
    _max?: ImageDescriptionMaxOrderByAggregateInput
    _min?: ImageDescriptionMinOrderByAggregateInput
    _sum?: ImageDescriptionSumOrderByAggregateInput
  }

  export type ImageDescriptionScalarWhereWithAggregatesInput = {
    AND?: ImageDescriptionScalarWhereWithAggregatesInput | ImageDescriptionScalarWhereWithAggregatesInput[]
    OR?: ImageDescriptionScalarWhereWithAggregatesInput[]
    NOT?: ImageDescriptionScalarWhereWithAggregatesInput | ImageDescriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ImageDescription"> | string
    imageUrl?: StringWithAggregatesFilter<"ImageDescription"> | string
    description?: StringWithAggregatesFilter<"ImageDescription"> | string
    order?: IntWithAggregatesFilter<"ImageDescription"> | number
    reelRequestId?: StringWithAggregatesFilter<"ImageDescription"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ImageDescription"> | Date | string
  }

  export type ReelRequestCreateInput = {
    id?: string
    title: string
    instagramUrl: string
    referenceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageDescriptionCreateNestedManyWithoutReelRequestInput
  }

  export type ReelRequestUncheckedCreateInput = {
    id?: string
    title: string
    instagramUrl: string
    referenceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageDescriptionUncheckedCreateNestedManyWithoutReelRequestInput
  }

  export type ReelRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    instagramUrl?: StringFieldUpdateOperationsInput | string
    referenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageDescriptionUpdateManyWithoutReelRequestNestedInput
  }

  export type ReelRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    instagramUrl?: StringFieldUpdateOperationsInput | string
    referenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageDescriptionUncheckedUpdateManyWithoutReelRequestNestedInput
  }

  export type ReelRequestCreateManyInput = {
    id?: string
    title: string
    instagramUrl: string
    referenceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReelRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    instagramUrl?: StringFieldUpdateOperationsInput | string
    referenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReelRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    instagramUrl?: StringFieldUpdateOperationsInput | string
    referenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageDescriptionCreateInput = {
    id?: string
    imageUrl: string
    description: string
    order: number
    createdAt?: Date | string
    reelRequest: ReelRequestCreateNestedOneWithoutImagesInput
  }

  export type ImageDescriptionUncheckedCreateInput = {
    id?: string
    imageUrl: string
    description: string
    order: number
    reelRequestId: string
    createdAt?: Date | string
  }

  export type ImageDescriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reelRequest?: ReelRequestUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ImageDescriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    reelRequestId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageDescriptionCreateManyInput = {
    id?: string
    imageUrl: string
    description: string
    order: number
    reelRequestId: string
    createdAt?: Date | string
  }

  export type ImageDescriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageDescriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    reelRequestId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ImageDescriptionListRelationFilter = {
    every?: ImageDescriptionWhereInput
    some?: ImageDescriptionWhereInput
    none?: ImageDescriptionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ImageDescriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReelRequestCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    instagramUrl?: SortOrder
    referenceUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReelRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    instagramUrl?: SortOrder
    referenceUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReelRequestMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    instagramUrl?: SortOrder
    referenceUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ReelRequestScalarRelationFilter = {
    is?: ReelRequestWhereInput
    isNot?: ReelRequestWhereInput
  }

  export type ImageDescriptionCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    order?: SortOrder
    reelRequestId?: SortOrder
    createdAt?: SortOrder
  }

  export type ImageDescriptionAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ImageDescriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    order?: SortOrder
    reelRequestId?: SortOrder
    createdAt?: SortOrder
  }

  export type ImageDescriptionMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    order?: SortOrder
    reelRequestId?: SortOrder
    createdAt?: SortOrder
  }

  export type ImageDescriptionSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ImageDescriptionCreateNestedManyWithoutReelRequestInput = {
    create?: XOR<ImageDescriptionCreateWithoutReelRequestInput, ImageDescriptionUncheckedCreateWithoutReelRequestInput> | ImageDescriptionCreateWithoutReelRequestInput[] | ImageDescriptionUncheckedCreateWithoutReelRequestInput[]
    connectOrCreate?: ImageDescriptionCreateOrConnectWithoutReelRequestInput | ImageDescriptionCreateOrConnectWithoutReelRequestInput[]
    createMany?: ImageDescriptionCreateManyReelRequestInputEnvelope
    connect?: ImageDescriptionWhereUniqueInput | ImageDescriptionWhereUniqueInput[]
  }

  export type ImageDescriptionUncheckedCreateNestedManyWithoutReelRequestInput = {
    create?: XOR<ImageDescriptionCreateWithoutReelRequestInput, ImageDescriptionUncheckedCreateWithoutReelRequestInput> | ImageDescriptionCreateWithoutReelRequestInput[] | ImageDescriptionUncheckedCreateWithoutReelRequestInput[]
    connectOrCreate?: ImageDescriptionCreateOrConnectWithoutReelRequestInput | ImageDescriptionCreateOrConnectWithoutReelRequestInput[]
    createMany?: ImageDescriptionCreateManyReelRequestInputEnvelope
    connect?: ImageDescriptionWhereUniqueInput | ImageDescriptionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ImageDescriptionUpdateManyWithoutReelRequestNestedInput = {
    create?: XOR<ImageDescriptionCreateWithoutReelRequestInput, ImageDescriptionUncheckedCreateWithoutReelRequestInput> | ImageDescriptionCreateWithoutReelRequestInput[] | ImageDescriptionUncheckedCreateWithoutReelRequestInput[]
    connectOrCreate?: ImageDescriptionCreateOrConnectWithoutReelRequestInput | ImageDescriptionCreateOrConnectWithoutReelRequestInput[]
    upsert?: ImageDescriptionUpsertWithWhereUniqueWithoutReelRequestInput | ImageDescriptionUpsertWithWhereUniqueWithoutReelRequestInput[]
    createMany?: ImageDescriptionCreateManyReelRequestInputEnvelope
    set?: ImageDescriptionWhereUniqueInput | ImageDescriptionWhereUniqueInput[]
    disconnect?: ImageDescriptionWhereUniqueInput | ImageDescriptionWhereUniqueInput[]
    delete?: ImageDescriptionWhereUniqueInput | ImageDescriptionWhereUniqueInput[]
    connect?: ImageDescriptionWhereUniqueInput | ImageDescriptionWhereUniqueInput[]
    update?: ImageDescriptionUpdateWithWhereUniqueWithoutReelRequestInput | ImageDescriptionUpdateWithWhereUniqueWithoutReelRequestInput[]
    updateMany?: ImageDescriptionUpdateManyWithWhereWithoutReelRequestInput | ImageDescriptionUpdateManyWithWhereWithoutReelRequestInput[]
    deleteMany?: ImageDescriptionScalarWhereInput | ImageDescriptionScalarWhereInput[]
  }

  export type ImageDescriptionUncheckedUpdateManyWithoutReelRequestNestedInput = {
    create?: XOR<ImageDescriptionCreateWithoutReelRequestInput, ImageDescriptionUncheckedCreateWithoutReelRequestInput> | ImageDescriptionCreateWithoutReelRequestInput[] | ImageDescriptionUncheckedCreateWithoutReelRequestInput[]
    connectOrCreate?: ImageDescriptionCreateOrConnectWithoutReelRequestInput | ImageDescriptionCreateOrConnectWithoutReelRequestInput[]
    upsert?: ImageDescriptionUpsertWithWhereUniqueWithoutReelRequestInput | ImageDescriptionUpsertWithWhereUniqueWithoutReelRequestInput[]
    createMany?: ImageDescriptionCreateManyReelRequestInputEnvelope
    set?: ImageDescriptionWhereUniqueInput | ImageDescriptionWhereUniqueInput[]
    disconnect?: ImageDescriptionWhereUniqueInput | ImageDescriptionWhereUniqueInput[]
    delete?: ImageDescriptionWhereUniqueInput | ImageDescriptionWhereUniqueInput[]
    connect?: ImageDescriptionWhereUniqueInput | ImageDescriptionWhereUniqueInput[]
    update?: ImageDescriptionUpdateWithWhereUniqueWithoutReelRequestInput | ImageDescriptionUpdateWithWhereUniqueWithoutReelRequestInput[]
    updateMany?: ImageDescriptionUpdateManyWithWhereWithoutReelRequestInput | ImageDescriptionUpdateManyWithWhereWithoutReelRequestInput[]
    deleteMany?: ImageDescriptionScalarWhereInput | ImageDescriptionScalarWhereInput[]
  }

  export type ReelRequestCreateNestedOneWithoutImagesInput = {
    create?: XOR<ReelRequestCreateWithoutImagesInput, ReelRequestUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ReelRequestCreateOrConnectWithoutImagesInput
    connect?: ReelRequestWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReelRequestUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<ReelRequestCreateWithoutImagesInput, ReelRequestUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ReelRequestCreateOrConnectWithoutImagesInput
    upsert?: ReelRequestUpsertWithoutImagesInput
    connect?: ReelRequestWhereUniqueInput
    update?: XOR<XOR<ReelRequestUpdateToOneWithWhereWithoutImagesInput, ReelRequestUpdateWithoutImagesInput>, ReelRequestUncheckedUpdateWithoutImagesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ImageDescriptionCreateWithoutReelRequestInput = {
    id?: string
    imageUrl: string
    description: string
    order: number
    createdAt?: Date | string
  }

  export type ImageDescriptionUncheckedCreateWithoutReelRequestInput = {
    id?: string
    imageUrl: string
    description: string
    order: number
    createdAt?: Date | string
  }

  export type ImageDescriptionCreateOrConnectWithoutReelRequestInput = {
    where: ImageDescriptionWhereUniqueInput
    create: XOR<ImageDescriptionCreateWithoutReelRequestInput, ImageDescriptionUncheckedCreateWithoutReelRequestInput>
  }

  export type ImageDescriptionCreateManyReelRequestInputEnvelope = {
    data: ImageDescriptionCreateManyReelRequestInput | ImageDescriptionCreateManyReelRequestInput[]
    skipDuplicates?: boolean
  }

  export type ImageDescriptionUpsertWithWhereUniqueWithoutReelRequestInput = {
    where: ImageDescriptionWhereUniqueInput
    update: XOR<ImageDescriptionUpdateWithoutReelRequestInput, ImageDescriptionUncheckedUpdateWithoutReelRequestInput>
    create: XOR<ImageDescriptionCreateWithoutReelRequestInput, ImageDescriptionUncheckedCreateWithoutReelRequestInput>
  }

  export type ImageDescriptionUpdateWithWhereUniqueWithoutReelRequestInput = {
    where: ImageDescriptionWhereUniqueInput
    data: XOR<ImageDescriptionUpdateWithoutReelRequestInput, ImageDescriptionUncheckedUpdateWithoutReelRequestInput>
  }

  export type ImageDescriptionUpdateManyWithWhereWithoutReelRequestInput = {
    where: ImageDescriptionScalarWhereInput
    data: XOR<ImageDescriptionUpdateManyMutationInput, ImageDescriptionUncheckedUpdateManyWithoutReelRequestInput>
  }

  export type ImageDescriptionScalarWhereInput = {
    AND?: ImageDescriptionScalarWhereInput | ImageDescriptionScalarWhereInput[]
    OR?: ImageDescriptionScalarWhereInput[]
    NOT?: ImageDescriptionScalarWhereInput | ImageDescriptionScalarWhereInput[]
    id?: StringFilter<"ImageDescription"> | string
    imageUrl?: StringFilter<"ImageDescription"> | string
    description?: StringFilter<"ImageDescription"> | string
    order?: IntFilter<"ImageDescription"> | number
    reelRequestId?: StringFilter<"ImageDescription"> | string
    createdAt?: DateTimeFilter<"ImageDescription"> | Date | string
  }

  export type ReelRequestCreateWithoutImagesInput = {
    id?: string
    title: string
    instagramUrl: string
    referenceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReelRequestUncheckedCreateWithoutImagesInput = {
    id?: string
    title: string
    instagramUrl: string
    referenceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReelRequestCreateOrConnectWithoutImagesInput = {
    where: ReelRequestWhereUniqueInput
    create: XOR<ReelRequestCreateWithoutImagesInput, ReelRequestUncheckedCreateWithoutImagesInput>
  }

  export type ReelRequestUpsertWithoutImagesInput = {
    update: XOR<ReelRequestUpdateWithoutImagesInput, ReelRequestUncheckedUpdateWithoutImagesInput>
    create: XOR<ReelRequestCreateWithoutImagesInput, ReelRequestUncheckedCreateWithoutImagesInput>
    where?: ReelRequestWhereInput
  }

  export type ReelRequestUpdateToOneWithWhereWithoutImagesInput = {
    where?: ReelRequestWhereInput
    data: XOR<ReelRequestUpdateWithoutImagesInput, ReelRequestUncheckedUpdateWithoutImagesInput>
  }

  export type ReelRequestUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    instagramUrl?: StringFieldUpdateOperationsInput | string
    referenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReelRequestUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    instagramUrl?: StringFieldUpdateOperationsInput | string
    referenceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageDescriptionCreateManyReelRequestInput = {
    id?: string
    imageUrl: string
    description: string
    order: number
    createdAt?: Date | string
  }

  export type ImageDescriptionUpdateWithoutReelRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageDescriptionUncheckedUpdateWithoutReelRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageDescriptionUncheckedUpdateManyWithoutReelRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}