import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { BlogService } from './blog.service';

const getAllBlogs = catchAsync(async (req, res) => {
      const { result, meta } = await BlogService.getAllBlogsFromDB(req.query);

      sendResponse(res, {
            success: true,
            statusCode: 200,
            message: 'Blogs retrieved successfully',
            data: {
                  result,
                  meta,
            },
      });
});

const getSingleBlog = catchAsync(async (req, res) => {
      const result = await BlogService.getSingleBlogFromDB(req.params.id);
      sendResponse(res, {
            success: true,
            statusCode: 200,
            message: 'Blog retrieved successfully',
            data: result,
      });
});

const getPopularBlogs = catchAsync(async (req, res) => {
      const result = await BlogService.getPopularBlogsFromDB();
      sendResponse(res, {
            success: true,
            statusCode: 200,
            message: 'Popular Blogs retrieved successfully',
            data: result,
      });
});
const createBlog = catchAsync(async (req, res) => {
      const blogData = req.body.data ? JSON.parse(req.body.data) : {};
      if (req.files && 'blogImage' in req.files && req.files.blogImage[0]) {
            blogData.image = `/blogs/${req.files.blogImage[0].filename}`;
      }

      const result = await BlogService.createBlogToDB(blogData);
      sendResponse(res, {
            success: true,
            statusCode: 200,
            message: 'Blog created successfully',
            data: result,
      });
});

const updateBlog = catchAsync(async (req, res) => {
      const blogData = req.body.data ? JSON.parse(req.body.data) : {};
      if (req.files && 'blogImage' in req.files && req.files.blogImage[0]) {
            blogData.image = `/blogs/${req.files.blogImage[0].filename}`;
      }
      const result = await BlogService.updateBlogToDB(req.params.id, blogData);
      sendResponse(res, {
            success: true,
            statusCode: 200,
            message: 'Blog updated successfully',
            data: result,
      });
});

const deleteBlog = catchAsync(async (req, res) => {
      const result = await BlogService.deleteBlogFromDB(req.params.id);
      sendResponse(res, {
            success: true,
            statusCode: 200,
            message: 'Blog deleted successfully',
            data: result,
      });
});
export const BlogController = {
      createBlog,
      getAllBlogs,
      getSingleBlog,
      deleteBlog,
      updateBlog,
      getPopularBlogs,
};
