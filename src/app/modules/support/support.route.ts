import { Router } from 'express';
import { SupportController } from './support.controller';
import validateRequest from '../../middlewares/validateRequest';
import { SupportValidation } from './support.validation';

const router = Router();
router.get('/', SupportController.getAllSupport);
router.post('/create', validateRequest(SupportValidation.supportZodSchema), SupportController.createSupport);

export const SupportRoutes = router;
