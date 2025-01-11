import { Router } from 'express';
import fileUploadHandler from '../../middlewares/fileUploadHandler';
import { ClubController } from './club.controller';

const router = Router();

router.get('/approved', ClubController.getAllApprovedClubs);
router.get('/', ClubController.getAllClubs);
router.post('/create', fileUploadHandler(), ClubController.createClub);
router.patch('/:id', fileUploadHandler(), ClubController.updateClub);
router.get('/:id', ClubController.getSingleClub);
router.delete('/:id', ClubController.deleteClub);

export const ClubRoutes = router;
