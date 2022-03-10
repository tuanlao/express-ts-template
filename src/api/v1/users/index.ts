import { Router } from 'express';
import { asyncRouteHandler, validationMiddleware } from 'middlewares';
import * as controller from './controller';
import { CreateUserDto } from './dtos';

const router = Router();

router.get('/', asyncRouteHandler(controller.getUsers));
router.post('/', validationMiddleware(CreateUserDto, 'body'), asyncRouteHandler(controller.createUser));

export default router;
