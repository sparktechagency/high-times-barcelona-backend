import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { SupportService } from './support.service';

const getAllSupport = catchAsync(async (req, res) => {
      const result = await SupportService.getAllSupportFromDB();
      sendResponse(res, {
            success: true,
            statusCode: 200,
            message: 'Supports retrieved successfully',
            data: result,
      });
});
const createSupport = catchAsync(async (req, res) => {
      const result = await SupportService.createSupportToDB(req.body);
      sendResponse(res, {
            success: true,
            statusCode: 200,
            message: 'Support created successfully',
            data: result,
      });
});

export const SupportController = {
      createSupport,
      getAllSupport,
};
