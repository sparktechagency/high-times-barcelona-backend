import { Router } from 'express';
import { LinkController } from './link.controller';
import fileUploadHandler from '../../middlewares/fileUploadHandler';

const router = Router();

router.post('/create', fileUploadHandler(), LinkController.createLink);

export const LinkRoutes = router;
