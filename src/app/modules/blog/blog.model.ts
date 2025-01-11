import { model, Schema } from 'mongoose';
import { IBlog } from './blog.interface';

const blogSchema = new Schema<IBlog>(
      {
            title: {
                  type: String,
                  required: true,
            },
            description: {
                  type: String,
                  required: true,
            },
            image: {
                  type: String,
                  required: true,
            },
            tags: {
                  type: [String],
                  required: true,
            },
            views: {
                  type: Number,
                  default: 0,
            },
      },
      {
            timestamps: true,
      },
);

blogSchema.post('find', function (docs) {
      if (Array.isArray(docs)) {
            docs.forEach((doc) => {
                  if (doc.views !== undefined) {
                        delete doc._doc.views;
                  }
            });
      }
});

// Middleware for 'findOne'
blogSchema.post('findOne', function (doc) {
      if (doc && doc.views !== undefined) {
            delete doc._doc.views;
      }
});

export const Blog = model<IBlog>('Blog', blogSchema);
