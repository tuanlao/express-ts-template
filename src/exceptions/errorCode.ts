export interface CustomError {
  CODE: string;
  MESSAGE: string;
}

export const ERROR_CODES = {
  DUPLICATED: 11000,
};

export const ErrorCodes: { [key: string]: CustomError } = {
  UNAUTHORIZED: {
    CODE: 'UNAUTHORIZED',
    MESSAGE: 'User is not allowed to perform this operation',
  },
  VALIDATION_ERROR: {
    CODE: 'VALIDATION_ERROR',
    MESSAGE: 'Validation failed error',
  },
  USER_WITH_ID_NOT_FOUND: {
    CODE: 'USER_WITH_ID_NOT_FOUND',
    MESSAGE: 'User with given id not found',
  },
  SERVICE_ERROR: {
    CODE: 'SERVICE_ERROR',
    MESSAGE: 'Obtained error from external service. Please check the logs.',
  },
  CUSTOMER_DATA_NOT_FOUND: {
    CODE: 'CUSTOMER_DATA_NOT_FOUND',
    MESSAGE: 'Customer data does not exist',
  },
  TOKEN_EXPIRED: {
    CODE: 'TOKEN_EXPIRED',
    MESSAGE: 'The incoming token has expired',
  },
  NOT_FOUND: {
    CODE: 'NOT_FOUND',
    MESSAGE: 'Not found',
  },
  BAD_REQUEST: {
    CODE: 'BAD_REQUEST',
    MESSAGE: 'Bad request',
  },
  TURN_NOT_FOUND: {
    CODE: 'TURN_NOT_FOUND',
    MESSAGE: 'Cannot find corresponding turn with the SO number',
  },
  TURN_LOG_NOT_FOUND: {
    CODE: 'TURN_LOG_NOT_FOUND',
    MESSAGE: 'Cannot find corresponding turn log with the SO number',
  },
  TURN_ALREADY_PLAYED: {
    CODE: 'TURN_ALREADY_PLAYED',
    MESSAGE: 'This turn is already played',
  },
  TURN_HAS_NOT_BEEN_PLAYED: {
    CODE: 'TURN_HAS_NOT_BEEN_PLAYED',
    MESSAGE: 'This turn has not been played',
  },
  GIFT_ALREADY_CLAIMED: {
    CODE: 'GIFT_ALREADY_CLAIMED',
    MESSAGE: 'This turn was finished and claimed',
  },
  TURN_EXPIRED: {
    CODE: 'TURN_EXPIRED',
    MESSAGE: 'This turn is expired',
  },
  REWARD_OUT_OF_STOCK: {
    CODE: 'REWARD_OUT_OF_STOCK',
    MESSAGE: `Don't have enough rewards in the event`,
  },
};
