import { ISupport } from './support.interface';
import { Support } from './support.model';

const getAllSupportFromDB = async () => {
      const result = await Support.find({});
      return result;
};

const createSupportToDB = async (supportData: ISupport) => {
      const result = await Support.findOneAndUpdate({ email: supportData.email }, supportData, {
            new: true,
            upsert: true,
      });
      return result;
};

export const SupportService = {
      createSupportToDB,
      getAllSupportFromDB,
};
