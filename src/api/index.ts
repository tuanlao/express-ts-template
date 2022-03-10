import { Router } from 'express';
import v1Routers from './v1';
import healthRouter from './health';

const router = Router();

router.use('/v1', v1Routers);
router.use('/health', healthRouter);

export default router;
