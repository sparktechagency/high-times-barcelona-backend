import { IPrivacy } from './privacy.interface';
import { Privacy } from './privacy.model';

const getPrivacyFromDB = async () => {
      const result = await Privacy.find({});
      return result;
};
const createPrivacyToDB = async (privacyData: IPrivacy) => {
      const result = await Privacy.findOneAndReplace({ content: { $exists: true } }, privacyData, {
            new: true,
            upsert: true,
      });
      return result;
};

export const PrivacyService = {
      getPrivacyFromDB,
      createPrivacyToDB,
};
