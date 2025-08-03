import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { validateTurnstileToken } from 'next-turnstile';
import { v4 } from 'uuid';

export async function POST(request: NextRequest) {
  const { email, name, message, carbonCopy, token } = await request.json();

  const validationResponse = await validateTurnstileToken({
    token,
    secretKey: process.env.TURNSTILE_SECRET_KEY!,
    idempotencyKey: v4(),
    sandbox: process.env.NODE_ENV === 'development',
  });

  if (!validationResponse.success) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 400 });
  }

  const transport = nodemailer.createTransport({
    host: 'smtp.wp.pl',
    port: 465,
    secure: true,
    /* 
      setting service as 'gmail' is same as providing these setings:

      host: "smtp.gmail.com",
      port: 465,
      secure: true

      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `Strona Karczma - wiadomość od ${name} (${email})`,
    text: message,
  };

  if (carbonCopy) {
    mailOptions.cc = email;
  }

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    console.error('Error sending email:', err);
    console.log('Mail options:', err, mailOptions);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
