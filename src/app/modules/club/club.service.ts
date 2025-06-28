import { generateRating } from '../../../util/generateRating';
import { IClub } from './club.interface';
import { Club } from './club.model';

const createClubToDB = async (clubData: IClub) => {
      const {rating, ...restClubData} = clubData;
      restClubData.rating = Number(rating) || 0;
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

      const clubs = await Promise.all((result?.map((club)=>{

            const { isOpen, closingHour, ...otherInfo } = club;

            // Get current time in HH:mm format
            const now = new Date();
            const currentHour = now.getHours().toString().padStart(2, '0');
            const currentMinute = now.getMinutes().toString().padStart(2, '0');
            const currentTime = `${currentHour}:${currentMinute}`;

            const isValid = currentTime === closingHour ? 'Closed' : 'Open';

            return {
                  ...otherInfo,
                  isOpen: isValid,
                  closingHour
            }

      })))

      return result;
};
const getAllApprovedClubs = async () => {
      const result = await Club.find({ isApproved: true });

      return result;
};
const getSingleClubFromDB = async (id: string) => {
      const result = await Club.findById(id);
      if (!result) {
            throw new Error('Club not found');
      }
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
      getSingleClubFromDB,
};
