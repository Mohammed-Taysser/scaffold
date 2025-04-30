import { Router } from 'express';
import coreRoutes from '@/modules/core/core.routes';

const apiRouter = Router();

apiRouter.use('/core', coreRoutes);

export default apiRouter;
