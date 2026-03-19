/**
 * Application error base classes.
 */

/** Base error for all trusted-claw errors. */
export class AppError extends Error {
  public readonly statusCode: number;
  public readonly code: string;

  constructor(message: string, code = "APP_ERROR", statusCode = 500) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
    this.statusCode = statusCode;
    // Restore prototype chain for instanceof checks
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

/** Error for resource-not-found conditions (HTTP 404). */
export class NotFoundError extends AppError {
  constructor(message = "Not found") {
    super(message, "NOT_FOUND", 404);
  }
}

/** Error for authentication/authorization failures (HTTP 401). */
export class AuthError extends AppError {
  constructor(message = "Unauthorized") {
    super(message, "UNAUTHORIZED", 401);
  }
}

/** Error for bad input/validation failures (HTTP 400). */
export class ValidationError extends AppError {
  constructor(message = "Validation error") {
    super(message, "VALIDATION_ERROR", 400);
  }
}
