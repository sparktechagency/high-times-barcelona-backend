import { model, Schema } from 'mongoose';
import { ITerms } from './terms.interface';

const termsSchema = new Schema<ITerms>({
      content: {
            type: String,
            required: true,
      },
});

export const Terms = model<ITerms>('Terms', termsSchema);
