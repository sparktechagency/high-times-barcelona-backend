import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ClubService } from './club.service';

const createClub = catchAsync(async (req, res) => {
      console.log(req.files);
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
const updateClub = catchAsync(async (req, res) => {
      const clubData = req.body.data ? JSON.parse(req.body.data) : {};

      if (req.files && 'clubImage' in req.files && req.files.clubImage[0]) {
            clubData.image = `/clubs/${req.files.clubImage[0].filename}`;
      }
      const result = await ClubService.updateClubToDB(req.params.id, clubData);
      sendResponse(res, {
            success: true,
            statusCode: 200,
            message: 'Club updated successfully',
            data: result,
      });
});
const getAllClubs = catchAsync(async (req, res) => {
      const result = await ClubService.getAllClubsFromDB();
      sendResponse(res, {
            success: true,
            statusCode: 200,
            message: 'Clubs retrieved successfully',
            data: result,
      });
});
const getAllApprovedClubs = catchAsync(async (req, res) => {
      const result = await ClubService.getAllApprovedClubs();
      sendResponse(res, {
            success: true,
            statusCode: 200,
            message: 'Approved Clubs retrieved successfully',
            data: result,
      });
});
const getSingleClub = catchAsync(async (req, res) => {
      const result = await ClubService.getSingleClubFromDB(req.params.id);
      sendResponse(res, {
            success: true,
            statusCode: 200,
            message: 'Club retrieved successfully',
            data: result,
      });
});
const deleteClub = catchAsync(async (req, res) => {
      const result = await ClubService.deleteClubFromDB(req.params.id);
      sendResponse(res, {
            success: true,
            statusCode: 200,
            message: 'Club deleted successfully',
            data: result,
      });
});
export const ClubController = {
      createClub,
      getAllClubs,
      getAllApprovedClubs,
      updateClub,
      deleteClub,
      getSingleClub,
};
