import { ICreateAccount, IResetPassword } from "../types/emailTamplate";

const createAccount = (values: ICreateAccount) => {
  const data = {
    to: values.email,
    subject: "Verify your account",
    html: `<body style="font-family: Arial, sans-serif; background-color: #f9f9f9; margin: 50px; padding: 20px; color: #555;">
    <div style="width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fff; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
        <img src="https://i.postimg.cc/6pgNvKhD/logo.png" alt="Logo" style="display: block; margin: 0 auto 20px; width:150px" />
          <h2 style="color: #277E16; font-size: 24px; margin-bottom: 20px;">Hey! ${values.name}, Your Weed Map Barcelona Account Credentials</h2>
        <div style="text-align: center;">
            <p style="color: #555; font-size: 16px; line-height: 1.5; margin-bottom: 20px;">Your single use code is:</p>
            <div style="background-color: #277E16; width: 80px; padding: 10px; text-align: center; border-radius: 8px; color: #fff; font-size: 25px; letter-spacing: 2px; margin: 20px auto;">${values.otp}</div>
            <p style="color: #555; font-size: 16px; line-height: 1.5; margin-bottom: 20px;">This code is valid for 3 minutes.</p>
        </div>
    </div>
</body>`,
  };
  return data;
};
const resetOtp = (values: IResetPassword) => {
  const data = {
    to: values.email,
    subject: "Here is your email resend otp",
    html: `<body style="font-family: Arial, sans-serif; background-color: #f9f9f9; margin: 50px; padding: 20px; color: #555;">
    <div style="width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fff; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
        <img src="https://i.postimg.cc/6pgNvKhD/logo.png" alt="Logo" style="display: block; margin: 0 auto 20px; width:150px" />
          <h2 style="color: #277E16; font-size: 24px; margin-bottom: 20px;">Hey! ${values.email}, Your Weed Map Barcelona Account Credentials</h2>
        <div style="text-align: center;">
            <p style="color: #555; font-size: 16px; line-height: 1.5; margin-bottom: 20px;">Your single use code is:</p>
            <div style="background-color: #277E16; width: 80px; padding: 10px; text-align: center; border-radius: 8px; color: #fff; font-size: 25px; letter-spacing: 2px; margin: 20px auto;">${values.otp}</div>
            <p style="color: #555; font-size: 16px; line-height: 1.5; margin-bottom: 20px;">This code is valid for 3 minutes.</p>
        </div>
    </div>
</body>`,
  };
  return data;
};

const resetPassword = (values: IResetPassword) => {
  const data = {
    to: values.email,
    subject: "Reset your password",
    html: `<body style="font-family: Arial, sans-serif; background-color: #f9f9f9; margin: 50px; padding: 20px; color: #555;">
    <div style="width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fff; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
        <img src="https://i.postimg.cc/6pgNvKhD/logo.png" alt="Logo" style="display: block; margin: 0 auto 20px; width:150px" />
        <div style="text-align: center;">
            <p style="color: #555; font-size: 16px; line-height: 1.5; margin-bottom: 20px;">Your single use code is:</p>
            <div style="background-color: #277E16; width: 80px; padding: 10px; text-align: center; border-radius: 8px; color: #fff; font-size: 25px; letter-spacing: 2px; margin: 20px auto;">${values.otp}</div>
            <p style="color: #555; font-size: 16px; line-height: 1.5; margin-bottom: 20px;">This code is valid for 3 minutes.</p>
        </div>
    </div>
</body>`,
  };
  return data;
};

const contactMessageToUser = (values: { name: string; email: string }) => {
  const data = {
    to: values.email,
    subject: "Thank You for Contacting Us",
    html: `
      <body style="font-family: Arial, sans-serif; background-color: #000000; margin: 0; padding: 100px 0px; color: #CCCCCC;">
          <div style="width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #111111; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.5);">
              <img src="https://res.cloudinary.com/ddhhyc6mr/image/upload/v1735633616/logo_qqfbnl.png" alt="Logo" style="display: block; margin: 0 auto 20px; width: 150px;" />
              <h2 style="color: #277E16; font-size: 24px; margin-bottom: 20px; text-align: center;">Thank You, ${values.name}!</h2>
              <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px; text-align: center;">We have received your message and will get back to you shortly.</p>
              <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px; text-align: center;">If you have any urgent questions, feel free to reach out to us at <a href="mailto:apusutradhar77@gmail.com" style="color: #277E16; text-decoration: none;">apusutradhar77@gmail.com</a>.</p>
              <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px; text-align: center;">Best regards,<br>The Weed Map Barcelona Team</p>
          </div>
          <div style="text-align: center; margin-top: 20px; color: #777777; font-size: 14px;">
              <p>&copy; 2024 Weed Map Barcelona. All rights reserved.</p>
              <p><a href="https://barcelona-weed-map.vercel.app/" style="color: #277E16; text-decoration: none;">Visit our website</a></p>
          </div>
      </body>
      `,
  };
  return data;
};
const contactMessageToAdmin = (values: {
  name: string;
  email: string;
  message: string;
}) => {
  const data = {
    to: "apusutradhar77@gmail.com",
    subject: `New Contact Message from ${values.name}`,
    html: `
      <body style="font-family: Arial, sans-serif; background-color: #000000; margin: 0; padding: 100px 0px; color: #CCCCCC;">
          <div style="width: 100%; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #111111; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.5);">
              <img src="https://res.cloudinary.com/ddhhyc6mr/image/upload/v1735633616/logo_qqfbnl.png" alt="Logo" style="display: block; margin: 0 auto 20px; width: 150px;" />
              <h2 style="color: #277E16; font-size: 24px; margin-bottom: 20px; text-align: center;">New Contact Message Received</h2>
              <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px; text-align: center;"><strong>Name:</strong> ${values.name}</p>
              <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px; text-align: center;"><strong>Email:</strong> ${values.email}</p>
              <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px; text-align: center;"><strong>Message:</strong></p>
              <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px; text-align: center;">${values.message}</p>
              <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px; text-align: center;">Please respond to this message promptly if necessary.</p>
          </div>
          <div style="text-align: center; margin-top: 20px; color: #777777; font-size: 14px;">
              <p>&copy; 2024 Weed Map Barcelona. All rights reserved.</p>
              <p><a href="https://barcelona-weed-map.vercel.app/" style="color: #277E16; text-decoration: none;">Visit our website</a></p>
          </div>
      </body>
      `,
  };
  return data;
};

