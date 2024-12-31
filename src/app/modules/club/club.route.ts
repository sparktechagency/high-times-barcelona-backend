import { Router } from 'express';
import fileUploadHandler from '../../middlewares/fileUploadHandler';
import { ClubController } from './club.controller';

const router = Router();

router.post('/create', fileUploadHandler(), ClubController.createClub);
router.patch('/:id', fileUploadHandler(), ClubController.updateClub);
router.get('/', ClubController.getAllClubs);
router.get('/approved', ClubController.getAllApprovedClubs);
router.delete('/:id', ClubController.deleteClub);
export const ClubRoutes = router;
