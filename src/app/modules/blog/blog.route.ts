import { Router } from 'express';
import { BlogController } from './blog.controller';
import fileUploadHandler from '../../middlewares/fileUploadHandler';

const router = Router();

router.get('/', BlogController.getAllBlogs);
router.get('/:id', BlogController.getSingleBlog);

router.post('/create', fileUploadHandler(), BlogController.createBlog);
router.patch('/:id', fileUploadHandler(), BlogController.updateBlog);
router.delete('/:id', BlogController.deleteBlog);

export const BlogRoutes = router;
