import { Router } from 'express';
import { asyncRouteHandler } from 'middlewares';
import { checkHealth } from './controller';

const router = Router();

router.get('/', asyncRouteHandler(checkHealth));

export default router;
