import { NextFunction, Response } from 'express';
import RequestWithUser from 'utils/rest/request';
import fmt from 'utils/formatter';
import * as service from './service';

const getUsers = async (request: RequestWithUser, response: Response, next: NextFunction) => {
  const users = await service.getUsers(request.query);
  response.status(200);
  response.send(fmt.formatResponse(users, Date.now() - request.startTime, 'OK', 1));
};

const createUser = async (request: RequestWithUser, response: Response, next: NextFunction) => {
  const users = await service.createUser(request.body);
  response.status(200);
  response.send(fmt.formatResponse(users, Date.now() - request.startTime, 'OK', 1));
};

export { getUsers, createUser };
