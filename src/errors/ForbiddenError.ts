import ApplicationError from "./ApplicationError";

export default class ForbiddenError extends ApplicationError {
  constructor(...args: any) {
    super(args);

    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;

    this.message = "Forbidden";

    this.status = 403;

    this.code = "403";

    this.setState(args);
  }
}
