import { Router } from 'express';
import { LinkController } from './link.controller';
import fileUploadHandler from '../../middlewares/fileUploadHandler';

const router = Router();
router.get('/', LinkController.getAllLink);
router.post('/create', fileUploadHandler(), LinkController.createLink);
router.patch('/:id', fileUploadHandler(), LinkController.updateLink);
router.delete('/:id', LinkController.deleteLink);

export const LinkRoutes = router;
