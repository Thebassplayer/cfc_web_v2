// /app/api/contact/route.ts (or pages/api/contact.ts, depending on your Next.js setup)
import { contactFormValidationSchema } from "@/schemas/contactFormValidationSchema";
import { NextResponse } from "next/server";
import axios from "axios";
import { Resend } from "resend";
import qs from "qs";

if (!process.env.RESEND) {
  console.error("RESEND is not set");
}
if (!process.env.CFC_EMAIL) {
  console.error("CFC_EMAIL is not set");
}
if (!process.env.GOOGLE_RECAPTCHA_SECRET_KEY) {
  console.error("GOOGLE_RECAPTCHA_SECRET_KEY is not set");
}

if (!process.env.GOOGLE_RECAPTCHA_API_URL) {
  console.error("GOOGLE_RECAPTCHA_API_URL is not set");
}

const RESEND = process.env.RESEND as string;
const CFC_EMAIL = process.env.CFC_EMAIL as string;
const RECAPTCHA_SECRET = process.env.GOOGLE_RECAPTCHA_SECRET_KEY as string;
const RECAPTCHA_URL = process.env.GOOGLE_RECAPTCHA_API_URL as string;

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    const { googleRecaptchaToken, ...contactData } = body;

    // Ensure reCAPTCHA token exists
    if (!googleRecaptchaToken) {
      return NextResponse.json(
        { error: "reCaptcha token is missing" },
        { status: 400 },
      );
    }

    // Verify the reCAPTCHA token with Google's API
    const postData = qs.stringify({
      secret: RECAPTCHA_SECRET,
      response: googleRecaptchaToken,
    });
    const verifyResponse = await axios.post(RECAPTCHA_URL, postData, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    if (!verifyResponse.data.success || verifyResponse.data.score <= 0.5) {
      return NextResponse.json(
        { error: "reCaptcha verification failed" },
        { status: 400 },
      );
    }

    // Validate the contact form data
    const validBody = contactFormValidationSchema.safeParse(contactData);
    if (!validBody.success) {
      throw new Error(validBody.error.errors[0].message);
    }
    const { name, email, message } = validBody.data;

    // Send email via Resend
    const resend = new Resend(RESEND);
    await resend.emails.send({
      from: CFC_EMAIL,
      to: CFC_EMAIL,
      subject: "Nuevo mensaje de contacto",
      html: `<p>Nombre: ${name}</p><p>Email: ${email}</p><p>Mensaje: ${message}</p>`,
    });

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
};
