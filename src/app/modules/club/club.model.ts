import { model, Schema } from 'mongoose';
import { IClub } from './club.interface';

const clubSchema = new Schema<IClub>({
      name: {
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
      memberShipFee: {
            type: Number,
            required: true,
      },
      ageLimit: {
            type: Number,
            required: true,
      },
      location: {
            latitude: {
                  type: Number,
                  required: true,
            },
            longitude: {
                  type: Number,
                  required: true,
            },
      },
      rating: {
            type: Number,
            required: true,
      },
      address: {
            type: String,
            required: true,
      },
      openingHour: {
            type: String,
            required: true,
      },
      closingHour: {
            type: String,
            required: true,
      },
      openDay: {
            type: String,
            required: true,
            default: 'sat-fri',
      },
      isApproved: {
            type: Boolean,
            default: false,
      },
});
clubSchema.virtual('isOpen').get(function () {
      const now = new Date();
      const currentTime = now.toTimeString().split(' ')[0].slice(0, 5);
      const openingHour = this.openingHour;
      const closingHour = this.closingHour;
      return currentTime >= openingHour && currentTime < closingHour;
});

clubSchema.set('toJSON', { virtuals: true });
clubSchema.set('toObject', { virtuals: true });

export const Club = model<IClub>('Club', clubSchema);
