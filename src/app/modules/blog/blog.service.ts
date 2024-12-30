import { IBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlogToDB = async (blogData: IBlog) => {
      const result = await Blog.create(blogData);
      return result;
};

export const BlogService = {
      createBlogToDB,
};
