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

export const ClubService = {
      createClubToDB,
};
