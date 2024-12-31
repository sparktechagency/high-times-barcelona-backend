import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ContactService } from './contact.service';

const createContact = catchAsync(async (req, res) => {
      const result = await ContactService.createContactToDB(req.body);
      sendResponse(res, {
            success: true,
            statusCode: 200,
            message: 'Contact created successfully',
            data: result,
      });
});

const getAllContact = catchAsync(async (req, res) => {
      const result = await ContactService.getAllContactFromDB();
      sendResponse(res, {
            success: true,
            statusCode: 200,
            message: 'Contacts retrieved successfully',
            data: result,
      });
});

export const ContactController = {
      createContact,
      getAllContact,
};
