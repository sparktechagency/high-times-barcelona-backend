import { ILink } from './link.interface';
import { Link } from './link.model';

const createLinkToDB = async (linkData: ILink) => {
      const isExist = await Link.findOne({ url: linkData.url });
      if (isExist) {
            throw new Error('This Link already exist');
      }
      const result = await Link.create(linkData);

      if (!result) {
            throw new Error('Could not create link');
      }
      return result;
};
const updateLinkToDB = async (id: string, linkData: ILink) => {
      const result = await Link.findOneAndUpdate({ _id: id }, linkData, {
            new: true,
      });
      if (!result) {
            throw new Error('Link not found');
      }
      return result;
};
const getAllLinkFromDB = async () => {
      const result = await Link.find({});
      return result;
};

const deleteLinkFromDB = async (id: string) => {
      const result = await Link.findByIdAndDelete(id);
      if (!result) {
            throw new Error('Link not found');
      }
      return result;
};
export const LinkService = {
      createLinkToDB,
      getAllLinkFromDB,
      updateLinkToDB,
      deleteLinkFromDB,
};
