import { Router } from 'express';
import { ContactController } from './contact.controller';

const router = Router();
router.post('/create', ContactController.createContact);
router.get('/', ContactController.getAllContact);

export const ContactRoutes = router;
