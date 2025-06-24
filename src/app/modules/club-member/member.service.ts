import QueryBuilder from "../../../builder/QueryBuilder";
import { emailHelper } from "../../../helpers/emailHelper";
import { emailTemplate } from "../../../shared/emailTemplate";
import { Club } from "../club/club.model";
import { IMember } from "./member.interface";
import { Member } from "./member.model";

const createMemberToDB = async (memberData: IMember & {memberNames: []}) => {
  const { memberNames, ...restData} = memberData;
  restData.name = memberNames;
  const club = await Club.findById(memberData.club);
  if (!club) {
    throw new Error("Club not found");
  }
  const result = await Member.create(restData);
  if (!result) {
    throw new Error("Could not create member");
  }
  
  const userEmail = emailTemplate.memberShipRequestEmailTemplateForUser({
    name: memberData.name,
    email: memberData.email,
    address: club.address,
    openDay: club.openDay,
    openingHour: club.openingHour,
    closingHour: club.closingHour,
    clubName: club.name,
  });

  const adminEmail = emailTemplate.memberShipRequestEmailTemplateForAdmin({
    name: memberData.name,
    email: memberData.email,
    clubName: club.name,
    address: club.address,
    fee: club.memberShipFee,
    ageLimit: club.ageLimit,
    openDay: club.openDay,
    openingHour: club.openingHour,
    closingHour: club.closingHour,
  });

  emailHelper.sendEmail(userEmail);
  emailHelper.sendEmail(adminEmail);

  return result;
};

const getAllMemberFromDB = async (query: Record<string, any>) => {
  const member = new QueryBuilder(Member.find(), query)
    .search(["name", "email"])
    .filter()
    .paginate()
    .sort()
    .fields()
    .populateFields("club");

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
    throw new Error("Member not found");
  }
  return result;
};

export const MemberService = {
  createMemberToDB,
  getAllMemberFromDB,
  deleteMemberFromDB,
};
