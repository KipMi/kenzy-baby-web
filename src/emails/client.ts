import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
const adminEmailFull = process.env.NEXT_PUBLIC_ADMIN__EMAIL_FULL;
const pass = process.env.NEXT_PUBLIC_APP_PASSWORD;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: adminEmail,
    pass,
  },
});

export const mailOptions: Mail.Options = {
  from: adminEmail,
  to: adminEmail,
  subject: `Contact message form`,
};
