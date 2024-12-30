import { ISupport } from './support.interface';
import { Support } from './support.model';

const getAllSupportFromDB = async () => {
      const result = await Support.find({});
      return result;
};
const createSupportToDB = async (supportData: ISupport) => {
      const result = await Support.create(supportData);
      return result;
};
const updateSupportToDB = async (id: string, supportData: ISupport) => {
      const result = await Support.findOneAndUpdate({ _id: id }, supportData, { new: true });
      return result;
};

const deleteSupportFromDB = async (id: string) => {
      const result = await Support.findByIdAndDelete(id);
      return result;
};

export const SupportService = {
      createSupportToDB,
      updateSupportToDB,
      deleteSupportFromDB,
      getAllSupportFromDB,
};
