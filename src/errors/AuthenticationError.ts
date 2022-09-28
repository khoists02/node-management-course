import ApplicationError from "./ApplicationError";

export default class AuthenticationError extends ApplicationError {
  constructor(...args: any) {
    super(...args);

    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;

    this.message = "Unauthorized";

    this.status = 401;

    this.code = "401";

    this.setState(args);
  }
}
