import { Router } from 'express';
import { TermsController } from './terms.controller';

const router = Router();

router.get('/', TermsController.getAllTerms);
router.post('/create', TermsController.createTerms);

export const TermsRoutes = router;
