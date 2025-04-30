import { Router } from 'express';
import coreController from './core.controller';

const coreRoutes = Router();

coreRoutes.get('/health', coreController.healthCheck);

export default coreRoutes;
