import { model, Schema } from 'mongoose';
import { ISupport } from './support.interface';

const supportSchema = new Schema<ISupport>({
      phone: {
            type: String,
            required: true,
      },
      email: {
            type: String,
            required: true,
      },
      address: {
            type: String,
            required: true,
      },
});

export const Support = model<ISupport>('Support', supportSchema);
