import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A floating point number that requires more precision than IEEE 754 binary 64 */
  BigFloat: any;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /** The day, does not include a time. */
  Date: any;
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: any;
};

/** All input for the create `Rikishi` mutation. */
export type CreateRikishiInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Rikishi` to be created by this mutation. */
  rikishi: RikishiInput;
};

/** The output of our create `Rikishi` mutation. */
export type CreateRikishiPayload = {
  __typename?: 'CreateRikishiPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Rikishi` that was created by this mutation. */
  rikishi?: Maybe<Rikishi>;
  /** An edge for our `Rikishi`. May be used by Relay 1. */
  rikishiEdge?: Maybe<RikishisEdge>;
};


/** The output of our create `Rikishi` mutation. */
export type CreateRikishiPayloadRikishiEdgeArgs = {
  orderBy?: Maybe<Array<RikishisOrderBy>>;
};

/** All input for the `deleteRikishiById` mutation. */
export type DeleteRikishiByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteRikishi` mutation. */
export type DeleteRikishiInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Rikishi` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Rikishi` mutation. */
export type DeleteRikishiPayload = {
  __typename?: 'DeleteRikishiPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedRikishiId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Rikishi` that was deleted by this mutation. */
  rikishi?: Maybe<Rikishi>;
  /** An edge for our `Rikishi`. May be used by Relay 1. */
  rikishiEdge?: Maybe<RikishisEdge>;
};


/** The output of our delete `Rikishi` mutation. */
export type DeleteRikishiPayloadRikishiEdgeArgs = {
  orderBy?: Maybe<Array<RikishisOrderBy>>;
};

/** This is the documentation. */
export type KnexMigration = Node & {
  __typename?: 'KnexMigration';
  batch?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  migrationTime?: Maybe<Scalars['Datetime']>;
  name?: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/**
 * A condition to be used against `KnexMigration` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type KnexMigrationCondition = {
  /** Checks for equality with the object’s `batch` field. */
  batch?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `migrationTime` field. */
  migrationTime?: Maybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
};

