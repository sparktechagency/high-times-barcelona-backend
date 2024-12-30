import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { PrivacyService } from './privacy.service';

const getAllPrivacy = catchAsync(async (req, res) => {
      const result = await PrivacyService.getPrivacyFromDB();
      sendResponse(res, {
            success: true,
            statusCode: 200,
            message: 'Privacy retrieved successfully',
            data: result,
      });
});
const createPrivacy = catchAsync(async (req, res) => {
      const result = await PrivacyService.createPrivacyToDB(req.body);
      sendResponse(res, {
            success: true,
            statusCode: 200,
            message: 'Privacy created successfully',
            data: result,
      });
});

export const PrivacyController = {
      createPrivacy,
      getAllPrivacy,
};
