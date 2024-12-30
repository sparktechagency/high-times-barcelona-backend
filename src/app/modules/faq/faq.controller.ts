import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { FaqService } from './faq.service';

const getAllFaq = catchAsync(async (req, res) => {
      const { result, meta } = await FaqService.getAllFaqFromDB(req.query);

      sendResponse(res, {
            success: true,
            statusCode: 200,
            message: 'Faqs retrieved successfully',
            data: {
                  result,
                  meta,
            },
      });
});
const createFaq = catchAsync(async (req, res) => {
      const result = await FaqService.createFaqToDB(req.body);

      sendResponse(res, {
            success: true,
            statusCode: 200,
            message: 'Faq created successfully',
            data: result,
      });
});

const updateFaq = catchAsync(async (req, res) => {
      const result = await FaqService.updateFaqToDB(req.params.id, req.body);

      sendResponse(res, {
            success: true,
            statusCode: 200,
            message: 'Faq updated successfully',
            data: result,
      });
});
const deleteFaq = catchAsync(async (req, res) => {
      const result = await FaqService.deleteFaqToDB(req.params.id);

      sendResponse(res, {
            success: true,
            statusCode: 200,
            message: 'Faq deleted successfully',
            data: result,
      });
});

export const FaqController = {
      getAllFaq,
      createFaq,
      updateFaq,
      deleteFaq,
};
