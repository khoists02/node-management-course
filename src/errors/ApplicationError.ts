export default class ApplicationError extends Error {
  status: number;

  code: string;

  params: { [key: string]: string } = {};

  constructor(...args: any) {
    super();

    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain

    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;

    this.message = "Server Error";

    this.status = 500;

    this.code = "0";

    this.setState(args);
  }

  withParam(key: string, value: string) {
    this.params[key] = value;
    return this;
  }

  setState(args: any) {
    if (args === undefined) return;
    if (args.length === 1 && typeof args[0] === "object") {
      this.message = args[0].message;
      this.code = args[0].code;
    } else if (args.length === 1 && typeof args[0] === "string") {
      [this.message] = args;
    } else if (args.length === 2) {
      [this.message, this.code] = args;
    } else if (args.length === 3) {
      [this.message, this.code, this.status] = args;
    }
  }
}
