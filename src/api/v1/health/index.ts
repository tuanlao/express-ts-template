import { Router } from 'express';
import { checkHealth } from './controller';

const router = Router();

router.get('/', checkHealth);

export default router;
