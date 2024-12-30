import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { TermsService } from './terms.service';

const getAllTerms = catchAsync(async (req, res) => {
      const result = await TermsService.getAllTermsFromDB();
      sendResponse(res, {
            success: true,
            statusCode: 200,
            message: 'Terms retrieved successfully',
            data: result,
      });
});
const createTerms = catchAsync(async (req, res) => {
      const result = await TermsService.createTermsToDB(req.body);
      sendResponse(res, {
            success: true,
            statusCode: 200,
            message: 'Terms created successfully',
            data: result,
      });
});

export const TermsController = {
      getAllTerms,
      createTerms,
};
