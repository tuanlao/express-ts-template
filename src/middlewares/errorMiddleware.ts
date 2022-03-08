import { NextFunction, Request, Response } from 'express';
import logger from 'logger';
import fmt from 'utils/formatter';
import { HttpException } from 'exceptions';

/**
 * Global handler for Errors sending the message and status
 * @param error
 * @param request
 * @param response
 * @param next
 */
const errorMiddleware = (error: HttpException, request: Request, response: Response, next: NextFunction) => {
  const apiErrorStatus = (error as any).response?.status;
  const status = apiErrorStatus || error.status || 500;
  const message = error.message || 'Something went wrong';
  const errorCode = error.errorCode || 'ERROR_CODE_NOT_FOUND';
  const validationErrors = error.validationErrors;
  const additionalInfo = error?.response?.data;
  if (status === 500) {
    logger.error(
      error.message +
        ` Error Info:${JSON.stringify(additionalInfo)} Request Config:${JSON.stringify((error as any).config)}`
    );
  } else {
    logger.warn(
      error.message +
        ` Warn Info:${JSON.stringify(additionalInfo)} Request Config:${JSON.stringify((error as any).config)}`
    );
    if (validationErrors) {
      logger.warn(`validation errors : ${JSON.stringify(validationErrors)}`);
    }
  }
  response
    .status(status)
    .send(
      fmt.formatResponse(
        new HttpException(status, message, errorCode, validationErrors),
        0,
        additionalInfo?.message || message
      )
    );
};

export { errorMiddleware };
