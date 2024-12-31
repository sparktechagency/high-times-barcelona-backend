import { IMember } from './member.interface';
import { Member } from './member.model';

const createMemberToDB = async (memberData: IMember) => {
      const result = await Member.create(memberData);
      if (!result) {
            throw new Error('Could not create member');
      }
      return result;
};

const getAllMemberFromDB = async () => {
      const result = await Member.find({}).populate('club');
      return result;
};

const deleteMemberFromDB = async (id: string) => {
      const result = await Member.findByIdAndDelete(id);
      if (!result) {
            throw new Error('Member not found');
      }
      return result;
};

export const MemberService = {
      createMemberToDB,
      getAllMemberFromDB,
      deleteMemberFromDB,
};
