import { model, Schema } from 'mongoose';
import { ILink } from './link.interface';

const linkSchema = new Schema<ILink>({
      name: {
            type: String,
            required: true,
      },
      url: {
            type: String,
            required: true,
      },
      icon: {
            type: String,
            required: true,
      },
});

export const Link = model<ILink>('Link', linkSchema);
