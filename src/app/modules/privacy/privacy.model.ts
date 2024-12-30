import { model, Schema } from 'mongoose';
import { IPrivacy } from './privacy.interface';

const privacySchema = new Schema<IPrivacy>({
      content: {
            type: String,
            required: true,
      },
});

export const Privacy = model<IPrivacy>('Privacy', privacySchema);
