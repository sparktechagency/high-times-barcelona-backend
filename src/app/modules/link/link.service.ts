import { ILink } from './link.interface';
import { Link } from './link.model';

const createLinkToDB = async (linkData: ILink) => {
      console.log(linkData);
      const result = await Link.create(linkData);
      if (!result) {
            throw new Error('Could not create link');
      }
      return result;
};

const getAllLinkFromDB = async () => {
      const result = await Link.find({});
      return result;
};

export const LinkService = {
      createLinkToDB,
      getAllLinkFromDB,
};
