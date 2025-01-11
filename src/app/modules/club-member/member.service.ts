import QueryBuilder from '../../../builder/QueryBuilder';
import { IMember } from './member.interface';
import { Member } from './member.model';

const createMemberToDB = async (memberData: IMember) => {
      const result = await Member.create(memberData);
      if (!result) {
            throw new Error('Could not create member');
      }
      return result;
};

const getAllMemberFromDB = async (query: Record<string, any>) => {
      const member = new QueryBuilder(Member.find(), query)
            .search(['name', 'email'])
            .filter()
            .paginate()
            .sort()
            .fields()
            .populateFields('club');

      await member.executePopulate();
      const result = await member.modelQuery;
      const meta = await member.countTotal();

      return {
            result,
            meta,
      };
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
