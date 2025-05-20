import { model, Schema } from 'mongoose';
import { IMember } from './member.interface';

const memberSchema = new Schema<IMember>(
      {
            name: {
                  type: [String],
                  required: true,
            },
            email: {
                  type: String,
                  required: true,
            },
            contact: {
                  type: String,
                  required: true,
            },
            club: {
                  type: Schema.Types.ObjectId,
                  ref: 'Club',
                  required: true,
            },
            numberOfVisitors: {
                  type: Number,
                  required: true,
            },
            date: {
                  type: Date,
                  required: true,
            },
      },
      {
            timestamps: true,
      },
);

export const Member = model<IMember>('Member', memberSchema);
