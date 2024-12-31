import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { SubscriberService } from './subscriber.service';

const createSubscriber = catchAsync(async (req, res) => {
      console.log(req.body);
      const result = await SubscriberService.createSubscriberToDB(req.body);
      sendResponse(res, {
            success: true,
            statusCode: 200,
            message: 'Subscriber created successfully',
            data: result,
      });
});

const getAllSubscriber = catchAsync(async (req, res) => {
      const result = await SubscriberService.getAllSubscriberFromDB();
      sendResponse(res, {
            success: true,
            statusCode: 200,
            message: 'Subscribers retrieved successfully',
            data: result,
      });
});

export const SubscriberController = {
      createSubscriber,
      getAllSubscriber,
};
