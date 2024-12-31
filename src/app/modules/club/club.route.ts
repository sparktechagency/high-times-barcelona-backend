import { Router } from 'express';
import fileUploadHandler from '../../middlewares/fileUploadHandler';
import { ClubController } from './club.controller';

const router = Router();

router.post('/create', fileUploadHandler(), ClubController.createClub);

export const ClubRoutes = router;
