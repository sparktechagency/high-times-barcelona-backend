import { StatusCodes } from 'http-status-codes';
import { Subscriber } from './subsriber.model';
import ApiError from '../../../errors/ApiError';

const createSubscriberToDB = async (payload: { email: string }) => {
      const isExist = await Subscriber.findOne({ email: payload.email });
      if (isExist) {
            throw new ApiError(StatusCodes.BAD_REQUEST, 'Subscriber already exist!');
      }
      const result = await Subscriber.create({ email: payload.email });
      return result;
};

const getAllSubscriberFromDB = async () => {
      const result = await Subscriber.find({}).sort({ createdAt: -1 });
      return result;
};

export const SubscriberService = {
      createSubscriberToDB,
      getAllSubscriberFromDB,
};
