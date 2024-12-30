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
const updateSupport = catchAsync(async (req, res) => {
      const result = await SupportService.updateSupportToDB(req.params.id, req.body);
      sendResponse(res, {
            success: true,
            statusCode: 200,
            message: 'Support updated successfully',
            data: result,
      });
});
const deleteSupport = catchAsync(async (req, res) => {
      const result = await SupportService.deleteSupportFromDB(req.params.id);
      sendResponse(res, {
            success: true,
            statusCode: 200,
            message: 'Support deleted successfully',
            data: result,
      });
});
export const SupportController = {
      createSupport,
      getAllSupport,
      updateSupport,
      deleteSupport,
};
