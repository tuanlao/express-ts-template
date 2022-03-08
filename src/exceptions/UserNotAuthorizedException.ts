import HttpException from './HttpException';
import { ErrorCodes } from './errorCode';

/**
 * This exception can use used in case a user is not authorized to perform an action.
 */
class UserNotAuthorizedException extends HttpException {
  constructor() {
    const errorDetail = ErrorCodes.UNAUTHORIZED;
    super(401, errorDetail.MESSAGE, errorDetail.CODE);
  }
}

export default UserNotAuthorizedException;
