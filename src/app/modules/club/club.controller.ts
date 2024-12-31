import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ClubService } from './club.service';

const createClub = catchAsync(async (req, res) => {
      const clubData = req.body.data ? JSON.parse(req.body.data) : {};

      if (req.files && 'clubImage' in req.files && req.files.clubImage[0]) {
            clubData.image = `/clubs/${req.files.clubImage[0].filename}`;
      }
      const result = await ClubService.createClubToDB(clubData);
      sendResponse(res, {
            success: true,
            statusCode: 200,
            message: 'Club created successfully',
            data: result,
      });
});

export const ClubController = {
      createClub,
};
