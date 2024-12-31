import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { LinkService } from './link.service';

const getAllLink = catchAsync(async (req, res) => {
      const result = await LinkService.getAllLinkFromDB();
      sendResponse(res, {
            success: true,
            statusCode: 200,
            message: 'Links retrieved successfully',
            data: result,
      });
});
const createLink = catchAsync(async (req, res) => {
      console.log(req.files);
      const linkData = req.body.data ? JSON.parse(req.body.data) : {};
      if (req.files && 'icon' in req.files && req.files.icon[0]) {
            linkData.icon = `/icons/${req.files.icon[0].filename}`;
      }
      const result = await LinkService.createLinkToDB(linkData);
      sendResponse(res, {
            success: true,
            statusCode: 200,
            message: 'Link created successfully',
            data: result,
      });
});

const updateLink = catchAsync(async (req, res) => {
      const linkData = req.body.data ? JSON.parse(req.body.data) : {};
      if (req.files && 'icon' in req.files && req.files.icon[0]) {
            linkData.icon = `/icons/${req.files.icon[0].filename}`;
      }
      const result = await LinkService.updateLinkToDB(req.params.id, linkData);
      sendResponse(res, {
            success: true,
            statusCode: 200,
            message: 'Link updated successfully',
            data: result,
      });
});

const deleteLink = catchAsync(async (req, res) => {
      const result = await LinkService.deleteLinkFromDB(req.params.id);
      sendResponse(res, {
            success: true,
            statusCode: 200,
            message: 'Link deleted successfully',
            data: result,
      });
});

export const LinkController = {
      getAllLink,
      createLink,
      updateLink,
      deleteLink,
};
