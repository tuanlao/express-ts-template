import { NextFunction, Response } from 'express';
import RequestWithUser from 'utils/rest/request';
import fmt from 'utils/formatter';
import * as service from './service';

const getUsers = (request: RequestWithUser, response: Response, next: NextFunction) => {
  const users = service.getUsers();
  response.status(200);
  response.send(fmt.formatResponse(users, Date.now() - request.startTime, 'OK', 1));
};

export { getUsers };
