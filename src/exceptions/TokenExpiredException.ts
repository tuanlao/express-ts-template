import HttpException from './HttpException';
import { ErrorCodes } from './errorCode';

/**
 * This exception can use used in case a user is not authorized to perform an action.
 */
class TokenExpiredException extends HttpException {
  constructor() {
    const errorDetail = ErrorCodes.TOKEN_EXPIRED;
    super(401, errorDetail.MESSAGE, errorDetail.CODE);
  }
}

export default TokenExpiredException;
