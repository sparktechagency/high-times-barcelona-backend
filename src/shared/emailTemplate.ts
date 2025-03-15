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
  address: string;
  closingHour: string;
  openingHour: string;
  openDay: string;
  clubName: string;
}) => {
  const { name, clubName, email, address, openingHour, closingHour, openDay } =
    values;
  const data = {
    to: values.email,
    subject: "Membership Request Confirmation",
    html: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Club Invitation</title>
        <!--[if mso]>
          <style type="text/css">
            table {
              border-collapse: collapse;
              border-spacing: 0;
              margin: 0;
            }
            div,
            td {
              padding: 0;
            }
            div {
              margin: 0 !important;
            }
          </style>
          <noscript>
            <xml>
              <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
              </o:OfficeDocumentSettings>
            </xml>
          </noscript>
        <![endif]-->
      </head>
    
      <body
        style="
          font-family: Arial, sans-serif;
          background-color: #f9fafb;
          padding: 20px;
          margin: 0;
        "
      >
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td align="center">
              <table
                cellpadding="0"
                cellspacing="0"
                border="0"
                style="
                  max-width: 700px;
                  background-color: #f9fafb;
                  padding: 20px;
                  width: 100%;
                "
              >
                <!-- Header -->
                <tr>
                  <td>
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td>
                          <p style="font-size: 14px; color: #4b5563; margin-top: 0">
                            Save this letter to show at the reception in the club
                          </p>
                          <h1
                            style="
                              font-size: 32px;
                              font-weight: bold;
                              color: #10b981;
                              margin-top: 16px;
                            "
                          >
                            High Times Barcelona
                          </h1>
                        </td>
                        <td align="right">
                          <table
                            cellpadding="8"
                            cellspacing="0"
                            border="0"
                            bgcolor="#e5e7eb"
                            style="border-radius: 9999px"
                          >
                            <tr>
                              <td align="center" valign="middle">
                                <table cellpadding="0" cellspacing="0" border="0">
                                  <tr>
                                    <td valign="middle">
                                      <svg
                                        width="28"
                                        height="28"
                                        viewBox="0 0 31 31"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style="color: #6b7280"
                                      >
                                        <path
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                          d="M9.06528 20.417L21.4098 20.417C24.8187 20.417 27.5821 23.1804 27.5821 26.5893C27.5821 27.2711 27.0294 27.8237 26.3476 27.8237C25.7146 27.8237 25.1928 27.3472 25.1215 26.7332L25.1069 26.3717C24.9984 24.4997 23.4995 23.0007 21.6274 22.8922L21.4098 22.8859L9.06528 22.8859C7.01997 22.8859 5.36191 24.544 5.36191 26.5893C5.36191 27.2711 4.80923 27.8237 4.12746 27.8237C3.44569 27.8237 2.89301 27.2711 2.89301 26.5893C2.89301 23.2701 5.5129 20.5629 8.79754 20.4227L9.06528 20.417L21.4098 20.417L9.06528 20.417ZM15.2376 3.13464C19.3282 3.13464 22.6443 6.45075 22.6443 10.5414C22.6443 14.632 19.3282 17.9481 15.2376 17.9481C11.1469 17.9481 7.83082 14.632 7.83082 10.5414C7.83082 6.45075 11.1469 3.13464 15.2376 3.13464ZM15.2376 5.60355C12.5105 5.60355 10.2997 7.81429 10.2997 10.5414C10.2997 13.2685 12.5105 15.4792 15.2376 15.4792C17.9646 15.4792 20.1754 13.2685 20.1754 10.5414C20.1754 7.81429 17.9646 5.60355 15.2376 5.60355Z"
                                          fill="currentColor"
                                        />
                                      </svg>
                                    </td>
                                    <td valign="middle" style="padding-left: 8px">
                                      <span style="color: #10b981; font-weight: 500"
                                        >${name}</span
                                      >
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
    
                <!-- Location and Hours Card -->
                <tr>
                  <td style="padding-top: 24px">
                    <table
                      width="100%"
                      cellpadding="0"
                      cellspacing="0"
                      border="0"
                      style="border-radius: 16px; overflow: hidden"
                    >
                      <tr>
                        <td style="padding-top: 24px">
                          <table
                            width="100%"
                            cellpadding="0"
                            cellspacing="0"
                            border="0"
                            style="border-radius: 16px; overflow: hidden"
                          >
                            <tr>
                              <td
                             bgcolor="#040"
                                background="https://png.pngtree.com/thumb_back/fh260/background/20230515/pngtree-weed-leaves-image_2565117.jpg"
                                style="
                                  background-blend-mode: multiply;
                                  padding: 24px;
                                  color: white;
                                  background-size: cover;
                                  background-position: center;
                                  border-radius: 16px;
                                "
                              >
                                <table
                                  width="100%"
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                >
                                  <tr>
                                    <!-- Left content column (70% width) -->
                                    <td width="70%" valign="top">
                                      <h2
                                        style="
                                          font-size: 24px;
                                          font-weight: bold;
                                          margin-bottom: 16px;
                                          margin-top: 0;
                                          color: white;
                                        "
                                      >
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                          style="
                                            vertical-align: middle;
                                            margin-right: 5px;
                                          "
                                        >
                                          <path
                                            opacity="0.4"
                                            d="M9.25 11H14.75"
                                            stroke="#FFF"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                          />
                                          <path
                                            d="M3.6202 8.49C5.5902 -0.169998 18.4202 -0.159997 20.3802 8.5C21.5302 13.58 18.3702 17.88 15.6002 20.54C13.5902 22.48 10.4102 22.48 8.3902 20.54C5.6302 17.88 2.4702 13.57 3.6202 8.49Z"
                                            stroke="#FFF"
                                            stroke-width="1.5"
                                          />
                                        </svg>
                                        OUR LOCATION
                                      </h2>
                                      <p
                                        style="
                                          font-weight: 500;
                                          margin-top: 0;
                                          margin-bottom: 4px;
                                        "
                                      >
                                       ${clubName}
                                      </p>
                                      <p
                                        style="
                                          text-decoration: underline;
                                          margin-top: 0;
                                        "
                                      >
                                        ${address}
                                     
                                      </p>
    
                                      <h2
                                        style="
                                          font-size: 24px;
                                          font-weight: bold;
                                          margin-top: 24px;
                                          margin-bottom: 16px;
                                          color: white;
                                        "
                                      >
                                        OPENING HOURS
                                      </h2>
                                      <p
                                        style="
                                          font-weight: 500;
                                          margin-top: 0;
                                          margin-bottom: 4px;
                                        "
                                      >
                                        ${openDay} FROM ${openingHour} TO ${closingHour}
                                      </p>
                                     
                                    </td>
    
                                    <!-- Right QR code column (30% width) -->
                                    <td width="30%" align="center" valign="middle">
                                      <div
                                        style="
                                          width: 96px;
                                          height: 96px;
                                          background-color: white;
                                          padding: 8px;
                                          border-radius: 50%;
                                          margin: 0 auto;
                                        "
                                      >
                                        <img
                                          src="https://pngimg.com/uploads/qr_code/small/qr_code_PNG33.png"
                                          alt="QR Code"
                                          style="width: 100%; height: 100%"
                                        />
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
    
                <!-- Club Info -->
                <tr>
                  <td style="padding-top: 24px">
                    <table
                      width="100%"
                      cellpadding="24"
                      cellspacing="0"
                      border="0"
                      bgcolor="#FFFFFF"
                      style="border-radius: 16px"
                    >
                      <tr>
                        <td>
                          <table
                            width="100%"
                            cellpadding="0"
                            cellspacing="0"
                            border="0"
                          >
                            <tr>
                              <td>
                                <h2
                                  style="
                                    font-size: 24px;
                                    font-weight: bold;
                                    color: #10b981;
                                    margin-top: 0;
                                    margin-bottom: 4px;
                                    display: inline;
                                  "
                                >
                                  High Times Barcelona
                                </h2>
                                <span style="color: #9ca3af; margin-left: 8px"
                                  >private social club</span
                                >
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
    
                      <!-- Map Buttons -->
                      <tr>
                        <td style="padding-top: 16px; padding-bottom: 32px">
                          <table
                            width="100%"
                            cellpadding="0"
                            cellspacing="0"
                            border="0"
                          >
                            <tr>
                              <td>
                                <table
                                  width="100%"
                                  cellpadding="12"
                                  cellspacing="0"
                                  border="0"
                                  bgcolor="#10b981"
                                  style="border-radius: 9999px"
                                >
                                  <tr>
                                    <td align="center">
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        border="0"
                                      >
                                        <tr>
                                          <td
                                            bgcolor="#FFFFFF"
                                            style="
                                              border-radius: 50%;
                                              padding: 4px;
                                              min-width: 32px;
                                              text-align: center;
                                            "
                                          >
                                            <span
                                              style="
                                                color: #10b981;
                                                font-size: 24px;
                                                font-weight: bold;
                                              "
                                              >A</span
                                            >
                                          </td>
                                          <td style="padding-left: 8px">
                                            <span
                                              style="color: white; font-weight: 500"
                                              >Open in APPLE MAPS</span
                                            >
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding-top: 12px">
                                <table
                                  width="100%"
                                  cellpadding="12"
                                  cellspacing="0"
                                  border="0"
                                  bgcolor="#10b981"
                                  style="border-radius: 9999px"
                                >
                                  <tr>
                                    <td align="center">
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        border="0"
                                      >
                                        <tr>
                                          <td
                                            bgcolor="#FFFFFF"
                                            style="
                                              border-radius: 50%;
                                              padding: 4px;
                                              min-width: 32px;
                                              text-align: center;
                                            "
                                          >
                                            <span
                                              style="
                                                color: #10b981;
                                                font-size: 24px;
                                                font-weight: bold;
                                              "
                                              >G</span
                                            >
                                          </td>
                                          <td style="padding-left: 8px">
                                            <span
                                              style="color: white; font-weight: 500"
                                              >Open in GOOGLE MAPS</span
                                            >
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding-top: 12px">
                                <table
                                  width="100%"
                                  cellpadding="12"
                                  cellspacing="0"
                                  border="0"
                                  bgcolor="#10b981"
                                  style="border-radius: 9999px"
                                >
                                  <tr>
                                    <td align="center">
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        border="0"
                                      >
                                        <tr>
                                          <td
                                            bgcolor="#FFFFFF"
                                            style="
                                              border-radius: 50%;
                                              padding: 4px;
                                              min-width: 32px;
                                              text-align: center;
                                            "
                                          >
                                            <span
                                              style="
                                                color: #10b981;
                                                font-size: 24px;
                                                font-weight: bold;
                                              "
                                              >W</span
                                            >
                                          </td>
                                          <td style="padding-left: 8px">
                                            <span
                                              style="color: white; font-weight: 500"
                                              >Open in WAZE MAPS</span
                                            >
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
    
                      <!-- Guide -->
                      <tr>
                        <td>
                          <h2
                            style="
                              font-size: 24px;
                              font-weight: bold;
                              margin-bottom: 24px;
                              margin-top: 0;
                            "
                          >
                            FOLLOW <span style="color: #10b981">THE GUIDE</span>
                          </h2>
    
                          <table
                            width="100%"
                            cellpadding="0"
                            cellspacing="0"
                            border="0"
                            style="margin-bottom: 24px"
                          >
                            <tr>
                              <td valign="top" style="padding-bottom: 16px">
                                <table cellpadding="0" cellspacing="0" border="0">
                                  <tr>
                                    <td valign="top">
                                      <div
                                        style="
                                          background-color: black;
                                          color: white;
                                          border-radius: 50%;
                                          width: 32px;
                                          height: 32px;
                                          text-align: center;
                                          line-height: 32px;
                                        "
                                      >
                                        01
                                      </div>
                                    </td>
                                    <td valign="top" style="padding-left: 16px">
                                      <p style="margin-top: 0; margin-bottom: 0">
                                        RING THE DOORBELL, ENTER AND
                                        <span
                                          style="color: #10b981; font-weight: 500"
                                          >SHOW THE BAR CODE</span
                                        >
                                        INVITATION WITH YOUR NAME TO THE
                                        RECEPTIONIST
                                      </p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td valign="top" style="padding-bottom: 16px">
                                <table cellpadding="0" cellspacing="0" border="0">
                                  <tr>
                                    <td valign="top">
                                      <div
                                        style="
                                          background-color: black;
                                          color: white;
                                          border-radius: 50%;
                                          width: 32px;
                                          height: 32px;
                                          text-align: center;
                                          line-height: 32px;
                                        "
                                      >
                                        02
                                      </div>
                                    </td>
                                    <td valign="top" style="padding-left: 16px">
                                      <p style="margin-top: 0; margin-bottom: 0">
                                        IDENTIFY YOURSELF AS A LEGAL ADULT + 18
                                        YEARS OLD (<span style="color: #10b981"
                                          >Passport</span
                                        >,
                                        <span style="color: #10b981"
                                          >driver Licence</span
                                        >, or any
                                        <span style="color: #10b981"
                                          >government ID</span
                                        >)
                                      </p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td valign="top" style="padding-bottom: 16px">
                                <table cellpadding="0" cellspacing="0" border="0">
                                  <tr>
                                    <td valign="top">
                                      <div
                                        style="
                                          background-color: black;
                                          color: white;
                                          border-radius: 50%;
                                          width: 32px;
                                          height: 32px;
                                          text-align: center;
                                          line-height: 32px;
                                        "
                                      >
                                        03
                                      </div>
                                    </td>
                                    <td valign="top" style="padding-left: 16px">
                                      <p style="margin-top: 0; margin-bottom: 0">
                                        Pay your membership Fee
                                        <span
                                          style="color: #10b981; font-weight: 500"
                                          >20 Euros</span
                                        >
                                        / per person (Bring some Cash with you,
                                        <span style="color: #10b981"
                                          >Cards are not accepted</span
                                        >).
                                      </p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td valign="top">
                                <table cellpadding="0" cellspacing="0" border="0">
                                  <tr>
                                    <td valign="top">
                                      <div
                                        style="
                                          background-color: black;
                                          color: white;
                                          border-radius: 50%;
                                          width: 32px;
                                          height: 32px;
                                          text-align: center;
                                          line-height: 32px;
                                        "
                                      >
                                        04
                                      </div>
                                    </td>
                                    <td valign="top" style="padding-left: 16px">
                                      <p style="margin-top: 0; margin-bottom: 0">
                                        GET YOUR
                                        <span
                                          style="color: #10b981; font-weight: 500"
                                          >MEMBER CARD</span
                                        >
                                        AND FULL ACCESS TO THE CLUB.
                                      </p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
    
                      <!-- Reminders -->
                      <tr>
                        <td>
                          <table
                            width="100%"
                            cellpadding="24"
                            cellspacing="0"
                            border="0"
                            style="
                              border-radius: 16px;
                              background-color: #1f2937;
                              background-image: url('https://images.pexels.com/photos/606506/pexels-photo-606506.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
                              background-size: cover;
                              background-position: center;
                              background-blend-mode: multiply;
                              margin-bottom: 24px;
                            "
                          >
                            <tr>
                              <td align="center">
                                <h2
                                  style="
                                    font-size: 24px;
                                    font-weight: bold;
                                    text-align: center;
                                    margin-bottom: 16px;
                                    margin-top: 0;
                                    color: white;
                                  "
                                >
                                  REMINDERS
                                </h2>
                                <p
                                  style="
                                    text-align: center;
                                    margin-bottom: 24px;
                                    color: white;
                                    margin-top: 0;
                                  "
                                >
                                  If you can't find the club simply
                                </p>
                                <table
                                  cellpadding="12"
                                  cellspacing="0"
                                  border="0"
                                  bgcolor="#10b981"
                                  style="border-radius: 9999px; margin: 0 auto"
                                >
                                  <tr>
                                    <td align="center">
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        border="0"
                                      >
                                        <tr>
                                          <td valign="middle">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              fill="none"
                                              viewBox="0 0 24 24"
                                              stroke="currentColor"
                                              style="
                                                width: 20px;
                                                height: 20px;
                                                color: white;
                                              "
                                            >
                                              <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M19 19l-7-7 7-7"
                                              />
                                            </svg>
                                          </td>
                                          <td
                                            valign="middle"
                                            style="padding-left: 8px"
                                          >
                                            <span
                                              style="font-weight: 500; color: white"
                                              >CHAT WITH US</span
                                            >
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
    
                      <tr>
                        <td>
                          <p
                            style="
                              color: #ca8a04;
                              margin-top: 0;
                              margin-bottom: 24px;
                            "
                          >
                            * Don't visit the club with any suitcase.
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
    
                <!-- Footer -->
                <tr>
                  <td style="padding-top: 24px">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td align="center">
                          <p
                            style="
                              text-align: center;
                              color: #4b5563;
                              font-size: 14px;
                              margin-bottom: 16px;
                              margin-top: 0;
                            "
                          >
                            We are not employed by or promoting any of the cannabis
                            clubs. The club has the final decision on who is
                            admitted; not everyone who applies will be.
                          </p>
                          <p
                            style="
                              text-align: center;
                              color: #4b5563;
                              font-size: 14px;
                              margin-top: 0;
                              margin-bottom: 24px;
                            "
                          >
                            &copy; Copyright 2025. All rights reserved High Times
                            Barcelona.
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
    
    
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

  email: string;
  openDay: string;
  openingHour: string;
  closingHour: string;
}) => {
  const {
    name,
    clubName,
    address,
    fee,
    ageLimit,
    email,
    openDay,
    openingHour,
    closingHour,
  } = values;
  const data = {
    to: "apusutradhar77@gmail.com",
    subject: "New Membership Request Received",
    html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Club Invitation</title>
    <!--[if mso]>
      <style type="text/css">
        table {
          border-collapse: collapse;
          border-spacing: 0;
          margin: 0;
        }
        div,
        td {
          padding: 0;
        }
        div {
          margin: 0 !important;
        }
      </style>
      <noscript>
        <xml>
          <o:OfficeDocumentSettings>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
    <![endif]-->
  </head>

  <body
    style="
      font-family: Arial, sans-serif;
      background-color: #f9fafb;
      padding: 20px;
      margin: 0;
    "
  >
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td align="center">
          <table
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="
              max-width: 700px;
              background-color: #f9fafb;
              padding: 20px;
              width: 100%;
            "
          >
            <!-- Header -->
            <tr>
              <td>
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td>
                      <p style="font-size: 14px; color: #4b5563; margin-top: 0">
                        Save this letter to show at the reception in the club
                      </p>
                      <h1
                        style="
                          font-size: 32px;
                          font-weight: bold;
                          color: #10b981;
                          margin-top: 16px;
                        "
                      >
                        High Times Barcelona
                      </h1>
                    </td>
                    <td align="right">
                      <table
                        cellpadding="8"
                        cellspacing="0"
                        border="0"
                        bgcolor="#e5e7eb"
                        style="border-radius: 9999px"
                      >
                        <tr>
                          <td align="center" valign="middle">
                            <table cellpadding="0" cellspacing="0" border="0">
                              <tr>
                                <td valign="middle">
                                  <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 31 31"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style="color: #6b7280"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M9.06528 20.417L21.4098 20.417C24.8187 20.417 27.5821 23.1804 27.5821 26.5893C27.5821 27.2711 27.0294 27.8237 26.3476 27.8237C25.7146 27.8237 25.1928 27.3472 25.1215 26.7332L25.1069 26.3717C24.9984 24.4997 23.4995 23.0007 21.6274 22.8922L21.4098 22.8859L9.06528 22.8859C7.01997 22.8859 5.36191 24.544 5.36191 26.5893C5.36191 27.2711 4.80923 27.8237 4.12746 27.8237C3.44569 27.8237 2.89301 27.2711 2.89301 26.5893C2.89301 23.2701 5.5129 20.5629 8.79754 20.4227L9.06528 20.417L21.4098 20.417L9.06528 20.417ZM15.2376 3.13464C19.3282 3.13464 22.6443 6.45075 22.6443 10.5414C22.6443 14.632 19.3282 17.9481 15.2376 17.9481C11.1469 17.9481 7.83082 14.632 7.83082 10.5414C7.83082 6.45075 11.1469 3.13464 15.2376 3.13464ZM15.2376 5.60355C12.5105 5.60355 10.2997 7.81429 10.2997 10.5414C10.2997 13.2685 12.5105 15.4792 15.2376 15.4792C17.9646 15.4792 20.1754 13.2685 20.1754 10.5414C20.1754 7.81429 17.9646 5.60355 15.2376 5.60355Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </td>
                                <td valign="middle" style="padding-left: 8px">
                                  <span style="color: #10b981; font-weight: 500"
                                    >${name}</span
                                  >
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Location and Hours Card -->
            <tr>
              <td style="padding-top: 24px">
                <table
                  width="100%"
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  style="border-radius: 16px; overflow: hidden"
                >
                  <tr>
                    <td style="padding-top: 24px">
                      <table
                        width="100%"
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                        style="border-radius: 16px; overflow: hidden"
                      >
                        <tr>
                          <td
                         bgcolor="#040"
                            background="https://png.pngtree.com/thumb_back/fh260/background/20230515/pngtree-weed-leaves-image_2565117.jpg"
                            style="
                              background-blend-mode: multiply;
                              padding: 24px;
                              color: white;
                              background-size: cover;
                              background-position: center;
                              border-radius: 16px;
                            "
                          >
                            <table
                              width="100%"
                              cellpadding="0"
                              cellspacing="0"
                              border="0"
                            >
                              <tr>
                                <!-- Left content column (70% width) -->
                                <td width="70%" valign="top">
                                  <h2
                                    style="
                                      font-size: 24px;
                                      font-weight: bold;
                                      margin-bottom: 16px;
                                      margin-top: 0;
                                      color: white;
                                    "
                                  >
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      style="
                                        vertical-align: middle;
                                        margin-right: 5px;
                                      "
                                    >
                                      <path
                                        opacity="0.4"
                                        d="M9.25 11H14.75"
                                        stroke="#FFF"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                      />
                                      <path
                                        d="M3.6202 8.49C5.5902 -0.169998 18.4202 -0.159997 20.3802 8.5C21.5302 13.58 18.3702 17.88 15.6002 20.54C13.5902 22.48 10.4102 22.48 8.3902 20.54C5.6302 17.88 2.4702 13.57 3.6202 8.49Z"
                                        stroke="#FFF"
                                        stroke-width="1.5"
                                      />
                                    </svg>
                                    OUR LOCATION
                                  </h2>
                                  <p
                                    style="
                                      font-weight: 500;
                                      margin-top: 0;
                                      margin-bottom: 4px;
                                    "
                                  >
                                    NEAR EMBAJADORES METRO STATION
                                  </p>
                                  <p
                                    style="
                                      text-decoration: underline;
                                      margin-top: 0;
                                    "
                                  >
                                    ${address}
                                 
                                  </p>

                                  <h2
                                    style="
                                      font-size: 24px;
                                      font-weight: bold;
                                      margin-top: 24px;
                                      margin-bottom: 16px;
                                      color: white;
                                    "
                                  >
                                    OPENING HOURS
                                  </h2>
                                  <p
                                    style="
                                      font-weight: 500;
                                      margin-top: 0;
                                      margin-bottom: 4px;
                                    "
                                  >
                                 ${openDay} FROM ${openingHour} TO ${closingHour}
                                  </p>
                                 
                                </td>

                                <!-- Right QR code column (30% width) -->
                                <td width="30%" align="center" valign="middle">
                                  <div
                                    style="
                                      width: 96px;
                                      height: 96px;
                                      background-color: white;
                                      padding: 8px;
                                      border-radius: 50%;
                                      margin: 0 auto;
                                    "
                                  >
                                    <img
                                      src="https://pngimg.com/uploads/qr_code/small/qr_code_PNG33.png"
                                      alt="QR Code"
                                      style="width: 100%; height: 100%"
                                    />
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Club Info -->
            <tr>
              <td style="padding-top: 24px">
                <table
                  width="100%"
                  cellpadding="24"
                  cellspacing="0"
                  border="0"
                  bgcolor="#FFFFFF"
                  style="border-radius: 16px"
                >
                  <tr>
                    <td>
                      <table
                        width="100%"
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                      >
                        <tr>
                          <td>
                            <h2
                              style="
                                font-size: 24px;
                                font-weight: bold;
                                color: #10b981;
                                margin-top: 0;
                                margin-bottom: 4px;
                                display: inline;
                              "
                            >
                              High Times Barcelona
                            </h2>
                            <span style="color: #9ca3af; margin-left: 8px"
                              >private social club</span
                            >
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Map Buttons -->
                  <tr>
                    <td style="padding-top: 16px; padding-bottom: 32px">
                      <table
                        width="100%"
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                      >
                        <tr>
                          <td>
                            <table
                              width="100%"
                              cellpadding="12"
                              cellspacing="0"
                              border="0"
                              bgcolor="#10b981"
                              style="border-radius: 9999px"
                            >
                              <tr>
                                <td align="center">
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                  >
                                    <tr>
                                      <td
                                        bgcolor="#FFFFFF"
                                        style="
                                          border-radius: 50%;
                                          padding: 4px;
                                          min-width: 32px;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            color: #10b981;
                                            font-size: 24px;
                                            font-weight: bold;
                                          "
                                          >A</span
                                        >
                                      </td>
                                      <td style="padding-left: 8px">
                                        <span
                                          style="color: white; font-weight: 500"
                                          >Open in APPLE MAPS</span
                                        >
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding-top: 12px">
                            <table
                              width="100%"
                              cellpadding="12"
                              cellspacing="0"
                              border="0"
                              bgcolor="#10b981"
                              style="border-radius: 9999px"
                            >
                              <tr>
                                <td align="center">
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                  >
                                    <tr>
                                      <td
                                        bgcolor="#FFFFFF"
                                        style="
                                          border-radius: 50%;
                                          padding: 4px;
                                          min-width: 32px;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            color: #10b981;
                                            font-size: 24px;
                                            font-weight: bold;
                                          "
                                          >G</span
                                        >
                                      </td>
                                      <td style="padding-left: 8px">
                                        <span
                                          style="color: white; font-weight: 500"
                                          >Open in GOOGLE MAPS</span
                                        >
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding-top: 12px">
                            <table
                              width="100%"
                              cellpadding="12"
                              cellspacing="0"
                              border="0"
                              bgcolor="#10b981"
                              style="border-radius: 9999px"
                            >
                              <tr>
                                <td align="center">
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                  >
                                    <tr>
                                      <td
                                        bgcolor="#FFFFFF"
                                        style="
                                          border-radius: 50%;
                                          padding: 4px;
                                          min-width: 32px;
                                          text-align: center;
                                        "
                                      >
                                        <span
                                          style="
                                            color: #10b981;
                                            font-size: 24px;
                                            font-weight: bold;
                                          "
                                          >W</span
                                        >
                                      </td>
                                      <td style="padding-left: 8px">
                                        <span
                                          style="color: white; font-weight: 500"
                                          >Open in WAZE MAPS</span
                                        >
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Guide -->
                  <tr>
                    <td>
                      <h2
                        style="
                          font-size: 24px;
                          font-weight: bold;
                          margin-bottom: 24px;
                          margin-top: 0;
                        "
                      >
                        FOLLOW <span style="color: #10b981">THE GUIDE</span>
                      </h2>

                      <table
                        width="100%"
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                        style="margin-bottom: 24px"
                      >
                        <tr>
                          <td valign="top" style="padding-bottom: 16px">
                            <table cellpadding="0" cellspacing="0" border="0">
                              <tr>
                                <td valign="top">
                                  <div
                                    style="
                                      background-color: black;
                                      color: white;
                                      border-radius: 50%;
                                      width: 32px;
                                      height: 32px;
                                      text-align: center;
                                      line-height: 32px;
                                    "
                                  >
                                    01
                                  </div>
                                </td>
                                <td valign="top" style="padding-left: 16px">
                                  <p style="margin-top: 0; margin-bottom: 0">
                                    RING THE DOORBELL, ENTER AND
                                    <span
                                      style="color: #10b981; font-weight: 500"
                                      >SHOW THE BAR CODE</span
                                    >
                                    INVITATION WITH YOUR NAME TO THE
                                    RECEPTIONIST
                                  </p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td valign="top" style="padding-bottom: 16px">
                            <table cellpadding="0" cellspacing="0" border="0">
                              <tr>
                                <td valign="top">
                                  <div
                                    style="
                                      background-color: black;
                                      color: white;
                                      border-radius: 50%;
                                      width: 32px;
                                      height: 32px;
                                      text-align: center;
                                      line-height: 32px;
                                    "
                                  >
                                    02
                                  </div>
                                </td>
                                <td valign="top" style="padding-left: 16px">
                                  <p style="margin-top: 0; margin-bottom: 0">
                                    IDENTIFY YOURSELF AS A LEGAL ADULT + 18
                                    YEARS OLD (<span style="color: #10b981"
                                      >Passport</span
                                    >,
                                    <span style="color: #10b981"
                                      >driver Licence</span
                                    >, or any
                                    <span style="color: #10b981"
                                      >government ID</span
                                    >)
                                  </p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td valign="top" style="padding-bottom: 16px">
                            <table cellpadding="0" cellspacing="0" border="0">
                              <tr>
                                <td valign="top">
                                  <div
                                    style="
                                      background-color: black;
                                      color: white;
                                      border-radius: 50%;
                                      width: 32px;
                                      height: 32px;
                                      text-align: center;
                                      line-height: 32px;
                                    "
                                  >
                                    03
                                  </div>
                                </td>
                                <td valign="top" style="padding-left: 16px">
                                  <p style="margin-top: 0; margin-bottom: 0">
                                    Pay your membership Fee
                                    <span
                                      style="color: #10b981; font-weight: 500"
                                      >20 Euros</span
                                    >
                                    / per person (Bring some Cash with you,
                                    <span style="color: #10b981"
                                      >Cards are not accepted</span
                                    >).
                                  </p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td valign="top">
                            <table cellpadding="0" cellspacing="0" border="0">
                              <tr>
                                <td valign="top">
                                  <div
                                    style="
                                      background-color: black;
                                      color: white;
                                      border-radius: 50%;
                                      width: 32px;
                                      height: 32px;
                                      text-align: center;
                                      line-height: 32px;
                                    "
                                  >
                                    04
                                  </div>
                                </td>
                                <td valign="top" style="padding-left: 16px">
                                  <p style="margin-top: 0; margin-bottom: 0">
                                    GET YOUR
                                    <span
                                      style="color: #10b981; font-weight: 500"
                                      >MEMBER CARD</span
                                    >
                                    AND FULL ACCESS TO THE CLUB.
                                  </p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Reminders -->
                  <tr>
                    <td>
                      <table
                        width="100%"
                        cellpadding="24"
                        cellspacing="0"
                        border="0"
                        style="
                          border-radius: 16px;
                          background-color: #1f2937;
                          background-image: url('https://images.pexels.com/photos/606506/pexels-photo-606506.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
                          background-size: cover;
                          background-position: center;
                          background-blend-mode: multiply;
                          margin-bottom: 24px;
                        "
                      >
                        <tr>
                          <td align="center">
                            <h2
                              style="
                                font-size: 24px;
                                font-weight: bold;
                                text-align: center;
                                margin-bottom: 16px;
                                margin-top: 0;
                                color: white;
                              "
                            >
                              REMINDERS
                            </h2>
                            <p
                              style="
                                text-align: center;
                                margin-bottom: 24px;
                                color: white;
                                margin-top: 0;
                              "
                            >
                              If you can't find the club simply
                            </p>
                            <table
                              cellpadding="12"
                              cellspacing="0"
                              border="0"
                              bgcolor="#10b981"
                              style="border-radius: 9999px; margin: 0 auto"
                            >
                              <tr>
                                <td align="center">
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                  >
                                    <tr>
                                      <td valign="middle">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                          style="
                                            width: 20px;
                                            height: 20px;
                                            color: white;
                                          "
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M19 19l-7-7 7-7"
                                          />
                                        </svg>
                                      </td>
                                      <td
                                        valign="middle"
                                        style="padding-left: 8px"
                                      >
                                        <span
                                          style="font-weight: 500; color: white"
                                          >CHAT WITH US</span
                                        >
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <p
                        style="
                          color: #ca8a04;
                          margin-top: 0;
                          margin-bottom: 24px;
                        "
                      >
                        * Don't visit the club with any suitcase.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding-top: 24px">
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td align="center">
                      <p
                        style="
                          text-align: center;
                          color: #4b5563;
                          font-size: 14px;
                          margin-bottom: 16px;
                          margin-top: 0;
                        "
                      >
                        We are not employed by or promoting any of the cannabis
                        clubs. The club has the final decision on who is
                        admitted; not everyone who applies will be.
                      </p>
                      <p
                        style="
                          text-align: center;
                          color: #4b5563;
                          font-size: 14px;
                          margin-top: 0;
                          margin-bottom: 24px;
                        "
                      >
                        &copy; Copyright 2025. All rights reserved High Times
                        Barcelona.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>


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
