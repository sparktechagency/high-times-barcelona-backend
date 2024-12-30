import { ITerms } from './terms.interface';
import { Terms } from './terms.model';

const getAllTermsFromDB = async () => {
      const result = await Terms.find({});
      return result;
};
const createTermsToDB = async (termsData: ITerms) => {
      const result = await Terms.findOneAndReplace({ content: { $exists: true } }, termsData, {
            new: true,
            upsert: true,
      });
      return result;
};

export const TermsService = {
      getAllTermsFromDB,
      createTermsToDB,
};
