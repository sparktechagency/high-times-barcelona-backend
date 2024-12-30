import { Router } from 'express';
import { BlogController } from './blog.controller';
import fileUploadHandler from '../../middlewares/fileUploadHandler';

const router = Router();
router.post('/create', fileUploadHandler(), BlogController.createBlog);

export const BlogRoutes = router;