const memberShipRequestEmailTemplateForUser = (values: {
  name: string;
  email: string;
  clubName: string;
  contact: string;
  fee: number;
  ageLimit: number;
}) => {
  const { name, clubName, contact, fee, ageLimit } = values;
  const data = {
    to: values.email,
    subject: "Membership Request Confirmation",
    html: `
        <body style="font-family: Arial, sans-serif; background-color: #f4f4f9; margin: 0; padding: 0;">
            <div style="width: 100%; max-width: 600px; margin: 20px auto; padding: 20px; background-color: #ffffff; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
                <h2 style="color: #4caf50; font-size: 24px; margin-bottom: 20px; text-align: center;">Membership Request Confirmation</h2>
                <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px; text-align: center;">Hi <strong>${name}</strong>,</p>
                <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px; text-align: center;">Thank you for requesting membership at <strong>${clubName}</strong>!</p>
                <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px; text-align: center;">Here are the details of your request:</p>
                <ul style="list-style: none; padding: 0; color: #333;">
                    <li><strong>Club Name:</strong> ${clubName}</li>
                    <li><strong>Contact:</strong> ${contact}</li>
                    <li><strong>Membership Fee:</strong> €${fee}</li>
                    <li><strong>Age Limit:</strong> ${ageLimit}+</li>
                  
                </ul>
                <p style="font-size: 16px; line-height: 1.5; margin-top: 20px; text-align: center;">Your membership request is under review. You’ll receive an email once it’s approved.</p>
                <p style="font-size: 16px; line-height: 1.5; margin-top: 20px; text-align: center;">If you have any questions, feel free to reach out to us at <a href="mailto:support@barcelonaweedmap.com" style="color: #4caf50; text-decoration: none;">support@barcelonaweedmap.com</a>.</p>
                <p style="font-size: 16px; line-height: 1.5; margin-top: 20px; text-align: center;">Warm regards,<br><strong>The Green Leaf Team</strong></p>
            </div>
            <div style="text-align: center; margin-top: 20px; color: #888888; font-size: 14px;">
                <p>&copy; 2025 Green Leaf Cannabis Clubs. All rights reserved.</p>
                <p><a href="https://apu.binarybards.online" style="color: #4caf50; text-decoration: none;">Visit our website</a></p>
            </div>
        </body>
        `,
  };
  return data;
};

const memberShipRequestEmailTemplateForAdmin = (values: {
  name: string;
  clubName: string;
  address: string;
  fee: number;
  ageLimit: number;
  operatingHours: string;
  email: string;
}) => {
  const { name, clubName, address, fee, ageLimit, email } = values;
  const data = {
    to: "apusutradhar77@gmail.com",
    subject: "New Membership Request Received",
    html: `
        <body style="font-family: Arial, sans-serif; background-color: #f4f4f9; margin: 0; padding: 0;">
            <div style="width: 100%; max-width: 600px; margin: 20px auto; padding: 20px; background-color: #ffffff; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
                <h2 style="color: #ff5722; font-size: 24px; margin-bottom: 20px; text-align: center;">New Membership Request Notification</h2>
                <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px; text-align: center;">A new membership request has been received. Here are the details:</p>
                <ul style="list-style: none; padding: 0; color: #333;">
                    <li><strong>Applicant Name:</strong> ${name}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>Club Name:</strong> ${clubName}</li>
                    <li><strong>Address:</strong> ${address}</li>
                    <li><strong>Membership Fee:</strong> €${fee}</li>
                    <li><strong>Age Limit:</strong> ${ageLimit}+</li>
                  
                </ul>
                <p style="font-size: 16px; line-height: 1.5; margin-top: 20px; text-align: center;">Please review this request in the admin panel at your earliest convenience.</p>
                <p style="font-size: 16px; line-height: 1.5; margin-top: 20px; text-align: center;">Warm regards,<br><strong>The Notification System</strong></p>
            </div>
            <div style="text-align: center; margin-top: 20px; color: #888888; font-size: 14px;">
                <p>&copy; 2025 Barcelona Weed Map. All rights reserved.</p>
                <p><a href="https://apu.binarybards.online" style="color: #ff5722; text-decoration: none;">Visit the Admin Panel</a></p>
            </div>
        </body>
        `,
  };
  return data;
};

export const emailTemplate = {
  createAccount,
  resetPassword,
  resetOtp,
  contactMessageToUser,
  contactMessageToAdmin,
  memberShipRequestEmailTemplateForUser,
  memberShipRequestEmailTemplateForAdmin,
};
