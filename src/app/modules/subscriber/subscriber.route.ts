import { Router } from 'express';
import { SubscriberController } from './subscriber.controller';

const router = Router();
router.post('/create', SubscriberController.createSubscriber);
router.get('/', SubscriberController.getAllSubscriber);

export const SubscriberRoutes = router;
