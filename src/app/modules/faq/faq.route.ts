import { Router } from 'express';
import { FaqController } from './faq.controller';
import validateRequest from '../../middlewares/validateRequest';
import { FaqValidation } from './faq.validation';

const router = Router();

router.get('/', FaqController.getAllFaq);
router.post('/create', validateRequest(FaqValidation.createFaqZodSchema), FaqController.createFaq);
router.patch('/:id', FaqController.updateFaq);
router.delete('/:id', FaqController.deleteFaq);

export const FaqRoutes = router;
