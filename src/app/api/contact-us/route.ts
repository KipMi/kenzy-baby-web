import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
const adminEmailFull = process.env.NEXT_PUBLIC_ADMIN__EMAIL_FULL;
const pass = process.env.NEXT_PUBLIC_APP_PASSWORD;

export async function POST(request: NextRequest) {
  const { emailAddress, subject, body } = await request.json();
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: adminEmail,
      pass,
    },
  });

  const mailOptions: Mail.Options = {
    from: adminEmail,
    to: adminEmail,
    subject: `Message from ${emailAddress} titled "${subject}"`,
    text: body,
  };

  const sendMailPromise = () => {
    new Promise<string>((resolve, reject) => {
      transporter.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent!");
        } else {
          reject(err.message);
        }
      });
    });
  };

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent!" });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
