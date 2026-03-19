/**
 * Shared common types used throughout trusted-claw.
 */

/** Any JSON-serializable value. */
export type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

/** Arbitrary key/value metadata attached to sessions, events, etc. */
export type Metadata = Record<string, JsonValue>;

/** Pagination parameters for list operations. */
export interface Pagination {
  limit: number;
  offset: number;
}

/** Paginated result wrapper. */
export interface PaginatedResult<T> {
  items: T[];
  total: number;
  limit: number;
  offset: number;
}
