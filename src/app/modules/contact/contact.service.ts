import { emailHelper } from '../../../helpers/emailHelper';
import { emailTemplate } from '../../../shared/emailTemplate';
import { IContact } from './contact.interface';
import { Contact } from './contact.model';

const createContactToDB = async (contactData: IContact) => {
      const result = await Contact.create(contactData);
      if (!result) {
            throw new Error('Could not create contact');
      }

      const userEmail = emailTemplate.contactMessageToUser(contactData);
      const adminEmail = emailTemplate.contactMessageToAdmin(contactData);
      emailHelper.sendEmail(userEmail);
      emailHelper.sendEmail(adminEmail);

      return result;
};

const getAllContactFromDB = async () => {
      const result = await Contact.find({});
      return result;
};

export const ContactService = {
      createContactToDB,
      getAllContactFromDB,
};
