import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { MemberService } from './member.service';

const createMember = catchAsync(async (req, res) => {
      const result = await MemberService.createMemberToDB(req.body);
      sendResponse(res, {
            success: true,
            statusCode: 200,
            message: 'Member created successfully',
            data: result,
      });
});
const getAllMember = catchAsync(async (req, res) => {
      const result = await MemberService.getAllMemberFromDB();
      sendResponse(res, {
            success: true,
            statusCode: 200,
            message: 'Members retrieved successfully',
            data: result,
      });
});
const deleteMember = catchAsync(async (req, res) => {
      const result = await MemberService.deleteMemberFromDB(req.params.id);
      sendResponse(res, {
            success: true,
            statusCode: 200,
            message: 'Member deleted successfully',
            data: result,
      });
});

export const MemberController = {
      createMember,
      getAllMember,

      deleteMember,
};
