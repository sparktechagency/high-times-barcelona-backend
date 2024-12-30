import { Router } from 'express';
import { PrivacyController } from './privacy.controller';

const router = Router();

router.get('/', PrivacyController.getAllPrivacy);
router.post('/create', PrivacyController.createPrivacy);

export const PrivacyRoutes = router;
