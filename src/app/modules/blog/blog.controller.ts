import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { BlogService } from './blog.service';

const createBlog = catchAsync(async (req, res) => {
      const blogData = req.body.data ? JSON.parse(req.body.data) : {};
      if (req.files && 'image' in req.files && req.files.image[0]) {
            blogData.image = `/images/blogs/${req.files.image[0].filename}`;
      }

      console.log(blogData);

      const result = await BlogService.createBlogToDB(blogData);
      sendResponse(res, {
            success: true,
            statusCode: 200,
            message: 'Blog created successfully',
            data: result,
      });
});

export const BlogController = {
      createBlog,
};