/** A connection to a list of `KnexMigration` values. */
export type KnexMigrationsConnection = {
  __typename?: 'KnexMigrationsConnection';
  /** A list of edges which contains the `KnexMigration` and cursor to aid in pagination. */
  edges: Array<KnexMigrationsEdge>;
  /** A list of `KnexMigration` objects. */
  nodes: Array<Maybe<KnexMigration>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `KnexMigration` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `KnexMigration` edge in the connection. */
export type KnexMigrationsEdge = {
  __typename?: 'KnexMigrationsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `KnexMigration` at the end of the edge. */
  node?: Maybe<KnexMigration>;
};

/** This is the documentation. */
export type KnexMigrationsLock = Node & {
  __typename?: 'KnexMigrationsLock';
  index: Scalars['Int'];
  isLocked?: Maybe<Scalars['Int']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/**
 * A condition to be used against `KnexMigrationsLock` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type KnexMigrationsLockCondition = {
  /** Checks for equality with the object’s `index` field. */
  index?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `isLocked` field. */
  isLocked?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `KnexMigrationsLock` values. */
export type KnexMigrationsLocksConnection = {
  __typename?: 'KnexMigrationsLocksConnection';
  /** A list of edges which contains the `KnexMigrationsLock` and cursor to aid in pagination. */
  edges: Array<KnexMigrationsLocksEdge>;
  /** A list of `KnexMigrationsLock` objects. */
  nodes: Array<Maybe<KnexMigrationsLock>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `KnexMigrationsLock` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `KnexMigrationsLock` edge in the connection. */
export type KnexMigrationsLocksEdge = {
  __typename?: 'KnexMigrationsLocksEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `KnexMigrationsLock` at the end of the edge. */
  node?: Maybe<KnexMigrationsLock>;
};

/** Methods to use when ordering `KnexMigrationsLock`. */
export enum KnexMigrationsLocksOrderBy {
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  IsLockedAsc = 'IS_LOCKED_ASC',
  IsLockedDesc = 'IS_LOCKED_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** Methods to use when ordering `KnexMigration`. */
export enum KnexMigrationsOrderBy {
  BatchAsc = 'BATCH_ASC',
  BatchDesc = 'BATCH_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  MigrationTimeAsc = 'MIGRATION_TIME_ASC',
  MigrationTimeDesc = 'MIGRATION_TIME_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Rikishi`. */
  createRikishi?: Maybe<CreateRikishiPayload>;
  /** Deletes a single `Rikishi` using its globally unique id. */
  deleteRikishi?: Maybe<DeleteRikishiPayload>;
  /** Deletes a single `Rikishi` using a unique key. */
  deleteRikishiById?: Maybe<DeleteRikishiPayload>;
  /** Updates a single `Rikishi` using its globally unique id and a patch. */
  updateRikishi?: Maybe<UpdateRikishiPayload>;
  /** Updates a single `Rikishi` using a unique key and a patch. */
  updateRikishiById?: Maybe<UpdateRikishiPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRikishiArgs = {
  input: CreateRikishiInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRikishiArgs = {
  input: DeleteRikishiInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRikishiByIdArgs = {
  input: DeleteRikishiByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRikishiArgs = {
  input: UpdateRikishiInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRikishiByIdArgs = {
  input: UpdateRikishiByIdInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /** Reads and enables pagination through a set of `KnexMigration`. */
  allKnexMigrations?: Maybe<KnexMigrationsConnection>;
  /** Reads and enables pagination through a set of `KnexMigrationsLock`. */
  allKnexMigrationsLocks?: Maybe<KnexMigrationsLocksConnection>;
  /** Reads and enables pagination through a set of `Rikishi`. */
  allRikishis?: Maybe<RikishisConnection>;
  /** Reads a single `KnexMigration` using its globally unique `ID`. */
  knexMigration?: Maybe<KnexMigration>;
  knexMigrationById?: Maybe<KnexMigration>;
  /** Reads a single `KnexMigrationsLock` using its globally unique `ID`. */
  knexMigrationsLock?: Maybe<KnexMigrationsLock>;
  knexMigrationsLockByIndex?: Maybe<KnexMigrationsLock>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** Reads a single `Rikishi` using its globally unique `ID`. */
  rikishi?: Maybe<Rikishi>;
  rikishiById?: Maybe<Rikishi>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllKnexMigrationsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  condition?: Maybe<KnexMigrationCondition>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<KnexMigrationsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllKnexMigrationsLocksArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  condition?: Maybe<KnexMigrationsLockCondition>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<KnexMigrationsLocksOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllRikishisArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  condition?: Maybe<RikishiCondition>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<RikishisOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryKnexMigrationArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryKnexMigrationByIdArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryKnexMigrationsLockArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryKnexMigrationsLockByIndexArgs = {
  index: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRikishiArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRikishiByIdArgs = {
  id: Scalars['Int'];
};

export type Rikishi = Node & {
  __typename?: 'Rikishi';
  birthPlace?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['Date']>;
  height?: Maybe<Scalars['BigFloat']>;
  heya?: Maybe<Scalars['String']>;
  highestRank?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  openingBasho?: Maybe<Scalars['Date']>;
  realName?: Maybe<Scalars['String']>;
  retirementBasho?: Maybe<Scalars['Date']>;
  ringName?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['BigFloat']>;
};

/** A condition to be used against `Rikishi` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type RikishiCondition = {
  /** Checks for equality with the object’s `birthPlace` field. */
  birthPlace?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `dateOfBirth` field. */
  dateOfBirth?: Maybe<Scalars['Date']>;
  /** Checks for equality with the object’s `height` field. */
  height?: Maybe<Scalars['BigFloat']>;
  /** Checks for equality with the object’s `heya` field. */
  heya?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `highestRank` field. */
  highestRank?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `openingBasho` field. */
  openingBasho?: Maybe<Scalars['Date']>;
  /** Checks for equality with the object’s `realName` field. */
  realName?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `retirementBasho` field. */
  retirementBasho?: Maybe<Scalars['Date']>;
  /** Checks for equality with the object’s `ringName` field. */
  ringName?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `weight` field. */
  weight?: Maybe<Scalars['BigFloat']>;
};

/** An input for mutations affecting `Rikishi` */
export type RikishiInput = {
  birthPlace?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['Date']>;
  height?: Maybe<Scalars['BigFloat']>;
  heya?: Maybe<Scalars['String']>;
  highestRank?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  openingBasho?: Maybe<Scalars['Date']>;
  realName?: Maybe<Scalars['String']>;
  retirementBasho?: Maybe<Scalars['Date']>;
  ringName?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['BigFloat']>;
};

/** Represents an update to a `Rikishi`. Fields that are set will be updated. */
export type RikishiPatch = {
  birthPlace?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['Date']>;
  height?: Maybe<Scalars['BigFloat']>;
  heya?: Maybe<Scalars['String']>;
  highestRank?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  openingBasho?: Maybe<Scalars['Date']>;
  realName?: Maybe<Scalars['String']>;
  retirementBasho?: Maybe<Scalars['Date']>;
  ringName?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['BigFloat']>;
};

/** A connection to a list of `Rikishi` values. */
export type RikishisConnection = {
  __typename?: 'RikishisConnection';
  /** A list of edges which contains the `Rikishi` and cursor to aid in pagination. */
  edges: Array<RikishisEdge>;
  /** A list of `Rikishi` objects. */
  nodes: Array<Maybe<Rikishi>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Rikishi` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Rikishi` edge in the connection. */
export type RikishisEdge = {
  __typename?: 'RikishisEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Rikishi` at the end of the edge. */
  node?: Maybe<Rikishi>;
};

/** Methods to use when ordering `Rikishi`. */
export enum RikishisOrderBy {
  BirthPlaceAsc = 'BIRTH_PLACE_ASC',
  BirthPlaceDesc = 'BIRTH_PLACE_DESC',
  DateOfBirthAsc = 'DATE_OF_BIRTH_ASC',
  DateOfBirthDesc = 'DATE_OF_BIRTH_DESC',
  HeightAsc = 'HEIGHT_ASC',
  HeightDesc = 'HEIGHT_DESC',
  HeyaAsc = 'HEYA_ASC',
  HeyaDesc = 'HEYA_DESC',
  HighestRankAsc = 'HIGHEST_RANK_ASC',
  HighestRankDesc = 'HIGHEST_RANK_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  OpeningBashoAsc = 'OPENING_BASHO_ASC',
  OpeningBashoDesc = 'OPENING_BASHO_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RealNameAsc = 'REAL_NAME_ASC',
  RealNameDesc = 'REAL_NAME_DESC',
  RetirementBashoAsc = 'RETIREMENT_BASHO_ASC',
  RetirementBashoDesc = 'RETIREMENT_BASHO_DESC',
  RingNameAsc = 'RING_NAME_ASC',
  RingNameDesc = 'RING_NAME_DESC',
  WeightAsc = 'WEIGHT_ASC',
  WeightDesc = 'WEIGHT_DESC'
}

/** All input for the `updateRikishiById` mutation. */
export type UpdateRikishiByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `Rikishi` being updated. */
  rikishiPatch: RikishiPatch;
};

/** All input for the `updateRikishi` mutation. */
export type UpdateRikishiInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Rikishi` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Rikishi` being updated. */
  rikishiPatch: RikishiPatch;
};

/** The output of our update `Rikishi` mutation. */
export type UpdateRikishiPayload = {
  __typename?: 'UpdateRikishiPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Rikishi` that was updated by this mutation. */
  rikishi?: Maybe<Rikishi>;
  /** An edge for our `Rikishi`. May be used by Relay 1. */
  rikishiEdge?: Maybe<RikishisEdge>;
};


/** The output of our update `Rikishi` mutation. */
export type UpdateRikishiPayloadRikishiEdgeArgs = {
  orderBy?: Maybe<Array<RikishisOrderBy>>;
};

export type GetRikishiQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRikishiQuery = { __typename?: 'Query', allRikishis?: { __typename?: 'RikishisConnection', nodes: Array<{ __typename?: 'Rikishi', ringName?: string | null | undefined, highestRank?: string | null | undefined, dateOfBirth?: any | null | undefined, birthPlace?: string | null | undefined } | null | undefined> } | null | undefined };


export const GetRikishiDocument = gql`
    query getRikishi {
  allRikishis {
    nodes {
      ringName
      highestRank
      dateOfBirth
      birthPlace
    }
  }
}
    `;

/**
 * __useGetRikishiQuery__
 *
 * To run a query within a React component, call `useGetRikishiQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRikishiQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRikishiQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRikishiQuery(baseOptions?: Apollo.QueryHookOptions<GetRikishiQuery, GetRikishiQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRikishiQuery, GetRikishiQueryVariables>(GetRikishiDocument, options);
      }
export function useGetRikishiLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRikishiQuery, GetRikishiQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRikishiQuery, GetRikishiQueryVariables>(GetRikishiDocument, options);
        }
export type GetRikishiQueryHookResult = ReturnType<typeof useGetRikishiQuery>;
export type GetRikishiLazyQueryHookResult = ReturnType<typeof useGetRikishiLazyQuery>;
export type GetRikishiQueryResult = Apollo.QueryResult<GetRikishiQuery, GetRikishiQueryVariables>;