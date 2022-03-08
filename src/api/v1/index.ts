import { Router } from 'express';
import healthRouter from './health';

const router = Router();

router.use('/health', healthRouter);

export default router;
