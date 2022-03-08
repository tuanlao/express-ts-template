import { ValidationError } from 'class-validator';
import { APP_CONSTANTS } from 'utils/constants';

class HttpException extends Error {
  public status: number;

  public message: string;

  public errorCode: string;

  public service: string;

  public validationErrors: ValidationError[];

  public response: any;

  constructor(status: number, message: string, errorCode: string, validationErrors?: ValidationError[]) {
    super(message);
    this.status = status;
    this.message = message;
    this.errorCode = errorCode;
    this.service = APP_CONSTANTS.service;
    this.validationErrors = validationErrors;
  }
}

export default HttpException;
