import { generateRating } from '../../../util/generateRating';
import { IClub } from './club.interface';
import { Club } from './club.model';

const createClubToDB = async (clubData: IClub) => {
      clubData.rating = generateRating();
      const result = await Club.create(clubData);
      if (!result) {
            throw new Error('Could not create club');
      }
      return result;
};
const updateClubToDB = async (id: string, clubData: IClub) => {
      const result = await Club.findOneAndUpdate({ _id: id }, clubData, {
            new: true,
      });
      if (!result) {
            throw new Error('Club not found');
      }
      return result;
};
const getAllClubsFromDB = async () => {
      const result = await Club.find({});
      return result;
};
const getAllApprovedClubs = async () => {
      const result = await Club.find({ isApproved: true });

      return result;
};

const deleteClubFromDB = async (id: string) => {
      const result = await Club.findByIdAndDelete(id);
      if (!result) {
            throw new Error('Club not found');
      }
      return result;
};

export const ClubService = {
      createClubToDB,
      getAllClubsFromDB,
      getAllApprovedClubs,
      updateClubToDB,
      deleteClubFromDB,
};
