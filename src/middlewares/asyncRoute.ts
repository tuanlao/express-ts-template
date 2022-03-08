import { NextFunction, Response } from 'express';
import RequestWithUser from 'utils/rest/request';

export const asyncRouteHandler = (fn: (arg0: RequestWithUser, arg1: Response, arg2: NextFunction) => any) => {
  return async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
