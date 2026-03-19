/**
 * File-based locking utility.
 * Provides cooperative per-resource locking backed by lock files.
 * TODO: implement — write PID-based lock files with retry/timeout logic
 */

/** Acquire a lock for the given resource key. Returns a release function. */
export async function acquireLock(
  _resourceKey: string
): Promise<() => Promise<void>> {
  // TODO: implement — create a .lock file, retry with backoff, handle stale locks
  return async () => {
    // TODO: implement — remove the .lock file
  };
}

/**
 * Run an async function while holding a lock for the given resource key.
 * Automatically releases the lock when the function completes or throws.
 */
export async function withLock<T>(
  resourceKey: string,
  fn: () => Promise<T>
): Promise<T> {
  // TODO: implement
  const release = await acquireLock(resourceKey);
  try {
    return await fn();
  } finally {
    await release();
  }
}
