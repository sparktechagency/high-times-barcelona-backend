import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { LinkService } from './link.service';

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

export const LinkController = {
      createLink,
};
